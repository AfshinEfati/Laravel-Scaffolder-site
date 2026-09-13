---
title: Actionها
lang: fa
---

# Actionها

Action Layer وقتی مفید است که نخواهی همه‌ی عملیات CRUD مستقیم داخل Controller یا Service صدا زده شوند.

برای `Product` این ساختار ساخته می‌شود:

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

هر Action فقط یک کار مشخص را هماهنگ می‌کند و در نهایت از Service استفاده می‌کند.

`ListWithRelationsProductAction` عمداً از `ListProductAction` جداست تا Flow لیست همراه Relation باعث نشود Action ساده‌ی List مسئولیت اضافه بگیرد.

## DTO و Action

Create و Update اگر DTO فعال باشد DTO-aware هستند. با این دستور:

```bash
php artisan make:module Product --no-dto
```

همان Actionها برای Payload آرایه‌ای ساخته می‌شوند.

## چه زمانی خودکار فعال می‌شود؟

API Mode Actionها را روشن می‌کند. اگر API Controller می‌خواهی ولی Action Layer نمی‌خواهی:

```bash
php artisan make:module Product --api --no-actions
```
