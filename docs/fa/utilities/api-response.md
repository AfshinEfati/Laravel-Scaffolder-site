---
title: API Response Helper
lang: fa
---

# API Response Helper

Publish Tag اصلی `App\Helpers\ApiResponseHelper` را به‌عنوان نقطه شروع Response Contract وارد پروژه می‌کند:

```bash
php artisan vendor:publish --tag=module-generator
```

## Response موفق و خطا

```php
return ApiResponseHelper::successResponse(
    data: $product,
    message: 'created',
    code: 201,
);
```

```php
return ApiResponseHelper::errorResponse('invalid request', 422, $errors);
return ApiResponseHelper::unauthorized();
return ApiResponseHelper::forbidden();
return ApiResponseHelper::notFound();
```

## Date

```php
ApiResponseHelper::formatDates($model->created_at);
```

Gregorian Date/Time، `fa_date` جلالی و ISO را برمی‌گرداند و Carbon، DateTime، Goli، Timestamp و String را می‌پذیرد.

## Boolean Status

```php
ApiResponseHelper::getStatus(true);
```

خروجی `name`، `fa_name` و `code` دارد.

## مثال Cabin

نسخه فعلی Helper یک `getCabinType()` با Mapping کدهای Y/W/C/F هم دارد. این قسمت یک Domain Example سفر/پرواز است؛ اگر پروژه شما چنین دامنه‌ای ندارد آن را حذف یا جایگزین کنید.

چون Helper داخل Application Publish می‌شود، تغییر آن Vendor Code را دستکاری نمی‌کند.
