---
title: make:swagger قدیمی
lang: fa
---

# `make:swagger` قدیمی

`make:swagger` برای Compatibility باقی مانده اما در سورس پکیج **Deprecated** است. برای پروژه جدید از `swagger:generate` استفاده کنید.

```bash
php artisan swagger:generate
```

Signature قدیمی:

```text
make:swagger
  --path=
  --controller=
  --force | -f
  --output=
```

این Command Routeها را Scan می‌کند، می‌تواند بر اساس Path Prefix یا Controller Namespace Filter کند، Routeها را بر اساس Controller Group کند و فایل‌های PHP مبتنی بر Annotation بسازد. مسیر پیش‌فرض خروجی `app/Docs` است.

```bash
php artisan make:swagger --path=api/v1
```

```bash
php artisan make:swagger \
  --controller="App\\Http\\Controllers\\Api" \
  --output=app/Docs \
  --force
```

Flow جدید:

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```
