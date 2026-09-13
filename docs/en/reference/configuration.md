---
title: Configuration reference
lang: en
---

# Configuration reference

The complete package configuration is published to `config/module-generator.php`.

## Root keys

| Key | Default | Purpose |
| --- | --- | --- |
| `base_namespace` | `App` | Namespace root for generated application classes. |
| `paths` | see below | Output directories below the application root. |
| `tests.feature` | `tests/Feature` | Feature-test destination from project root. |
| `defaults` | see below | `make:module` component defaults. |
| `swagger` | see below | Standalone UI/spec/security settings. |
| `logging_channel` | env | Logging channel for generated action infrastructure. |

## Path keys

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

## Default toggles

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

Current `controller_type` default is `api`.

## Swagger keys

```text
swagger.theme
swagger.colors.*
swagger.fonts.family
swagger.fonts.mono
swagger.dark_mode.enabled
swagger.dark_mode.default
swagger.dark_mode.persist
swagger.display.title
swagger.display.description
swagger.display.show_models
swagger.display.show_examples
swagger.display.persist_auth
swagger.server.port
swagger.server.host
swagger.spec.path
swagger.spec.filename
swagger.spec.secure
swagger.security.auth_middleware
swagger.security.default
swagger.security.secure_spec
swagger.security.schemes
```

Environment-backed values are documented in the [Swagger pages](/en/swagger/).

::: info
CLI switches are evaluated on top of configuration. Some switches also imply other behavior; for example API mode enables requests/actions, and full-stack mode has explicit precedence rules.
:::
