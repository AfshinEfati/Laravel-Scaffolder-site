---
title: Form Requests
lang: en
---

# Form Requests

When enabled, two request classes are generated inside a module-specific request folder:

```text
app/Http/Requests/Product/StoreProductRequest.php
app/Http/Requests/Product/UpdateProductRequest.php
```

```bash
php artisan make:module Product --requests
```

API mode enables them automatically.

## Schema-aware rules

Explicit field metadata produces type-aware validation:

```bash
php artisan make:module Product --fields="email:email:unique,user_id:integer:fk=users.id,total:decimal(12,2)"
```

Rules can include `required`/`nullable`, string length, integer/numeric/boolean/date/array/uuid/email/url validation, uniqueness and foreign `exists` checks.

## Update uniqueness

The update request is built separately and knows the module route parameter/table so generated unique rules can ignore the current record rather than treating its own value as a conflict.

## Table resolution

The request generator prefers an explicitly parsed migration table, then the model table, then Laravel-style plural snake-case inference.
