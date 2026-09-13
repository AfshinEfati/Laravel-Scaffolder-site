---
title: --no-dto / -nd
lang: fa
---

# `--no-dto` / `-nd`

DTO را فقط از لیست فایل‌ها حذف نمی‌کند؛ کل Data Flow لایه‌های وابسته را به حالت Array-based می‌برد:

```bash
php artisan make:module Product --no-dto
```

Scaffolder مقدار `usesDto=false` را به Service، Action و Controller Generator می‌دهد تا Signature و Payload کد تولیدشده هم با نبود DTO هماهنگ باشد.

## استثنای مهم Full Stack

`--no-dto` تنها Disable مهمی است که کنار `--all` و `--full` هم باقی می‌ماند:

```bash
php artisan make:module Product --all --no-dto
```

نتیجه: Full Stack کامل، بدون `ProductDTO`.
