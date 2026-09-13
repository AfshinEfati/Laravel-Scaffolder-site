---
title: swagger:ui
lang: en
---

# `swagger:ui`

Run the standalone Swagger UI using PHP's built-in server:

```bash
php artisan swagger:ui
```

Change host or port:

```bash
php artisan swagger:ui --host=127.0.0.1 --port=9000
```

Regenerate `swagger.json` before serving:

```bash
php artisan swagger:ui --refresh
```

Only `localhost`, `::1` and valid IP addresses are accepted as hosts, and the port must be between 1 and 65535.
