---
title: Serviceها
lang: fa
---

# Serviceها

هر ماژول عادی Service Contract و Concrete Service دارد:

```text
app/Services/Contracts/ProductServiceInterface.php
app/Services/ProductService.php
```

Concrete از `BaseService` Publish‌شده Extend می‌کند.

## عملیات پایه

```text
index()
show(id)
store(payload)
update(id, payload)
destroy(id)
findDynamic(...)
getByDynamic(...)
repository()
```

BaseService Persistence را به Repository Delegates می‌کند.

## DTO

در حالت DTO، Service `ProductDTO|array` را می‌پذیرد و DTO را با `toArray()` Normalize می‌کند.

```bash
php artisan make:module Product --no-dto
```

در حالت بدون DTO، Store/Update روی Array-based data تولید می‌شوند.

در حالت معمول Service به `ProductRepositoryInterface` وابسته است؛ با `--no-provider` برای جلوگیری از وابستگی به Binding ثبت‌نشده، Concrete Repository استفاده می‌شود.
