---
title: فهرست دستورات
lang: fa
---

# فهرست دستورات

## `make:module`

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

## Swagger جدید

```text
swagger:init --force
swagger:generate --output= --title= --version= --host=
swagger:ui --port=8000 --host=localhost --refresh
swagger:config --show --export-env --theme= --primary-color= --secondary-color= --title= --reset
```

## Deprecated

```text
make:swagger --path= --controller= -f|--force --output=
```

برای پروژه جدید `swagger:generate` را ترجیح دهید.
