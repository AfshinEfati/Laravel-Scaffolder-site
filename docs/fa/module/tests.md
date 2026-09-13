---
title: --tests / -t
lang: fa
---

# `--tests` / `-t`

Feature Test را برای ماژول به‌صورت صریح فعال می‌کند:

```bash
php artisan make:module Product --tests
```

مسیر پیش‌فرض از Config می‌آید:

```php
'tests' => [
    'feature' => 'tests/Feature',
],
```

بنابراین خروجی معمول:

```text
tests/Feature/ProductTest.php
```

Test Generator اطلاعات Fieldها را نیز دریافت می‌کند تا Payload و Assertion اولیه از Schema قابل استفاده‌تری ساخته شود.

```bash
php artisan test --filter=ProductTest
```

## اولویت با `--no-test`

`--tests` بعد از `--no-test` بررسی می‌شود؛ اگر هر دو را بدهید، Test ساخته می‌شود:

```bash
php artisan make:module Product --no-test --tests
```

`--all` و `--full` نیز Test را فعال می‌کنند.
