---
title: Controllers
lang: en
---

# Controllers

Controllers can be generated in API or web style and can optionally live under an additional subfolder.

```bash
php artisan make:module Product --api --controller=Admin
```

API controllers can use generated Form Requests, DTOs, Resources, Actions and Swagger annotations depending on enabled features.

```php
public function store(StoreProductRequest $request)
{
    $dto = ProductDTO::fromArray($request->validated());
    return new ProductResource(($this->createProduct)($dto));
}
```

The base controller namespace is discovered carefully so applications with a custom `App\Http\Controllers\Controller` namespace remain valid.
