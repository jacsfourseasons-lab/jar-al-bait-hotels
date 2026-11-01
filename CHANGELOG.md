# Changelog

> This copy of the project arrived without the earlier CHANGELOG.md, START-HERE.md, AGENTS.md,
> PROJECT-CONTEXT.md and REFERENCE-BRIEF.txt. Entries below start from the 25 October 2026 handover.
> Earlier accepted baseline (per handover): desktop top-level dropdowns open on hover (fine pointer,
> ≥1024px) and close 180ms after leaving; click/keyboard and mobile tap navigation unchanged.

## 2026-10-29 — About Us (`/en/about-us/`) 12-Image Update, Leader Cutout Portrait, Center-Arch Timeline Animation, Split Achievements, and Newsletter Alignment

Converted all 12 section-organized images from `about us page/` into optimized `.webp` assets (`public/assets/jab-*.webp`), removed the background from the leader portrait (`Leader image.jpg` -> `jab-about-leader.webp`, `700×900` transparent cutout), removed the `Meet Our Leadership` button, synchronized the Years / Timeline section so clicked years slide smoothly into the center arch with past years greyed out, updated `Our Achievements` to a left/right split layout, and aligned the Newsletter section with the Homepage.

### Added — `public/assets/`
- `jab-about-hero.webp` (`1672×941`) — About Us Hero Banner (`Hero Section/ChatGPT Image Aug 17, 2026, 06_16_32 PM.png`)
- `jab-about-leader.webp` (`700×900`) — Leadership Cutout Portrait (`2nd secition/Leader image.jpg` with background removed)
- `jab-about-vision.webp` (`1672×941`) — Our Vision Card (`3rd section/our vision.png`)
- `jab-about-mission.webp` (`1674×940`) — Our Mission Card (`3rd section/Our Mission.png`)
- `jab-value-leadership.webp` (`1920×1282`) — Our Values Card 02 (`02 — Leadership` — `4rth section/leader ship.jpg`)
- `jab-value-innovation.webp` (`1536×1024`) — Our Values Card 03 (`03 — Innovation` — `4rth section/Innovation.png`)
- `jab-value-collaboration.webp` (`1448×1086`) — Our Values Card 04 (`04 — Collaboration` — `4rth section/Collaboration.png`)
- `jab-journey-2010.webp` (`1448×1086`) — Our Story 2010 (`our story section/journey image 1 2010.png`)
- `jab-journey-2016.webp` (`1254×1254`) — Our Story 2016 (`Our story section where years are/Jar al Bait Hotel is on 2016.png`)
- `jab-journey-2017.webp` (`1672×941`) — Our Story 2017 (`Our story section where years are/Al Kiswah Towers is on 2017.png`)
- `jab-journey-2023.webp` (`1536×1024`) — Our Story 2023 (`Our story section where years are/Jawahara Hotel is on 2023.png`)
- `jab-journey-2026.webp` (`1821×864`) — Our Story 2026 (`Our story section where years are/Oz PArk Hotel is on 2026.png`)

### Changed — `source/pages/en__about-us.html`, `public/app.css`, `public/page-components.js`
- `source/pages/en__about-us.html`:
  - Wired all 12 new `.webp` assets across Hero, Leadership, Vision & Mission, Values, and Our Story (`2010`–`2026` circle thumbnails and slide cards).
  - Removed the `Meet Our Leadership` button (`#button-e5e053a49e`) and switched `#about-leadership` to `rsg-text-and-media--mod-portrait-big` (`700×900` cutout portrait with transparent background).
  - Updated `#awards-recognition` (`OUR ACHIEVEMENTS` — `Recognition Built on Excellence`) to `.rsg-stats-section__wrapper.mod--embedded` so the heading and intro paragraphs sit on the left column and the two achievement cards (`ISO 9001:2015 — Quality Management` and `Booking.com — Recognition of Excellence`) sit on the right column on desktop and stack cleanly on mobile.
  - Updated `.rsg-newsletter` to match the Homepage newsletter structure.
- `public/page-components.js` & `public/app.css`:
  - Synchronized `.rsg-timeline-section__dates-items` with `translate3d` on both desktop (`(2 - idx) * 20%`) and mobile (`(1 - idx) * 33.3333%`) with a `0.65s cubic-bezier(0.45, 1, 0.45, 1)` transition so clicking any year or arrow smoothly centers that year over the bottom arch (`wave-line-dkt.svg` / `wave-line-mb.svg`), enlarges the active circle, and greys out past years (`.is-past`) to the left.

## 2026-10-29 — Our Companies (`/en/subsidiaries/`) 10-Image Update, Sector Card Hover/Tap Reveal, and Mada Siyahi Card Removal

Converted all 10 section-organized images from `Our companies/` into optimized `.webp` assets (`public/assets/jab-*.webp`), wired them into `source/pages/en__subsidiaries.html`, updated the Hospitality sector naming, removed the Mada Siyahi card, and configured the 4 Leading Sectors cards to display only their heading by default and reveal their description on desktop hover or mobile tap.

### Added — `public/assets/`
- `jab-companies-hero.webp` (`1672×941`) — Our Companies Section 01 Hero Banner (`hero section/ChatGPT Image May 4, 2026, 04_35_03 PM.png`)
- `jab-companies-overview.webp` (`1086×1448`) — Our Companies Section 02 (`Strength Through Diversification` — `2nd section Below HEro section/Secind section image.png`)
- `jab-sector-technology.webp` (`1536×1024`) — Leading Sectors Card 01 (`01 — Technology & IT Solutions` — `3rd cards section/techonology and it solutions.png`)
- `jab-sector-food.webp` (`1811×868`) — Leading Sectors Card 02 (`02 — Food Industry` — `3rd cards section/Food Industry.png`)
- `jab-sector-hospitality.webp` (`1005×1565`) — Leading Sectors Card 03 (`03 — Hospitality` — `3rd cards section/Hospitality.png`)
- `jab-sector-construction.webp` (`1536×1024`) — Leading Sectors Card 04 (`04 — Construction & Contracting` — `3rd cards section/Construction.png`)
- `jab-company-oz-solutions.webp` (`1920×1282`) — Company Card 01 (`OZ for Solutions` — `4 Cards Seciton/OZ For SOlutions.jpg`)
- `jab-company-tilal-al-zaitoon.webp` (`1704×923`) — Company Card 02 (`Tilal Al Zaitoon` — `4 Cards Seciton/tilal al zaitoon.png`)
- `jab-company-diwan-mada.webp` (`1920×1078`) — Company Card 03 (`Diwan Mada Restaurant` — `4 Cards Seciton/Diwan Mada Restaurant.jpeg`)
- `jab-company-tilal-al-jaouf.webp` (`1254×1254`) — Company Card 04 (`Tilal Al Jaouf` — `4 Cards Seciton/tilal al jaouf.png`)

