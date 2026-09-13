---
title: معماری خروجی
lang: fa
---

# معماری خروجی

Laravel Scaffolder کلاس‌های عادی Laravel تولید می‌کند؛ Feature پشت Runtime Magic یا Module Container پنهان نمی‌شود.

نمونه Stack کامل Product:

```text
app/
├── Actions/
│   ├── BaseAction.php
│   └── Product/
│       ├── ListProductAction.php
│       ├── ShowProductAction.php
│       ├── CreateProductAction.php
│       ├── UpdateProductAction.php
│       ├── DeleteProductAction.php
│       └── ListWithRelationsProductAction.php
├── DTOs/ProductDTO.php
├── Docs/ProductDoc.php
├── Http/
│   ├── Controllers/Api/V1/ProductController.php
│   ├── Requests/Product/StoreProductRequest.php
│   ├── Requests/Product/UpdateProductRequest.php
│   └── Resources/ProductResource.php
├── Policies/ProductPolicy.php
├── Providers/ProductServiceProvider.php
├── Repositories/Contracts/ProductRepositoryInterface.php
├── Repositories/Eloquent/ProductRepository.php
├── Services/Contracts/ProductServiceInterface.php
└── Services/ProductService.php

tests/Feature/ProductCrudTest.php
```

## مسئولیت لایه‌ها

| لایه | مسئولیت |
| --- | --- |
| Repository | Persistence، Queryهای Dynamic و Criteria |
| Service | هماهنگی Application بالای Repository |
| DTO | مرز داده Typed بین Request و Application |
| Action | عملیات متمرکز، از جمله ListWithRelations |
| Controller | Transport HTTP و Response |
| Form Request | Validation برای Store/Update |
| Resource | Transform فیلد، Date، Status و Relation |
| Provider | Binding Contractها و Registration |
| Policy | Authorization پروژه |
| Feature Test | Scaffold تست CRUD بر اساس Schema |
| Docs | OpenAPI مربوط به ماژول |

Root مسیرها از Config قابل تغییر است و Stubهای Publish‌شده شکل خروجی را قابل شخصی‌سازی می‌کنند.
