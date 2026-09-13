---
title: Supported field types
lang: en
---

# Supported field types

`SchemaParser` normalizes common database aliases into a smaller set of canonical types used by generators.

| Input examples | Canonical type |
| --- | --- |
| `char`, `varchar`, `string` | `string` |
| `text`, `mediumText`, `longText` | `text` |
| `int`, `integer`, `bigInteger`, `foreignId`, increments variants | `integer` |
| `decimal`, `double`, `float`, `numeric` | `numeric` |
| `bool`, `boolean` | `boolean` |
| `date` | `date` |
| `datetime`, `datetimeTz`, `timestamp`, `timestampTz` | `datetime` |
| `json`, `jsonb` | `json` |
| `array` | `array` |
| `uuid` | `uuid` |
| `email` | `email` |
| `url` | `url` |

Type parameters are normalized away for the canonical type, while the parser still correctly keeps a field definition together when parameters contain commas.

```bash
php artisan make:module Invoice \
  --fields="reference:uuid,total:decimal(12,2),meta:jsonb:nullable"
```

Generators then map canonical types to PHP typing, validation rules, sample data and OpenAPI metadata as appropriate.
