---
title: Installation
lang: en
---

# Installation

Install Laravel Scaffolder with Composer:

```bash
composer require efati/laravel-scaffolder
```

Laravel package discovery registers `Efati\ModuleGenerator\ModuleGeneratorServiceProvider` automatically, so no manual provider registration is required in a normal Laravel application.

## Publish the base files

The package can publish its base repositories, base services, criteria interface, API response helper and configuration file:

```bash
php artisan vendor:publish --tag=module-generator
```

This may create files such as:

```text
app/Repositories/Eloquent/BaseRepository.php
app/Repositories/Contracts/BaseRepositoryInterface.php
app/Repositories/Criteria/CriteriaInterface.php
app/Services/BaseService.php
app/Services/Contracts/BaseServiceInterface.php
app/Helpers/ApiResponseHelper.php
config/module-generator.php
```

To publish the generator stubs for customization:

```bash
php artisan vendor:publish --tag=module-generator-stubs
```

See [Publishing & custom stubs](/en/getting-started/publishing) before modifying the templates.
