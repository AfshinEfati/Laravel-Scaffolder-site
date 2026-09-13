---
title: swagger:ui
lang: en
---

# `swagger:ui`

Serve the initialized Swagger UI without an external Swagger package.

```bash
php artisan swagger:ui
```

Signature:

```text
swagger:ui
  --port=8000
  --host=localhost
  --refresh
```

## Refresh before serving

```bash
php artisan swagger:ui --refresh
```

`--refresh` runs `swagger:generate` first and stops if generation fails.

## Host and port

```bash
php artisan swagger:ui --host=127.0.0.1 --port=8085
```

If the options remain at their command defaults, the command uses `swagger.server.host` and `swagger.server.port` from configuration.

The host is validated before starting the server. `localhost`, IPv4/IPv6 addresses and `::1` are supported by the current validation logic; arbitrary host strings are rejected.

The server itself is started with a safe Symfony Process invocation equivalent to:

```bash
php -S host:port -t storage/swagger-ui
```

::: warning
Run `php artisan swagger:init` first. `swagger:ui` fails with a clear message when `storage/swagger-ui` does not exist.
:::
