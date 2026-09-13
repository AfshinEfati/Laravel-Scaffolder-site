---
title: Configuration
lang: en
---

# Configuration

Publish the package configuration when you want project-level defaults:

```bash
php artisan vendor:publish --tag=module-generator
```

The important top-level keys are:

```php
return [
    'base_namespace' => 'App',
    'paths' => [/* generated class paths */],
    'tests' => ['feature' => 'tests/Feature'],
    'defaults' => [/* make:module behavior */],
    'swagger' => [/* UI, spec and security settings */],
    'logging_channel' => env('MODULE_GENERATOR_LOG_CHANNEL'),
];
```

The shipped defaults generate a controller, feature test, API resource, DTO and provider. `controller_type` is `api`, so a plain `make:module` call also enables form requests and actions through API mode.

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

CLI switches always take precedence over these defaults. See the [configuration reference](/en/reference/configuration) for every key.
