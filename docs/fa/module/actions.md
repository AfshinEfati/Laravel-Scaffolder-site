---
title: --actions
lang: fa
---

# `--actions`

Actionهای مجزا برای عملیات CRUD بساز:

```bash
php artisan make:module Product --actions
```

خروجی معمول شامل List، Show، Create، Update و Delete Action است و در مسیر تنظیم‌شده‌ی `Actions` قرار می‌گیرد.

Actionها بین Controller و Service قرار می‌گیرند تا Controller نازک بماند و هر Use Case کلاس مشخص خودش را داشته باشد.

در API mode این لایه خودکار فعال می‌شود مگر `--no-actions` بدهی.
