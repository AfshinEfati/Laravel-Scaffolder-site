---
title: --requests / -r
lang: fa
---

# `--requests` / `-r`

Store و Update Form Request را داخل پوشه همان ماژول می‌سازد:

```bash
php artisan make:module Product --requests
```

```text
app/Http/Requests/Product/StoreProductRequest.php
app/Http/Requests/Product/UpdateProductRequest.php
```

Ruleها از Schema می‌توانند Required/Nullable، Type، Unique و Foreign `exists` را بسازند. Update Request نیز Unique را برای Record فعلی Adjust می‌کند.

`--api`، `--all` و `--full` Requestها را فعال می‌کنند.

::: info
Option `--no-requests` در Signature فعلی وجود ندارد.
:::
