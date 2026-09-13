---
title: نوع‌های پشتیبانی‌شده
lang: fa
---

# Typeهای پشتیبانی‌شده

`SchemaParser` نام‌های متداول را به Type استاندارد داخلی تبدیل می‌کند.

| ورودی | Type نهایی |
| --- | --- |
| `char`, `varchar`, `string` | `string` |
| `text`, `mediumText`, `longText` | `text` |
| انواع Integer، Increment و `foreignId` | `integer` |
| `decimal`, `double`, `float`, `numeric` | `numeric` |
| `bool`, `boolean` | `boolean` |
| `date` | `date` |
| `datetime`, `timestamp` و نوع‌های timezone | `datetime` |
| `json`, `jsonb` | `json` |
| `array` | `array` |
| `uuid` | `uuid` |
| `email` | `email` |
| `url` | `url` |

Type ناشناخته پس از Normalize شدن حفظ می‌شود تا Convention سفارشی پروژه از بین نرود.
