---
title: Security & environment
lang: en
---

# Security & environment

Laravel Scaffolder can expose security schemes in the generated OpenAPI document and control whether the specification itself should be treated as protected configuration.

## Default bearer scheme

The shipped config defines a bearer token scheme:

```php
'security' => [
    'auth_middleware' => env(
        'SWAGGER_AUTH_MIDDLEWARE',
        'auth,auth:api,auth:sanctum'
    ),
    'default' => 'bearerAuth',
    'secure_spec' => env('SWAGGER_SECURE_SPEC', false),
    'schemes' => [
        'bearerAuth' => [
            'type' => 'http',
            'scheme' => 'bearer',
            'bearer_format' => 'JWT',
        ],
    ],
],
```

`swagger:generate` copies configured schemes into the OpenAPI `components.securitySchemes` section.

## Persisting authorization in the UI

```env
SWAGGER_PERSIST_AUTH=true
```

This controls the UI preference for remembering authorization data between interactions.

## Specification location

```env
SWAGGER_SPEC_PATH=storage/swagger-ui
SWAGGER_SPEC_FILENAME=swagger.json
SWAGGER_SECURE_SPEC=false
```

Do not put production secrets in Swagger descriptions, examples or generated specifications. OpenAPI files are documentation artifacts and may be served to other users or systems.
