---
title: مرجع دستور make:module
lang: fa
---

# دستور `make:module`

تقریباً همه‌چیز در Laravel Scaffolder از همین دستور شروع می‌شود:

```bash
php artisan make:module Product
```

Scaffolder نام ماژول را نرمال می‌کند، Model را پیدا می‌کند، Schema را می‌خواند و بر اساس Optionهایی که داده‌ای لایه‌های موردنیاز را می‌سازد.

## در حالت عادی چه چیزهایی ساخته می‌شوند؟

Repository و Service هسته‌ی اصلی ماژول هستند. بقیه‌ی لایه‌ها از Config و Optionهای CLI می‌آیند.

با تنظیمات پیش‌فرض فعلی، اجرای ساده‌ی دستور معمولاً این خروجی را می‌دهد:

```text
Repository
Service
DTO
API Resource
Provider / Bindings
API Controller
Store + Update Form Requests
Actions
Feature Test
```

چرا Request و Action هم فعال‌اند؟ چون `controller_type` پیش‌فرض روی `api` است و API Mode این دو بخش را هم روشن می‌کند.

## Signature کامل

```text
make:module {name}
  --controller= | -c
  --api
  --requests | -r
  --tests | -t
  --no-controller | -nc
  --no-resource | -nr
  --no-dto | -nd
  --no-test | -nt
  --no-provider | -np
  --actions
  --no-actions
  --policy
  --no-policy
  --swagger | -sg
  --no-swagger
  --all | -a
  --full | -f
  --from-migration= | -fm
  --fields=
  --force
```

برای هر کدام از این Optionها یک صفحه‌ی جدا در Sidebar داری.

## Schema را از کجا می‌خواند؟

Scaffolder سه راه اصلی برای فهمیدن فیلدها دارد:

1. `--fields` که خودت مستقیم می‌دهی؛
2. Model و دیتابیس در حال اجرا؛
3. Migration.

اگر `--fields` معتبر باشد، همان منبع اصلی در نظر گرفته می‌شود. در غیر این صورت Scaffolder تا جایی که بتواند اطلاعات Runtime و Migration را کنار هم می‌گذارد.

## فایل موجود را بی‌اجازه خراب نمی‌کند

اگر فایلی از قبل وجود داشته باشد، به‌صورت پیش‌فرض نگه داشته می‌شود. برای بازنویسی باید خودت `--force` بدهی:

```bash
php artisan make:module Product --force
```

::: warning
`--force` یعنی بازنویسی، نه Merge. اگر فایل را دستی تغییر داده‌ای، قبلش Diff یا Git status را چک کن.
:::

## یک استثنای مهم درباره `--all`

`--all` و `--full` در انتهای تصمیم‌گیری Command بیشتر `--no-*`ها را دوباره روشن می‌کنند. ولی `--no-dto` استثناست:

```bash
php artisan make:module Product --all --no-dto
```

این دستور یک Stack کامل می‌سازد، اما DTO را نمی‌سازد.
