---
title: swagger:config
lang: fa
---

# `swagger:config`

تنظیمات رایج Swagger UI را بدون ویرایش مستقیم Config مدیریت می‌کند:

```bash
php artisan swagger:config
```

بدون Option وارد حالت Interactive می‌شود.

```text
swagger:config
  --show
  --export-env
  --theme=
  --primary-color=
  --secondary-color=
  --title=
  --reset
```

```bash
php artisan swagger:config --show
```

Theme، Colorها، Fontها، Dark Mode و Display Settingها را نمایش می‌دهد.

```bash
php artisan swagger:config \
  --theme=dark \
  --primary-color=#8b5cf6 \
  --secondary-color=#06b6d4 \
  --title="Internal API"
```

```bash
php artisan swagger:config --export-env
```

فایل `.env.swagger` ساخته می‌شود تا تنظیمات را مرور و در صورت نیاز به Environment پروژه منتقل کنید.

```bash
php artisan swagger:config --reset
```

Reset قبل از تغییر مقادیر Default Confirmation می‌گیرد.
