---
title: --no-provider / -np
lang: fa
---

# `--no-provider` / `-np`

Service Provider مخصوص ماژول را نمی‌سازد:

```bash
php artisan make:module Product --no-provider
```

در نتیجه Binding خودکار Repository و Service Contractها هم توسط `ProductServiceProvider` انجام نمی‌شود. اگر Interfaceها را نگه می‌داری، باید Binding را جای دیگری در پروژه ثبت کنی.

`--all` و `--full` Provider را در انتها دوباره فعال می‌کنند.
