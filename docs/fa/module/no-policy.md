---
title: --no-policy
lang: fa
---

# `--no-policy`

Policy را در Build معمولی خاموش می‌کند:

```bash
php artisan make:module Product --policy --no-policy
```

در این ترکیب، `--no-policy` بعد از `--policy` اعمال می‌شود و Policy ساخته نمی‌شود.

اما اگر `--all` یا `--full` هم فعال باشد، Full Stack در مرحله نهایی Policy را دوباره روشن می‌کند.
