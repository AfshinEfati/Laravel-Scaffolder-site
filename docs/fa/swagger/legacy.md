---
title: make:swagger قدیمی
lang: fa
---

# `make:swagger` قدیمی

این Command هنوز ثبت شده:

```bash
php artisan make:swagger
```

اما در خود پکیج **Deprecated** علامت خورده است. Optionهای قدیمی:

```text
--path=          فیلتر بر اساس URI prefix
--controller=    فیلتر Namespace کنترلر
--force, -f      بازنویسی فایل Annotation
--output=        پوشه خروجی
```

برای پروژه‌های جدید از این استفاده کن:

```bash
php artisan swagger:generate
```