### Changed — `source/pages/en__subsidiaries.html`, `public/app.css`, `public/page-components.js`
- `source/pages/en__subsidiaries.html`:
  - Replaced all 10 image `src`, `width`, `height`, and `alt` attributes across the Hero section, Section 02 overview, Section 03 Leading Sectors cards, and Section 04 Our Companies cards (`OZ for Solutions`, `Tilal Al Zaitoon`, `Diwan Mada Restaurant`, `Tilal Al Jaouf`, and `Al Rimal Contracting`).
  - Changed `03 — Hospitality & Tourism` (`#title-sector-03`), the category filter button (`data-value="hospitality"`), and the business enquiry dropdown option to `03 — Hospitality` / `Hospitality`.
  - Removed the `Mada Siyahi` card (`#image-comp-05`) from the Our Companies visual card grid.
- `public/app.css` & `public/page-components.js`:
  - Configured `.rsg-tiles-section--hover-sectors` so the 4 sector cards show only their heading by default (`max-height: 0; opacity: 0; margin-top: 0`), reveal their description smoothly on desktop `:hover` (`>=1024px`), and toggle `.is-expanded` (`aria-expanded`) when tapped/clicked on mobile (`<1024px`).
  - Added focal-point `object-position` adjustments for `#image-a608f8e704`, `#image-sector-03`, and `#image-comp-04`.

## 2026-10-28 — 13 New Images Across Homepage, Our Portfolio, Our Services, and Invest With Us + Responsive Image Sizing

Converted all 13 newly provided high-resolution PNG images across 8 organized folders in `New Images/` into optimized `.webp` assets (`public/assets/jab-*.webp`), wired them into the Homepage (`/en/`), Our Portfolio (`/en/portfolio/`), Our Services (`/en/services/`), and Invest With Us (`/en/investment/`), and added explicit responsive container-fit and focal-point rules in `public/app.css` for both Desktop (`1440×900`) and Mobile (`390×844`) viewports.

### Added — `public/assets/`
- `jab-home-card-services.webp` (`1254×1254`) — Homepage 4-card grid: `Our Services` (`Warm Welcome at the Reception Desk.png`)
- `jab-home-card-companies.webp` (`1672×941`) — Homepage 4-card grid: `Our Companies` (`ChatGPT Image May 4, 2026, 04_35_03 PM.png`)
- `jab-home-card-portfolio.webp` (`1821×864`) — Homepage 4-card grid: `Our Portfolio` (`Park Hotel at Sunset Waterfront.png`)
- `jab-portfolio-overview.webp` (`1254×1254`) — Our Portfolio Section 02: `A Portfolio Built on Experience and Trust` (`Luxurious Seaside Resort Living Room.png`)
- `jab-hotel-jar-al-bait.webp` (`1254×1254`) — Our Portfolio Section 04 & Homepage Map Card: `Jar Al Bait Hotel` (`Jar al Bait Hotel.png`)
- `jab-hotel-oz-park.webp` (`1821×864`) — Our Portfolio Section 04 & Homepage Map Card: `Oz Park Hotel` (`Oz PArk Hotel.png`)
- `jab-hotel-al-jawhara.webp` (`1536×1024`) — Our Portfolio Section 04 & Homepage Map Card: `Al Jawhara Hotel` (`Jawahara Hotel.png`)
- `jab-track-al-kiswah-towers.webp` (`1672×941`) — Our Portfolio Section 05 (`Experience Across Every Scale of Hospitality`): `Al Kiswah Towers Hotel` (`Al Kiswah Towers.png`)
- `jab-track-meridien-towers.webp` (`1672×941`) — Our Portfolio Section 05: `Meridien Towers Makkah` (`Le Meridian Tower.png`)
- `jab-track-al-rajhi-center.webp` (`1672×941`) — Our Portfolio Section 05: `Al Rajhi Center Hotel` (`Alrajhi center.png`)
- `jab-track-anwar-al-aseel.webp` (`1672×941`) — Our Portfolio Section 05: `Anwar Al Aseel Hotel` (`Anwar Al Aseel.png`)
- `jab-services-hero.webp` (`1536×1024`) — Our Services Section 01 Hero Banner & Homepage Hero Slide 2 (`Our Services`) (`Elegant Middle Eastern Hotel Reception.png`)
- `jab-invest-hero.webp` (`1672×941`) — Invest With Us Section 01 Hero Banner & Homepage Hero Slide 3 (`Invest with Us`) (`Luxury Arabian Lounge Conversation (1).png`)

### Changed — `source/pages/home.html`, `source/pages/en__portfolio.html`, `source/pages/en__services.html`, `source/pages/en__investment.html`, `public/app.css`
- Updated `src`, `width`, `height`, and `alt` attributes across all 4 pages to reference the new `.webp` assets, including Homepage Hero Slide 2 (`#image-8bfa585252` -> `jab-services-hero.webp`) and Slide 3 (`#image-d83aa363b9` -> `jab-invest-hero.webp`).
- `source/pages/home.html`: Updated the 4th card heading (`#title-b548870d02`) in `.rsg-tiles-section` from `Investment & Partnerships` to `Investment` so all 4 card titles sit cleanly on a single line.
- `public/app.css`: Enforced `width: 100% !important; height: 100% !important; object-fit: cover !important; display: block;` on `.rsg-hero-section-item__img`, `.mod--tiles-card .rsg-card__img`, `.rsg-text-and-media__image`, `.mod--visual-card .rsg-services-section-item__img`, and `.rsg-map .map-box__carousel-item__background` (and their nested `.cmp-image` / `.cmp-image__image` nodes), with tailored `object-position` focal points and dark contrast overlays so square (`1:1`), `3:2`, `16:9`, and `21:10` source images fill every card and hero container without stretching, cropping key subjects, or leaving gaps on desktop or mobile.

## 2026-10-27 — Our Hotels Map Section (`.rsg-map`) redesign, city hub markers, and Al Jawhara Hotel location fix

