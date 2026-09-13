---
title: --tests
lang: fa
---

# `--tests` / `-t`

در Config اصلی Feature Test به‌صورت پیش‌فرض روشن است. `--tests` برای پروژه‌ای که Default را خاموش کرده، آن را صریحاً فعال می‌کند:

```bash
php artisan make:module Product --tests
```

Generator در صورت داشتن Metadata فیلدها، Payload و Assertionهای اولیه‌ی تست را از همان Schema می‌سازد.

برای خاموش کردن از [`--no-test`](/fa/module/no-test) استفاده کن.
