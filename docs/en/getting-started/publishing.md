---
title: Publishing & custom stubs
lang: en
---

# Publishing & custom stubs

Laravel Scaffolder exposes two publish tags with different responsibilities.

## `module-generator`

```bash
php artisan vendor:publish --tag=module-generator
```

Publishes application infrastructure and configuration:

```text
BaseRepository.php
BaseRepositoryInterface.php
CriteriaInterface.php
BaseService.php
BaseServiceInterface.php
ApiResponseHelper.php
config/module-generator.php
```

These files become part of your application and can be adapted to project conventions.

## `module-generator-stubs`

```bash
php artisan vendor:publish --tag=module-generator-stubs
```

Copies module templates to:

```text
resources/stubs/module-generator/
```

Once these stubs exist, the generator can use your project-level templates instead of only package defaults.

::: warning
Published stubs are application-owned copies. Package upgrades cannot safely merge future template changes into custom files. Review release changes when upgrading.
:::

## A safe customization workflow

1. publish the stubs;
2. commit the untouched versions;
3. change one template at a time;
4. generate a disposable module;
5. run tests and inspect namespaces/imports;
6. only then use the customized templates for production modules.

Use `--force` carefully when testing new stubs against an existing generated module.
