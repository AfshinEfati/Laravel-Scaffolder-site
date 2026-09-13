---
title: swagger:config
lang: en
---

# `swagger:config`

Inspect and manage common Swagger UI settings without manually editing the package config.

```bash
php artisan swagger:config
```

With no options, the command enters interactive mode.

## Signature

```text
swagger:config
  --show
  --export-env
  --theme=
  --primary-color=
  --secondary-color=
  --title=
  --reset
```

## Show current configuration

```bash
php artisan swagger:config --show
```

Displays the current theme, colors, fonts, dark-mode settings and display options.

## Update selected settings

```bash
php artisan swagger:config \
  --theme=dark \
  --primary-color=#8b5cf6 \
  --secondary-color=#06b6d4 \
  --title="Internal API"
```

## Export ENV values

```bash
php artisan swagger:config --export-env
```

The command writes `.env.swagger`. Review it before copying values into your application's `.env`.

## Reset

```bash
php artisan swagger:config --reset
```

Reset is interactive and asks for confirmation before writing default environment values.
