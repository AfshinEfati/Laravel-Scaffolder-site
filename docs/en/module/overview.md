---
title: make:module command
lang: en
---

# `make:module` command

`make:module` is the main entry point of Laravel Scaffolder. It builds the application layers around a model while keeping the generated code inside your Laravel project.

```bash
php artisan make:module Product
```

The module name is normalized with Laravel's `Str::studly()`, and the generator looks for the model under the configured base namespace, for example `App\Models\Product`.

## What is always generated?

A repository contract/implementation and a service layer are the foundation of every normal module generation. Other layers are controlled by configuration and CLI switches.

With the shipped configuration, a plain command uses an **API controller** and generates the following effective stack:

```text
Repository
Service
DTO
API Resource
Provider / bindings
API Controller
Store + Update Form Requests
Actions
Feature Test
```

Requests and actions deserve special attention: their config defaults are `false`, but the shipped `controller_type` is `api`. API mode enables requests and actions automatically.

## Full signature

```text
make:module {name}
  --controller= | -c
  --api
  --requests | -r
  --tests | -t
  --no-controller | -nc
  --no-resource | -nr
  --no-dto | -nd
  --no-test | -nt
  --no-provider | -np
  --actions
  --no-actions
  --policy
  --no-policy
  --swagger | -sg
  --no-swagger
  --all | -a
  --full | -f
  --from-migration= | -fm
  --fields=
  --force
```

Every option above has its own page in this section.

## Schema sources

Generated validation, DTOs, resources, tests, relations and OpenAPI metadata need field information. The command can obtain it from three places:

1. explicit `--fields` metadata;
2. runtime/model database inspection;
3. migration parsing.

When `--fields` is supplied it is treated as the explicit source of truth. Without it, runtime and migration metadata are merged when available.

## Safe by default

Existing generated files are not silently replaced. If a target file exists, the generator preserves it unless you intentionally pass `--force`.

```bash
php artisan make:module Product --force
```

::: warning
`--force` is regeneration, not a merge operation. Review local changes before overwriting generated files.
:::

## Full-stack precedence

`--all` and `--full` are applied late and re-enable controller, requests, tests, resources, providers, actions, policies and Swagger. DTO is the one important exception: `--all --no-dto` keeps DTO generation disabled.

See [`--all / --full`](/en/module/full-stack) for the complete precedence rules.

## Common recipes

```bash
# Current configured defaults
php artisan make:module Product

# Explicit complete stack
php artisan make:module Product --all

# Complete stack without DTOs
php artisan make:module Product --all --no-dto

# Build from inline schema without an existing model
php artisan make:module Product --api \
  --fields="name:string:unique,price:decimal(10,2),is_active:boolean"

# Read a specific migration
php artisan make:module Product \
  --from-migration=database/migrations/2026_01_01_000000_create_products_table.php

# Rebuild an existing generated stack
php artisan make:module Product --all --force
```
