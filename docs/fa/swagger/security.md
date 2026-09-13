---
title: امنیت و ENV
lang: fa
---

# امنیت و ENV

دو موضوع جدا در تنظیمات Swagger داریم: **تعریف Security Scheme داخل OpenAPI** و **محافظت از خود فایل `swagger.json`**.

## Security Scheme داخل Spec

Config پیش‌فرض یک Bearer Scheme دارد:

```php
'security' => [
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

`swagger:generate` این Schemeها را داخل `components.securitySchemes` قرار می‌دهد.

اگر پروژه از API Key، OAuth یا Scheme دیگری استفاده می‌کند، همین بخش را متناسب با API خودت تغییر بده.

## محافظت از فایل Spec

Path و وضعیت Secure بودن Spec در Config این‌طور تعریف شده‌اند:

```php
'spec' => [
    'path' => env('SWAGGER_SPEC_PATH', 'storage/swagger-ui'),
    'filename' => env('SWAGGER_SPEC_FILENAME', 'swagger.json'),
    'secure' => env('SWAGGER_SECURE_SPEC', false),
],
```

اگر `SWAGGER_SECURE_SPEC=true` باشد و از `SwaggerUIController::spec()` یا Route helper پکیج استفاده کنی، قبل از برگرداندن Spec بررسی می‌شود که Request با یکی از Guardهای تنظیم‌شده‌ی Laravel احراز هویت شده باشد.

Config فعلی همچنین `security.secure_spec` را با همان ENV نگه می‌دارد؛ ولی Controller و Trait مربوط به Serve کردن Spec مقدار `swagger.spec.secure` را می‌خوانند.

## نگه‌داشتن Authorization در UI

```env
SWAGGER_PERSIST_AUTH=true
```

این مقدار مربوط به رفتار UI برای Persist کردن اطلاعات Authorization است و با محافظت از Endpoint فایل Spec فرق دارد.

::: warning
اگر مستندات داخلی یا Endpointهای حساس داری، Public بودن `/docs/swagger.json` را به Default نسپار. Route را با Middleware مناسب پروژه Publish کن و فقط Schemeهای موردنیاز را داخل Spec قرار بده.
:::
