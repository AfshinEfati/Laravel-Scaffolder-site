---
title: سازگاری نسخه‌ها
lang: fa
---

# سازگاری نسخه‌ها

براساس `composer.json` فعلی پکیج:

| وابستگی | نسخه‌های پشتیبانی‌شده |
| --- | --- |
| PHP | `^8.1 || ^8.2 || ^8.3 || ^8.4 || ^8.5` |
| Laravel | `^10.0 || ^11.0 || ^12.0 || ^13.0` |

در Development، Testbench متناسب با نسل‌های مختلف Laravel و PHPUnit 10.5/11 استفاده می‌شود.

## تفاوت ساختار Laravelها

یکی از تفاوت‌های مهم نسخه‌های جدید و قدیمی Laravel محل Registration Providerهاست.

Provider Generator اول دنبال این فایل می‌گردد:

```text
bootstrap/providers.php
```

اگر وجود داشته باشد، Provider ماژول را آنجا Register می‌کند. برای Layout قدیمی‌تر سراغ `config/app.php` می‌رود.

این باعث می‌شود خروجی فقط به یک نسل خاص Laravel قفل نباشد.

## موقع Upgrade چه چیزهایی را چک کنم؟

یک Flow امن:

1. Laravel و Scaffolder را روی Branch جدا Upgrade کن.
2. Testهای پروژه را اجرا کن.
3. یک ماژول آزمایشی با `make:module` بساز.
4. Namespaceها، Importها و Provider Registration را چک کن.
5. اگر Custom Stub داری، آن‌ها را با Stubهای نسخه جدید مقایسه کن.

Custom Stub مهم‌ترین جایی است که ممکن است بعد از Upgrade بدون خطای Composer، خروجی قدیمی تولید کند.
