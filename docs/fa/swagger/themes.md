---
title: Theme و ظاهر Swagger
lang: fa
---

# Theme و ظاهر

سه Theme داخلی وجود دارد:

```env
SWAGGER_THEME=vanilla
# یا tailwind
# یا dark
```

بعد از تغییر Theme:

```bash
php artisan swagger:init --force
```

رنگ و Font نیز قابل تنظیم‌اند:

```env
SWAGGER_COLOR_PRIMARY=#3b82f6
SWAGGER_COLOR_PRIMARY_DARK=#1e40af
SWAGGER_COLOR_PRIMARY_LIGHT=#eff6ff
SWAGGER_COLOR_SECONDARY=#06b6d4
SWAGGER_FONT_FAMILY="system-ui, sans-serif"
SWAGGER_FONT_MONO="Fira Code, monospace"
```

Dark Mode نیز Enabled/Default/Persist مستقل دارد.
