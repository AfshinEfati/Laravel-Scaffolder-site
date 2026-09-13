---
title: swagger:init
lang: fa
---

# `swagger:init`

فایل‌های Swagger UI مستقل را در `storage/swagger-ui` آماده می‌کند:

```bash
php artisan swagger:init
```

برای بازنویسی Assetهای UI، مثلاً بعد از تغییر Theme:

```bash
php artisan swagger:init --force
```

Command اگر `swagger.json` قبلاً تولید شده باشد آن را با Example پکیج جایگزین نمی‌کند. Themeهای `vanilla`، `tailwind` و `dark` پشتیبانی می‌شوند و `.htaccess` نیز ساخته می‌شود.
