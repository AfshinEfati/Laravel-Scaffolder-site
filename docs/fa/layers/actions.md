---
title: Actionها
lang: fa
---

# Actionها

Actionها Use Caseهای CRUD را در کلاس‌های کوچک و متمرکز جدا می‌کنند.

```php
final class CreateProductAction
{
    public function __invoke(ProductDTO $dto): Product
    {
        return $this->service->create($dto);
    }
}
```

Controller می‌تواند به‌جای مدیریت مستقیم Service، Action مناسب را صدا بزند تا لایه‌ی HTTP از عملیات Application جدا بماند.
