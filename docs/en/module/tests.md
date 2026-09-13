---
title: --tests
lang: en
---

# `--tests` / `-t`

Feature tests are enabled by default in the shipped configuration. `--tests` explicitly forces them on when a project has disabled that default:

```bash
php artisan make:module Product --tests
```

The generated tests use discovered field metadata to build realistic payloads and endpoint expectations when possible.

To explicitly disable them, use [`--no-test`](/en/module/no-test).
