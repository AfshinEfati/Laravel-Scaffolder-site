---
title: --controller / -c
lang: en
---

# `--controller` / `-c`

Place the generated controller in an additional subfolder.

```bash
php artisan make:module Product --controller=Admin
```

Short form:

```bash
php artisan make:module Product -c Admin
```

With API mode and the default paths, the result is conceptually:

```text
app/Http/Controllers/Api/V1/Admin/ProductController.php
```

For web mode it is placed below the configured web controller path instead.

## Useful combinations

```bash
# Admin API controller
php artisan make:module Product --api --controller=Admin

# Versioned or feature-oriented subfolder
php artisan make:module Product --controller=Catalog
```

The subfolder affects controller generation and is also passed to feature-test generation so generated test expectations can follow the controller location.

## Precedence

Passing a non-empty `--controller` value explicitly turns controller generation on. This means the folder option takes precedence over the earlier `--no-controller` toggle in the current command flow.

```bash
php artisan make:module Product --no-controller --controller=Admin
```

The command still generates the controller because an explicit controller location was requested.

::: tip
Use this switch for organization inside the configured controller root. Change `paths.controller.api` or `paths.controller.web` in configuration when you need to change the root itself.
:::
