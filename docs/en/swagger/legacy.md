---
title: Legacy make:swagger
lang: en
---

# Legacy `make:swagger`

`make:swagger` is retained for compatibility but is marked **deprecated** in the package source. New integrations should prefer `swagger:generate`.

```bash
php artisan swagger:generate
```

## Legacy signature

```text
make:swagger
  --path=
  --controller=
  --force | -f
  --output=
```

The legacy command scans routes, can filter by path prefix or controller namespace, groups routes by controller and writes annotation-oriented PHP documentation files. Its default output directory is `app/Docs`.

Examples:

```bash
php artisan make:swagger --path=api/v1
```

```bash
php artisan make:swagger \
  --controller="App\\Http\\Controllers\\Api" \
  --output=app/Docs \
  --force
```

## Which command should you use?

Use the modern workflow for new projects:

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```

Only use `make:swagger` when maintaining an application that still depends on the legacy annotation-file workflow.
