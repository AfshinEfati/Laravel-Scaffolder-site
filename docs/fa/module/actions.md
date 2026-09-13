---
title: --actions
lang: fa
---

# `--actions`

Actionهای متمرکز برای عملیات CRUD تولید می‌کند:

```bash
php artisan make:module Product --actions
```

خروجی زیر مسیر تنظیم‌شده‌ی Actions و پوشه‌ی ماژول قرار می‌گیرد، مثلاً:

```text
app/Actions/Product/
├── CreateProductAction.php
├── DeleteProductAction.php
├── ListProductAction.php
├── ShowProductAction.php
└── UpdateProductAction.php
```

## ارتباط با DTO

اگر DTO فعال باشد، Actionهای Create/Update با DTO کار می‌کنند. با `--no-dto` امضای بخش‌های مربوطه به حالت Array-based تغییر می‌کند.

```bash
php artisan make:module Product --actions --no-dto
```

## API Mode

API Mode به‌صورت خودکار Actionها را فعال می‌کند مگر اینکه `--no-actions` داده باشید:

```bash
php artisan make:module Product --api --no-actions
```

`--all` و `--full` در انتها Actionها را دوباره فعال می‌کنند.
