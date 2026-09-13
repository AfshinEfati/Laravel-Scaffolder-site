---
title: Controllers
lang: en
---

# Controllers

Controller generation adapts to API/Web mode and to every optional layer around it.

Default API destination:

```text
app/Http/Controllers/Api/V1/ProductController.php
```

Default web destination:

```text
app/Http/Controllers/ProductController.php
```

A `--controller=Admin` value appends a subfolder below that root.

## API controller

The API generator coordinates:

- the model and generated service, or Actions when action mode is enabled;
- Store/Update Form Requests when enabled;
- DTO creation when enabled;
- `ProductResource` when enabled;
- `ApiResponseHelper` for consistent JSON responses;
- discovered relation loading;
- configured `defaults.controller_middleware`;
- module-level Swagger docs when requested.

When Requests are not enabled, it falls back to `Illuminate\Http\Request`; when DTO is off it passes arrays; when Resource is off it returns the model/data through the response helper directly.

## Action-backed controller

With Actions enabled, controller methods depend on the generated operation classes instead of directly coordinating the service for each CRUD operation.

```bash
php artisan make:module Product --api --actions
```

## Web controller

Web mode uses the configured web controller path and builds web-oriented controller stubs while still respecting Requests, DTOs and Actions.
