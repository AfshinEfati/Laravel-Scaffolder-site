---
title: مرجع تنظیمات
lang: fa
---

# مرجع تنظیمات

فایل کامل Config با این دستور وارد پروژه می‌شود:

```bash
php artisan vendor:publish --tag=module-generator
```

مسیر:

```text
config/module-generator.php
```

## کلیدهای اصلی

| کلید | کاربرد |
| --- | --- |
| `base_namespace` | Namespace پایه‌ی کلاس‌های Application |
| `paths` | محل ساخت هر لایه |
| `tests.feature` | Root مربوط به Feature Testها |
| `defaults` | رفتار پیش‌فرض `make:module` |
| `swagger` | تنظیمات UI، Spec، Server و Security |
| `logging_channel` | Channel لاگ برای Infrastructure تولیدشده |

## Pathهای قابل تغییر

```text
paths.repository.eloquent
paths.repository.contracts
paths.service.concretes
paths.service.contracts
paths.dto
paths.provider
paths.controller.api
paths.controller.web
paths.resource
paths.form_request
paths.actions
paths.docs
```

## Defaultهای `make:module`

```text
defaults.with_controller
defaults.with_form_requests
defaults.with_unit_test
defaults.with_resource
defaults.with_dto
defaults.with_provider
defaults.with_actions
defaults.controller_middleware
defaults.controller_type
```

`controller_type` در Config پیش‌فرض روی `api` است.

## Swagger

```text
swagger.theme
swagger.colors.*
swagger.fonts.*
swagger.dark_mode.*
swagger.display.*
swagger.server.*
swagger.spec.*
swagger.security.*
```

برای جزئیات Theme و Security از بخش [Swagger](/fa/swagger/) استفاده کن.

::: info
Optionهای CLI روی Config اعمال می‌شوند و بعضی Optionها اثر ضمنی هم دارند؛ مثلاً API Mode فقط نوع Controller را تغییر نمی‌دهد و Request/Action را هم فعال می‌کند.
:::
