# Jennifer Zhu — personal research website

A responsive, dependency-free static website designed for GitHub Pages.

## Preview locally

Open `index.html` in a browser, or run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy to https://jengithubb.github.io/

1. Open the GitHub repository **jengithubb/jengithubb.github.io** (create it if it does not yet exist).
2. Back up any existing site source before replacing it.
3. Copy `index.html`, `projects.html`, `cv.html`, `styles.css`, `subpages.css`, `script.js`, and the `assets` folder **to the repository root** (not into an extra `jennifer-portfolio` folder).
4. Commit your changes to the `main` branch.
5. Under **Settings → Pages**, set **Build and deployment → Source** to **Deploy from a branch**, **Branch** to `main`, and **Folder** to `/(root)`, and save.
6. Visit https://jengithubb.github.io/ after GitHub Pages publishes the update.

### Notes

- The site includes a **Projects archive page** and a **printable CV page** so all navigation links work after replacing the old Jekyll site.
- To save a PDF, open `cv.html` and select **Print / Save PDF**. Check your CV details before using it for applications.
- The website includes conceptual SVG/CSS illustrations; none depict actual patients or measured data.
- No email address, LinkedIn profile, publications, or GitHub project URLs have been invented. Add verified links if you want them shown.
- If your existing site deploys using GitHub Actions/Jekyll, switch the Pages source as above or adjust the workflow.
- Back up your existing site before replacing it. If you want to retain old `/cv/` and `/projects/` deep links, add redirect pages or corresponding directories.
