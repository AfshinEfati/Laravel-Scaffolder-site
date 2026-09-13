---
title: API response helper
lang: en
---

# API response helper

The `module-generator` publish tag includes `App\Helpers\ApiResponseHelper` as an application-owned starting point for consistent JSON responses.

```bash
php artisan vendor:publish --tag=module-generator
```

## Success and error responses

```php
return ApiResponseHelper::successResponse(
    data: $product,
    message: 'created',
    code: 201,
);
```

Output shape:

```json
{
  "success": true,
  "message": "created",
  "data": {}
}
```

Errors:

```php
return ApiResponseHelper::errorResponse('invalid request', 422, $errors);
return ApiResponseHelper::unauthorized();
return ApiResponseHelper::forbidden();
return ApiResponseHelper::notFound();
```

## Date normalization

```php
ApiResponseHelper::formatDates($model->created_at);
```

Returns Gregorian date/time, Jalali `fa_date` and ISO-8601 values. It accepts Carbon, DateTime, Goli, timestamp/string values and returns `null` when parsing cannot be completed.

## Boolean status

```php
ApiResponseHelper::getStatus(true);
```

returns `name`, Persian `fa_name` and numeric `code`.

## Bundled cabin example

The current published helper also contains `getCabinType()` with Y/W/C/F airline cabin mappings. Treat this as a domain example: remove or replace it if your application is unrelated to travel.

::: tip
Because this helper is published into your application, customizing its response contract does not modify vendor code.
:::
