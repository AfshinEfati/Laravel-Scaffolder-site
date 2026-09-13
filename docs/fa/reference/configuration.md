---
title: مرجع پیکربندی
lang: fa
---

# مرجع پیکربندی

Config کامل در `config/module-generator.php` Publish می‌شود.

## کلیدهای Root

| کلید | کاربرد |
| --- | --- |
| `base_namespace` | Root Namespace کلاس‌های Application |
| `paths` | مسیر لایه‌های تولیدشده |
| `tests.feature` | مسیر Feature Test |
| `defaults` | Defaultهای `make:module` |
| `swagger` | UI، Spec، Server و Security |
| `logging_channel` | Channel لاگ Infrastructure |

## Pathها

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

## Defaultها

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

`controller_type` پیش‌فرض `api` است.

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

CLI Optionها روی Config اعمال می‌شوند و بعضی از آنها رفتار ضمنی دارند؛ API Mode نمونه واضح آن است.
