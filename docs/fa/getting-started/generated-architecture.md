---
title: معماری خروجی
lang: fa
---

# معماری خروجی

در حالت کامل، خروجی عمداً به لایه‌های معمول Laravel تقسیم می‌شود:

```text
app/
├── Actions/Product/
├── DTOs/ProductDTO.php
├── Docs/ProductDoc.php
├── Http/
│   ├── Controllers/Api/V1/ProductController.php
│   ├── Requests/StoreProductRequest.php
│   ├── Requests/UpdateProductRequest.php
│   └── Resources/ProductResource.php
├── Policies/ProductPolicy.php
├── Providers/ProductServiceProvider.php
├── Repositories/
│   ├── Contracts/ProductRepositoryInterface.php
│   └── Eloquent/ProductRepository.php
└── Services/
    ├── Contracts/ProductServiceInterface.php
    └── ProductService.php

tests/Feature/ProductTest.php
```

Repository و Service هسته‌ی ثابت `make:module` هستند. سایر لایه‌ها با Config و Flagهای CLI کنترل می‌شوند.

تمام مسیرها در `config/module-generator.php` قابل تغییرند.
