---
title: --no-actions
lang: fa
---

# `--no-actions`

Action Layer را غیرفعال می‌کند:

```bash
php artisan make:module Product --no-actions
```

این Option مخصوصاً در API Mode مهم است، چون API به‌صورت خودکار Actionها را فعال می‌کند:

```bash
php artisan make:module Product --api --no-actions
```

در Build عادی `--no-actions` حتی Auto-enable شدن API Mode را هم خنثی می‌کند. اما `--all` و `--full` بعدتر اجرا می‌شوند و Actionها را دوباره روشن می‌کنند.