Redesigned the Homepage `Our Hotels` interactive map section (`source/pages/home.html`, `public/assets/jar-al-bait-hotels-map.svg`, `public/maps.js`, `public/app.css`) for crystal-clear geographic clarity and clean desktop/mobile layout, confirming **Jar Al Bait Hotel** in **Makkah Al Mukarramah** (`Al Aziziyah`) and both **Oz Park Hotel** and **Al Jawhara Hotel** in **Al Qunfudhah**.

### Changed — `source/pages/home.html`, `public/assets/jar-al-bait-hotels-map.svg`, `public/maps.js`, `public/app.css`
- `source/pages/home.html`:
  - Corrected **Al Jawhara Hotel** (Slide 3 and `data-local-map` / `data-map-config`) from `Makkah, Saudi Arabia` to **Al Qunfudhah, Saudi Arabia** (`Al Jawhara Hotel combines comfortable accommodation with attentive service, providing a welcoming environment for families and travellers visiting Al Qunfudhah.`).
  - Added `OUR DESTINATIONS` eyebrow and an interactive 2-row city breakdown summary (`Makkah Al Mukarramah · 1 Hotel — Jar Al Bait Hotel (Al Aziziyah)` and `Al Qunfudhah · 2 Hotels — Oz Park Hotel · Al Jawhara Hotel`) in `.map-box__content`.
  - Updated all 3 hotel card CTAs to `Explore Hotel` (`/en/portfolio/`).
- `public/assets/jar-al-bait-hotels-map.svg`:
  - Reframed the map (`viewBox="790 760 720 450"`, `1440×900`) around the Western Saudi Arabia & Red Sea coastline with high-contrast land/sea separation, subtle graticule grid lines, prominent `SAUDI ARABIA`, `RED SEA`, and `JEDDAH` reference labels, a dashed gold coastal route connecting Makkah and Al Qunfudhah, glowing gold city hubs at **Makkah Al Mukarramah (`AL AZIZIYAH · 1 HOTEL`)** and **Al Qunfudhah (`RED SEA COAST · 2 HOTELS`)**, and precision leader lines (`1` in Makkah, `2` branched in Al Qunfudhah) pointing to each hotel marker.
- `public/maps.js` & `public/app.css`:
  - Upgraded `.local-map-marker` to support `city` sub-labels (`MAKKAH AL MUKARRAMAH` / `AL QUNFUDHAH`) and `anchor: "left"` (`local-map-marker--anchored`) so each hotel pill connects directly to its city's SVG leader line without overlapping.
  - Restructured `.rsg-map .map-box` on Desktop (`>=1024px`) into a balanced 2-column split grid (Left column: heading, city summary pills, active hotel card, and prev/next navigation; Right column: dedicated `16:10` framed interactive map card with zero text/card overlap) and on Mobile (`<1024px`) into a clean vertical stack with a `16:10.5` framed map card.
  - Switched `.map-box__carousel` Swiper to a clean crossfade (`effect: 'fade'`) and hid the redundant card close button (`×`) so hotel cards stay aligned on all viewports.

## 2026-10-27 — Jar Al Bait Hero Section Video (`IMG_3079.MOV` -> `jar-al-bait-hero.mp4`) and mobile/desktop hero alignment

Transcoded the provided `IMG_3079.MOV` (`1920×1080`, 16.44s showcase of Oz Park Hotel, Al Jawhara Hotel, and Jar Al Bait Hotel) to a fast-starting H.264 `.mp4` (`public/assets/jar-al-bait-hero.mp4`) with a matching poster frame (`public/assets/jar-al-bait-hero-poster.jpg`) and wired it into the Hero Section on the Homepage (`/en/`) and Our Portfolio (`/en/portfolio/`).

### Changed — `source/pages/home.html`, `source/pages/en__portfolio.html`, `public/app.js`, `public/app.css`
- `public/assets/jar-al-bait-hero.mp4` & `public/assets/jar-al-bait-hero-poster.jpg`: Transcoded `IMG_3079.MOV` (HEVC QuickTime) to web-universal H.264 `yuv420p` (`-movflags +faststart`, 16.9 MB) and extracted a 1080p poster image.
- `source/pages/home.html`: Updated Slide 1 of `.rsg-hero-section` (`A Collection of Hospitality Experiences`) to play `/assets/jar-al-bait-hero.mp4` with `data-swiper-autoplay="16500"` so the full 16.44-second sequence across all 3 group hotels plays before advancing to Slide 2.
- `source/pages/en__portfolio.html`: Updated the Hero Banner (`OUR PORTFOLIO` — `A Legacy of Hospitality. A Future of Possibilities.`) to play `/assets/jar-al-bait-hero.mp4` with `/assets/jar-al-bait-hero-poster.jpg`.
- `public/app.js`: Added per-slide `data-swiper-autoplay` progress bar duration synchronization (16.5s for the hero video slide, 10s for image slides) and ensured single-slide `<rsg-hero-section>` videos (such as `/en/portfolio/`) auto-play reliably.
- `public/app.css`: Set `.rsg-hero-section .swiper` and `.swiper-slide` to `height: 100% !important; min-height: 100dvh`, enforced `100% × 100%` centered `object-fit: cover` on hero `<video>`, added a richer dark shade/overlay (`rgba(0, 0, 0, 0.46)` with top and bottom gradients) over the hero video for cleaner contrast against the bright sky and facades, and added mobile bottom padding (`92px`) so the hero CTA button never crowds the slide indicator bars.

## 2026-10-27 — Investment & Partnerships page (`/en/investment/`) content and switcher carousel update

Updated `source/pages/en__investment.html` with Jar Al Bait Hotel Management & Operations Group content across all existing sections on the page while preserving its section layout.

