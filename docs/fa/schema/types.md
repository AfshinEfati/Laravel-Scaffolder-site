---
title: نوع‌های پشتیبانی‌شده
lang: fa
---

# نوع‌های پشتیبانی‌شده

`SchemaParser` Aliasهای دیتابیسی را به Typeهای Canonical تبدیل می‌کند:

| ورودی | Type نهایی |
| --- | --- |
| `char`, `varchar`, `string` | `string` |
| `text`, `mediumText`, `longText` | `text` |
| `int`, `bigInteger`, `foreignId`, increments | `integer` |
| `decimal`, `double`, `float`, `numeric` | `numeric` |
| `bool`, `boolean` | `boolean` |
| `date` | `date` |
| `datetime`, `datetimeTz`, `timestamp`, `timestampTz` | `datetime` |
| `json`, `jsonb` | `json` |
| `array` | `array` |
| `uuid` | `uuid` |
| `email` | `email` |
| `url` | `url` |

```bash
php artisan make:module Invoice \
  --fields="reference:uuid,total:decimal(12,2),meta:jsonb:nullable"
```

Generatorها از Type نرمال‌شده برای PHP Type، Validation، Sample Data و OpenAPI Metadata استفاده می‌کنند.
