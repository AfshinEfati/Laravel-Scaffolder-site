---
title: API Resourceها
lang: fa
---

# API Resourceها

Resource Generator فایل زیر را می‌سازد:

```text
app/Http/Resources/ProductResource.php
```

خروجی از Fillable/Schema، Cast و Relationها ساخته می‌شود.

## Format فیلدها

```text
date/datetime یا *_at -> ApiResponseHelper::formatDates(...)
boolean یا is_*/has_* -> ApiResponseHelper::getStatus(...)
```

بقیه Fieldها مستقیم برگردانده می‌شوند و `id` هم به خروجی اضافه می‌شود.

## Relation

Relationهای Migration/Runtime با `whenLoaded()` خروجی می‌شوند. Relationهای Collection مانند hasMany از Related Resource Collection استفاده می‌کنند، اگر Resource مربوطه وجود داشته باشد؛ Relation تکی از Resource Instance استفاده می‌کند.

در نبود Related Resource، Relation Load‌شده مستقیم برمی‌گردد.

این رفتار مانع Query ناخواسته صرفاً به دلیل تعریف Relation در Resource می‌شود.
