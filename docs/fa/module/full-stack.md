---
title: --all / --full
lang: fa
---

# `--all` / `--full`

اگر می‌خواهی تقریباً تمام قابلیت‌های Generator برای یک ماژول روشن شوند، از `--all` یا `--full` استفاده کن:

```bash
php artisan make:module Product --all
```

Aliasها:

```bash
php artisan make:module Product -a
php artisan make:module Product --full
php artisan make:module Product -f
```

## چه چیزهایی روشن می‌شوند؟

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

## DTO یک استثناست

Full Stack بیشتر `--no-*`ها را در انتها Override می‌کند، ولی `--no-dto` را نه:

```bash
php artisan make:module Product --all --no-dto
```

این دستور همه‌ی لایه‌های Full Stack را می‌سازد، اما `ProductDTO` تولید نمی‌شود و Service/Action/Controller هم برای Payload آرایه‌ای تنظیم می‌شوند.

::: warning
اگر قصد داری یکی از بخش‌های Full Stack را با `--no-*` خاموش کنی، اول صفحه همان Option را ببین. به‌جز DTO، بیشتر Disableها در انتهای Flow دوباره فعال می‌شوند.
:::
