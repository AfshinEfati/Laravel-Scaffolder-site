---
title: --force
lang: en
---

# `--force`

By default the generator protects existing files. Use `--force` only when you intentionally want the generated targets replaced:

```bash
php artisan make:module Product --all --force
```

This is useful after changing published stubs or generator configuration.

::: warning
`--force` can replace application code you have edited since the original generation. Review Git changes immediately after running it.
:::
