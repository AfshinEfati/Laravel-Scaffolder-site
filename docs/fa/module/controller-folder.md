---
title: --controller / -c
lang: fa
---

# `--controller` / `-c`

Controller تولیدشده را داخل یک زیرپوشه قرار می‌دهد:

```bash
php artisan make:module Product --controller=Admin
```

یا:

```bash
php artisan make:module Product -c Admin
```

در API Mode و با مسیرهای پیش‌فرض، خروجی به شکل زیر خواهد بود:

```text
app/Http/Controllers/Api/V1/Admin/ProductController.php
```

## ترکیب رایج

```bash
php artisan make:module Product --api --controller=Admin
```

این زیرپوشه به Test Generator هم منتقل می‌شود تا ساختار تست با محل Controller هماهنگ بماند.

## اولویت

اگر مقدار `--controller` خالی نباشد، Controller دوباره فعال می‌شود حتی اگر قبل از آن `--no-controller` داده باشید:

```bash
php artisan make:module Product --no-controller --controller=Admin
```

در این حالت Controller ساخته می‌شود.

برای تغییر Root مسیر Controller به‌جای Subfolder، تنظیمات `paths.controller.api` و `paths.controller.web` را تغییر دهید.