### Changed — `source/pages/en__investment.html` & Supporting Files
- **Section 01 — Hero Banner**: Pretitle `INVEST WITH US`, heading `Investment & Partnerships`, and subtitle `Explore opportunities for hospitality investment, hotel management collaboration, and long-term strategic business partnerships.` (matching the Homepage Investment & Partnerships tile).
- **Section 02 — Overview / Intro Text & Media**: Label `INVEST IN THE FUTURE`, heading `Building Lasting Value Through Hospitality Partnerships`, and 3 paragraphs detailing Jar Al Bait's platform across Makkah and Al Qunfudhah, operational history since 2010, ISO 9001:2015 certification, and five operating models.
- **Section 03 — Operational & Partnership Highlights**: Pretitle `Key Performance Milestones`, heading `Operational & Partnership Highlights`, and 9 highlight cards (`22 Properties`, `14,480 Rooms`, `65,537 Beds`, `5 Operating Models`, `3 Group Hotels`, `4 Business Sectors`, `6 Sister Companies`, `ISO 9001:2015`, `Global Alliances`).
- **Section 04 — Vision 2030 Alignment & Hospitality Growth**: Pretitle `Hospitality, Tourism, Innovation`, heading `Vision 2030 Alignment & Hospitality Growth`, and expandable overview text.
- **Section 05 — Investment & Partnership Opportunities (`.rsg-switcher-carousel`)**: Pretitle `Flexible Collaboration`, heading `Investment & Partnership Opportunities`, and 3 interactive switcher tabs/slides (`Hotel Operating Models` / `Five Flexible Hotel Operating Models`, `Annual & Seasonal Investment` / `Annual & Seasonal Hospitality Investments`, `Strategic Partnerships` / `Strategic Alliances & Multi-Sector Ventures`) with `Partner with us` buttons (`/en/contact-us/`).
- **Section 06 — Our Partners Banner (`.image-banner`)**: Pretitle `Our Partners`, heading `Building Trusted Strategic Alliances`, 2 paragraphs highlighting collaborations including Holiday Inn, and `Explore Our Companies` button (`/en/subsidiaries/`).
- **Section 07 — Explore Jar Al Bait Hotel Group (`.rsg-small-banners`)**: Pretitle `Explore`, heading `Jar Al Bait Hotel Group`, and 3 cards (`Our Portfolio` -> `/en/portfolio/`, `Our Companies & Ventures` -> `/en/subsidiaries/`, `Our Services` -> `/en/services/`).
- **Section 08 — Get in Touch CTA**: Pretitle `Get in Touch`, heading `Invest in the Future of Hospitality`, intro text, and `Contact us` button (`/en/contact-us/`).
- **Section 09 — News & Updates**: Pretitle `STAY CONNECTED`, heading `News & Updates`, subtitle, and `Subscribe` button.
- `public/page-components.js`, `public/app.js`, `public/app.css`, `routes.json`: Synchronized `.rsg-switcher-carousel` tabs, active underline, and prev/next navigation arrows; added mobile Swiper pagination for `.rsg-small-banners__items` below `1024px`; constrained `.rsg-switcher-carousel__swiper .rsg-card.swiper-slide` to `100%` width; updated `/en/investment/` metadata.

### Validation
- `npm run build` (185 routes) and `npm run check` (0 broken assets, 0 dead links).
- Verified in Playwright at `1440×900` (desktop) and `390×844` (mobile) and deployed to `https://rsg-recreation-preview.pages.dev/en/investment/`.

## 2026-10-27 — About Us page (`/en/about-us/`) content and shared 5-column Footer update

Applied the "JAR AL BAIT HOTEL MANAGEMENT & OPERATIONS GROUP — ABOUT US — FINAL WEBSITE CONTENT" 11-section content plan to `source/pages/en__about-us.html` and `source/components/footer.html`.

### Changed — `source/pages/en__about-us.html`
- **Section 01 — Hero Banner**: Main heading `Who We Are`, subtitle `A Legacy of Trust. A Commitment to Hospitality Excellence.`
- **Section 02 — About Us**: Pretitle `ABOUT US`, heading `Shaping the Future of Hospitality`, 3 paragraphs, and `Explore Our Portfolio` button (`/en/portfolio/`).
- **Section 03 — Leadership**: Label `LEADERSHIP`, heading `Leadership That Inspires Excellence`, 3 paragraphs highlighting **Mr. Khalid Abdul Majeed Al Badani** and the executive leadership team, `Meet Our Leadership` button (`/en/leadership/`), and hospitality/architectural imagery.
- **Section 04 — Our Vision & Mission**: Updated the 2 side-by-side `mod--image mod--cream` cards (`Our Vision` and `Our Mission`) with Jar Al Bait's vision and mission statements.
- **Section 05 — Our Values (`#our-values`)**: Pretitle `WHAT DEFINES US`, heading `Our Values`, intro paragraph, and 4 value panels (`01 — Trust`, `02 — Leadership`, `03 — Innovation`, `04 — Collaboration`) in a 4-column desktop row / mobile Swiper carousel.
- **Section 06 — Our Journey (`#our-journey`)**: Pretitle `OUR STORY`, heading `A Journey Built on Trust and Hospitality`, intro paragraph, and 5 interactive timeline milestones (`2010 — The Beginning of Our Journey` / `Where It All Began`, `2016 — Our First Hotel` / `A New Chapter in Hospitality`, `2017 — A Milestone in Hotel Operations` / `Expanding Our Operational Expertise`, `2023 — Expanding to Al Qunfudhah` / `The Launch of Al Jawhara Hotel`, `2026 — A New Era of Growth` / `The Creation of Oz Park Hotel`) with synchronized year circles, prev/next arrows, and pagination bullets.
- **Section 07 — Aligned With Saudi Vision 2030**: Pretitle `OUR COMMITMENT TO THE KINGDOM`, heading `Aligned With Saudi Vision 2030`, and 3 paragraphs.
- **Section 08 — Awards & Recognition (`#awards-recognition`)**: Pretitle `OUR ACHIEVEMENTS`, heading `Recognition Built on Excellence`, 2 intro paragraphs, and 2 recognition cards (`ISO 9001:2015 — Quality Management` and `Booking.com — Recognition of Excellence`).
- **Section 09 — Get in Touch**: Pretitle `GET IN TOUCH`, heading `Let's Build the Future of Hospitality Together.`, intro paragraph, and `Contact Us` button (`/en/contact-us/`).
- **Section 10 — News & Updates**: Pretitle `STAY CONNECTED`, heading `News & Updates`, subtitle, fields (`First Name`, `Last Name`, `Email Address`), and `Subscribe` button.

### Changed — Shared Footer (`source/components/footer.html`) & Supporting Files
- **Section 11 — Footer (`source/components/footer.html`)**: Updated brand block (`JAR AL BAIT HOTEL MANAGEMENT & OPERATIONS GROUP` / `مجموعة جار البيت لإدارة وتشغيل الفنادق` / `Building Trust Through Hospitality.`), expanded to 5 link columns / mobile accordions (`Our Group`, `Our Business`, `Our Hotels`, `Quick Links`, `Contact Information`), and updated copyright to `© 2026 Jar Al Bait Hotel Management & Operations Group. All Rights Reserved.`
- `source/pages/en__portfolio.html`: Added `id="our-hotels"` to Section 04 (`Discover Our Hotels`) for footer deep-links and updated `Al Jawhara Hotel` location label/text to `AL QUNFUDHAH` / `Al Qunfudhah`.
- `public/page-components.js`: Added interactive Swiper controller for `.rsg-timeline-section` synchronizing desktop/mobile year circles, prev/next arrows, mobile pagination bullets, and dynamic background imagery.
- `public/forms.js`: Removed the legacy Red Sea Global demo form disclaimer notice.
- `routes.json` & `public/app.css`: Updated `/en/` and `/en/about-us/` metadata and added responsive styles for `.rsg-timeline-section`, `#awards-recognition`, `.rsg-newsletter` pretitle, and the 5-column desktop footer.

