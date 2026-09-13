---
title: make:swagger قدیمی
lang: fa
---

# `make:swagger` قدیمی

`make:swagger` هنوز برای Compatibility داخل پکیج وجود دارد، اما در سورس **Deprecated** شده است. برای پروژه جدید از Flow JSON-based استفاده کن:

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```

## Signature قدیمی

```text
make:swagger
  --path=
  --controller=
  --force | -f
  --output=
```

این Command Routeها را Scan می‌کند، می‌تواند با Path Prefix یا Controller Namespace فیلتر کند و Routeها را براساس Controller گروه‌بندی کند. خروجی قدیمی فایل‌های PHP مربوط به Swagger Doc است و Path پیش‌فرض آن `app/Docs` است.

مثال:

```bash
php artisan make:swagger --path=api/v1
```

یا:

```bash
php artisan make:swagger \
  --controller="App\\Http\\Controllers\\Api" \
  --output=app/Docs \
  --force
```

اگر پروژه‌ای از قبل روی این Flow است می‌توانی فعلاً نگهش داری، ولی برای قابلیت جدید و مستندات تازه بهتر است مهاجرت به `swagger:generate` را در نظر بگیری.
