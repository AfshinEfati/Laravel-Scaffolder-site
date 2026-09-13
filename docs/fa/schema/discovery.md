---
title: Scaffolder فیلدها را از کجا می‌خواند؟
lang: fa
---

# Scaffolder فیلدها را از کجا می‌خواند؟

Schema فقط برای ساخت Model نیست. Scaffolder از Metadata فیلدها برای DTO، Validation، Resource، Relation، Feature Test و Swagger استفاده می‌کند؛ پس مهم است بدانی این اطلاعات دقیقاً از کجا می‌آیند.

## اولویت اول: `--fields`

اگر Schema را مستقیم به Command بدهی، همان منبع اصلی در نظر گرفته می‌شود:

```bash
php artisan make:module Product \
  --fields="name:string,price:numeric,is_active:boolean"
```

وقتی `--fields` معتبر باشد، Scaffolder اطلاعات Runtime یا Migration را روی آن Merge نمی‌کند. این حالت برای وقتی خوب است که می‌خواهی خروجی دقیقاً براساس تعریف خودت ساخته شود.

## اولویت بعدی: Model و دیتابیس

اگر Model وجود داشته باشد، Runtime inspection می‌تواند Table، Columnها، Castها و Fillableهای مدل را بررسی کند.

این اطلاعات کمک می‌کنند Generator بفهمد مثلاً یک فیلد Boolean است، یک فیلد Date است یا چه فیلدهایی باید وارد DTO و Resource شوند.

## Migration هم خوانده می‌شود

وقتی `--fields` نداده باشی، اطلاعات Migration هم می‌تواند وارد Metadata شود. اگر Migration خاصی مدنظرت است، مستقیم مشخصش کن:

```bash
php artisan make:module Product \
  --from-migration=database/migrations/2026_09_01_000000_create_products_table.php
```

در حالت عادی، Runtime و Migration می‌توانند مکمل هم باشند؛ مثلاً Migration اطلاعات Foreign Key را بدهد و Model اطلاعات Cast را.

## Relationها هم بخشی از همین Metadata هستند

Foreign Keyها و Relationهایی که از Runtime یا Migration پیدا می‌شوند برای Resource، Swagger و بعضی Generatorهای دیگر استفاده می‌شوند.

## اگر هیچ منبعی وجود نداشته باشد چه؟

برای Build عادی، اگر Model وجود نداشته باشد و نه `--fields` بدهی و نه Migration مشخص کنی، Command متوقف می‌شود. Scaffolder عمداً Schema خیالی تولید نمی‌کند.

حالت Swagger-only از این Flow جداست و برای Refresh کردن Doc ماژول می‌تواند بدون ساخت دوباره‌ی Stack اجرا شود.
