---
title: Themes & appearance
lang: en
---

# Themes & appearance

Swagger UI appearance is configured under `module-generator.swagger`.

## Themes

```env
SWAGGER_THEME=vanilla
```

Supported values:

- `vanilla` — bundled dependency-free styling;
- `tailwind` — the bundled Tailwind-oriented UI template;
- `dark` — dark-mode template with configurable behavior.

You can change it through the command as well:

```bash
php artisan swagger:config --theme=dark
php artisan swagger:init --force
```

## Colors

The config exposes primary, primary dark/light, secondary, success, warning, danger, dark, light, border, text and light-text colors.

```env
SWAGGER_COLOR_PRIMARY=#e44332
SWAGGER_COLOR_PRIMARY_DARK=#b93529
SWAGGER_COLOR_SECONDARY=#06b6d4
```

## Fonts

```php
'fonts' => [
    'family' => env('SWAGGER_FONT_FAMILY', 'system-ui, -apple-system, sans-serif'),
    'mono' => env('SWAGGER_FONT_MONO', '"Fira Code", "Courier New", monospace'),
],
```

## Dark mode

```php
'dark_mode' => [
    'enabled' => true,
    'default' => 'auto', // auto, light, dark
    'persist' => true,
],
```

Re-run `swagger:init --force` when you need initialized static UI assets to reflect a template/theme change.
