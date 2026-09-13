---
title: OpenAPI و Swagger
lang: fa
---

# OpenAPI / Swagger

دو مسیر مرتبط برای Documentation API وجود دارد:

1. Annotation سطح Module با `make:module --swagger`.
2. JSON و UI مستقل با `swagger:generate`، `swagger:init` و `swagger:ui`.

مسیر دوم به L5-Swagger وابسته نیست:

```bash
php artisan swagger:init
php artisan swagger:generate --title="My API" --version=1.0.0
php artisan swagger:ui
```

تنظیمات زیر `module-generator.swagger` قرار دارند و بسیاری از آن‌ها ENV معادل دارند.
