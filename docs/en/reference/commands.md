---
title: Command index
lang: en
---

# Command index

| Command | Purpose |
| --- | --- |
| `make:module {name}` | Generate the layered feature stack |
| `swagger:init` | Initialize standalone Swagger UI assets |
| `swagger:generate` | Generate OpenAPI JSON from routes |
| `swagger:ui` | Serve the standalone Swagger UI |
| `swagger:config` | Inspect/update Swagger UI settings |
| `make:swagger` | Deprecated annotation-oriented route scanner |

Quick examples:

```bash
php artisan make:module Product --all
php artisan swagger:init
php artisan swagger:generate --title="Store API"
php artisan swagger:ui --refresh
```

See the individual pages for every option and behavior.
