---
title: Publishing and custom stubs
lang: en
---

# Publishing and custom stubs

Laravel Scaffolder exposes two publish tags.

## Base infrastructure

```bash
php artisan vendor:publish --tag=module-generator
```

This publishes the base repository/service contracts, base implementations, `CriteriaInterface`, `ApiResponseHelper`, and `config/module-generator.php`.

## Generator stubs

```bash
php artisan vendor:publish --tag=module-generator-stubs
```

The module templates are copied to:

```text
resources/stubs/module-generator/
```

Once published, edit those templates when your team needs a different controller shape, DTO style, policy skeleton or action convention. Keep placeholders intact unless you also understand the matching generator replacement logic.

::: warning
Published stubs become your responsibility. New package releases cannot automatically update customized copies in your application.
:::
