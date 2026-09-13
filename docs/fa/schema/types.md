---
title: نوع‌های پشتیبانی‌شده
lang: fa
---

# نوع‌های پشتیبانی‌شده

اسم Typeها در Migrationها و دیتابیس‌ها همیشه یکسان نیست. `SchemaParser` آن‌ها را Normalize می‌کند تا بقیه‌ی Generatorها با یک مجموعه Type ثابت کار کنند.

| ورودی | Type نهایی |
| --- | --- |
| `char`, `varchar`, `string` | `string` |
| `text`, `mediumText`, `longText` | `text` |
| `int`, `integer`, `bigInteger`, `foreignId`, increments | `integer` |
| `decimal`, `double`, `float`, `numeric` | `numeric` |
| `bool`, `boolean` | `boolean` |
| `date` | `date` |
| `datetime`, `datetimeTz`, `timestamp`, `timestampTz` | `datetime` |
| `json`, `jsonb` | `json` |
| `array` | `array` |
| `uuid` | `uuid` |
| `email` | `email` |
| `url` | `url` |

مثلاً این تعریف:

```bash
php artisan make:module Invoice \
  --fields="reference:uuid,total:decimal(12,2),meta:jsonb:nullable"
```

بعد از Normalize شدن تقریباً این معنا را دارد:

```text
reference -> uuid
total     -> numeric
meta      -> json + nullable
```

## چرا Normalize شدن مهم است؟

همان Type نهایی در چند جا مصرف می‌شود:

- PHP Type داخل DTO؛
- Ruleهای Validation؛
- Payload نمونه در Feature Test؛
- Cast/Format بعضی Resourceها؛
- Metadata مربوط به OpenAPI.

پس اگر Type دیتابیس Alias متفاوتی داشته باشد، لازم نیست هر Generator جداگانه آن را بشناسد.
