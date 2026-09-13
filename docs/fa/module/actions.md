---
title: --actions
lang: fa
---

# `--actions`

اگر می‌خواهی عملیات اصلی ماژول به Actionهای جدا تقسیم شوند، این Option را فعال کن:

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

`Create` و `Update` وقتی DTO فعال باشد DTO-aware هستند. اگر `--no-dto` بدهی، Payload آن‌ها با Array کار می‌کند.

## همراه API Mode

`--api` خودش Actionها را روشن می‌کند. اگر API می‌خواهی ولی Action Layer نمی‌خواهی:

```bash
php artisan make:module Product --api --no-actions
```

فقط یادت باشد `--all` و `--full` در انتها Actionها را دوباره فعال می‌کنند.
