# Reference audit — 22 October 2026

Source: https://www.redseaglobal.com/en/ and its rendered English links. The accessible homepage matched the brief’s section sequence. Raw HTML downloads encountered Cloudflare; the browser DOM, public stylesheet and browser/HTTP asset downloads supplied the evidence.

## Homepage order

1. Centered logo header and navigation
2. Three-slide full-height hero
3. Company introduction with expandable copy
4. Capability introduction and four photographic business panels
5. News introduction and carousel
6. Destination map and three destination cards
7. Positive impact and two image features
8. Two residences on cream
9. Three impact statistics
10. Social backdrop and 16 captured posts
11. Contact invitation
12. Overlapping newsletter and multi-column footer

## Measurements and assets

- Heading: actual Questa Grande Regular; interface/body: actual Paralucent, including Medium declared as weight 400. Real font files are local.
- Hero: viewport height, desktop 64/72px and mobile 48/52px; text cap 600px. Main headings 48/52px, card headings 32/36px.
- Main desktop content width 1200px; centered gutters change with the viewport. The original per-component CSS and breakpoints at 768, 1024 and 1440px are retained.
- Main colors: #75613D, #8A734D, #0A1D2D, #04253C, #FAF7F2, #F2EFE8, #111314, #595E61 and #006F9C.
- Desktop business panels: four adjoining photographs, 480px tall; news card 592×444px at 1440px, with 16px card separation. Impact variant uses 380×570px cards.
- Original logo variants, photography, social images, SVGs and fonts were acquired. 124 large originals were resized to at most 2400px and encoded as WebP quality 95; the original hashes and processing are in the manifest. Source identity, aspect ratios and CSS crops are retained.
- Reference CSS supplies component-specific radii, gradients, overlays and hover treatments. Local CSS overrides are in public/app.css.

## Navigation and route scope

The initial homepage navigation/CTA/footer inventory contained 60 distinct English paths. Additional visible award, article, partnership, community and report links expanded the inventory to 185 routes: {"implemented":168,"external-service":1,"redirect":10,"external-microsite":6}. See route-inventory.csv for every URL and status. Legacy redirects were followed in the browser, then recorded as local redirects. One source article URL is misspelled and returns 404; its valid local article is used. One English experience link returns Arabic; the local link points to its existing English subsidiary page.

The media archive exposes 46 pages. Current captured items and their linked detail layouts are included; historical pagination deliberately opens the original archive, with a descriptive external-link title. This is not a complete historical archive. Separately hosted stories and the OneTrust privacy service remain explicit external destinations; no reference page is embedded as a site replica. Arabic is intentionally external, not a completed translation.

## Verification evidence

Hero pairs exist at 1440×900, 1920×1080, 768×1024 and 390×844, with the same static second slide and scroll position zero. hero-capture-evidence.json records dimensions and hit positions. Paired section screenshots cover the entire homepage through the newsletter/footer. The browser could not produce a single full-page capture; section captures were used instead.

At 1440px, the measured homepage heading anchors matched the reference’s document positions. A 24px mobile discrepancy came from missing business-pagination marks; adding the actual control restored the measured news, destination, impact, residences, statistics and social heading positions to the reference values. This does not establish perfect pixel fidelity.

Sixteen representative templates were checked directly on desktop, seven on mobile. Eight widths, including 767/768, 1023/1024 and 1439/1440, showed no horizontal overflow or recorded runtime errors. Per-route visual verification remains limited to these representatives; static links/assets and direct HTTP checks cover every indexed route.

## Remaining differences

- The local map uses a real Natural Earth coastline, destination selection, pan and zoom. Mapbox tiles, labels, fly-to behavior and exact map styling are not reproduced.
- 21 original video URLs could not be downloaded. Their locations and same-page still fallbacks are listed in asset-limitations.json; unavailable playback controls are disabled. The homepage hero video is local and works.
- 16 unavailable legacy thumbnail URLs use explicit placeholders. Accessible renditions of identically named original images were used elsewhere and recorded individually.
- Historical archive pagination and separately hosted interactive stories/services remain external.
- Newsletter/contact forms are configurable demos, with explicit feedback; no company production endpoint or analytics is used.
- Fine animation timing, pointer hover states and every internal page’s full scroll sequence have not all received independent visual comparison.
