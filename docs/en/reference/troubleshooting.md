---
title: Troubleshooting
lang: en
---

# Troubleshooting

## Model not found

A normal module build requires either a valid model, inline schema, or an explicit migration hint.

```bash
php artisan make:model Product -m
```

or:

```bash
php artisan make:module Product --fields="name:string,price:numeric"
```

or:

```bash
php artisan make:module Product --from-migration=database/migrations/...php
```

## Fields cannot be inferred

If runtime database inspection is unavailable, provide `--fields` or `--from-migration` explicitly. Check that the model table and migration correspond to the module name.

## A file was skipped

Existing files are preserved by default. If regeneration is intentional:

```bash
php artisan make:module Product --force
```

Commit/stash manual changes first.

## Provider was skipped

With `--no-provider`, the command intentionally leaves automatic bindings out. Register repository/service bindings in your own provider.

## API unexpectedly generated actions/requests

This is expected: API mode enables Form Requests and Actions. Use `--no-actions` to suppress actions. There is no `--no-requests` switch in the current signature.

## `--all --no-actions` still creates actions

Expected. Full-stack mode is applied later and re-enables actions. DTO is the exception: `--all --no-dto` keeps DTO disabled.

## Swagger UI is not initialized

```bash
php artisan swagger:init
php artisan swagger:generate
php artisan swagger:ui
```

## Swagger UI host rejected

The current standalone server accepts `localhost`, valid IP addresses and `::1`. Use one of those values with `--host`.

## Custom stubs behave unexpectedly

Temporarily move/compare `resources/stubs/module-generator`, generate a disposable module with package defaults, then reapply customizations one at a time.
