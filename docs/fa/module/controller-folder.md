---
title: --controller
lang: fa
---

# `--controller` / `-c`

Controller را داخل Subfolder مشخص بساز:

```bash
php artisan make:module Product --controller=Admin
```

یا:

```bash
php artisan make:module Product -c Admin
```

دادن Subfolder باعث می‌شود Controller حتی اگر Default آن خاموش باشد ساخته شود. مسیر پایه‌ی API/Web همچنان از Config خوانده می‌شود، بنابراین خروجی می‌تواند چنین باشد:

```text
app/Http/Controllers/Api/V1/Admin/ProductController.php
```
