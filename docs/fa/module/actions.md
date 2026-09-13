---
title: --actions
lang: fa
---

# `--actions`

Action Layer را تولید می‌کند:

```bash
php artisan make:module Product --actions
```

خروجی پیش‌فرض:

```text
app/Actions/BaseAction.php
app/Actions/Product/
├── ListProductAction.php
├── ShowProductAction.php
├── CreateProductAction.php
├── UpdateProductAction.php
├── DeleteProductAction.php
└── ListWithRelationsProductAction.php
```

Create/Update در حالت DTO، DTO-aware هستند. با `--no-dto` Payload آنها Array-based می‌شود.

API Mode Action را خودکار فعال می‌کند مگر:

```bash
php artisan make:module Product --api --no-actions
```

`--all` و `--full` Action را دوباره فعال می‌کنند.
