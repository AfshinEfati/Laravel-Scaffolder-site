---
title: Repositoryها
lang: fa
---

# Repositoryها

Repository یکی از دو لایه‌ای است که در اجرای عادی `make:module` همیشه ساخته می‌شود.

برای `Product` این دو فایل را می‌گیری:

```text
app/Repositories/Contracts/ProductRepositoryInterface.php
app/Repositories/Eloquent/ProductRepository.php
```

Contract از `BaseRepositoryInterface` ارث می‌برد و پیاده‌سازی Eloquent هم روی `BaseRepository` ساخته می‌شود.

## چه کاری قرار است اینجا انجام شود؟

Query و کار مستقیم با Persistence بهتر است داخل Repository بماند. Service و Controller لازم نیست بدانند داده دقیقاً چطور از Eloquent گرفته یا ذخیره می‌شود.

بعد از Publish کردن فایل‌های پایه:

```bash
php artisan vendor:publish --tag=module-generator
```

`BaseRepository` داخل خود پروژه‌ات قرار می‌گیرد و متدهای عمومی‌ای مثل این‌ها را در اختیار Repositoryهای ماژول‌ها می‌گذارد:

```text
getAll()
find(id)
findDynamic(...)
getByDynamic(...)
store(data)
update(id, data)
delete(id)
pushCriteria(...)
popCriteria(...)
skipCriteria(...)
```

## Dynamic Query

`findDynamic()` و `getByDynamic()` فقط یک `where` ساده نیستند. می‌توانند Eager Load، `whereIn`، `whereNotIn`، `between`، `null`، حالت‌های `or*` و Raw Conditionها را هم بگیرند.

این یعنی برای Queryهای رایج لازم نیست در هر Repository دوباره همان Boilerplate را بنویسی.

## Criteria

Criteriaهایی که روی Repository Push کرده‌ای قبل از Readها روی Builder اعمال می‌شوند. اگر در یک Query خاص نمی‌خواهی Criteria اجرا شود، `skipCriteria()` برای همین است.

برای جزئیات بیشتر، بخش [Criteria Pattern](/fa/utilities/criteria) را ببین.
