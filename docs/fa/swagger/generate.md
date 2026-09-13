---
title: swagger:generate
lang: fa
---

# `swagger:generate`

از Routeهای API یک OpenAPI 3 JSON تولید می‌کند:

```bash
php artisan swagger:generate
```

تمام Optionها:

```bash
php artisan swagger:generate \
  --output=storage/swagger-ui/swagger.json \
  --title="Store API" \
  --version=2.1.0 \
  --host=https://api.example.com
```

Routeهایی که Middleware `api` دارند یا URI آن‌ها با `api/` شروع می‌شود وارد خروجی می‌شوند. Routeهای سیستمی/Documentation شناخته‌شده حذف می‌شوند و Path Parameter، Pagination Parameterهای GET، Request Body، Responseهای پایه و Bearer Security در صورت وجود Auth ساخته می‌شود.
