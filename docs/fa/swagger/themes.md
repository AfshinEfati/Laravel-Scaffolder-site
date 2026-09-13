---
title: Theme و ظاهر
lang: fa
---

# Theme و ظاهر Swagger UI

ظاهر Swagger UI از `module-generator.swagger` کنترل می‌شود.

```env
SWAGGER_THEME=vanilla
```

Themeهای موجود:

- `vanilla`
- `tailwind`
- `dark`

```bash
php artisan swagger:config --theme=dark
php artisan swagger:init --force
```

Config برای Primary، Primary Dark/Light، Secondary، Success، Warning، Danger، Border و Text رنگ مستقل دارد.

```env
SWAGGER_COLOR_PRIMARY=#e44332
SWAGGER_COLOR_PRIMARY_DARK=#b93529
SWAGGER_COLOR_SECONDARY=#06b6d4
```

Fontها:

```php
'fonts' => [
    'family' => env('SWAGGER_FONT_FAMILY', 'system-ui, -apple-system, sans-serif'),
    'mono' => env('SWAGGER_FONT_MONO', '"Fira Code", "Courier New", monospace'),
],
```

Dark Mode:

```php
'dark_mode' => [
    'enabled' => true,
    'default' => 'auto',
    'persist' => true,
],
```
