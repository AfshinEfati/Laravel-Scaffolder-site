---
title: Relationها
lang: fa
---

# Scaffolder Relationها را چطور تشخیص می‌دهد؟

Relation Metadata کنار اطلاعات فیلدها نگه داشته می‌شود تا Resource، Swagger و بعضی بخش‌های خروجی بتوانند Relation-aware باشند.

## Foreign Key صریح

ساده‌ترین حالت این است که داخل `--fields` مقصد Foreign Key را خودت مشخص کنی:

```bash
php artisan make:module Post \
  --fields="title:string,user_id:integer:fk=users.id"
```

در این حالت Table و Column مقصد مستقیماً داخل Metadata ثبت می‌شوند.

## Runtime Model

اگر Model وجود داشته باشد، Scaffolder می‌تواند Relationهای قابل تشخیص آن را هم بررسی کند. این اطلاعات مخصوصاً برای Resource مفید است.

## Migration

Migration Parser هم Foreign Keyها و Relation Hintها را استخراج می‌کند. وقتی `--fields` صریح نداده باشی، اطلاعات Runtime و Migration می‌توانند کنار هم قرار بگیرند.

## اثرش روی Resource چیست؟

Relationهای پیدا‌شده با `whenLoaded()` داخل Resource استفاده می‌شوند. بنابراین فقط چون Relation در Resource تعریف شده، Query جدیدی اجرا نمی‌شود؛ Relation باید قبلاً Load شده باشد.

برای Relationهای چندتایی مثل `hasMany`، در صورت وجود Resource مقصد از Collection آن استفاده می‌شود. Relationهای تکی هم با Resource Instance برگردانده می‌شوند.

## چیزی که Generator نمی‌تواند حدس بزند

Scaffolder ساختار فنی Relation را می‌بیند، اما معنی Business آن را نه. Scope، Ownership، Permission، ترتیب Load شدن Relationها و اینکه اصلاً چه Relationی باید در یک Endpoint برگردد تصمیم پروژه‌ی توست.
