---
title: Actions
lang: en
---

# Actions

Action generation creates focused operation classes for CRUD workflows. Depending on schema relations, list actions may include relation-aware behavior.

```php
final class CreateProductAction
{
    public function __invoke(ProductDTO $dto): Product
    {
        return $this->service->create($dto);
    }
}
```

API controllers can delegate to actions instead of directly coordinating services, keeping transport concerns separate from application operations.
