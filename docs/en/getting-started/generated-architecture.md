---
title: Generated architecture
lang: en
---

# Generated architecture

Laravel Scaffolder generates ordinary Laravel classes. There is no runtime module container that hides your feature code.

A full Product module with the shipped paths looks similar to:

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

## Responsibility of each layer

| Layer | Responsibility |
| --- | --- |
| Repository | Eloquent persistence and reusable queries. |
| Service | Application/business coordination above repositories. |
| DTO | Typed boundary for input data when enabled. |
| Action | Focused application operation classes. |
| Controller | HTTP transport and response coordination. |
| Form Request | Validation and authorization entry point for requests. |
| API Resource | Response transformation. |
| Provider | Repository/service contract bindings. |
| Policy | Authorization rules to be completed by the application. |
| Feature Test | Generated CRUD-oriented test starting point. |
| Docs | Module-level OpenAPI documentation when enabled. |

Every root path is configurable. You can also publish the stubs if your team wants a different generated shape.
