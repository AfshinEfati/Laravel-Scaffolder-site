---
title: Swagger security and environment
lang: en
---

# Security and environment settings

The package defines bearer authentication by default:

```php
'security' => [
    'auth_middleware' => env('SWAGGER_AUTH_MIDDLEWARE', 'auth,auth:api,auth:sanctum'),
    'default' => 'bearerAuth',
    'schemes' => [
        'bearerAuth' => [
            'type' => 'http',
            'scheme' => 'bearer',
            'bearer_format' => 'JWT',
        ],
    ],
],
```

Useful environment settings include:

```env
SWAGGER_SECURE_SPEC=false
SWAGGER_PERSIST_AUTH=true
SWAGGER_SHOW_MODELS=true
SWAGGER_SHOW_EXAMPLES=true
SWAGGER_SPEC_PATH=storage/swagger-ui
SWAGGER_SPEC_FILENAME=swagger.json
SWAGGER_SERVER_HOST=localhost
SWAGGER_SERVER_PORT=8000
```

Treat generated documentation as part of your application's attack surface when deploying it outside local development.
