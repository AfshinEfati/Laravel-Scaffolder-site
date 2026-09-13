---
title: DTOs
lang: en
---

# DTOs

When enabled, Laravel Scaffolder generates a readonly-style data transfer class such as:

```text
app/DTOs/ProductDTO.php
```

The property list comes from explicit/discovered fields or the model's fillable attributes.

## Generated capabilities

The DTO stub is built with constructor properties, a `fromRequest(...)` factory and `toArray()` output. Null properties are omitted from the output array so the same DTO can support partial update flows.

Conceptually:

```php
$dto = ProductDTO::fromRequest($request);
$product = $service->store($dto);
```

## Type inference

When field metadata exists, database/schema types are mapped to useful PHP union types. Examples:

```text
string/text      -> ?string
integer/FK       -> int|string|null
numeric          -> float|int|string|null
boolean          -> bool|int|string|null
date/datetime    -> string|Carbon|null
json/array       -> array|string|null
uuid/email/url   -> ?string
```

Without metadata, the generator also applies field-name heuristics for IDs, email, prices/amounts, boolean-style names, dates and JSON/data fields.

## Disable DTOs

```bash
php artisan make:module Product --no-dto
```

Services, actions and controllers adapt to array-based payloads. `--no-dto` remains effective even with `--all` / `--full`.
