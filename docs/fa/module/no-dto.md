---
title: --no-dto
lang: fa
---

# `--no-dto`

Module را بدون DTO تولید کن:

```bash
php artisan make:module Product --no-dto
```

Service، Action و Controller در این حالت به ورودی Array سازگار می‌شوند.

این Option برخلاف بیشتر Skip Flagها در Full Stack هم مقدارش حفظ می‌شود:

```bash
php artisan make:module Product --all --no-dto
```
