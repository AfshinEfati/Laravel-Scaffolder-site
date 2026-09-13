---
title: --no-resource / -nr
lang: fa
---

# `--no-resource` / `-nr`

تولید Laravel API Resource را غیرفعال می‌کند:

```bash
php artisan make:module Product --no-resource
```

Controller Generator نیز از نبود Resource مطلع می‌شود تا کدی تولید نکند که به `ProductResource` ناموجود وابسته باشد.

این Option برای پروژه‌هایی مناسب است که Transformer یا Serializer اختصاصی دارند.

```bash
php artisan make:module Product --api --no-resource
```

`--all` و `--full` Resource را دوباره فعال می‌کنند.
