---
title: make:module command
lang: en
---

# `make:module`

The central command is:

```bash
php artisan make:module Product [options]
```

`Product` is normalized to StudlyCase and is expected to map to `App\Models\Product` unless schema metadata is supplied directly.

## Available options

```text
--controller, -c       Controller subfolder
--api                  API controller mode
--requests, -r         Generate Store/Update FormRequests
--tests, -t            Force feature-test generation
--no-controller        Skip controller
--no-resource          Skip API resource
--no-dto               Skip DTO
--no-test              Skip feature test
--no-provider          Skip provider/bindings
--actions              Generate action classes
--no-actions           Skip action classes
--policy               Generate policy
--no-policy            Skip policy
--swagger, -sg         Generate OpenAPI annotation class
--no-swagger           Skip OpenAPI annotation class
--all, -a              Full API-oriented stack
--full, -f             Alias for full stack
--from-migration, -fm  Infer fields from a migration
--fields               Inline schema definition
--force                Overwrite generated files
```

Repository and service generation is the core behavior and is not disabled by the current command switches.
