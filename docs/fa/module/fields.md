---
title: --fields
lang: fa
---

# `--fields`

Schema را مستقیم در CLI تعریف می‌کند:

```bash
php artisan make:module Product \
  --fields="name:string:unique,price:decimal(10,2),is_active:boolean"
```

این حالت مخصوصاً وقتی Model یا Migration هنوز وجود ندارد مفید است.

## سینتکس

هر فیلد:

```text
name:type[:modifier[:modifier...]]
```

Fieldها با کاما جدا می‌شوند و Parser کامای داخل پرانتز نوع‌هایی مثل `decimal(10,2)` را درست نگه می‌دارد.

Modifierهای شناخته‌شده:

```text
nullable | null | optional
required | notnull | not-null
unique | uniq
fk=table.column
foreign=table.column
references=table.column
```

Separator می‌تواند `:`، `|` یا فاصله باشد.

## نمونه‌ها

```bash
php artisan make:module Customer \
  --fields="email:email:unique,name:string,website:url:nullable"
```

```bash
php artisan make:module Order \
  --fields="user_id:integer:fk=users.id,total:decimal(12,2),paid:boolean"
```

## Normalize نوع‌ها

برای نمونه `varchar` به `string`، `bigInteger` و `foreignId` به `integer`، `decimal` به `numeric`، `bool` به `boolean`، `timestamp` به `datetime` و `jsonb` به `json` تبدیل می‌شوند.

وقتی `--fields` معتبر وجود داشته باشد، همان Schema صریح نگه داشته می‌شود و اطلاعات Runtime/Migration روی آن Merge نمی‌شود.
