---
title: --no-controller / -nc
lang: en
---

# `--no-controller` / `-nc`

Skip controller generation while keeping the non-transport layers of the module.

```bash
php artisan make:module Product --no-controller
```

This is useful when the feature is consumed by jobs, console commands, events or another transport layer that does not need an HTTP controller.

Repository and service generation still happen, and the other configured layers remain governed by their own toggles.

## Precedence

An explicit controller subfolder turns controller generation back on later in the command flow:

```bash
php artisan make:module Product --no-controller --controller=Admin
```

That command generates the controller.

`--all` / `--full` also re-enable controller generation.
