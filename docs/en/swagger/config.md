---
title: swagger:config
lang: en
---

# `swagger:config`

Inspect or modify Swagger UI settings without manually editing config files.

```bash
php artisan swagger:config --show
```

Export the current settings as environment syntax:

```bash
php artisan swagger:config --export-env
```

Update common values:

```bash
php artisan swagger:config --theme=dark
php artisan swagger:config --primary-color="#8b5cf6"
php artisan swagger:config --secondary-color="#d946ef"
php artisan swagger:config --title="Partner API"
```

Reset supported settings to defaults:

```bash
php artisan swagger:config --reset
```

Running the command with no options opens an interactive theme/color flow and can reinitialize the UI immediately.
