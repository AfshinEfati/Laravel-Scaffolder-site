---
title: مرجع دستور make:module
lang: fa
---

# دستور `make:module`

دستور `make:module` نقطه اصلی ورود Laravel Scaffolder است. این دستور لایه‌های لازم برای یک Feature را دور مدل شما تولید می‌کند، بدون اینکه کد پشت Runtime Magic پنهان شود.

```bash
php artisan make:module Product
```

نام ماژول با `Str::studly()` نرمال می‌شود و مدل به‌صورت پیش‌فرض در مسیر تنظیم‌شده‌ای مثل `App\Models\Product` جست‌وجو می‌شود.

## چه چیزهایی همیشه ساخته می‌شوند؟

در یک اجرای عادی، Repository و Service پایه اصلی ماژول هستند و همیشه تولید می‌شوند. بقیه لایه‌ها با Config و Optionهای CLI کنترل می‌شوند.

با تنظیمات پیش‌فرض فعلی پکیج، اجرای ساده‌ی دستور عملاً چنین Stackای می‌سازد:

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

دلیل فعال بودن Request و Action این است که `controller_type` پیش‌فرض روی `api` قرار دارد؛ API Mode این دو بخش را خودکار فعال می‌کند.

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

برای هر Option یک صفحه مستقل در همین بخش وجود دارد.

## منابع Schema

اطلاعات Fieldها برای Validation، DTO، Resource، Relation، Test و Swagger از سه منبع قابل دریافت است:

1. تعریف صریح با `--fields`؛
2. بررسی Runtime مدل و دیتابیس؛
3. Parsing مایگریشن.

اگر `--fields` معتبر داده شود، همان به‌عنوان منبع صریح Schema استفاده می‌شود. در غیر این صورت اطلاعات Runtime و Migration در صورت امکان با هم Merge می‌شوند.

## بازتولید امن

فایل موجود بدون اجازه overwrite نمی‌شود. برای بازتولید صریح از `--force` استفاده کنید:

```bash
php artisan make:module Product --force
```

::: warning
`--force` عملیات Merge نیست؛ فایل تولیدشده می‌تواند تغییرات دستی شما را جایگزین کند.
:::

## نکته مهم درباره Full Stack

`--all` و `--full` در انتهای تصمیم‌گیری Command اعمال می‌شوند و Controller، Request، Test، Resource، Provider، Action، Policy و Swagger را دوباره فعال می‌کنند. استثنای مهم DTO است: `--all --no-dto` همچنان DTO را غیرفعال نگه می‌دارد.

## چند نمونه رایج

```bash
php artisan make:module Product
php artisan make:module Product --all
php artisan make:module Product --all --no-dto
```

```bash
php artisan make:module Product --api \
  --fields="name:string:unique,price:decimal(10,2),is_active:boolean"
```

```bash
php artisan make:module Product \
  --from-migration=database/migrations/2026_01_01_000000_create_products_table.php
```
