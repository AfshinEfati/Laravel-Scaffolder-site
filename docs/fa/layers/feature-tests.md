---
title: Feature Testها
lang: fa
---

# Feature Testها

Test Generator برای هر ماژول یک CRUD Feature Test می‌سازد:

```text
tests/Feature/ProductCrudTest.php
```

نام Class هم `ProductCrudTest` است.

## Payload تست از روی حدس خالی ساخته نمی‌شود

Scaffolder Field Metadata را برای نوع‌هایی مثل Boolean، Integer/FK، Numeric، JSON، Date و UUID Normalize می‌کند و از آن برای ساخت Payloadهای اولیه‌ی تست استفاده می‌کند.

اگر Controller داخل Subfolder باشد، Test Generator همان ساختار را در نظر می‌گیرد تا Route/Controller مورد تست درست Resolve شود.

برای اجرای تست:

```bash
php artisan test --filter=ProductCrudTest
```

Root مسیر تست‌ها از `tests.feature` در Config می‌آید.

::: warning نقطه شروع، نه پوشش کامل
Test تولیدشده قرار نیست تمام رفتار Business را پوشش بدهد. سناریوهای Authorization، Validation Failure، Domain Ruleها و Integrationهای واقعی پروژه را خودت به آن اضافه کن.
:::
