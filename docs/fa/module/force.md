---
title: --force
lang: fa
---

# `--force`

Scaffolder به‌صورت پیش‌فرض فایل موجود را دست نمی‌زند. اگر می‌خواهی خروجی Generator جای فایل قبلی را بگیرد، باید `--force` را خودت اضافه کنی:

```bash
php artisan make:module Product --force
```

چند مثال:

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

::: danger قبل از اجرا
`--force` Merge نمی‌کند؛ فایل را دوباره می‌سازد. اگر روی فایل‌های Generate‌شده تغییر دستی داری، قبلش Commit یا Stash کن و بعد Diff را ببین.
:::
