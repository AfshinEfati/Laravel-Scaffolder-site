---
title: Repositories
lang: en
---

# Repositories

Every module generates a repository contract and Eloquent implementation.

```text
app/Repositories/Contracts/ProductRepositoryInterface.php
app/Repositories/Eloquent/ProductRepository.php
```

The concrete repository extends the package's published `BaseRepository`, giving modules a consistent persistence API and a natural place for model-specific queries.

```php
final class ProductRepository extends BaseRepository implements ProductRepositoryInterface
{
    public function __construct(Product $model)
    {
        parent::__construct($model);
    }
}
```

For reusable query filters, see the [Criteria pattern](/en/utilities/criteria).
