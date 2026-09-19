# Laravel Scaffolder website

The bilingual product website and documentation for [Laravel Scaffolder](https://github.com/AfshinEfati/Laravel-Scaffolder).

## Website

This repository is deployed with GitHub Actions to GitHub Pages. When Pages is configured with its default project URL, the website lives at:

- [Product homepage](https://afshinefati.github.io/Laravel-Scaffolder-site/)
- [English documentation](https://afshinefati.github.io/Laravel-Scaffolder-site/#/en/introduction)
- [مستندات فارسی](https://afshinefati.github.io/Laravel-Scaffolder-site/#/fa/introduction)

The `/en/` and `/fa/` paths are static redirects to the corresponding documentation hash routes, retained for legacy links. If GitHub Pages uses a custom domain or a different base URL, use the deployment URL shown by the `Deploy documentation` GitHub Actions workflow instead.

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

This is a Vue 3 + Vite static website. `src/SiteRoot.vue` owns the landing page and routes to `src/App.vue`, which contains the existing bilingual documentation. The terminal examples on the landing page are copyable snippets, not an executable PHP sandbox.

## Content and source of truth

Validate all package features, Artisan flags, supported versions, and PHP examples against the current [package repository](https://github.com/AfshinEfati/Laravel-Scaffolder) before editing site copy. In particular, `--api` and `--all` select different generation modes, `--fields` allows an inline schema, and `swagger:generate` is the preferred standalone JSON generation command. Generated code is a starting point that application developers should review and customize.

## Deployment

Every push to `main` starts `.github/workflows/deploy.yml`. The workflow runs `npm install`, builds the Vite site, and deploys `dist` to GitHub Pages. Check the workflow result and the Pages deployment URL after content or layout changes.
