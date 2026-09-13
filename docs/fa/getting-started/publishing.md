---
title: Publish و Stub سفارشی
lang: fa
---

# Publish و Stub سفارشی

پکیج دو Publish Tag با مسئولیت متفاوت دارد.

## `module-generator`

```bash
php artisan vendor:publish --tag=module-generator
```

BaseRepository، Interface آن، CriteriaInterface، BaseService، Interface آن، ApiResponseHelper و Config را وارد خود پروژه می‌کند.

این فایل‌ها بعد از Publish متعلق به Application هستند و می‌توانید مطابق استاندارد پروژه تغییرشان دهید.

## `module-generator-stubs`

```bash
php artisan vendor:publish --tag=module-generator-stubs
```

Templateهای Generator را به این مسیر می‌برد:

```text
resources/stubs/module-generator/
```

::: warning
Stub Publish‌شده Copy مستقل پروژه است؛ Upgrade پکیج نمی‌تواند تغییرات Template جدید را روی Custom Stub شما Merge کند. هنگام Upgrade اختلاف‌ها را بررسی کنید.
:::

## Flow پیشنهادی

1. Stubها را Publish کنید؛
2. نسخه دست‌نخورده را Commit کنید؛
3. هر بار یک Template را تغییر دهید؛
4. یک ماژول آزمایشی بسازید؛
5. Namespace/Import/Testها را بررسی کنید؛
6. بعد از آن روی Feature واقعی استفاده کنید.
