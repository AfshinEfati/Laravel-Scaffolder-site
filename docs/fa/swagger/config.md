---
title: swagger:config
lang: fa
---

# `swagger:config`

برای دیدن یا تغییر تنظیمات Swagger UI بدون ویرایش دستی فایل‌ها:

```bash
php artisan swagger:config --show
```

Export به فرمت ENV:

```bash
php artisan swagger:config --export-env
```

تغییر مقادیر رایج:

```bash
php artisan swagger:config --theme=dark
php artisan swagger:config --primary-color="#8b5cf6"
php artisan swagger:config --secondary-color="#d946ef"
php artisan swagger:config --title="Partner API"
```

Reset:

```bash
php artisan swagger:config --reset
```

بدون Option، یک Flow تعاملی برای Theme و Color باز می‌شود و می‌تواند UI را دوباره Initialize کند.
