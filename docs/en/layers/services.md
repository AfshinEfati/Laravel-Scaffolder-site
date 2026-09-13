---
title: Services
lang: en
---

# Services

The service layer coordinates application/business operations above repositories.

```text
app/Services/Contracts/ProductServiceInterface.php
app/Services/ProductService.php
```

When providers are enabled, the generated service contract and implementation are bound in the module provider. When DTOs are enabled, service method signatures are generated to work with the module DTO; otherwise they use arrays.

```php
$product = $productService->create($dto);
```

Keep query persistence in repositories and use services to coordinate application behavior.
