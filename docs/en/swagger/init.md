---
title: swagger:init
lang: en
---

# `swagger:init`

Initialize the standalone Swagger UI assets in `storage/swagger-ui`:

```bash
php artisan swagger:init
```

Overwrite existing UI assets when changing themes or templates:

```bash
php artisan swagger:init --force
```

The command preserves an already generated `swagger.json` instead of replacing it with the bundled example. It also applies the configured `vanilla`, `tailwind` or `dark` theme and creates an `.htaccess` file for static routing.
