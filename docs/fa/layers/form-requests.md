---
title: Form Requestها
lang: fa
---

# Form Requestها

برای هر ماژول دو Request جدا ساخته می‌شود:

```text
app/Http/Requests/Product/StoreProductRequest.php
app/Http/Requests/Product/UpdateProductRequest.php
```

می‌توانی آن‌ها را مستقیم با `--requests` فعال کنی:

```bash
php artisan make:module Product --requests
```

API Mode هم Requestها را خودکار روشن می‌کند.

## Validation از روی Schema

مثلاً با این Schema:

```bash
php artisan make:module Product \
  --fields="email:email:unique,user_id:integer:fk=users.id,total:decimal(12,2)"
```

Generator می‌تواند Ruleهای `required`/`nullable`، نوع داده، `unique` و `exists` برای Foreign Key را بسازد.

## Store و Update یکی نیستند

Update Request جدا تولید می‌شود و Route Parameter و Table را می‌شناسد تا Unique Rule رکورد فعلی را نادیده بگیرد.

Table هم به‌ترتیب از اطلاعات Migration، خود Model یا Naming Convention لاراول Resolve می‌شود.

این Ruleها نقطه‌ی شروع خوبی هستند، ولی Validationهای Domain-specific مثل شرط‌های وابسته به وضعیت یا User را باید خودت اضافه کنی.
