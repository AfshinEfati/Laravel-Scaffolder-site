---
title: --swagger / -sg
lang: fa
---

# `--swagger` / `-sg`

مستندات OpenAPI مربوط به همان ماژول را تولید می‌کند:

```bash
php artisan make:module Product --swagger
```

## حالت Swagger-only

اگر `--swagger` تنها Option اصلی مربوط به ساخت Stack باشد، Command وارد مسیر Swagger-only می‌شود و Repository/Service/Controller و بقیه لایه‌های عادی را تولید نمی‌کند.

```bash
php artisan make:module Product --swagger --force
```

این حالت برای Refresh کردن Doc یک ماژول مفید است.

## همراه با ساخت ماژول

اگر Swagger در یک Build عادی فعال باشد، Controller به API Mode می‌رود:

```bash
php artisan make:module Product --api --swagger
```

`--all` و `--full` نیز Swagger را فعال می‌کنند.

::: tip
این Option با دستور مستقل `swagger:generate` یکی نیست. `--swagger` بخشی از Flow ساخت ماژول است؛ `swagger:generate` Spec سراسری JSON را از Routeها تولید می‌کند.
:::
