---
title: Controllerها
lang: fa
---

# Controllerها

Controller به سبک API یا Web ساخته می‌شود و می‌تواند Subfolder داشته باشد:

```bash
php artisan make:module Product --api --controller=Admin
```

بسته به Optionها، API Controller می‌تواند Form Request، DTO، Resource، Action و Swagger Annotation را استفاده کند.

```php
public function store(StoreProductRequest $request)
{
    $dto = ProductDTO::fromArray($request->validated());
    return new ProductResource(($this->createProduct)($dto));
}
```
