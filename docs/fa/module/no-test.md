---
title: --no-test / -nt
lang: fa
---

# `--no-test` / `-nt`

Feature Test تولیدشده را خاموش می‌کند:

```bash
php artisan make:module Product --no-test
```

اگر بعد از آن `--tests` هم بدهی، Test دوباره فعال می‌شود:

```bash
php artisan make:module Product --no-test --tests
```

`--all` و `--full` هم در انتهای Flow Test را دوباره روشن می‌کنند.
