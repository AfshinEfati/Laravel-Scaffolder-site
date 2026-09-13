---
title: --no-swagger
lang: fa
---

# `--no-swagger`

Swagger/OpenAPI مربوط به Flow `make:module` را غیرفعال می‌کند:

```bash
php artisan make:module Product --no-swagger
```

در Build عادی این Option بعد از `--swagger` اعمال می‌شود، بنابراین اگر هر دو باشند، Swagger ساخته نمی‌شود:

```bash
php artisan make:module Product --swagger --no-swagger
```

`--all` و `--full` بعدتر Swagger را دوباره فعال می‌کنند.

این Option روی دستورهای مستقل `swagger:init`، `swagger:generate`، `swagger:ui` و `swagger:config` اثری ندارد.
