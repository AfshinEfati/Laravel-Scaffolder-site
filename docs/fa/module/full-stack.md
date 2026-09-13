---
title: --all و --full
lang: fa
---

# `--all` / `--full`

هر دو Option یک Stack کامل API می‌سازند:

```bash
php artisan make:module Product --all
```

یا:

```bash
php artisan make:module Product --full
```

Full Stack، Controller، Request، Feature Test، Resource، Provider، Action، Policy و Swagger را روشن و API mode را فعال می‌کند. DTO مقدار قبلی خودش را حفظ می‌کند؛ در Default روشن است اما `--no-dto` می‌تواند خاموشش نگه دارد.

::: warning ترتیب فعلی اجرای Optionها
در پیاده‌سازی فعلی، Full Stack بعد از بیشتر `--no-*`ها اجرا می‌شود. در نتیجه `--all/--full` دوباره Controller، Request، Test، Resource، Provider، Action، Policy و Swagger را روشن می‌کند، حتی اگر Skip Flag مربوط به آن‌ها را هم داده باشی. `--no-dto` استثنای مهم این رفتار است.
:::