### Validation
- `npm run build` (185 routes) and `npm run check` (0 broken assets, 0 dead links).
- Verified in Playwright at `1440×900` (desktop) and `390×844` (mobile) and deployed to `https://rsg-recreation-preview.pages.dev/en/`.

## 2026-10-26 — Mobile responsiveness, card alignment, and header/menu fixes across Homepage, Our Services, Our Portfolio, and Our Companies

Resolved mobile responsiveness, card truncation, map overlap, and header/menu alignment issues across the shared navigation/footer and the 4 client-facing pages (`/en/`, `/en/services/`, `/en/portfolio/`, `/en/subsidiaries/`).

### Changed — Navigation Menu & Footer (`source/components/header.html`, `source/components/footer.html`, `public/app.css`)
- **Mobile Menu Background & Contrast**: Overrode `.header.mod--menu .header__mainNav` and `.header.mod--menu .header__wrapper .header__topBar` (`background-color: transparent !important`) and set `.header.mod--menu` on `<1024px` to dark blurred navy (`rgba(10, 29, 45, 0.98)`) so white mobile menu text and icons are crisp and legible instead of rendering white-on-cream.
- **Mobile Menu Pixel Alignment**: Set `.header__mainNav`, `.header.mod--menu .header__mainNav-mega-menu`, and `.header__mainNav-menu__modal` to `width: 100%; box-sizing: border-box` on `<1024px` so the close button, search button, menu item rows, right-hand chevrons, and bottom language selector align to the exact `20px` left/right edges. Kept the mobile top-bar logo height consistent (`44px`) when opening the hamburger menu.
- **Unified Submenu Structure**: Standardized all 7 top-level navigation items (`Who we are`, `Our Business`, `Our Portfolio`, `Positive Impact`, `Invest`, `Join Us`, `Media Center`) to use `<button class="mega-menu__list-item__title js-level-1-button">` and the centered `.mega-menu__sub-container.mod--auto.js-container-level-2.mod--normal` submenu layout so every section opens cleanly on mobile tap and aligns horizontally on desktop hover/click.
- **Desktop Sticky/Compact Header (`mod--compact`)**: Styled `.header.mod--compact:not(.mod--megamenu):not(.mod--menu) .mega-menu__list-item__title` with dark text (`var(--text-neutral-strong)`) on the cream sticky bar, and styled `.header.mod--compact.mod--megamenu .header__wrapper` in dark navy (`rgba(10, 29, 45, 0.96)`) with light controls when a dropdown is open.
- **Footer Legal Links Alignment**: Removed the two empty `<div class="text"></div>` spacer nodes and the legacy RSG PIF mark in `source/components/footer.html` so `Terms & Conditions`, `Privacy Policy`, and `Privacy Center` align flush-left at `20px` on mobile.

### Changed — Homepage (`/en/`), Our Services (`/en/services/`), Our Companies (`/en/subsidiaries/`), and Our Portfolio (`/en/portfolio/`)
- **Mobile Stat Cards (`Homepage` Section 06, `Our Services` Section 03, `Our Portfolio` Section 03)**: Stacked `.rsg-stats-section__grid.mod--two-mob > .cmp-container` in a 1-column full-width layout (`flex-direction: column; width: 100%`) on `<768px` with visible icons and word wrapping, preventing the 2-column mobile squeeze (`End-to-End Hotel Management` word overflow on Services and uneven 3rd card width on Homepage).
- **Visual Cards (`Our Services` Section 05, `Our Companies` Section 04, `Our Portfolio` Section 05)**: Removed `-webkit-line-clamp` and ellipsis truncation on `.rsg-heading__pretitle .cmp-text` and `.rsg-services-section-item__description .cmp-text`, hid empty `.rsg-services-section-item__logo:empty` spacers, centered `.rsg-company-sector-badge`, and allowed visual cards on `<1024px` to size dynamically (`height: auto; min-height: 440px`) so all room/bed counts, subtitles, and descriptions display in full.
- **Company Sector Filter Bar (`Our Companies` `/en/subsidiaries/`)**: Moved `.rsg-services-section__group` into `.rsg-services-section__wrapper` directly above `.rsg-services-section__container` with `position: relative` so the filter bar sits cleanly between the section intro and the company cards instead of floating over card titles while scrolling on mobile.
- **Homepage `Our Hotels` Map Section (`/en/`)**: Stacked `.map-box__content` (Order 1), `.map-box__map` (`400px` interactive map canvas, Order 2), and `.map-box__bottom` (active hotel card + prev/next navigation, Order 3) on `<1024px` so the hotel popup card and map markers never overlap the `Our Hotels` intro text.
- **Homepage Social Feed & Contact CTA (`/en/`)**: Updated the Social Feed heading from `Red Sea Global` to `Jar Al Bait Hotel Group`, added the `CONNECT WITH US` pretitle and centered the heading in the `Let's Create Better Hospitality Together` section, and stacked `.rsg-text-section__btn__wrapper` buttons full-width on `<768px` so button labels never wrap onto two lines.

### Validation
- `npm run build` (185 routes) and `npm run check` (0 broken assets, 0 dead links).
- Verified in Playwright at `390×844` (mobile) and `1440×900` (desktop) across the Menu, Footer, `/en/`, `/en/services/`, `/en/subsidiaries/`, and `/en/portfolio/` and redeployed to `https://rsg-recreation-preview.pages.dev/en/`.

## 2026-10-26 — Our Portfolio page (`/en/portfolio/`) content and navigation updates

Applied the "JAR AL BAIT HOTEL MANAGEMENT & OPERATIONS GROUP — OUR PORTFOLIO PAGE" 6-section content plan to `source/pages/en__portfolio.html` and updated header navigation links.

