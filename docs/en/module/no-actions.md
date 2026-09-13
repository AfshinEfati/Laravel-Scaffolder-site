---
title: --no-actions
lang: en
---

# `--no-actions`

Skip generated Action classes.

```bash
php artisan make:module Product --no-actions
```

This option is particularly useful with API mode because API generation normally enables actions automatically.

```bash
php artisan make:module Product --api --no-actions
```

The controller is then generated without the action layer and coordinates the configured service/data layers directly.

## Precedence

`--no-actions` overrides both the config default and the automatic API-mode action toggle in a normal build. `--all` / `--full`, however, are applied later and re-enable actions.

```bash
php artisan make:module Product --all --no-actions
```

Actions are still generated in that command.
