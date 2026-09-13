---
title: --swagger / -sg
lang: fa
---

# `--swagger` / `-sg`

این Option Doc مربوط به همان ماژول را می‌سازد:

```bash
php artisan make:module Product --swagger
```

## فقط Doc را می‌خواهی؟

اگر `--swagger` تنها Option اصلی ساخت Stack باشد، Command وارد حالت Swagger-only می‌شود و Repository، Service، Controller و بقیه‌ی لایه‌ها را دوباره تولید نمی‌کند.

```bash
php artisan make:module Product --swagger --force
```

این حالت برای Refresh کردن Doc یک ماژول بدون دست‌زدن به بقیه فایل‌ها مناسب است.

## همراه ساخت ماژول

وقتی Swagger را داخل Build عادی فعال می‌کنی، Controller به API Mode می‌رود:

```bash
php artisan make:module Product --api --swagger
```

`--all` و `--full` هم Swagger را روشن می‌کنند.

::: tip تفاوت با `swagger:generate`
`--swagger` بخشی از Flow ساخت همان ماژول است. دستور مستقل `swagger:generate` یک Spec سراسری JSON را با بررسی Routeهای پروژه تولید می‌کند. این دو کار یکی نیستند.
:::
