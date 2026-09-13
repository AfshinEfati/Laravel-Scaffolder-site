---
title: swagger:init
lang: fa
---

# `swagger:init`

Swagger UI مستقل پکیج را Initialize می‌کند:

```bash
php artisan swagger:init
```

Signature:

```text
swagger:init
  --force
```

Command در صورت نیاز `storage/swagger-ui` را می‌سازد، فایل‌های UI داخلی را کپی می‌کند، Theme تنظیم‌شده را اعمال می‌کند و `.htaccess` لازم را ایجاد می‌کند.

فایل موجود بدون `--force` جایگزین نمی‌شود. اگر `swagger.json` واقعی وجود داشته باشد، Example داخلی پکیج روی آن نوشته نمی‌شود.

```bash
php artisan swagger:init --force
```

Theme از این Config می‌آید:

```php
config('module-generator.swagger.theme', 'vanilla')
```

مقادیر موجود: `vanilla`، `tailwind` و `dark`.

بعد از Initialize:

```bash
php artisan swagger:generate
php artisan swagger:ui
```
