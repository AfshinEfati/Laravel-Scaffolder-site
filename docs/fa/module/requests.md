---
title: --requests / -r
lang: fa
---

# `--requests` / `-r`

برای ماژول، Form Request جداگانه‌ی Store و Update تولید می‌کند:

```bash
php artisan make:module Product --requests
```

خروجی معمول:

```text
app/Http/Requests/StoreProductRequest.php
app/Http/Requests/UpdateProductRequest.php
```

## Validation بر اساس Schema

Ruleها از Metadata فیلدها استخراج می‌شوند:

```bash
php artisan make:module Product --requests \
  --fields="name:string:unique,price:decimal(10,2),category_id:integer:fk=categories.id"
```

نمونه‌ی Rule حاصل می‌تواند به این شکل باشد:

```php
return [
    'name' => ['required', 'string', 'unique:products,name'],
    'price' => ['required', 'numeric'],
    'category_id' => ['required', 'integer', 'exists:categories,id'],
];
```

## ارتباط با API Mode

`--api` به‌صورت خودکار Requestها را فعال می‌کند؛ `--all` و `--full` نیز Request را روشن می‌کنند.

::: info
در Signature فعلی `--no-requests` نداریم.
:::
