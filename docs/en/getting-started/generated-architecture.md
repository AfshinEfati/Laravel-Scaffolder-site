---
title: Generated architecture
lang: en
---

# Generated architecture

Laravel Scaffolder generates ordinary Laravel classes. There is no runtime module container hiding your feature code.

A full Product module with shipped paths looks similar to:

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
├── Repositories/
│   ├── Contracts/ProductRepositoryInterface.php
│   └── Eloquent/ProductRepository.php
└── Services/
    ├── Contracts/ProductServiceInterface.php
    └── ProductService.php

tests/Feature/ProductCrudTest.php
```

## Responsibility of each layer

| Layer | Responsibility |
| --- | --- |
| Repository | Eloquent persistence, dynamic queries and Criteria. |
| Service | Application coordination above repositories. |
| DTO | Typed request-to-application data boundary. |
| Action | Focused operations, including relation-aware listing. |
| Controller | HTTP transport and response coordination. |
| Form Request | Store/update validation. |
| API Resource | Field/date/status/relation transformation. |
| Provider | Repository/service contract bindings and registration. |
| Policy | Application authorization rules. |
| Feature Test | Schema-aware CRUD test scaffold. |
| Docs | Module-level OpenAPI documentation when enabled. |

All configurable layer roots come from `config/module-generator.php`, and published stubs let your project change generated shapes.
