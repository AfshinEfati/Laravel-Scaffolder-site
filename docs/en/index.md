---
title: Laravel Scaffolder
lang: en
---

# Laravel Scaffolder

## Generate complete Laravel feature stacks without hiding the code

Laravel Scaffolder turns repetitive feature setup into one explicit Artisan workflow. It generates repositories, services, DTOs, actions, controllers, requests, API resources, providers, policies, feature tests and OpenAPI documentation while keeping every generated file inside your application and fully editable.

```bash
composer require efati/laravel-scaffolder
php artisan make:model Product -m
php artisan make:module Product --all
```

The generator can discover schema information from a running Eloquent model, parse migrations, or accept an explicit `--fields` definition. That metadata is reused when building DTOs, validation rules, resources, tests and Swagger documentation.

## What makes it different

- **Explicit output** — generated classes are normal Laravel files, not runtime magic.
- **Layered architecture** — repository, service, DTO, action and transport layers can be generated together.
- **Schema intelligence** — field metadata can come from runtime database inspection, migrations or CLI schema definitions.
- **Safe regeneration** — existing files are preserved unless `--force` is passed.
- **OpenAPI tooling** — JSON generation and a standalone Swagger UI are included without requiring L5-Swagger.
- **Configurable defaults** — paths, namespaces, controller style, Swagger appearance and security can be changed.

::: tip Current compatibility
Laravel 10–13, PHP 8.1–8.5 and Composer 2.x are supported by the current package metadata.
:::

Start with [Installation](/en/getting-started/installation) or jump directly to the [`make:module` command](/en/module/overview).
