---
title: Actionها
lang: fa
---

# Actionها

Action Generator یک BaseAction و Actionهای متمرکز ماژول می‌سازد:

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

هر Action یک Operation مشخص را از طریق Service هماهنگ می‌کند. `ListWithRelations` برای Flow لیست همراه Relation جدا شده تا Action عادی List بیش از حد مسئولیت نگیرد.

Create/Update در صورت فعال بودن DTO، DTO-aware هستند و با `--no-dto` به Array-based payload تغییر می‌کنند.

API Mode Actionها را خودکار فعال می‌کند مگر `--no-actions` داده شود.
