---
title: swagger:ui
lang: fa
---

# `swagger:ui`

بعد از `swagger:init` می‌توانی Swagger UI را با یک سرور سبک محلی اجرا کنی:

```bash
php artisan swagger:ui
```

Signature:

```text
swagger:ui
  --port=8000
  --host=localhost
  --refresh
```

## سریع‌ترین حالت

اگر می‌خواهی قبل از بالا آمدن UI، Spec هم دوباره ساخته شود:

```bash
php artisan swagger:ui --refresh
```

`--refresh` اول `swagger:generate` را اجرا می‌کند. اگر Generation خطا بدهد، Server شروع نمی‌شود و با Spec قدیمی ادامه نمی‌دهد.

## Host و Port

مثلاً:

```bash
php artisan swagger:ui --host=127.0.0.1 --port=8085
```

اگر Optionها را روی مقدار Default رها کنی، `swagger.server.host` و `swagger.server.port` از Config خوانده می‌شوند.

در پیاده‌سازی فعلی Host باید `localhost`، `::1` یا یک IP معتبر باشد و Port هم قبل از اجرای Process بررسی می‌شود.

در نهایت Command چیزی معادل این را اجرا می‌کند:

```bash
php -S host:port -t storage/swagger-ui
```

::: warning
اگر `storage/swagger-ui` هنوز ساخته نشده، اول `php artisan swagger:init` را اجرا کن.
:::

برای Production معمولاً بهتر است Docs را از Routeهای خود Application یا Web Server اصلی Serve کنی، نه با PHP Built-in Server.
