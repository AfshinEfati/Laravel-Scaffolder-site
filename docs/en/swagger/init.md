---
title: swagger:init
lang: en
---

# `swagger:init`

Initialize the bundled standalone Swagger UI.

```bash
php artisan swagger:init
```

Signature:

```text
swagger:init
  --force
```

The command creates `storage/swagger-ui` when necessary, copies the bundled UI files, applies the configured theme and creates an `.htaccess` file for static routing.

## Safe initialization

Existing files are preserved unless `--force` is used. There is one additional protection: if a real `swagger.json` already exists, initialization does not replace it with the bundled example specification.

```bash
php artisan swagger:init --force
```

Use `--force` when you intentionally want the UI assets refreshed.

## Theme selection

The selected theme comes from:

```php
config('module-generator.swagger.theme', 'vanilla')
```

Supported bundled choices are `vanilla`, `tailwind` and `dark`.

After initialization:

```bash
php artisan swagger:generate
php artisan swagger:ui
```
