---
title: --policy
lang: fa
---

# `--policy`

برای ساخت Policy استاندارد Laravel:

```bash
php artisan make:module Product --policy
```

Skeleton متدهای معمول `viewAny`، `view`، `create`، `update`، `delete`، `restore` و `forceDelete` را دارد.

در حالت معمول Policy اختیاری است؛ `--all` و `--full` آن را روشن می‌کنند.
