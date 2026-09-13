---
title: Configuration reference
lang: en
---

# Configuration reference

## Generation paths

The `paths` array controls repository contracts/concretes, services, DTOs, providers, API/web controllers, resources, form requests, actions and docs. Test output uses `tests.feature`.

## Module defaults

```php
with_controller
with_form_requests
with_unit_test
with_resource
with_dto
with_provider
with_actions
controller_middleware
controller_type // api or web
```

## Swagger

The `swagger` tree contains:

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

Most Swagger UI values have matching `SWAGGER_*` environment variables. The full shipped configuration is the source of truth when upgrading.
