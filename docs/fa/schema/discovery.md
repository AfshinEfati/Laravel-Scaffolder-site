---
title: روش کشف فیلدها
lang: fa
---

# روش کشف Schema

Metadata فیلدها برای DTO، Validation، Resource، Relation، Feature Test و Swagger استفاده می‌شود.

## ترتیب منابع

### ۱. `--fields` صریح

اگر Inline Schema معتبر وجود داشته باشد، همان منبع حقیقت در نظر گرفته می‌شود:

```bash
php artisan make:module Product --fields="name:string,price:numeric"
```

Runtime/Migration روی آن Merge نمی‌شوند.

### ۲. Runtime Model/Database

اگر Eloquent Model معتبر وجود داشته باشد، `RuntimeFieldParser` Table و Fieldها را بررسی می‌کند و Fillable مدل هم برای هماهنگ کردن Metadata استفاده می‌شود.

### ۳. Migration

در نبود Inline Schema، Metadata مایگریشن با Runtime Metadata Merge می‌شود. می‌توانید با `--from-migration` فایل مشخص بدهید یا اجازه دهید Fallback خودکار انجام شود.

## Relationها

Metadata Relationهای Runtime و Migration نیز Merge می‌شوند و Foreign Keyها می‌توانند Relation Hint ایجاد کنند.

## Fail زودهنگام

Build عادی بدون Model، بدون `--fields` و بدون Migration Hint صریح Fail می‌شود تا Generator Schema خیالی تولید نکند. Swagger-only از این قاعده مستثناست.
