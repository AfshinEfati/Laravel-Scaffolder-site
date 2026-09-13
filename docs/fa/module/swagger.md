---
title: --swagger
lang: fa
---

# `--swagger` / `-sg`

برای ساخت مستندات OpenAPI سطح Module:

```bash
php artisan make:module Product --swagger
```

اگر Swagger همراه با تولید معمول Module درخواست شود، Controller به حالت API می‌رود.

یک رفتار خاص هم وجود دارد: وقتی `--swagger` تنها Flag تولیدی باشد، Command فقط Doc مربوط به Swagger را می‌سازد و Controller، Resource، DTO، Provider، Action، Policy، Test و Request را Skip می‌کند.

برای تولید JSON از Routeها، [`swagger:generate`](/fa/swagger/generate) را ببین.
