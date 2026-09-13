---
title: --controller
lang: en
---

# `--controller` / `-c`

Place the generated controller under an additional subfolder:

```bash
php artisan make:module Product --controller=Admin
```

or:

```bash
php artisan make:module Product -c Admin
```

Supplying a controller subfolder also forces controller generation even if the configured default disables controllers.

The configured API/web controller base path is still respected, so an API project can produce a structure similar to:

```text
app/Http/Controllers/Api/V1/Admin/ProductController.php
```
