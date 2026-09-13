---
title: Provider و Binding
lang: fa
---

# Provider و Binding

Provider Generator فایل زیر را می‌سازد:

```text
app/Providers/ProductServiceProvider.php
```

و Bindingهای Repository/Service Contract به Concrete را ثبت می‌کند.

## Registration نسخه-aware

اگر `bootstrap/providers.php` وجود داشته باشد، Provider به Array بازگشتی همان فایل اضافه می‌شود. در Layout قدیمی‌تر، Generator `config/app.php` را بررسی می‌کند.

قبل از Insert، FQCN را جست‌وجو می‌کند تا Registration Duplicate نشود.

## حذف Provider

```bash
php artisan make:module Product --no-provider
```

در این حالت Binding خودکار مسئولیت خود پروژه است و Service Generator به Concrete Repository تغییر می‌کند.
