---
title: --tests / -t
lang: fa
---

# `--tests` / `-t`

برای اینکه Feature Test ماژول صریحاً ساخته شود:

```bash
php artisan make:module Product --tests
```

خروجی پیش‌فرض:

```text
tests/Feature/ProductCrudTest.php
```

Test Generator از Schema Metadata استفاده می‌کند تا Payload اولیه‌ی CRUD را متناسب با فیلدهای همان ماژول بسازد.

برای اجرای همان تست:

```bash
php artisan test --filter=ProductCrudTest
```

## precedence

اگر هم `--no-test` و هم `--tests` را بدهی، `--tests` بعدتر اعمال می‌شود و Test ساخته خواهد شد. `--all` و `--full` هم Test را دوباره فعال می‌کنند.
