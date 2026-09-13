---
title: API Response Helper
lang: fa
---

# API Response Helper

وقتی Tag اصلی پکیج را Publish می‌کنی، یک `ApiResponseHelper` هم داخل Application قرار می‌گیرد:

```bash
php artisan vendor:publish --tag=module-generator
```

مسیر پیش‌فرض:

```text
app/Helpers/ApiResponseHelper.php
```

هدفش این است که یک نقطه شروع برای شکل Responseهای API داشته باشی. چون فایل داخل `app/` است، بعد از Publish کاملاً متعلق به پروژه‌ی توست.

## Response موفق

```php
return ApiResponseHelper::successResponse(
    data: $product,
    message: 'created',
    code: 201,
);
```

ساختار خروجی:

```json
{
  "success": true,
  "message": "created",
  "data": {}
}
```

## Response خطا

```php
return ApiResponseHelper::errorResponse('invalid request', 422, $errors);
return ApiResponseHelper::unauthorized();
return ApiResponseHelper::forbidden();
return ApiResponseHelper::notFound();
```

## Format کردن Date

```php
ApiResponseHelper::formatDates($model->created_at);
```

این متد Carbon، `DateTimeInterface`، Goli، Timestamp و String را قبول می‌کند و خروجی استانداردی شامل Date، Time، `fa_date` و ISO می‌دهد.

## تبدیل Boolean به Status قابل نمایش

```php
ApiResponseHelper::getStatus(true);
```

خروجی دارای `name`، `fa_name` و `code` است. Resource Generator برای فیلدهای Boolean هم می‌تواند از همین Helper استفاده کند.

## `getCabinType()` چرا اینجاست؟

نسخه فعلی Helper یک Mapping نمونه برای کدهای Cabin پرواز (`Y/W/C/F`) دارد. این بخش یک **Domain Example** است، نه چیزی که همه‌ی پروژه‌ها باید نگه دارند.

اگر پروژه‌ات هیچ ربطی به پرواز ندارد، خیلی ساده حذفش کن یا با Helperهای Domain خودت جایگزینش کن. چون این فایل داخل Application Publish شده، برای این تغییر لازم نیست Vendor Code را دست بزنی.
