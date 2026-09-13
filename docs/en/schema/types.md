---
title: Supported field types
lang: en
---

# Supported field types

`SchemaParser` normalizes common migration/CLI type names into canonical types used by the generators.

| Input examples | Canonical type |
| --- | --- |
| `char`, `varchar`, `string` | `string` |
| `text`, `mediumText`, `longText` | `text` |
| `int`, `bigInteger`, `smallInt`, `foreignId`, increments variants | `integer` |
| `decimal`, `double`, `float`, `numeric` | `numeric` |
| `bool`, `boolean` | `boolean` |
| `date` | `date` |
| `datetime`, `timestamp`, timezone variants | `datetime` |
| `json`, `jsonb` | `json` |
| `array` | `array` |
| `uuid` | `uuid` |
| `email` | `email` |
| `url` | `url` |

Unknown type names are preserved after normalization so custom project conventions can still flow through metadata.
