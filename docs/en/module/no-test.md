---
title: --no-test
lang: en
---

# `--no-test`

Skip generated feature tests:

```bash
php artisan make:module Product --no-test
```

The shipped default enables feature tests, so this flag is the explicit opt-out for modules where generated endpoint coverage is not useful.
