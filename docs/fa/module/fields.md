---
title: --fields
lang: fa
---

# `--fields`

وقتی Model یا Migration آماده نیست، یا می‌خواهی Schema را دقیقاً خودت مشخص کنی، از `--fields` استفاده کن:

```bash
php artisan make:module Product \
  --fields="name:string:unique,price:decimal(10,2),is_active:boolean"
```

## فرمت هر فیلد

```text
name:type[:modifier[:modifier...]]
```

فیلدها با کاما جدا می‌شوند. Parser حواسش به پرانتز هست، پس کامای داخل `decimal(10,2)` فیلد جدید حساب نمی‌شود.

## Modifierهای قابل استفاده

```text
nullable | null | optional
required | notnull | not-null
unique | uniq
fk=table.column
foreign=table.column
references=table.column
```

برای جدا کردن Modifierها می‌توانی از `:`، `|` یا فاصله استفاده کنی.

## چند مثال

```bash
php artisan make:module Customer \
  --fields="email:email:unique,name:string,website:url:nullable"
```

```bash
php artisan make:module Order \
  --fields="user_id:integer:fk=users.id,total:decimal(12,2),paid:boolean"
```

## نوع‌ها Normalize می‌شوند

برای مثال:

```text
varchar       -> string
bigInteger    -> integer
foreignId     -> integer
decimal       -> numeric
bool          -> boolean
timestamp     -> datetime
jsonb         -> json
```

اگر `--fields` معتبر داده باشی، همان Schema صریح منبع اصلی است و اطلاعات Runtime یا Migration روی آن Merge نمی‌شود.
