---
title: swagger:init
lang: fa
---

# `swagger:init`

قبل از اینکه Swagger UI را اجرا کنی، باید فایل‌های UI داخل پروژه آماده شوند:

```bash
php artisan swagger:init
```

Signature:

```text
swagger:init
  --force
```

## این دستور دقیقاً چه می‌کند؟

در صورت نیاز پوشه‌ی زیر را می‌سازد:

```text
storage/swagger-ui/
```

بعد فایل‌های UI داخلی پکیج را کپی می‌کند، Theme فعلی را اعمال می‌کند و `.htaccess` لازم را هم می‌سازد.

اگر فایل از قبل وجود داشته باشد، بدون `--force` روی آن نوشته نمی‌شود. یک نکته‌ی مهم هم این است که اگر `swagger.json` واقعی داشته باشی، Example داخلی پکیج جای آن را نمی‌گیرد.

## اگر Theme را عوض کردی

مثلاً:

```bash
php artisan swagger:config --theme=dark
php artisan swagger:init --force
```

`--force` باعث می‌شود فایل‌های UI با Theme جدید دوباره آماده شوند.

Theme از این Config خوانده می‌شود:

```php
config('module-generator.swagger.theme', 'vanilla')
```

مقادیر فعلی:

```text
vanilla
tailwind
dark
```

بعد از Init معمولاً مرحله‌ی بعد این است:

```bash
php artisan swagger:generate
php artisan swagger:ui
```
