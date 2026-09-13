---
title: swagger:ui
lang: fa
---

# `swagger:ui`

Swagger UI مستقل را با Built-in Server خود PHP اجرا می‌کند:

```bash
php artisan swagger:ui
```

Host و Port سفارشی:

```bash
php artisan swagger:ui --host=127.0.0.1 --port=9000
```

قبل از اجرا JSON را دوباره بساز:

```bash
php artisan swagger:ui --refresh
```

Host فقط می‌تواند `localhost`، `::1` یا IP معتبر باشد و Port باید بین 1 تا 65535 باشد.
