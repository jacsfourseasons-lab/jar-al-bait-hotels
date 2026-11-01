# Red Sea Global reference recreation

Editable static multipage website with shared HTML components, JavaScript modules and Swiper. The source preserves the accessible reference component layouts and CSS; behavior is implemented locally. No iframe of the reference website, analytics IDs or production submission scripts are used.

## Run

Requires Node.js 20 or later. From this folder:

```powershell
npm ci
npm run dev
```

Open http://127.0.0.1:4173/en/. Development builds once, watches source/ and public/, and rebuilds on changes. Reload the browser after a rebuild.

Production:

```powershell
npm run build
npm run preview
```

Serve dist/ with directory-index support. `npm run check` checks local links, assets and production script exclusions after a build.

## Hosted preview

Client preview: https://rsg-recreation-preview.pages.dev/en/ (Cloudflare Pages, noindex via `public/_headers`). To publish updates, run `npm run build` and then deploy `dist/` with Wrangler 3 from outside this folder, so Wrangler 4's auto-configuration doesn't rewrite package.json:

```powershell
npx wrangler@3 pages deploy "<path-to>\red-sea-global\dist" --project-name rsg-recreation-preview --branch main
```

## Files

- source/components/: shared header and footer.
- source/pages/: independently editable page layouts and content; source filenames are identifiers, while routes.json controls public routes.
- public/: local behavior modules, styles, integrations and assets.
- routes.json and route-inventory.csv: source URL, local route, type, status and verification.
- asset-manifest.json / .csv: original URLs, local paths, component use, optimization and replacements.
- asset-limitations.json: precise original-file gaps and fallbacks.
- REFERENCE-AUDIT.md and interaction-inventory.csv: evidence, dimensions and interaction notes.
- comparisons.html: all paired reference/local captures. comparison-desktop.jpg and comparison-mobile.jpg are quick previews.
- browser-checks.json, responsive-checks.json, template-browser-checks.json, http-route-checks.json and verification.json: actual verification outputs.

## Forms, search and map

Edit public/config.js to set `formEndpoint` to a project-owned HTTPS adapter that accepts JSON POSTs and returns a successful HTTP status. Leave it null for the explicit demo; no submission leaves the page. `demoFailure: true` exercises the error/retry UI; the delivered default is false. Connect authentication and anti-abuse controls on your own backend if needed.

Search is generated from local page titles, descriptions and body content at build time. It leads to valid local routes and requires no remote service. The map uses local vector geometry and needs no key; replace public/maps.js with a project-owned provider integration to match the original tile styling/fly-to behavior.

## Completion and limits

The complete homepage, 185 indexed routes/redirects/external gateways, local search, menus, hero and carousels, expandable content, destination selection, profiles, tabs, sorting, and demo forms are implemented. The archive is a snapshot of captured items, not all 46 historical pages. Forms are demos, original Arabic pages and hosted stories/services remain external, and some source videos/thumbnails were unavailable. Read REFERENCE-AUDIT.md before treating the build as a finished fidelity match.

Acquisition/repair scripts were used during this task and refer to scratch reference evidence outside the source package. They are not needed to install, edit, develop, test or build the delivered project.
