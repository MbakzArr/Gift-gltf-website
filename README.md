# GLTF Website - Cycling for a Change

Static multi-page site for the Gifted Local Talent Foundation. Plain HTML, CSS and JS, no build step. Opens in VS Code and deploys to Netlify as is.

## Structure
```
index.html     Home
story.html     The full story, the ride and the gallery
donate.html    Ways to help, bank details and sponsors
contact.html   Contact details and patrons
css/style.css  All styling (one shared file)
js/main.js     All behaviour and the SITE config block
assets/        Photos, videos and share image
netlify.toml   Tells Netlify to serve the root with no build
```

## The one block you edit for updates
Open `js/main.js`. At the top is `const SITE = { ... }`. Change those values and every page updates.
- `kmCovered` how far Gift has ridden. The road bar on the home page moves with it.
- `lastSeen` the latest town.
- `donateUrl` paste your BackaBuddy or PayFast link. Until you do, Donate buttons go to the donate page.
- `whatsappNo` country code plus number, no plus or spaces.
- `contactEmail` used by the sponsor and email buttons.

## Still to fill in
- Bank details: in `donate.html` search for `BANK DETAILS` and replace the placeholders.
- Social links: in each page footer search for `aria-label="Facebook"` and add the real profile links.
- Share preview: after deploy, replace `REPLACE-WITH-YOUR-SITE.netlify.app` in the `og:url` tag of each page with your real address.

## Run locally in VS Code
Install the "Live Server" extension, right click `index.html`, choose Open with Live Server. Or run `python3 -m http.server` and open `http://localhost:8000`.

## Notes
- The header and footer are repeated in each page on purpose, so the site needs no build tools. If you change a nav link, change it in all four pages.
- Keep new photos under about 400 KB so the site stays fast on mobile data.
- Colours live as variables at the top of `css/style.css` (asphalt, green, gold, cream). Change them in one place.

You have the power to bring happiness.
