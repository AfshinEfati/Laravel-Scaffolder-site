---
title: فهرست دستورات
lang: fa
---

# فهرست دستورات

اگر فقط دنبال Signature دستورها هستی، این صفحه مرجع سریع همه‌ی Commandهای Public پکیج است.

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

توضیح و precedence هر Option در بخش [گزینه‌های `make:module`](/fa/module/overview) آمده.

## Swagger جدید

```text
swagger:init --force
swagger:generate --output= --title= --version= --host=
swagger:ui --port=8000 --host=localhost --refresh
swagger:config --show --export-env --theme= --primary-color= --secondary-color= --title= --reset
```

## Command قدیمی

```text
make:swagger --path= --controller= -f|--force --output=
```

`make:swagger` Deprecated است. برای پروژه‌ی جدید Flow `swagger:generate` را ترجیح بده.
