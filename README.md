# Melvin Ani - Portfolio

Personal site for Melvin Ani, an account manager in cybersecurity sales at FEITIAN Technologies. He sells MFA and FIDO2 hardware on direct and channel deals, and he also does technical discovery and customer success work. The site lists his location as Fremont, CA.

Page copy is limited to his resumes. The Resume button downloads `public/Melvin_Ani_Resume.pdf`. That file lists Fremont, CA and does not include a phone number or street address.

This is a [Create React App](https://create-react-app.dev/) project, the same stack as [sydneyani/My-Portfolio](https://github.com/sydneyani/My-Portfolio). It is a single page with in-page links. `homepage` is set to `.` so asset paths stay relative. That lets one build run at a host root (Render) or under a GitHub Pages project path.

## Prerequisites

- Node.js 20 or 22
- npm

## Install

```bash
npm install
```

## Run locally

```bash
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

The static bundle is written to `build/`. That directory is gitignored, along with `node_modules/` and local env files. Do not commit secrets.

## Tests

```bash
CI=true npm test -- --watchAll=false
```

## Deploy on Render

Same hosting pattern as the reference portfolio: a static site served from the build root.

1. Create a Render Static Site pointed at this repository.
2. Build command: `npm run build`
3. Publish directory: `build`
4. Node version: 20

Render serves `build/` from the site root. No extra base path is required.

## Deploy on GitHub Pages

This repo includes `.github/workflows/pages.yml`. The workflow uses Node 22, runs `npm ci`, builds with `npm run build`, and deploys `build/` with GitHub Actions. The build step sets `CI=false` so ESLint warnings do not fail the Pages deploy. `typescript` is pinned to 4.9.5 so `npm ci` accepts the lockfile on the npm versions shipped with Node 20 and 22.

Enable Pages once:

1. Open the repository on GitHub.
2. Go to **Settings**, then **Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.

After that, a push to `main` runs the workflow. You can also run it by hand: **Actions**, **Deploy GitHub Pages**, **Run workflow**.

For this repository the project site URL is:

[https://melvinani-pro.github.io/My-Portfolio/](https://melvinani-pro.github.io/My-Portfolio/)

The first successful deploy can take a minute. If the Pages source is still set to "Deploy from a branch", switch it to GitHub Actions or the workflow's deploy job will not publish.
