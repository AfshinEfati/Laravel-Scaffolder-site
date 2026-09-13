---
title: --force
lang: en
---

# `--force`

Allow generators to overwrite files that already exist.

```bash
php artisan make:module Product --force
```

By default Laravel Scaffolder protects existing generated files. This makes repeated commands safe while you are experimenting with options.

## Typical use cases

Regenerate a complete stack after changing stubs:

```bash
php artisan make:module Product --all --force
```

Refresh module Swagger output:

```bash
php artisan make:module Product --swagger --force
```

Regenerate a schema-aware module:

```bash
php artisan make:module Product --api --force \
  --fields="name:string,price:numeric"
```

## What `--force` does not do

It does not merge your hand-written edits into a newly generated file. Once a generator decides that a target should be replaced, the generated version becomes the file content.

::: danger
Commit or stash application changes before using `--force` on a module you have already customized.
:::
