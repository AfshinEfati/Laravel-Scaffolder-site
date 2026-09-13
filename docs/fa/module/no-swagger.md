---
title: --no-swagger
lang: fa
---

# `--no-swagger`

Swagger سطح Module را در Generation معمول خاموش کن:

```bash
php artisan make:module Product --no-swagger
```

::: warning اولویت Full Stack
در پیاده‌سازی فعلی `--all/--full` بعداً Swagger را دوباره روشن می‌کند، پس `--all --no-swagger` همچنان خروجی Swagger می‌سازد.
:::

اگر فقط JSON مبتنی بر Route می‌خواهی، [`swagger:generate`](/fa/swagger/generate) مستقل از این قابلیت قابل استفاده است.
