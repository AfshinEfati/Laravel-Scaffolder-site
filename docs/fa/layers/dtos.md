---
title: DTOها
lang: fa
---

# DTOها

وقتی DTO فعال باشد، برای هر ماژول یک کلاس مثل این ساخته می‌شود:

```text
app/DTOs/ProductDTO.php
```

فیلدهای DTO از Schema صریح، Migration یا Fillable/Castهای Model استخراج می‌شوند.

## داخل DTO چه داریم؟

DTO تولیدشده معمولاً سه بخش اصلی دارد:

- Constructor با Propertyهای Typed؛
- `fromRequest(...)` برای ساخت DTO از Request؛
- `toArray()` برای تحویل Payload تمیز به Service/Repository.

`toArray()` مقدارهای `null` را حذف می‌کند؛ در نتیجه برای Partial Update لازم نیست فیلدی که ارسال نشده با `null` روی رکورد نوشته شود.

## Type inference

Scaffolder تا جایی که Metadata اجازه بدهد Type مناسب PHP را حدس می‌زند:

```text
string/text      -> ?string
integer/FK       -> int|string|null
numeric          -> float|int|string|null
boolean          -> bool|int|string|null
date/datetime    -> string|Carbon|null
json/array       -> array|string|null
uuid/email/url   -> ?string
```

اگر Metadata کامل نباشد، نام فیلد هم کمک می‌کند؛ مثلاً `_id`، `email`، `price`، `amount`، `is_`، `_at` و `data` برای تشخیص Type استفاده می‌شوند.

اگر اصلاً DTO نمی‌خواهی:

```bash
php artisan make:module Product --no-dto
```

در این حالت Service، Action و Controller هم متناسب با Payload آرایه‌ای تولید می‌شوند؛ یعنی فقط یک فایل از خروجی حذف نمی‌شود.
