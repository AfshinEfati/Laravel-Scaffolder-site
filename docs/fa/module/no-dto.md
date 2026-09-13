---
title: --no-dto / -nd
lang: fa
---

# `--no-dto` / `-nd`

DTO را غیرفعال می‌کند و Data Flow لایه‌های وابسته را به حالت Array-based می‌برد:

```bash
php artisan make:module Product --no-dto
```

Command مقدار `usesDto=false` را به Service، Action و Controller Generator منتقل می‌کند؛ بنابراین فقط فایل DTO حذف نمی‌شود، Signature کد تولیدی نیز متناسب می‌شود.

## استثنای مهم Full Stack

برخلاف بیشتر `--no-*`ها، این Option با `--all` و `--full` همچنان مؤثر می‌ماند:

```bash
php artisan make:module Product --all --no-dto
```

در نتیجه Stack کامل بدون `ProductDTO` ساخته می‌شود.
