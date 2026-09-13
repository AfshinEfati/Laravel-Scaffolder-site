---
title: امنیت و ENV Swagger
lang: fa
---

# Security و Environment

Schema امنیت پیش‌فرض Bearer است:

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

ENVهای مهم:

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

اگر Documentation را در Production عمومی می‌کنی، آن را بخشی از Attack Surface برنامه حساب کن.
