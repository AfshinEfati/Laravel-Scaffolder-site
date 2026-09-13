---
title: DTOs
lang: en
---

# DTOs

DTO generation is enabled by default.

```bash
php artisan make:module Product --fields="name:string,price:decimal(10,2)"
```

Field metadata is converted into typed DTO properties where possible. The DTO becomes the data boundary used by generated services and actions.

```php
$dto = ProductDTO::fromArray($request->validated());
$product = $service->create($dto);
```

Disable the layer with `--no-dto` when your project intentionally uses arrays or another DTO package.
