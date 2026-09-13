---
title: --no-provider / -np
lang: fa
---

# `--no-provider` / `-np`

Provider ماژول و Binding خودکار Contractها را حذف می‌کند:

```bash
php artisan make:module Product --no-provider
```

Command هشدار می‌دهد که Bindingهای Repository و Service را باید خودتان مدیریت کنید. Service Generator نیز برای این مسیر استفاده از Interface را غیرفعال می‌کند تا کد تولیدی به Binding ثبت‌نشده وابسته نباشد.

برای Binding مرکزی می‌توانید در Provider موجود پروژه بنویسید:

```php
$this->app->bind(ProductRepositoryInterface::class, ProductRepository::class);
$this->app->bind(ProductServiceInterface::class, ProductService::class);
```

`--all` و `--full` Provider را دوباره فعال می‌کنند.
