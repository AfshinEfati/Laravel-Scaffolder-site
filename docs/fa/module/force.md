---
title: --force
lang: fa
---

# `--force`

اجازه می‌دهد Generator فایل‌های موجود را بازتولید و جایگزین کند:

```bash
php artisan make:module Product --force
```

بدون `--force`، Laravel Scaffolder فایل موجود را برای جلوگیری از حذف تغییرات دستی حفظ می‌کند.

## نمونه‌ها

```bash
php artisan make:module Product --all --force
```

```bash
php artisan make:module Product --swagger --force
```

```bash
php artisan make:module Product --api --force \
  --fields="name:string,price:numeric"
```

::: danger
`--force` Merge انجام نمی‌دهد. قبل از بازتولید ماژولی که دستی ویرایش شده، تغییرات را Commit یا Stash کنید.
:::
