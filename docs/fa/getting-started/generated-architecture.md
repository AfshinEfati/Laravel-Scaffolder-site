---
title: معماری خروجی
lang: fa
---

# معماری خروجی

Scaffolder یک Framework جدید روی Laravel نمی‌سازد. خروجی‌اش همان کلاس‌های معمول Laravel است و بعد از Generate شدن، هر کدام را هر طور لازم باشد می‌توانی تغییر بدهی.

برای یک ماژول کامل `Product`، ساختار معمول تقریباً این شکلی است:

```text
app/
├── Actions/
│   ├── BaseAction.php
│   └── Product/
│       ├── ListProductAction.php
│       ├── ShowProductAction.php
│       ├── CreateProductAction.php
│       ├── UpdateProductAction.php
│       ├── DeleteProductAction.php
│       └── ListWithRelationsProductAction.php
├── DTOs/ProductDTO.php
├── Docs/ProductDoc.php
├── Http/
│   ├── Controllers/Api/V1/ProductController.php
│   ├── Requests/Product/StoreProductRequest.php
│   ├── Requests/Product/UpdateProductRequest.php
│   └── Resources/ProductResource.php
├── Policies/ProductPolicy.php
├── Providers/ProductServiceProvider.php
├── Repositories/Contracts/ProductRepositoryInterface.php
├── Repositories/Eloquent/ProductRepository.php
├── Services/Contracts/ProductServiceInterface.php
└── Services/ProductService.php

tests/Feature/ProductCrudTest.php
```

## هر لایه چه کاری دارد؟

| لایه | کاربرد |
| --- | --- |
| Repository | Queryها، Persistence، Dynamic Query و Criteria |
| Service | منطق Application و هماهنگی عملیات بالای Repository |
| DTO | انتقال داده بین Request و لایه Application با ساختار مشخص |
| Action | جدا کردن هر عملیات اصلی در یک کلاس کوچک‌تر و مشخص |
| Controller | گرفتن HTTP Request و برگرداندن Response |
| Form Request | Validation مربوط به Create و Update |
| Resource | شکل‌دادن خروجی API، Dateها، Statusها و Relationهای Loadشده |
| Provider | Binding کردن Interfaceها به پیاده‌سازی واقعی |
| Policy | نقطه شروع Authorization مربوط به Model |
| Feature Test | تست CRUD بر اساس Schema واقعی فیچر |
| Docs | مستندات OpenAPI تولیدشده برای ماژول |

## لازم نیست همه‌ی لایه‌ها را بسازی

ساختار بالا خروجی کامل است، نه اجبار معماری. مثلاً اگر DTO نمی‌خواهی `--no-dto` داری، اگر Action نمی‌خواهی `--no-actions` داری و اگر فقط بعضی قابلیت‌ها را لازم داری می‌توانی Command را دقیقاً همان‌طور تنظیم کنی.

مسیر هر لایه هم از `config/module-generator.php` قابل تغییر است؛ یعنی مجبور نیستی ساختار پوشه‌های پیش‌فرض پکیج را نگه داری.
