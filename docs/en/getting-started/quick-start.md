---
title: Quick start
lang: en
---

# Quick start

The smallest normal workflow is to create a model and migration, then scaffold the feature around it.

```bash
php artisan make:model Product -m
php artisan migrate
php artisan make:module Product
```

With the shipped configuration, the command uses API mode and produces repository/service layers plus DTO, resource, provider, controller, requests, actions and a feature test.

## Generate the complete stack

```bash
php artisan make:module Product --all
```

This additionally enables policy and Swagger generation. See the [`--all / --full`](/en/module/full-stack) page for the exact precedence rules.

## Generate before a model exists

Provide the schema directly:

```bash
php artisan make:module Product --api \
  --fields="name:string:unique,price:decimal(10,2),stock:integer,is_active:boolean"
```

Or point to an existing migration:

```bash
php artisan make:module Product \
  --from-migration=database/migrations/2026_09_01_000000_create_products_table.php
```

A normal model-less generation fails when neither inline fields nor an explicit migration hint is available.

## Start Swagger UI

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```

## Regenerating

Laravel Scaffolder does not silently overwrite generated files. When regeneration is intentional:

```bash
php artisan make:module Product --all --force
```

Review application changes before forcing replacements.
