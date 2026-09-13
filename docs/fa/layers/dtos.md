---
title: DTOها
lang: fa
---

# DTOها

در صورت فعال بودن:

```text
app/DTOs/ProductDTO.php
```

ساخته می‌شود. Propertyها از Schema یا Fillable مدل استخراج می‌شوند.

DTO تولیدشده Constructor Property، Factory به نام `fromRequest(...)` و `toArray()` دارد. مقدارهای `null` در `toArray()` حذف می‌شوند تا Partial Update قابل استفاده باشد.

## Type Inference

نمونه Mappingها:

```text
string/text      -> ?string
integer/FK       -> int|string|null
numeric          -> float|int|string|null
boolean          -> bool|int|string|null
date/datetime    -> string|Carbon|null
json/array       -> array|string|null
uuid/email/url   -> ?string
```

وقتی Metadata کامل نباشد، Generator از نام‌هایی مثل `_id`، `email`، `price`، `amount`، `is_`، `_at` و `data` هم Heuristic می‌گیرد.

```bash
php artisan make:module Product --no-dto
```

Service/Action/Controller را به حالت Array-based می‌برد.