### Changed — `source/pages/en__portfolio.html`
- **Section 01 — Hero Banner**: Small heading `OUR PORTFOLIO`, main heading `A Legacy of Hospitality. A Future of Possibilities.`
- **Section 02 — Portfolio Overview**: Pretitle `OVERVIEW`, heading `A Portfolio Built on Experience and Trust`, and 3 paragraphs on Jar Al Bait Hotel Management & Operations Group's hospitality portfolio across Makkah and the wider region.
- **Section 03 — By the Numbers**: Section heading `By the Numbers`, 4 cards (`22` **Hotel Properties**, `14,480` **Rooms Operated**, `65,537` **Bed Capacity**, `5` **Operating Models** with their descriptions), and italic footnote `*Figures represent our historical operational track record.*`
- **Section 04 — Our Hotels**: Heading `Discover Our Hotels`, 2 intro paragraphs, and 3 hotel panels (`Jar Al Bait Hotel` — `MAKKAH AL MUKARRAMAH`, `Oz Park Hotel` — `AL QUNFUDHAH`, `Al Jawhara Hotel` — `MAKKAH AL MUKARRAMAH`) with `Explore Hotel` buttons in a 3-column desktop row / mobile Swiper carousel.
- **Section 05 — Our Operational Track Record**: Pretitle `A LEGACY OF HOTEL OPERATIONS`, heading `Experience Across Every Scale of Hospitality`, 2 intro paragraphs, and 4 featured project cards (`Al Kiswah Towers Hotel`, `Meridien Towers Makkah`, `Al Rajhi Center Hotel`, `Anwar Al Aseel Hotel`) with room/bed capacity and operating model badges.
- **Section 06 — Get in Touch**: Pretitle `CONNECT WITH US`, heading `Discover the Experience Behind Our Portfolio`, intro text, and `Contact Us` button (`/en/contact-us/`).

### Supporting changes
- `source/components/header.html`: Updated `Our Portfolio` mega-menu items to `Overview` (`/en/portfolio/`), `Jar Al Bait Hotel` (`/en/portfolio/the-red-sea/`), `Oz Park Hotel` (`/en/portfolio/amaala/`), and `Al Jawhara Hotel` (`/en/portfolio/thuwal/`). (Homepage Hero Slide 01 `Explore Our Portfolio` CTA, Homepage Business Card 03 `Explore Portfolio`, and Footer Quick Links `Our Portfolio` all link directly to `/en/portfolio/`.)
- `routes.json`: Updated `/en/portfolio/` title and meta description for Jar Al Bait Hotel Group.
- `public/app.css`: Added styles for `.rsg-stats-section__note--light`, `.rsg-hero-section-item__pretitle p`, `.rsg-tile-location-label`, and `.rsg-tiles-section--sectors .rsg-card__wrapper.mod--tiles-card .rsg-card__button:has(.cmp-button)`.

### Validation
- `npm run build` (185 routes) and `npm run check` (0 broken assets, 0 dead links).
- Verified in browser at 1440×900 and 390×844: all 6 sections render cleanly with zero horizontal overflow.

## 2026-10-26 — Our Companies & Ventures page (`/en/subsidiaries/`) content and navigation updates

Applied the "JAR AL BAIT HOTEL MANAGEMENT & OPERATIONS GROUP — OUR COMPANIES & VENTURES PAGE" 7-section content plan to `source/pages/en__subsidiaries.html` and updated header navigation links.

### Changed — `source/pages/en__subsidiaries.html`
- **Section 01 — Hero Banner**: Heading `Our Companies & Ventures`, subtitle `Diverse Businesses. Shared Ambitions. Endless Possibilities.`
- **Section 02 — Overview**: Pretitle `OVERVIEW`, heading `Diversifying Opportunities. Creating Lasting Value.`, and 3 paragraphs on Jar Al Bait Hotel Management & Operations Group's network across technology, food production, hospitality, tourism, and construction.
- **Section 03 — Our Business Sectors**: Pretitle `LEADING SECTORS`, heading `Diverse Expertise. One Shared Vision.`, intro paragraph, and 4 sector panels (`01 — Technology & IT Solutions`, `02 — Food Industry`, `03 — Hospitality & Tourism`, `04 — Construction & Contracting`) in a 4-column desktop panel row / mobile Swiper carousel.
- **Section 04 — Our Companies & Ventures**: Pretitle `INTEGRATED EXCELLENCE`, heading `Our Companies`, intro paragraph, 6 visual company cards (`Oz for Solutions`, `Tilal Al Zaitoon Oil Factory`, `Diwan Mada Restaurant`, `Tilal Al Jaouf`, `Mada Siyahi`, `JACS Company`) with sector badges, specialty subtitles, descriptions, and `Discover More` buttons (`#get-in-touch`), plus interactive sector filter tabs (`All Companies`, `Technology & IT Solutions`, `Food Industry`, `Hospitality & Tourism`, `Construction & Contracting`).
- **Section 05 — Our Partners**: Pretitle `STRATEGIC RELATIONSHIPS`, heading `Our Partners`, intro paragraph, and partner card (`Holiday Inn` — `Hospitality Partner`).
- **Section 06 — Our Offices**: Pretitle `OUR PRESENCE`, heading `Our Offices`, intro paragraph, and 5 centered office cards on the dark blue `.rsg-categories--background-blue` section (`Makkah`, `Jeddah`, `Riyadh`, `Yanbu`, `Al Qunfudhah`).
- **Section 07 — Get in Touch**: Pretitle `CONNECT WITH US`, heading `Let's Build New Opportunities Together.`, intro paragraph, 7 Enquiry Type dropdown options (`Business Partnership`, `Technology & IT Solutions`, `Food Industry`, `Hospitality & Tourism`, `Construction & Contracting`, `Investment Opportunities`, `General Enquiry`), 6 form fields (`First Name`, `Last Name`, `Company Name`, `Email Address`, `Phone Number`, `Message`), and `Submit Enquiry` button.

### Supporting changes
- `source/components/header.html`: Updated `Our Business → Subsidiaries` to a clean direct link `Our Companies` (`/en/subsidiaries/`), removing the obsolete RSG subsidiary sub-submenus. (Homepage Business Card 02 and Footer Quick Links already link `Our Companies` to `/en/subsidiaries/`.)
- `routes.json`: Updated `/en/subsidiaries/` title and meta description for Jar Al Bait Hotel Group.
- `public/page-components.js`: Wired `.rsg-services-section .js-filter-button` sector tabs (`all`, `technology`, `food`, `hospitality`, `construction`) and tab-bar scroll arrows.
- `public/app.css`: Added styles for `.rsg-company-sector-badge`, `.rsg-tiles-section--sectors` descriptions, desktop `.rsg-services-section__group` / `.rsg-services-section__tabs` width so all 5 filter tabs fit without clipping, `.rsg-partner-card`, and `.rsg-offices` centered 5-card grid.

