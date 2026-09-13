---
title: دستور make:module
lang: fa
---

# `make:module`

دستور اصلی پکیج:

```bash
php artisan make:module Product [options]
```

نام `Product` به StudlyCase تبدیل می‌شود و در حالت معمول به `App\Models\Product` اشاره دارد؛ مگر اینکه Schema را مستقیم یا از Migration بدهی.

## تمام Optionها

```text
--controller, -c       زیرپوشه Controller
--api                  تولید Controller به سبک API
--requests, -r         تولید Store/Update FormRequest
--tests, -t            اجبار به تولید Feature Test
--no-controller        عدم تولید Controller
--no-resource          عدم تولید API Resource
--no-dto               عدم تولید DTO
--no-test              عدم تولید Feature Test
--no-provider          عدم تولید Provider/Binding
--actions              تولید Actionها
--no-actions           عدم تولید Actionها
--policy               تولید Policy
--no-policy            عدم تولید Policy
--swagger, -sg         تولید Annotationهای OpenAPI
--no-swagger           عدم تولید Swagger Module
--all, -a              Stack کامل API
--full, -f             معادل Full Stack
--from-migration, -fm  خواندن Schema از Migration
--fields               تعریف Schema در CLI
--force                بازنویسی فایل‌های موجود
```

Repository و Service در جریان اصلی همیشه ساخته می‌شوند.
