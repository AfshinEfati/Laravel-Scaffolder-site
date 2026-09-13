---
title: --controller / -c
lang: fa
---

# `--controller` / `-c`

با این Option می‌توانی Controller ماژول را داخل یک Subfolder بسازی:

```bash
php artisan make:module Product --controller=Admin
```

نسخه کوتاه:

```bash
php artisan make:module Product -c Admin
```

در API Mode و با Pathهای پیش‌فرض، خروجی می‌شود:

```text
app/Http/Controllers/Api/V1/Admin/ProductController.php
```

## ترکیب رایج

```bash
php artisan make:module Product --api --controller=Admin
```

Subfolder انتخاب‌شده به Test Generator هم داده می‌شود تا تست با محل واقعی Controller هماهنگ بماند.

## حواست به precedence باشد

اگر `--controller` مقدار داشته باشد، Controller دوباره فعال می‌شود؛ حتی اگر `--no-controller` هم داده باشی:

```bash
php artisan make:module Product --no-controller --controller=Admin
```

در این مثال Controller ساخته می‌شود.

اگر نمی‌خواهی فقط Subfolder را عوض کنی و قصد داری Root مسیر Controllerها تغییر کند، از `paths.controller.api` و `paths.controller.web` در Config استفاده کن.
