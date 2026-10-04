# Pranay Deep Singh — Portfolio

A modular, dependency-free static website. Node.js generates semantic HTML from reusable rendering components and a centralized content file; CSS and browser JavaScript ship as separate assets.

## Run and edit locally

1. Install Node.js 20 or later.
2. Clone this repository or open the project folder in VS Code.
3. Open Terminal → New Terminal.
4. Run `npm run build`, then `npm run check`.
5. Run `npm run dev` and open http://localhost:3000.
6. After edits, rebuild and refresh. Stop the server with Ctrl+C.

No package installation is required. The project uses only built-in Node.js modules.
Edit biography, education, skills, experience and project details in `src/content.js`. Update layout and page composition in `src/page.js`, browser interactions in `src/main.js`, and visual styling in `src/styles/main.css`.

## Project structure

- `src/content.js`: editable profile, projects, skills, experience and education.
- `src/components/render.js`: reusable renderers and HTML escaping.
- `src/page.js`: semantic page layout and section composition.
- `src/styles/main.css`: design tokens, responsive styling and reduced-motion support.
- `src/main.js`: theme, menu and accessible project filtering.
- `public/`: portrait from the supplied CV and site favicon.
- `scripts/`: build, verification and local development server.
- `dist/`: complete deployment-ready website, including separate assets.

## Coding conventions

Use ES modules, descriptive names, camelCase for functions and variables, kebab-case for CSS classes, and consistent two-space JavaScript indentation. Escape content at the HTML boundary. Keep portfolio data separate from presentation and interactions. Use semantic landmarks, labeled controls, keyboard focus states and progressive enhancement: every section is readable when JavaScript is disabled. The project is intentionally static; contact opens an email client rather than pretending to submit a message to a backend.

## Content provenance

Biography, education, certifications, previous internship and portrait were taken from the supplied CV. APRC responsibilities were supplied directly by Pranay. Repository names and primary languages were checked using GitHub's public API on 4 October 2026. Descriptions are conservative summaries, not claims that repository implementations were audited. Code in the project card previews is illustrative decoration, not excerpts from the repositories.

The supplied CV's full residential address, phone number and referee contact information are not included in the site. The downloadable source does not contain the original CV.

The GitHub activity heatmap fetches public contribution data from the GitHub Contributions API when a visitor opens the site. It requires an internet connection, may reflect the provider's refresh delay, and may not include private contributions. If the service is unavailable, the portfolio still links directly to the GitHub profile.

## Publishing elsewhere

Run `npm run build` and deploy the contents of `dist/` to any static host. Use `npm run build` as the build command and `dist` as the output directory. Relative asset URLs allow hosting under a subdirectory, including GitHub Pages. All content is compiled into the page, so search engines and visitors without JavaScript can read it. Rebuild when `src/content.js` changes.

## GitHub Pages deployment

The portfolio is live at [https://misguidedmc.github.io](https://misguidedmc.github.io/). The GitHub Actions workflow in `.github/workflows/pages.yml` builds the site, runs `npm run check`, and deploys only `dist/` to GitHub Pages. Push source changes to the repository's `main` branch to automatically update the website. You can also start a deployment manually from the repository's **Actions** tab using **Deploy portfolio to GitHub Pages**. The project has no package dependencies, so the workflow does not install packages.
