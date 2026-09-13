---
title: --api
lang: en
---

# `--api`

Use `--api` to force API-style generation for the module.

```bash
php artisan make:module Product --api
```

## What it changes

API mode does more than change the controller folder. In the current command implementation it also enables **Form Requests** and **Actions**.

The effective behavior is:

```text
controller type     -> api
form requests       -> enabled
actions             -> enabled, unless --no-actions is present
```

The default API controller path is:

```text
app/Http/Controllers/Api/V1/ProductController.php
```

You can change this path in `config/module-generator.php`.

## Example with schema metadata

```bash
php artisan make:module Product --api \
  --fields="name:string:unique,price:decimal(10,2),is_active:boolean"
```

The generated API flow can then connect the transport layer to generated requests, DTOs, actions/services and resources.

## Interaction with other options

`--no-actions` is the explicit way to keep API generation but skip actions:

```bash
php artisan make:module Product --api --no-actions
```

There is currently no `--no-requests` switch. API mode always turns Form Request generation on.

`--swagger` also forces API controller generation when it is used as part of a normal module build. `--all` and `--full` always select API mode as well.

::: tip
The shipped config already sets `defaults.controller_type` to `api`, so `--api` is mainly useful when a project changes that default to `web`, or when you want the command itself to document the intent explicitly.
:::
