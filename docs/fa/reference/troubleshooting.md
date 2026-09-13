---
title: رفع اشکال
lang: fa
---

# رفع اشکال

## Model پیدا نمی‌شود

Build عادی به Model یا Schema صریح نیاز دارد:

```bash
php artisan make:module Product --fields="name:string,price:numeric"
```

یا:

```bash
php artisan make:module Product --from-migration=database/migrations/...php
```

## Fieldها تشخیص داده نمی‌شوند

اگر Runtime DB قابل دسترس نیست، `--fields` یا `--from-migration` بدهید و Table/Fillable مدل را بررسی کنید.

## فایل Skip شد

فایل موجود به‌صورت پیش‌فرض overwrite نمی‌شود:

```bash
php artisan make:module Product --force
```

## API ناخواسته Request/Action ساخت

رفتار فعلی درست است؛ API Mode این دو بخش را Auto-enable می‌کند. برای Action از `--no-actions` استفاده کنید. `--no-requests` فعلاً وجود ندارد.

## `--all --no-actions` هنوز Action می‌سازد

Full Stack در انتها Action را دوباره روشن می‌کند. DTO استثناست و `--all --no-dto` همچنان DTO را خاموش نگه می‌دارد.

## Swagger UI آماده نیست

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```

## Host رد می‌شود

Server فعلی `localhost`، IP معتبر و `::1` را می‌پذیرد.

## Custom Stub مشکل دارد

موقتاً Stub سفارشی را با نسخه Package مقایسه کنید، یک ماژول آزمایشی بسازید و تغییرات را مرحله‌ای برگردانید.
