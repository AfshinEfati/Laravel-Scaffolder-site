---
title: Command index
lang: en
---

# Command index

## `make:module`

Main feature scaffolder:

```text
make:module {name}
  -c|--controller=
  --api
  -r|--requests
  -t|--tests
  -nc|--no-controller
  -nr|--no-resource
  -nd|--no-dto
  -nt|--no-test
  -np|--no-provider
  --actions
  --no-actions
  --policy
  --no-policy
  -sg|--swagger
  --no-swagger
  -a|--all
  -f|--full
  -fm|--from-migration=
  --fields=
  --force
```

See the [complete option reference](/en/module/overview).

## `swagger:init`

```text
swagger:init --force
```

## `swagger:generate`

```text
swagger:generate --output= --title= --version= --host=
```

## `swagger:ui`

```text
swagger:ui --port=8000 --host=localhost --refresh
```

## `swagger:config`

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

## Deprecated `make:swagger`

```text
make:swagger --path= --controller= -f|--force --output=
```

Prefer `swagger:generate` for new projects.
