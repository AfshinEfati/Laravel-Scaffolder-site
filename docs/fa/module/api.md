---
title: --api
lang: fa
---

# `--api`

اگر می‌خواهی Controller و Flow ماژول برای API ساخته شود، `--api` را بده:

```bash
php artisan make:module Product --api
```

## فقط مسیر Controller عوض نمی‌شود

در پیاده‌سازی فعلی، API Mode سه اثر مهم دارد:

```text
controller type   -> api
form requests     -> enabled
actions           -> enabled مگر با --no-actions
```

مسیر پیش‌فرض Controller هم این است:

```text
app/Http/Controllers/Api/V1/ProductController.php
```

اگر ساختار پروژه‌ات فرق دارد، مسیر را از `config/module-generator.php` تغییر بده.

## مثال واقعی

```bash
php artisan make:module Product --api \
  --fields="name:string:unique,price:decimal(10,2),is_active:boolean"
```

API می‌خواهی ولی Action Layer نه؟

```bash
php artisan make:module Product --api --no-actions
```

::: info
در Signature فعلی `--no-requests` نداریم. وقتی API Mode فعال شود، Form Requestها هم ساخته می‌شوند.
:::

از آنجا که Default فعلی خود پکیج `controller_type=api` است، `--api` بیشتر زمانی به کار می‌آید که Default پروژه را روی `web` گذاشته باشی یا بخواهی Intent دستور کاملاً مشخص باشد.
