---
title: Swagger themes
lang: en
---

# Themes and appearance

Three bundled UI themes are supported:

```env
SWAGGER_THEME=vanilla
# or tailwind
# or dark
```

After changing the theme, reinitialize the assets:

```bash
php artisan swagger:init --force
```

Colors and fonts are configurable:

```env
SWAGGER_COLOR_PRIMARY=#3b82f6
SWAGGER_COLOR_PRIMARY_DARK=#1e40af
SWAGGER_COLOR_PRIMARY_LIGHT=#eff6ff
SWAGGER_COLOR_SECONDARY=#06b6d4
SWAGGER_FONT_FAMILY="system-ui, sans-serif"
SWAGGER_FONT_MONO="Fira Code, monospace"
```

Dark mode also supports enabled/default/persist behavior through configuration.
