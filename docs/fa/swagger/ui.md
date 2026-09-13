---
title: swagger:ui
lang: fa
---

# `swagger:ui`

Swagger UI آماده‌شده را بدون وابستگی به پکیج Swagger خارجی Serve می‌کند:

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

```bash
php artisan swagger:ui --refresh
```

`--refresh` ابتدا `swagger:generate` را اجرا می‌کند و اگر Generation شکست بخورد، Server شروع نمی‌شود.

```bash
php artisan swagger:ui --host=127.0.0.1 --port=8085
```

اگر Optionها روی Default خود بمانند، مقادیر `swagger.server.host` و `swagger.server.port` از Config استفاده می‌شوند.

Host و Port قبل از اجرای Process اعتبارسنجی می‌شوند. در پیاده‌سازی فعلی `localhost`، IP معتبر و `::1` قابل قبول‌اند.

Command Process معادل زیر را اجرا می‌کند:

```bash
php -S host:port -t storage/swagger-ui
```

::: warning
قبل از این دستور باید حداقل یک بار `php artisan swagger:init` اجرا شده باشد.
:::
