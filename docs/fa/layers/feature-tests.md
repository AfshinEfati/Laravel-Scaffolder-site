---
title: Feature Testها
lang: fa
---

# Feature Testها

Generator یک نقطه‌ی شروع واقعی برای تست Endpointهای CRUD می‌سازد و در صورت داشتن Metadata از Schema برای Payload و Assertionها کمک می‌گیرد.

```bash
php artisan make:module Product --tests
php artisan test --filter=ProductTest
```

Test تولیدشده جای تست رفتار Business را نمی‌گیرد؛ Authorization، Edge Caseها و Domain Invariantهای خود پروژه را به آن اضافه کن.
