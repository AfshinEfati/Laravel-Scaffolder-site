---
title: --no-policy
lang: fa
---

# `--no-policy`

Policy Generation را صریحاً خاموش می‌کند:

```bash
php artisan make:module Product --no-policy
```

اگر Config پروژه Policy را به‌صورت Default فعال کرده باشد، این Option برای یک ماژول خاص آن را غیرفعال می‌کند.

در Build عادی `--no-policy` بعد از `--policy` اعمال می‌شود:

```bash
php artisan make:module Product --policy --no-policy
```

Policy ساخته نمی‌شود.

`--all` و `--full` در انتها Policy را دوباره فعال می‌کنند.
