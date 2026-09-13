---
title: API Resourceها
lang: fa
---

# API Resourceها

اگر Resource فعال باشد، Scaffolder برای ماژول فایل زیر را می‌سازد:

```text
app/Http/Resources/ProductResource.php
```

فیلدهای خروجی از Schema/Fillable، Castها و Relationهای Model ساخته می‌شوند.

## Date و Boolean فقط خام برنمی‌گردند

Generator برای بعضی فیلدها از `ApiResponseHelper` استفاده می‌کند:

```text
date/datetime یا *_at -> ApiResponseHelper::formatDates(...)
boolean یا is_*/has_* -> ApiResponseHelper::getStatus(...)
```

بقیه‌ی فیلدها مستقیم برگردانده می‌شوند و `id` هم در خروجی قرار می‌گیرد.

## Relationها

Relationهایی که از Migration یا Runtime تشخیص داده شده‌اند با `whenLoaded()` وارد Resource می‌شوند. یعنی صرف تعریف Relation در Resource باعث Query جدید نمی‌شود.

برای Relationهای Collection مثل `hasMany`، اگر Resource مدل مقصد وجود داشته باشد از `Resource::collection(...)` استفاده می‌شود. برای Relation تکی هم Resource Instance ساخته می‌شود.

اگر Resource مربوط به مدل مقصد وجود نداشته باشد، Relation لودشده مستقیم برگردانده می‌شود.
