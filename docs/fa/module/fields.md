---
title: --fields
lang: fa
---

# `--fields`

با `--fields` می‌توانی Schema را مستقیم در Command تعریف کنی؛ حتی اگر Model هنوز وجود نداشته باشد.

```bash
php artisan make:module Product --api \
  --fields="name:string:unique,price:decimal(10,2),metadata:json:nullable,user_id:integer:fk=users.id"
```

ساختار هر فیلد:

```text
name:type[:modifier[:modifier...]]
```

Modifierهای اصلی شامل `nullable`، `required`، `unique` و Foreign Key مثل `fk=users.id` هستند.

Parser کامای داخل Parenthesis را می‌شناسد؛ بنابراین `decimal(10,2)` یک Type واحد باقی می‌ماند.
