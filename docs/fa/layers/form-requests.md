---
title: Form Requestها
lang: fa
---

# Form Requestها

Requestها داخل پوشه مخصوص همان ماژول ساخته می‌شوند:

```text
app/Http/Requests/Product/StoreProductRequest.php
app/Http/Requests/Product/UpdateProductRequest.php
```

```bash
php artisan make:module Product --requests
```

API Mode آنها را خودکار فعال می‌کند.

## Rule بر اساس Schema

```bash
php artisan make:module Product \
  --fields="email:email:unique,user_id:integer:fk=users.id,total:decimal(12,2)"
```

می‌تواند Required/Nullable، Type Rule، Unique و `exists` برای Foreign Key تولید کند.

Update Request جدا ساخته می‌شود و Route Parameter/Table را می‌شناسد تا Unique Rule بتواند Record فعلی را Ignore کند.

Table از Migration صریح، Table مدل یا Naming Convention لاراول Resolve می‌شود.
