---
title: DTOها
lang: fa
---

# DTOها

DTO به‌صورت پیش‌فرض فعال است و از Metadata فیلدها برای ساخت Propertyهای Typeدار استفاده می‌کند.

```bash
php artisan make:module Product --fields="name:string,price:decimal(10,2)"
```

نمونه‌ی استفاده:

```php
$dto = ProductDTO::fromArray($request->validated());
$product = $service->create($dto);
```

اگر معماری پروژه Array یا DTO Library دیگری دارد، `--no-dto` بده.
