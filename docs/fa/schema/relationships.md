---
title: Relationها
lang: fa
---

# تشخیص Relationها

Relation Metadata کنار Fieldها نگه داشته می‌شود تا Resource، Action، Swagger و Generatorهای دیگر در صورت امکان خروجی Relation-aware بسازند.

## Foreign Key صریح

```bash
php artisan make:module Post \
  --fields="title:string,user_id:integer:fk=users.id"
```

Table/Column مرجع ثبت می‌شود.

## Runtime و Migration

بدون `--fields`، Relation می‌تواند از Runtime Inspection یا Migration Parsing به‌دست بیاید و این منابع با هم Merge می‌شوند.

## Resource

Relationهای تشخیص‌داده‌شده با `whenLoaded()` Serialize می‌شوند تا صرفاً وجود Relation باعث Query ناخواسته نشود.

Schema Inference ساختار فنی Relation را تشخیص می‌دهد اما Business Semantic، Scope یا Ownership پروژه را نمی‌تواند حدس بزند؛ خروجی را بعد از Generation بازبینی کنید.
