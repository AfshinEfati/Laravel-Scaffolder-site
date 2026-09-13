---
title: Publish و Stub سفارشی
lang: fa
---

# Publish و Stub سفارشی

Scaffolder دو Publish Tag دارد و هر کدام برای یک کار متفاوت است. لازم نیست همیشه هر دو را Publish کنی.

## `module-generator`

```bash
php artisan vendor:publish --tag=module-generator
```

این Tag فایل‌های پایه‌ای را وارد پروژه می‌کند: `BaseRepository`، Contract آن، `CriteriaInterface`، `BaseService`، Contract آن، `ApiResponseHelper` و فایل Config.

بعد از Publish، این فایل‌ها متعلق به پروژه‌ی تو هستند. اگر Base Repository یا شکل Response پروژه استاندارد خاصی دارد، می‌توانی همین نسخه‌ها را تغییر بدهی.

## `module-generator-stubs`

اگر می‌خواهی خود Template خروجی Generator را تغییر بدهی، این Tag را Publish کن:

```bash
php artisan vendor:publish --tag=module-generator-stubs
```

Stubها اینجا قرار می‌گیرند:

```text
resources/stubs/module-generator/
```

از این به بعد Scaffolder برای ساخت فایل‌ها از نسخه‌ی داخل پروژه استفاده می‌کند؛ پس می‌توانی Namespace، Base Class، DocBlock یا هر بخش دیگری از Templateها را مطابق استاندارد تیم خودت تغییر بدهی.

::: warning حواست به Upgrade باشد
Stubی که Publish می‌کنی یک کپی مستقل داخل پروژه است. اگر نسخه‌ی جدید پکیج Stub اصلی را تغییر بدهد، آن تغییر به‌صورت خودکار داخل Stub سفارشی تو Merge نمی‌شود. بعد از Upgrade بهتر است اختلاف Stubها را بررسی کنی.
:::

## روشی که دردسر کمتری دارد

1. Stubها را Publish کن.
2. قبل از تغییر، همان نسخه‌ی اولیه را Commit کن.
3. هر بار فقط یک Template را تغییر بده.
4. با یک Model آزمایشی `make:module` را اجرا کن.
5. Namespace، Importها و Testها را بررسی کن.
6. وقتی خروجی درست شد، روی Feature واقعی استفاده‌اش کن.

این کار باعث می‌شود اگر بعداً خروجی خراب شد، دقیقاً بدانی کدام تغییر Stub باعثش شده.
