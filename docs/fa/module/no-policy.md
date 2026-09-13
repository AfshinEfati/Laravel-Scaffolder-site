---
title: --no-policy
lang: fa
---

# `--no-policy`

Policy را در Generation معمول خاموش کن، مثلاً وقتی Config پروژه آن را روشن کرده:

```bash
php artisan make:module Product --policy --no-policy
```

::: warning اولویت Full Stack
در پیاده‌سازی فعلی `--all` و `--full` بعد از Skip Flagها Policy را دوباره روشن می‌کنند؛ بنابراین `--all --no-policy` همچنان Policy می‌سازد. برای حذف Policy از Full Stack فعلی باید به‌جای `--all` ترکیب Optionهای موردنیاز را جداگانه انتخاب کنی.
:::