### Validation
- `npm run build` (185 routes) and `npm run check` (0 broken assets, 0 dead links).
- Verified in browser at 1440×900 and 390×844: all 7 sections, 4-panel Business Sectors row, 6 Company cards + working sector filter tabs, Holiday Inn partner card, 5 Office cards, and Get in Touch form work cleanly with zero horizontal overflow.

## 2026-10-26 — Our Services page (`/en/services/`) content and Section 06 Partnership Models

Applied the "JAR AL BAIT HOTEL MANAGEMENT & OPERATIONS GROUP — OUR SERVICES PAGE" 7-section content plan to `source/pages/en__services.html` and verified all links to `/en/services/`.

### Changed — `source/pages/en__services.html`
- **Section 01 — Hero Banner**: Heading `Our Services`, subtitle `Integrated Hospitality Solutions, Built on Experience and Excellence.`
- **Section 02 — Our Approach**: Pretitle `OUR APPROACH`, heading `Complete Hospitality Management. One Trusted Partner.`, and 3 paragraphs (3rd paragraph inside the existing `Show more +` expandable block).
- **Section 03 — Core Capabilities**: Pretitle `IN NUMBERS`, heading `Our Core Capabilities`, 4 cards (`22 Hotel Properties`, `14,480 Rooms Operated`, `5 Operating Models`, `End-to-End Hotel Management` with their descriptions), plus italic footnote `*Statistics reflect our documented operational track record.*`
- **Section 04 — Our Expertise**: Pretitle `OUR EXPERTISE`, heading `Expertise Across Every Aspect of Hospitality`, intro paragraph, and 4 carousel cards (`01 — Hotel Management & Operations` through `04 — Integrated Hospitality Services` with their `•`-separated taglines).
- **Section 05 — Our Services**: Pretitle `PROFESSIONAL HOSPITALITY SOLUTIONS`, heading `Our Services`, intro paragraph, and 11 service cards (`01 — Hotel Management & Operations` through `11 — Dedicated Ladies' Services`) in the dark staggered 2-column visual card grid; removed obsolete RSG filter tabs (`Real Estate`, `Engineering & Construction`, `Tourism & Hospitality`).
- **Section 06 — Operating & Partnership Models (new section)**: Added `.rsg-stats-section.rsg-partnership-models` on a white background using native `.rsg-heading` (`FLEXIBLE HOSPITALITY PARTNERSHIPS` / `Five Models. One Commitment to Excellence.`), intro paragraph, and 5 `mod--cream` cards in a `.mod--three.mod--two-tablet` grid (`01 — Management & Operations`, `02 — Lease & Supervision`, `03 — Lease & Marketing`, `04 — Annual Investment`, `05 — Seasonal Investment`).
- **Section 07 — Collaborate With Us**: Added `.rsg-heading` (`GET IN TOUCH` / `Let's Build Better Hospitality Together.`), intro paragraph, 6 Enquiry Type dropdown options (`Hotel Management & Operations`, `Hotel Marketing & Sales`, `Reservations & Revenue Management`, `Group Accommodation`, `Operating & Investment Partnerships`, `Other Services`), 6 form fields (`First Name`, `Last Name`, `Company / Hotel Name`, `Email Address`, `Phone Number`, `Message`), and `Send Enquiry` submit button. Removed trailing RSG-only banner/subsidiary sections.

### Supporting changes
- `source/components/header.html`: Updated `Our Business → Services` to a direct `Our Services` link (`/en/services/`) without the obsolete RSG `Real Estate / Engineering & Constructions / Tourism & Hospitality` sub-submenus, so clicking `Our Services` in the header navigates directly on both desktop and mobile. (Homepage Hero Slide 02, Homepage Business Card 01, and Footer Quick Links already link to `/en/services/`.)
- `routes.json`: Updated `/en/services/` title and meta description for Jar Al Bait Hotel Group.
- `public/forms.js`: Added floating-label active classes (`contact-us-form__placeholder-active`, `contact-us-form__input-active`, `contact-us-form__textarea-active`, `contact-us-form__custom-select-text-active`) on `.contact-us-form` fields and preserved custom submit button text (`Send Enquiry`) after submission.
- `public/app.css`: Made `.rsg-services-section-item` visual card descriptions visible by default without requiring desktop hover, and added spacing styles for `.contact-us__heading` and `.contact-us__intro`.

### Validation
- `npm run build` (185 routes) and `npm run check` (0 broken assets, 0 dead links).
- Verified in browser at 1440×900 and 390×844: all 7 sections, `Show more +`, 4-slide Expertise carousel, 11 Services cards, 5 Partnership Model cards, and Enquiry Form dropdown/fields work cleanly with no horizontal overflow.

## 2026-10-26 — Hotels map: city labels and mobile framing

- `public/assets/jar-al-bait-hotels-map.svg`: added MAKKAH (beside the two Makkah hotel markers) and
  AL QUNFUDHAH (under the Oz Park Hotel marker) labels, styled like the existing map labels.
- `public/maps.js`: optional `focus: [x%, y%]` in `data-local-map` keeps that point of the 1440×900
  frame centred when the screen crops the map (narrow/tall or very wide screens), clamped so no edge
  shows; markers follow the same offset. Without `focus` the map stays centred as before.
  Homepage uses `focus: [62.5, 63.3]` (centre of the three hotels).
- Result: on mobile the Makkah markers and label are fully visible (previously cut off at the right);
  at 1440 the desktop view shifts by about 7px (negligible); at 1920 all markers and labels are in view.
  In the expanded mobile map the hotel card still covers Oz Park, as the lowest marker did in the
  original design.
- Validation: build + check pass; screenshots at 1440×900, 1920×1080, 390×844 (inline and expanded map).

## 2026-10-26 — Hotel locations corrected

- Al Jawhara Hotel is in Makkah (not Al Qunfudhah). Its card label is now "Makkah, Saudi Arabia" and
  its description reads "…welcoming stay in Makkah…". Oz Park Hotel is the only Al Qunfudhah hotel.
- Map markers (`data-local-map` in `source/pages/home.html`): Jar Al Bait Hotel and Al Jawhara Hotel
  sit one above the other at Makkah; Oz Park Hotel alone at Al Qunfudhah. Positions remain approximate.
