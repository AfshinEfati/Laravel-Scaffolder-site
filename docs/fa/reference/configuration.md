---
title: مرجع پیکربندی
lang: fa
---

# مرجع پیکربندی

## مسیرهای Generation

`paths` مسیر Repository Contract/Concrete، Service، DTO، Provider، Controller API/Web، Resource، Form Request، Action و Doc را تعیین می‌کند. مسیر Test در `tests.feature` است.

## Defaultهای Module

```text
with_controller
with_form_requests
with_unit_test
with_resource
with_dto
with_provider
with_actions
controller_middleware
controller_type
```

## Swagger

```text
theme
colors.*
fonts.*
dark_mode.enabled/default/persist
display.title/description/show_models/show_examples/persist_auth
server.host/port
spec.path/filename/secure
security.auth_middleware/default/secure_spec/schemes
```

بیشتر تنظیمات Swagger ENV متناظر `SWAGGER_*` دارند. هنگام Upgrade، Config خود نسخه‌ی نصب‌شده Source of Truth است.
