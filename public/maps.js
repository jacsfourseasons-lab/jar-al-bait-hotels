export function initMaps(Swiper) {
  const isAr = document.documentElement.lang === 'ar';
  for (const root of document.querySelectorAll('.map-box')) {
    const canvas = root.querySelector('.map-box__map');
    if (!canvas) continue;

    let local = {};
    try {
      local = JSON.parse(root.dataset.localMap || '{}');
    } catch {}

    canvas.innerHTML =
      '<div class="local-map" role="group"><img class="local-map__img" src="" alt="" draggable="false"></div>';
    const map = canvas.firstElementChild;
    const img = map.querySelector('.local-map__img');

    map.setAttribute(
      'aria-label',
      local.label ||
        (isAr
          ? 'خريطة تفاعلية لفنادق مجموعة جار البيت'
          : 'Interactive map of Jar Al Bait Hotel Group properties')
    );
    img.src = local.image || '/assets/red-sea-coast.svg';

    const rawMarkers =
      Array.isArray(local.markers) && local.markers.length
        ? local.markers
        : [
            {
              name: 'Jar Al Bait Hotel',
              city: 'Al Aziziyah, Makkah Al Mukarramah',
              letter: 'J',
              image: '/assets/jab-hotel-jar-al-bait.webp',
              x: 58.5,
              y: 44.0,
              zoom: 1.16
            },
            {
              name: 'Oz Park Hotel',
              city: 'Al Qunfudhah',
              letter: 'O',
              image: '/assets/jab-hotel-oz-park.webp',
              x: 67.5,
              y: 59.8,
              zoom: 1.2
            },
            {
              name: 'Al Jawhara Hotel',
              city: 'Al Qunfudhah',
              letter: 'A',
              image: '/assets/jab-hotel-al-jawhara.webp',
              x: 70.5,
              y: 67.8,
              zoom: 1.22
            }
          ];

    const focus = local.focus || [65.7, 57.9];
    const badgeSides = ['right', 'right', 'right'];
    const defaultLetters = ['J', 'O', 'A'];

    rawMarkers.forEach((m, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'local-map-pin map-box__marker';
      b.dataset.side = badgeSides[i % badgeSides.length];
      b.setAttribute('aria-label', isAr ? `اختر ${m.name}` : `Select ${m.name}`);

      const pulse = document.createElement('span');
      pulse.className = 'local-map-pin__pulse';
      pulse.setAttribute('aria-hidden', 'true');

      const letterEl = document.createElement('span');
      letterEl.className = 'local-map-pin__letter';
      letterEl.setAttribute('aria-hidden', 'true');
      letterEl.textContent = m.letter || defaultLetters[i] || 'J';

      const thumb = document.createElement('img');
      thumb.className = 'map-box__marker-image';
      thumb.src = m.image || '/assets/jab-hotel-jar-al-bait.webp';
      thumb.alt = '';
      thumb.decoding = 'async';

      const badge = document.createElement('span');
      badge.className = 'local-map-pin__badge';
      if (m.city) {
        const cityEl = document.createElement('span');
        cityEl.className = 'local-map-pin__city';
        cityEl.textContent = m.city;
        badge.append(cityEl);
      }
      const titleEl = document.createElement('span');
      titleEl.className = 'local-map-pin__title';
      titleEl.textContent = m.name;
      badge.append(titleEl);

      b.append(pulse, letterEl, thumb, badge);
      b.addEventListener('click', () => select(i, true));
      map.append(b);
    });

    let activeIndex = 0;
    let zoom = rawMarkers[0]?.zoom || 1.16;
    let panX = 0;
    let panY = 0;
    let metrics = { w: 1440, h: 900, scale: 1, iw: 1440, ih: 900, baseLeft: 0, baseTop: 0 };

    const avgX = rawMarkers.reduce((s, m) => s + m.x, 0) / rawMarkers.length;
    const avgY = rawMarkers.reduce((s, m) => s + m.y, 0) / rawMarkers.length;
    const minMarkerY = Math.min(...rawMarkers.map((m) => m.y));
    const maxMarkerY = Math.max(...rawMarkers.map((m) => m.y));

    function clampPan(nx, ny, z) {
      const minX = metrics.w - (metrics.baseLeft + metrics.iw) * z;
      const maxX = -metrics.baseLeft * z;
      const minY = metrics.h - (metrics.baseTop + metrics.ih) * z;
      const maxY = -metrics.baseTop * z;
      return [
        Math.min(maxX, Math.max(minX, nx)),
        Math.min(maxY, Math.max(minY, ny))
      ];
    }

    function applyTransform() {
      [panX, panY] = clampPan(panX, panY, zoom);
      map.style.setProperty('--map-zoom', zoom.toFixed(3));
      map.style.transform = `translate3d(${panX.toFixed(1)}px, ${panY.toFixed(1)}px, 0) scale(${zoom.toFixed(3)})`;
    }

    function flyTo(i, customZoom) {
      const m = rawMarkers[i] || rawMarkers[0];
      zoom = customZoom ?? m.zoom ?? 1.18;
      // Blend 65% toward selected marker and 35% toward group center so the camera glides
      // smoothly to the clicked location while keeping all 3 locations visible together.
      const focusX = avgX * 0.35 + m.x * 0.65;
      const focusY = avgY * 0.35 + m.y * 0.65;
      const mx = metrics.baseLeft + focusX * 14.4 * metrics.scale;
      const my = metrics.baseTop + focusY * 9 * metrics.scale;
      const isDesktop = metrics.w >= 1024;
      const targetX = isDesktop ? metrics.w * (isAr ? 0.37 : 0.63) : metrics.w * 0.5;
      const targetY = isDesktop ? metrics.h * 0.55 : metrics.h * 0.52;

      let nextPanX = targetX - mx * zoom;
      let nextPanY = targetY - my * zoom;

      // Ensure top-most and bottom-most markers stay comfortably inside the viewport
      const topMarkerPy = (metrics.baseTop + minMarkerY * 9 * metrics.scale) * zoom;
      const bottomMarkerPy = (metrics.baseTop + maxMarkerY * 9 * metrics.scale) * zoom;
      const safeTop = isDesktop ? 170 : 64;
      const safeBottom = isDesktop ? metrics.h - 130 : metrics.h - 56;
      if (nextPanY + topMarkerPy < safeTop) {
        nextPanY = safeTop - topMarkerPy;
      }
      if (nextPanY + bottomMarkerPy > safeBottom) {
        nextPanY = safeBottom - bottomMarkerPy;
      }

      panX = nextPanX;
      panY = nextPanY;
      applyTransform();
    }

    function sizeMarkers() {
      const w = canvas.clientWidth || 1440;
      const h = canvas.clientHeight || 900;
      const scale = Math.max(w / 1440, h / 900);
      const iw = 1440 * scale;
      const ih = 900 * scale;
      const baseLeft = Math.min(0, Math.max(w - iw, w / 2 - focus[0] * 14.4 * scale));
      const baseTop = Math.min(0, Math.max(h - ih, h / 2 - focus[1] * 9 * scale));
      metrics = { w, h, scale, iw, ih, baseLeft, baseTop };

      img.style.width = `${iw}px`;
      img.style.height = `${ih}px`;
      img.style.left = `${baseLeft}px`;
      img.style.top = `${baseTop}px`;

      map.querySelectorAll('.local-map-pin').forEach((b, i) => {
        const m = rawMarkers[i];
        b.style.left = `${baseLeft + m.x * 14.4 * scale}px`;
        b.style.top = `${baseTop + m.y * 9 * scale}px`;
      });

      flyTo(activeIndex, zoom);
    }

    const swEl = root.querySelector('.map-box__carousel');
    const sw = swEl
      ? new Swiper(swEl, {
          effect: 'cards',
          cardsEffect: { perSlideOffset: 8, perSlideRotate: 2, slideShadows: false },
          grabCursor: true,
          speed: 550,
          navigation: {
            prevEl: root.querySelector('.map-box__carousel-button--prev'),
            nextEl: root.querySelector('.map-box__carousel-button--next')
          },
          on: {
            slideChange(s) {
              select(s.activeIndex, false);
            }
          }
        })
      : null;

    function select(i, moveSwiper = true) {
      activeIndex = i;
      map.querySelectorAll('.local-map-pin').forEach((b, n) => {
        const isSelected = i === n;
        b.classList.toggle('selected', isSelected);
        b.classList.toggle('map-box__marker--active', isSelected);
        b.setAttribute('aria-pressed', String(isSelected));
      });
      flyTo(i);
      if (moveSwiper && sw && sw.activeIndex !== i) {
        sw.slideTo(i);
      }
    }

    new ResizeObserver(sizeMarkers).observe(canvas);
    sizeMarkers();
    select(0, false);

    let dragStart = null;
    map.addEventListener('pointerdown', (e) => {
      if (e.target.closest('button')) return;
      dragStart = [e.clientX - panX, e.clientY - panY];
      map.classList.add('is-dragging');
      map.setPointerCapture(e.pointerId);
    });
    map.addEventListener('pointermove', (e) => {
      if (!dragStart) return;
      panX = e.clientX - dragStart[0];
      panY = e.clientY - dragStart[1];
      applyTransform();
    });
    const endDrag = () => {
      dragStart = null;
      map.classList.remove('is-dragging');
    };
    map.addEventListener('pointerup', endDrag);
    map.addEventListener('pointercancel', endDrag);

    root.querySelector('.map-box__zoom-button--plus')?.addEventListener('click', () => {
      flyTo(activeIndex, Math.min(zoom + 0.18, 2.0));
    });
    root.querySelector('.map-box__zoom-button--minus')?.addEventListener('click', () => {
      flyTo(activeIndex, Math.max(zoom - 0.18, 1.0));
    });

    root.querySelector('.map-box__mobile-button')?.addEventListener('click', () => {
      root.classList.add('map-box--active');
      document.body.style.overflow = 'hidden';
    });
    root.querySelectorAll('.map-box__carousel-close').forEach((b) =>
      b.addEventListener('click', () => {
        root.classList.remove('map-box--active');
        document.body.style.overflow = '';
      })
    );

    root.querySelectorAll('button:not([aria-label])').forEach((b) =>
      b.setAttribute(
        'aria-label',
        isAr
          ? b.className.includes('plus')
            ? 'تكبير'
            : b.className.includes('minus')
              ? 'تصغير'
              : 'العودة إلى الوجهات'
          : b.className.includes('plus')
            ? 'Zoom in'
            : b.className.includes('minus')
              ? 'Zoom out'
              : 'Return to destinations'
      )
    );
  }
}
