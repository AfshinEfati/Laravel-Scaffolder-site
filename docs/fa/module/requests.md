---
title: --requests / -r
lang: fa
---

# `--requests` / `-r`

این Option دو Form Request برای Create و Update می‌سازد:

```bash
php artisan make:module Product --requests
```

خروجی پیش‌فرض:

```text
app/Http/Requests/Product/StoreProductRequest.php
app/Http/Requests/Product/UpdateProductRequest.php
```

## Ruleها از کجا می‌آیند؟

اگر Schema در دسترس باشد، Scaffolder از همان اطلاعات برای ساخت Ruleها استفاده می‌کند؛ مثلاً:

- `required` یا `nullable`؛
- نوع داده مثل `string`، `integer` یا `numeric`؛
- `unique`؛
- و `exists` برای Foreign Keyها.

Update Request هم Ruleهای Unique را طوری می‌سازد که رکورد فعلی باعث Conflict نشود.

`--api`، `--all` و `--full` Requestها را خودکار فعال می‌کنند.

::: info
فعلاً Option مستقیمی به نام `--no-requests` وجود ندارد.
:::
