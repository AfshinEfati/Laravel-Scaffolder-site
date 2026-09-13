---
title: --requests / -r
lang: en
---

# `--requests` / `-r`

Generate separate Store and Update Form Request classes in a module-specific folder.

```bash
php artisan make:module Product --requests
```

Short form:

```bash
php artisan make:module Product -r
```

Output:

```text
app/Http/Requests/Product/StoreProductRequest.php
app/Http/Requests/Product/UpdateProductRequest.php
```

## Schema-aware validation

```bash
php artisan make:module Product --requests \
  --fields="name:string:unique,price:decimal(10,2),category_id:integer:fk=categories.id"
```

can generate rules based on required/nullable, canonical type, uniqueness and foreign references. Update rules are generated separately and can ignore the current route-bound record for uniqueness.

## API mode

`--api` always enables Form Requests. `--all` / `--full` also enable them.

::: info
There is no `--no-requests` option in the current command signature.
:::
