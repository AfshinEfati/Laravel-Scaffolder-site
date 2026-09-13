---
title: swagger:config
lang: fa
---

# `swagger:config`

برای تغییر چند تنظیم رایج Swagger لازم نیست هر بار Config را دستی باز کنی. `swagger:config` برای همین کار است:

```bash
php artisan swagger:config
```

اگر هیچ Optionی ندهی، Command وارد حالت Interactive می‌شود.

Signature:

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

## تنظیمات فعلی را ببین

```bash
php artisan swagger:config --show
```

Theme، رنگ‌ها، Fontها، Dark Mode و بخشی از Display Settingها نمایش داده می‌شوند.

## چند مقدار را یک‌جا عوض کن

```bash
php artisan swagger:config \
  --theme=dark \
  --primary-color=#8b5cf6 \
  --secondary-color=#06b6d4 \
  --title="Internal API"
```

## تنظیمات را به ENV قابل مرور تبدیل کن

```bash
php artisan swagger:config --export-env
```

فایل زیر ساخته می‌شود:

```text
.env.swagger
```

می‌توانی آن را بررسی کنی و فقط مقدارهایی که لازم داری به `.env` اصلی منتقل کنی.

## برگشت به Defaultها

```bash
php artisan swagger:config --reset
```

Reset قبل از تغییر مقدارها Confirmation می‌گیرد تا ناخواسته تنظیمات فعلی را از دست ندهی.
