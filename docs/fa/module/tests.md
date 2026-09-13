---
title: --tests / -t
lang: fa
---

# `--tests` / `-t`

Feature Test را به‌صورت صریح فعال می‌کند:

```bash
php artisan make:module Product --tests
```

خروجی پیش‌فرض:

```text
tests/Feature/ProductCrudTest.php
```

Class تولیدشده `ProductCrudTest` است و Schema Metadata برای ساخت CRUD Payload اولیه در آن استفاده می‌شود.

```bash
php artisan test --filter=ProductCrudTest
```

اگر `--no-test` و `--tests` همزمان باشند، `--tests` بعدتر اعمال می‌شود و Test ساخته می‌شود. Full Stack نیز Test را فعال می‌کند.
