---
title: Theme و ظاهر
lang: fa
---

# Theme و ظاهر Swagger UI

ظاهر UI از بخش `module-generator.swagger` کنترل می‌شود.

## Theme

```env
SWAGGER_THEME=vanilla
```

Themeهای فعلی:

```text
vanilla
tailwind
dark
```

بعد از عوض کردن Theme، فایل‌های UI را دوباره Init کن:

```bash
php artisan swagger:config --theme=dark
php artisan swagger:init --force
```

## رنگ‌ها

برای بخش‌های مختلف UI متغیر جدا وجود دارد؛ از جمله Primary، Secondary، Success، Warning، Danger، Border و Text.

```env
SWAGGER_COLOR_PRIMARY=#e44332
SWAGGER_COLOR_PRIMARY_DARK=#b93529
SWAGGER_COLOR_SECONDARY=#06b6d4
```

## Font

```php
'fonts' => [
    'family' => env('SWAGGER_FONT_FAMILY', 'system-ui, -apple-system, sans-serif'),
    'mono' => env('SWAGGER_FONT_MONO', '"Fira Code", "Courier New", monospace'),
],
```

اگر UI را با Design System پروژه هماهنگ می‌کنی، این دو مقدار نقطه شروع خوبی هستند.

## Dark Mode

```php
'dark_mode' => [
    'enabled' => env('SWAGGER_DARK_MODE_ENABLED', true),
    'default' => env('SWAGGER_DARK_MODE_DEFAULT', 'auto'),
    'persist' => env('SWAGGER_DARK_MODE_PERSIST', true),
],
```

`default` می‌تواند `auto`، `light` یا `dark` باشد. `persist` هم مشخص می‌کند انتخاب کاربر بین بازدیدها نگه داشته شود یا نه.
