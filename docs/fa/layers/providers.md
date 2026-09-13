---
title: Provider و Binding
lang: fa
---

# Provider و Binding

Module Provider، Contractها را به Concrete Repository و Service متصل می‌کند:

```php
$this->app->bind(ProductRepositoryInterface::class, ProductRepository::class);
$this->app->bind(ProductServiceInterface::class, ProductService::class);
```

Generator همچنین تلاش می‌کند Provider را متناسب با ساختار نسخه‌ی Laravel ثبت کند.

اگر `--no-provider` استفاده شود، Bindingها را باید دستی در Provider موجود پروژه ثبت کنی.
