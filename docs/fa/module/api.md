---
title: --api
lang: fa
---

# `--api`

این Option تولید Controller را وارد API Mode می‌کند:

```bash
php artisan make:module Product --api
```

## دقیقاً چه چیزی تغییر می‌کند؟

`--api` فقط مسیر Controller را عوض نمی‌کند. در پیاده‌سازی فعلی، API Mode این رفتارها را هم دارد:

```text
controller type   -> api
form requests     -> enabled
actions           -> enabled مگر با --no-actions
```

مسیر پیش‌فرض Controller:

```text
app/Http/Controllers/Api/V1/ProductController.php
```

این مسیر از `config/module-generator.php` قابل تغییر است.

## نمونه

```bash
php artisan make:module Product --api \
  --fields="name:string:unique,price:decimal(10,2),is_active:boolean"
```

برای API بدون Action:

```bash
php artisan make:module Product --api --no-actions
```

::: info
در نسخه فعلی Optionای به نام `--no-requests` وجود ندارد؛ API Mode همیشه Form Requestها را فعال می‌کند.
:::

Config پیش‌فرض خود پکیج `controller_type=api` است، بنابراین `--api` زمانی مهم‌تر می‌شود که پروژه این Default را به `web` تغییر داده باشد یا بخواهید Intent دستور واضح باشد.
