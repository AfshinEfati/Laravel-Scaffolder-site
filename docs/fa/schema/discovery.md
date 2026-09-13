---
title: کشف Schema
lang: fa
---

# روش کشف فیلدها

Command سه منبع اصلی برای Metadata دارد.

## ۱. `--fields`

تعریف صریح CLI بالاترین اولویت را دارد و دست‌نخورده نگه داشته می‌شود.

## ۲. Runtime Model / Database

اگر `App\Models\Product` وجود داشته باشد و Database در دسترس باشد، `RuntimeFieldParser` می‌تواند Column و Relationها را بررسی کند.

## ۳. Migration

Command Migration مرتبط را پیدا می‌کند یا Migration داده‌شده با `--from-migration` را Parse می‌کند.

اگر Runtime و Migration هر دو داده داشته باشند، Field و Relationها Merge می‌شوند و در صورت وجود `$fillable` با Model هماهنگ می‌شوند.
