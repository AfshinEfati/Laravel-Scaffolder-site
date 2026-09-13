---
title: swagger:generate
lang: en
---

# `swagger:generate`

Generate an OpenAPI 3.0 JSON document from Laravel API routes:

```bash
php artisan swagger:generate
```

Options:

```bash
php artisan swagger:generate \
  --output=storage/swagger-ui/swagger.json \
  --title="Store API" \
  --version=2.1.0 \
  --host=https://api.example.com
```

The command includes routes that use `api` middleware or an `api/` URI prefix, skips known documentation/system routes, adds path parameters, common pagination query parameters for GET requests, request bodies for mutating methods, standard responses and bearer security when auth middleware is detected.
