---
title: Provider و Binding
lang: fa
---

# Provider و Binding

برای هر ماژول می‌تواند یک Service Provider اختصاصی ساخته شود:

```text
app/Providers/ProductServiceProvider.php
```

کار اصلی این Provider ثبت Binding بین Contract و پیاده‌سازی واقعی Repository/Service است.

## ثبت Provider در نسخه‌های مختلف Laravel

Generator اول دنبال `bootstrap/providers.php` می‌گردد. اگر این فایل وجود داشته باشد، Provider را به Array همان فایل اضافه می‌کند.

در Layoutهای قدیمی‌تر Laravel، `config/app.php` بررسی می‌شود.

قبل از اضافه‌کردن هم FQCN جست‌وجو می‌شود تا Provider دوبار Register نشود.

## اگر Provider نمی‌خواهی

```bash
php artisan make:module Product --no-provider
```

در این حالت Binding خودکار ساخته نمی‌شود. Service Generator هم به‌جای Interface Repository از Concrete Repository استفاده می‌کند تا Dependency حل‌نشده باقی نماند.

اگر Contractها را نگه می‌داری و خودت می‌خواهی Binding را جای دیگری انجام بدهی، مسئولیت Registration با پروژه است.
