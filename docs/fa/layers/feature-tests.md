---
title: Feature Testها
lang: fa
---

# Feature Testها

Test Generator یک CRUD Feature Test می‌سازد:

```text
tests/Feature/ProductCrudTest.php
```

نام Class نیز `ProductCrudTest` است.

Field Metadata برای Boolean، Integer/FK، Numeric، JSON، Date و UUID Normalize و داخل Test Scaffold استفاده می‌شود تا Payloadها متناسب با Schema باشند.

Controller Subfolder هم در Namespace تست لحاظ می‌شود.

```bash
php artisan test --filter=ProductCrudTest
```

مسیر Root از `tests.feature` در Config می‌آید.

::: warning
Test تولیدی نقطه شروع است؛ Authorization، Validation Failure، Domain Invariant و Integration Caseهای پروژه را خودتان اضافه کنید.
:::
