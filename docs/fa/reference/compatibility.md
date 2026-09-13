---
title: سازگاری
lang: fa
---

# سازگاری

طبق `composer.json` فعلی:

| وابستگی | بازه |
| --- | --- |
| PHP | `^8.1 || ^8.2 || ^8.3 || ^8.4 || ^8.5` |
| Laravel | `^10.0 || ^11.0 || ^12.0 || ^13.0` |

Testbench متناسب با نسل‌های Laravel و PHPUnit 10.5/11 در Development استفاده می‌شود.

## تفاوت نسخه‌های Laravel

ساختار Registration Provider در نسخه‌های Laravel تغییر کرده است. Provider Generator اگر `bootstrap/providers.php` وجود داشته باشد از آن استفاده می‌کند و برای Layout قدیمی‌تر سراغ `config/app.php` می‌رود.

Controller Generator نیز Base Controller Namespace را صرفاً از یک ساختار ثابت فرض نمی‌کند.

## هنگام Upgrade

1. Laravel و Package را در Branch آزمایشی Upgrade کنید؛
2. Testها را اجرا کنید؛
3. یک ماژول Disposable بسازید؛
4. Import/Namespace/Provider Registration را بررسی کنید؛
5. Custom Stubها را با نسخه جدید Package مقایسه کنید.
