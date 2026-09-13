---
title: فهرست دستورات
lang: fa
---

# فهرست دستورات

| دستور | کاربرد |
| --- | --- |
| `make:module {name}` | ساخت Stack لایه‌ای Feature |
| `swagger:init` | آماده‌سازی Swagger UI مستقل |
| `swagger:generate` | ساخت OpenAPI JSON از Routeها |
| `swagger:ui` | اجرای Swagger UI مستقل |
| `swagger:config` | دیدن/تغییر تنظیمات Swagger |
| `make:swagger` | Route Scanner قدیمی و Deprecated |

نمونه:

```bash
php artisan make:module Product --all
php artisan swagger:init
php artisan swagger:generate --title="Store API"
php artisan swagger:ui --refresh
```
