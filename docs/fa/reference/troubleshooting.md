---
title: رفع اشکال
lang: fa
---

# رفع اشکال

چند مشکلی که موقع استفاده از Scaffolder بیشتر احتمال دارد ببینی:

## می‌گوید Model پیدا نشد

برای Build عادی باید حداقل یک منبع Schema داشته باشی. اگر Model هنوز وجود ندارد، `--fields` بده:

```bash
php artisan make:module Product \
  --fields="name:string,price:numeric"
```

یا Migration را مشخص کن:

```bash
php artisan make:module Product \
  --from-migration=database/migrations/...php
```

## فیلدها درست تشخیص داده نمی‌شوند

اگر Runtime DB در دسترس نیست یا Model Metadata کافی ندارد، به‌جای تکیه روی Auto-discovery از `--fields` یا `--from-migration` استفاده کن.

اگر Model وجود دارد، Table، Fillable و Castهای آن را هم بررسی کن.

## Generator می‌گوید فایل Skip شد

این رفتار محافظتی است. Scaffolder بدون اجازه روی فایل موجود نمی‌نویسد.

اگر واقعاً می‌خواهی بازنویسی شود:

```bash
php artisan make:module Product --force
```

قبلش Git status یا Diff را ببین؛ `--force` Merge نمی‌کند.

## چرا `--api` خودش Request و Action ساخت؟

این رفتار فعلی API Mode است. Requestها خودکار فعال می‌شوند و Actionها هم مگر اینکه صریحاً خاموششان کنی:

```bash
php artisan make:module Product --api --no-actions
```

فعلاً `--no-requests` در Signature وجود ندارد.

## چرا `--all --no-actions` باز هم Action ساخت؟

چون `--all` / `--full` در انتهای Flow بیشتر Disableها را دوباره فعال می‌کند.

استثنای مهم DTO است:

```bash
php artisan make:module Product --all --no-dto
```

در این حالت DTO واقعاً خاموش می‌ماند.

## Swagger UI می‌گوید Initialize نشده

ترتیب پایه را اجرا کن:

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```

## `swagger:ui` Host را قبول نمی‌کند

در نسخه فعلی Host باید `localhost`، `::1` یا یک IP معتبر باشد. اگر Domain دلخواه داده باشی Validation ردش می‌کند.

## بعد از Publish کردن Stub خروجی خراب شده

Custom Stubها مستقل از Vendor هستند و با Upgrade خودکار Merge نمی‌شوند.

برای پیدا کردن مشکل:

1. Stub سفارشی را با نسخه فعلی پکیج مقایسه کن.
2. یک ماژول آزمایشی بساز.
3. تغییرها را مرحله‌ای برگردان.
4. اول Namespace و Importها را بررسی کن؛ معمولاً خطاهای واضح از همان‌جا مشخص می‌شوند.
