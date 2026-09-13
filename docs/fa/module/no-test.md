---
title: --no-test / -nt
lang: fa
---

# `--no-test` / `-nt`

Feature Test تولیدشده توسط Scaffolder را حذف می‌کند:

```bash
php artisan make:module Product --no-test
```

اگر همزمان `--tests` بدهید، چون Option مثبت بعدتر اعمال می‌شود Test ساخته خواهد شد:

```bash
php artisan make:module Product --no-test --tests
```

`--all` و `--full` نیز Test را دوباره فعال می‌کنند.
