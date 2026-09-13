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

`--all` is implemented as an alias for full-stack mode, so both forms select the same full-stack behavior.

## What full stack enables

The full-stack block explicitly enables:

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

DTO generation is slightly different: full-stack mode does **not** forcibly reset the DTO toggle. With the shipped configuration DTOs are enabled, so a normal `--all` command includes them. But an explicit `--no-dto` remains effective even with `--all` or `--full`.

```bash
php artisan make:module Product --all --no-dto
```

That produces the full stack without `ProductDTO`, and the affected generated layers use array-based data instead.

## Typical output

With the shipped defaults, a normal full-stack command creates a structure similar to:

```text
app/
├── Actions/Product/
├── DTOs/ProductDTO.php
├── Docs/ProductDoc.php
├── Http/Controllers/Api/V1/ProductController.php
├── Http/Requests/StoreProductRequest.php
├── Http/Requests/UpdateProductRequest.php
├── Http/Resources/ProductResource.php
├── Policies/ProductPolicy.php
├── Providers/ProductServiceProvider.php
├── Repositories/Contracts/ProductRepositoryInterface.php
├── Repositories/Eloquent/ProductRepository.php
├── Services/Contracts/ProductServiceInterface.php
└── Services/ProductService.php

tests/Feature/ProductTest.php
```

## Precedence

Full-stack logic is applied late in `make:module`. It therefore re-enables controller, requests, tests, resources, providers, actions, policies and Swagger even if their negative flags were also supplied.

```bash
php artisan make:module Product --all --no-actions
```

Actions are still generated.

The exception is DTO generation:

```bash
php artisan make:module Product --all --no-dto
```

DTO generation remains disabled.

If you need a mostly-complete but highly customized stack, you can either combine `--all` with `--no-dto`, or start from the normal command and choose the exact positive/negative switches you need.

```bash
php artisan make:module Product --api --policy --no-actions --no-swagger
```
