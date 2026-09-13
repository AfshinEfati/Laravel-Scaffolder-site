---
title: Serviceها
lang: fa
---

# Serviceها

Service Layer عملیات Application/Business را بالای Repository هماهنگ می‌کند.

```text
app/Services/Contracts/ProductServiceInterface.php
app/Services/ProductService.php
```

وقتی Provider فعال است، Contract و Concrete Service Binding می‌شوند. با DTO فعال، Signatureها بر اساس DTO ساخته می‌شوند و بدون DTO از Array استفاده می‌کنند.

```php
$product = $productService->create($dto);
```

Query و Persistence را در Repository نگه دار و Service را برای هماهنگی رفتار Application استفاده کن.
