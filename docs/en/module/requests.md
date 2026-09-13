---
title: --requests / -r
lang: en
---

# `--requests` / `-r`

Generate separate Store and Update Form Request classes.

```bash
php artisan make:module Product --requests
```

Short form:

```bash
php artisan make:module Product -r
```

Typical output:

```text
app/Http/Requests/StoreProductRequest.php
app/Http/Requests/UpdateProductRequest.php
```

## Schema-aware validation

Request rules are generated from discovered schema metadata. For example:

```bash
php artisan make:module Product --requests \
  --fields="name:string:unique,price:decimal(10,2),category_id:integer:fk=categories.id"
```

can produce rules conceptually similar to:

```php
return [
    'name' => ['required', 'string', 'unique:products,name'],
    'price' => ['required', 'numeric'],
    'category_id' => ['required', 'integer', 'exists:categories,id'],
];
```

Update rules are generated separately so uniqueness can account for the current model where the generator has enough metadata.

## API mode

`--api` always enables Form Requests. The same is true for `--all` / `--full` because full-stack generation switches the module to API mode.

```bash
php artisan make:module Product --api
```

So in API mode you do not need to add `--requests` explicitly.

::: info
There is no `--no-requests` option in the current command signature. If you want requests disabled by default, use a web controller default and set `defaults.with_form_requests` to `false`.
:::
