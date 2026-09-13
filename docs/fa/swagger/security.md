---
title: امنیت و Environment
lang: fa
---

# امنیت و Environment

تنظیمات Security Scheme و نحوه نمایش Authorization در Swagger زیر بخش `module-generator.swagger.security` قرار دارند.

## Scheme پیش‌فرض

Config پیش‌فرض یک Bearer Scheme تعریف می‌کند:

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

`swagger:generate` Schemeهای تنظیم‌شده را به بخش `components.securitySchemes` در OpenAPI JSON اضافه می‌کند.

## تنظیمات مرتبط

```env
SWAGGER_PERSIST_AUTH=true
SWAGGER_SPEC_PATH=storage/swagger-ui
SWAGGER_SPEC_FILENAME=swagger.json
SWAGGER_SECURE_SPEC=false
```

`SWAGGER_PERSIST_AUTH` رفتار UI برای نگه‌داشتن اطلاعات Authorization را کنترل می‌کند و `SWAGGER_SECURE_SPEC` بخشی از تنظیمات مربوط به محافظت از Spec است.

::: tip
مقادیر واقعی محیط Production را داخل Exampleهای مستندات قرار ندهید؛ Exampleها باید قابل انتشار باقی بمانند.
:::
