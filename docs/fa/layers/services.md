---
title: Serviceها
lang: fa
---

# Serviceها

کنار هر Repository یک Service و Contract آن هم ساخته می‌شود:

```text
app/Services/Contracts/ProductServiceInterface.php
app/Services/ProductService.php
```

`ProductService` از `BaseService` استفاده می‌کند و قرار است منطق Application بالای Repository اینجا جمع شود.

## متدهای پایه

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

Service خودش Query دیتابیس نمی‌زند؛ کار Persistence را به Repository می‌سپارد. اگر بعداً منطق‌هایی مثل محاسبه، هماهنگی چند Repository یا اجرای Ruleهای Application اضافه کنی، Service جای طبیعی آن‌هاست.

## وقتی DTO فعال است

Service برای `store` و `update` می‌تواند `ProductDTO|array` بگیرد. اگر DTO دریافت کند، قبل از ارسال به Repository با `toArray()` آن را Normalize می‌کند.

```bash
php artisan make:module Product --no-dto
```

با `--no-dto` کد تولیدشده از اول برای Payload آرایه‌ای ساخته می‌شود.

## Interface یا Concrete Repository؟

در حالت معمول Service به `ProductRepositoryInterface` وابسته است و Provider آن را Bind می‌کند. اگر `--no-provider` بدهی، Generator برای اینکه Dependency بدون Binding باقی نماند، Service را به Concrete Repository وصل می‌کند.
