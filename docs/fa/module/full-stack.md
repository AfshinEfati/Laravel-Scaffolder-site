---
title: --all / --full
lang: fa
---

# `--all` / `--full`

```bash
php artisan make:module Product --all
```

Aliasها:

```bash
php artisan make:module Product -a
php artisan make:module Product --full
php artisan make:module Product -f
```

## مواردی که صریحاً فعال می‌شوند

```text
Repository          همیشه
Service             همیشه
Controller          بله
Form Requests       بله
Feature Test        بله
API Resource        بله
Provider            بله
Actions             بله
Policy              بله
Swagger             بله
Controller type     API
```

DTO استثناست: با Config پیش‌فرض فعال است، اما Full Stack مقدار DTO را اجباراً Reset نمی‌کند. بنابراین:

```bash
php artisan make:module Product --all --no-dto
```

Stack کامل بدون DTO می‌سازد.

## خروجی معمول

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

Full Stack در انتها Controller/Request/Test/Resource/Provider/Action/Policy/Swagger را دوباره فعال می‌کند؛ `--no-dto` استثنای مهم است.
