---
title: --all / --full
lang: fa
---

# `--all` / `--full`

Stack کامل ماژول را فعال می‌کند:

```bash
php artisan make:module Product --all
```

Aliasها:

```bash
php artisan make:module Product -a
php artisan make:module Product --full
php artisan make:module Product -f
```

`--all` در کد به Full Stack تبدیل می‌شود، بنابراین هر دو رفتار یکسانی دارند.

## بخش‌هایی که Full Stack صریحاً فعال می‌کند

```text
Repository          همیشه
Service             همیشه
Controller          بله
Form Requests       بله
Feature Test        بله
API Resource        بله
Provider            بله
Actions             بله
Policy              بله
Swagger             بله
Controller type     API
```

### استثنای DTO

Full Stack مقدار DTO را به اجبار `true` نمی‌کند. با Config پیش‌فرض DTO فعال است و `--all` معمولی DTO می‌سازد؛ اما این دستور DTO را خاموش نگه می‌دارد:

```bash
php artisan make:module Product --all --no-dto
```

در این حالت لایه‌های وابسته از Data Array استفاده می‌کنند.

## اولویت Optionها

Full Stack در انتهای Flow اعمال می‌شود؛ بنابراین Optionهایی مثل `--no-actions`، `--no-policy`، `--no-provider`، `--no-resource`، `--no-controller`، `--no-test` و `--no-swagger` را دوباره فعال می‌کند.

```bash
php artisan make:module Product --all --no-actions
```

Action همچنان ساخته می‌شود.

تنها استثنای مهم این مجموعه `--no-dto` است.
