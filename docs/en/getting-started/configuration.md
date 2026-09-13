---
title: Configuration
lang: en
---

# Configuration

Publish the package config with:

```bash
php artisan vendor:publish --tag=module-generator
```

The generated `config/module-generator.php` controls namespaces, output paths, command defaults, Swagger UI behavior and the logging channel used by generated actions.

## Base namespace

```php
'base_namespace' => 'App',
```

The generator expects models below `{base_namespace}\Models` and uses the same root when composing generated namespaces.

## Output paths

```php
'paths' => [
    'repository' => [
        'eloquent' => 'Repositories/Eloquent',
        'contracts' => 'Repositories/Contracts',
    ],
    'service' => [
        'concretes' => 'Services',
        'contracts' => 'Services/Contracts',
    ],
    'dto' => 'DTOs',
    'provider' => 'Providers',
    'controller' => [
        'api' => 'Http/Controllers/Api/V1',
        'web' => 'Http/Controllers',
    ],
    'resource' => 'Http/Resources',
    'form_request' => 'Http/Requests',
    'actions' => 'Actions',
    'docs' => 'Docs',
],
```

Feature tests use a project-root-relative path:

```php
'tests' => ['feature' => 'tests/Feature'],
```

## Command defaults

```php
'defaults' => [
    'with_controller' => true,
    'with_form_requests' => false,
    'with_unit_test' => true,
    'with_resource' => true,
    'with_dto' => true,
    'with_provider' => true,
    'with_actions' => false,
    'controller_middleware' => [],
    'controller_type' => 'api',
],
```

CLI switches modify these values for one command invocation. API mode has additional behavior: it enables requests and actions unless actions are explicitly disabled.

## Swagger

The `swagger` section controls:

- `theme`: `vanilla`, `tailwind`, `dark`;
- complete UI color palette;
- UI and monospace fonts;
- dark-mode enable/default/persistence;
- title, description, models/examples and auth persistence;
- standalone server host/port;
- spec path, filename and secure flag;
- authentication middleware and OpenAPI security schemes.

See the [configuration reference](/en/reference/configuration) for the full key map.

## Logging

```php
'logging_channel' => env('MODULE_GENERATOR_LOG_CHANNEL'),
```

Generated action infrastructure can use this channel when application logging is needed.
