---
title: API response helper
lang: en
---

# API response helper

`ApiResponseHelper` is part of the `module-generator` publish group:

```bash
php artisan vendor:publish --tag=module-generator
```

It is copied to:

```text
app/Helpers/ApiResponseHelper.php
```

The helper provides a starting convention for consistent JSON success/error responses. Because the file is published into your application, you can adapt its envelope, message conventions and status-code handling to your API contract without modifying the vendor package.
