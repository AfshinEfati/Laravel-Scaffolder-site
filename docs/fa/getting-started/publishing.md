---
title: Publish و Stub سفارشی
lang: fa
---

# Publish و Stub سفارشی

پکیج دو Publish Tag اصلی دارد.

## زیرساخت پایه

```bash
php artisan vendor:publish --tag=module-generator
```

Base Repository/Service، Contractها، `CriteriaInterface`، `ApiResponseHelper` و Config منتشر می‌شوند.

## Stubهای Generator

```bash
php artisan vendor:publish --tag=module-generator-stubs
```

Templateها در مسیر زیر قرار می‌گیرند:

```text
resources/stubs/module-generator/
```

بعد از Publish می‌توانی شکل Controller، DTO، Policy، Action و سایر خروجی‌ها را با استاندارد تیم خودت هماهنگ کنی.

::: warning
Stub سفارشی بعد از Publish متعلق به پروژه‌ی توست و نسخه‌های جدید پکیج نمی‌توانند تغییرات آن را خودکار روی نسخه‌ی سفارشی اعمال کنند.
:::