- Validation: build + check pass; 1440×900 map reviewed, the Makkah markers don't overlap, and
  clicking Al Jawhara opens its Makkah card.

## 2026-10-26 — Numbers section: light colour scheme

- After removing the cream Residences section, the dark Numbers section sat directly under the dark
  Hotels map. Switched it to the light scheme used by About/Business, using existing component
  classes only (`source/pages/home.html`): section background white, small heading `mod--blue`,
  heading `mod--gold`, cards `mod--cream` (was `mod--black`), icon ring `mod--border-dark`.
  Footnote colour changed to the site grey #595E61 (`public/app.css`).
- Validation: build + check pass; 1440×900 and 390×844 screenshots reviewed (no overflow).

## 2026-10-26 — Jar Al Bait Hotel Group homepage content

Applied the client's "Final Homepage Website Content" plan. Layout, components, photos, fonts and
interactions are unchanged; only the content listed here changed.

### Removed (homepage)
- "Positive Impact" carousel (Responsible Development / Regenerative Tourism).
- "Red Sea Global Residences" section (Red Sea Residences / AMAALA Residences).

### Changed — `source/pages/home.html`
- Hero: 3 slides → A Collection of Hospitality Experiences / Comprehensive Hospitality Solutions /
  Partner in the Future of Hospitality, with buttons Explore Our Portfolio (`/en/portfolio/`),
  Discover Our Services (`/en/services/`), Explore Opportunities (`/en/investment/`). Slide tabs:
  Our Portfolio · Our Services · Invest with Us.
- About Us: new small heading, heading and 3 paragraphs (3rd behind the existing "Show more +").
- Our Business: new small heading/heading/intro; tiles Our Services, Our Companies, Our Portfolio,
  Investment & Partnerships with new descriptions (links unchanged).
- Our News: new intro sentence (news cards unchanged).
- Our Hotels (was Our Destinations): new heading/intro; cards Jar Al Bait Hotel, Oz Park Hotel,
  Al Jawhara Hotel with location label and description (destination logos and fact lists removed;
  Explore links unchanged). Map re-framed to Makkah and Al Qunfudhah with 3 hotel markers.
- Numbers: OUR EXPERIENCE IN NUMBERS / A Legacy of Hospitality Excellence; 22 Hotel Properties,
  14,480 Rooms Managed & Operated, 65,537 Bed Capacity; footnote added under the cards.
- Contact: Let's Create Better Hospitality Together + paragraph; Contact Us (primary,
  `/en/contact-us/`) and Partner With Us (secondary, `/en/investment/`).

### Changed — shared footer `source/components/footer.html` (applies to every page)
- Logo image → brand block: JAR AL BAIT HOTEL GROUP / مجموعة جار البيت / Building Trust Through Hospitality.
- Link columns → Quick Links (Home, About Us, Our Portfolio, Our Services, Our Companies,
  Investment & Partnerships, News → `/en/media-center/`, Contact Us) and Contact Information
  (website, `mailto:` email, `tel:` phone). Mobile accordion behaviour kept.
- Copyright → © 2026 Jar Al Bait Hotel Group. All Rights Reserved.

### Supporting changes
- `public/maps.js`: markers/image/label can be supplied per page via `data-local-map` on `.map-box`;
  falls back to the previous Red Sea markers when absent.
- `public/assets/jar-al-bait-hotels-map.svg`: re-framed copy of the local coastline map
  (recorded in asset-manifest.json). Marker positions are approximate (no exact addresses supplied).
- `public/app.css`: footer brand block styles (system Arabic font fallback; extra top spacing below
  1024px so the overlapping newsletter card does not cover it) and the numbers footnote style.

### Not changed (not in the content plan)
- Header logo and menu, all photos/hero video, news cards, social media wall, newsletter box,
  footer social icons and "A PIF Company" mark, inner pages, page title/description.

### Validation
- `npm run build` (185 routes) and `npm run check` (0 broken assets, 0 unknown internal links).
- Browser 1440×900: all section text/links verified in the DOM; tile hover shows full description;
  map markers inside the map and marker click selects the matching hotel card; numbers, contact,
  footer screenshots reviewed; header hover dropdown still opens. 390×844: no horizontal overflow,
  hero, hotels card, footer accordion (Quick Links opens with 8 links) reviewed. No runtime errors.
- Hosted preview (rsg-recreation-preview.pages.dev) not yet redeployed with these changes.

## 2026-10-25 — Handover, asset restore and hosted client preview

### Restored
- `public/assets/9922fc06-mansour-wearing-headphones-…-southern-dunes.jpeg` and
  `public/assets/443507ca-at-earth-lab--raneem-shreds-paper-…-bespoke-painting.jpeg` (1280×853 JPEG),
  used by `/en/media-center/blog/experiencing-the-red-sea-beyond-sight/`. Both were missing from this
  copy (their full paths here exceed 260 characters, so a copy/extract tool likely skipped them) and
  `npm run check` failed with 2 broken assets. Bytes were taken from the previous project copy still
  served on port 4173. Check is back to 0 broken assets.

### Added
- `public/_headers`: sends `X-Robots-Tag: noindex, nofollow, noarchive` on Cloudflare Pages so the
  hosted preview stays out of search engines. No visible change; ignored by the local server.

### Hosting
- Cloudflare Pages project `rsg-recreation-preview` (account ytwing01@gmail.com), production URL
  https://rsg-recreation-preview.pages.dev/en/. Deployed `dist/` (1,693 files). All 185 routes return
  correctly on the live site; noindex header confirmed.

### Validation
- Node v24.15.0; `npm ci` (lockfile versions); `npm run build` (185 routes); `npm run check`
  (0 broken assets, 0 dead hash links, 0 remote-script pages).
- Live site in browser: 1440×900 hover opens "Our Business" dropdown and closes after leaving;
  fonts loaded, 0 broken images, no runtime errors, no horizontal overflow. 390×844 mobile menu
  opens, nested "Our Business" level opens, body scroll locks.

### Known, not changed (pre-existing in the approved baseline)
- Mobile nested menu renders white text on a cream panel (reference: dark navy panel); see
  `implementation-390-nested-menu.jpg` vs `reference-390-nested-menu.jpg`.
- Mobile menu button reports `aria-expanded="false"` after a submenu opens (`clearLevels()` resets it).
- No favicon (browser requests `/favicon.ico` → 404). Unknown URLs on Pages fall back to the homepage
  (no `404.html`).
