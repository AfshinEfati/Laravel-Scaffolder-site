---
title: Installation
lang: en
---

# Installation

Install Laravel Scaffolder with Composer:

```bash
composer require efati/laravel-scaffolder
```

Laravel package discovery registers `Efati\ModuleGenerator\ModuleGeneratorServiceProvider` automatically. In a normal Laravel application you do not need to add the provider manually.

## Requirements

The current package metadata supports:

```text
PHP      8.1, 8.2, 8.3, 8.4, 8.5
Laravel  10, 11, 12, 13
Composer 2.x recommended
```

## Publish the base application files

```bash
php artisan vendor:publish --tag=module-generator
```

This publishes the package configuration and application-level base classes:

```text
config/module-generator.php
app/Repositories/Eloquent/BaseRepository.php
app/Repositories/Contracts/BaseRepositoryInterface.php
app/Repositories/Criteria/CriteriaInterface.php
app/Services/BaseService.php
app/Services/Contracts/BaseServiceInterface.php
app/Helpers/ApiResponseHelper.php
```

## Optional: publish generator stubs

```bash
php artisan vendor:publish --tag=module-generator-stubs
```

Customizable module templates are copied to:

```text
resources/stubs/module-generator/
```

## Verify the installation

```bash
php artisan list | grep -E 'make:module|swagger:'
```

You should see `make:module`, `swagger:init`, `swagger:generate`, `swagger:ui` and `swagger:config`. The legacy `make:swagger` command is also registered for compatibility.

Next: [Quick start](/en/getting-started/quick-start).
