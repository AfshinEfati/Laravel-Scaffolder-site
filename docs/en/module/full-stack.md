---
title: --all / --full
lang: en
---

# `--all` / `--full`

Generate the complete module stack.

```bash
php artisan make:module Product --all
```

Aliases:

```bash
php artisan make:module Product -a
php artisan make:module Product --full
php artisan make:module Product -f
```

## What full stack enables

```text
Repository          always
Service             always
Controller          yes
Form Requests       yes
Feature Test        yes
API Resource        yes
Provider            yes
Actions             yes
Policy              yes
Swagger             yes
Controller type     API
```

DTO generation is the exception: with the shipped config it is enabled, but full-stack mode does not forcibly reset the DTO toggle. `--all --no-dto` remains DTO-free.

## Typical output

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

## Precedence

Full-stack logic is applied late and re-enables controller, requests, tests, resources, providers, actions, policies and Swagger even if their negative flags were supplied earlier.

```bash
php artisan make:module Product --all --no-actions
```

Actions are still generated.

DTO is the exception:

```bash
php artisan make:module Product --all --no-dto
```

DTO generation remains disabled and affected layers use array-based data.
