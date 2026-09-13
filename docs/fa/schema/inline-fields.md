---
title: نوشتن فیلدها با --fields
lang: fa
---

# نوشتن فیلدها با `--fields`

اگر می‌خواهی Schema را همان لحظه‌ی اجرای Command تعریف کنی، `--fields` ساده‌ترین راه است:

```bash
php artisan make:module Product \
  --fields="name:string:unique,price:decimal(10,2),is_active:boolean"
```

## فرمت هر فیلد

```text
name:type[:modifier[:modifier...]]
```

فیلدها با کاما از هم جدا می‌شوند. Parser پرانتز را می‌شناسد، بنابراین کامای داخل `decimal(10,2)` به‌اشتباه فیلد جدید حساب نمی‌شود.

## چند شکل معتبر

```text
email:email:unique
website:url|nullable
user_id:integer fk=users.id
```

Modifierها را می‌توانی با `:`، `|` یا فاصله از هم جدا کنی.

## Nullable و Required

```text
nullable | null | optional
required | notnull | not-null
```

مثلاً:

```text
published_at:datetime:nullable
name:string:required
```

## Unique

```text
unique | uniq
```

مثال:

```text
email:email:unique
```

## Foreign Key

هر سه شکل زیر قابل استفاده‌اند:

```text
fk=users.id
foreign=users.id
references=users.id
```

مثال کامل:

```bash
php artisan make:module Order \
  --fields="user_id:integer:fk=users.id,total:decimal(12,2),paid:boolean"
```

بعد از Parse شدن، همین Metadata در Form Request، DTO، Resource، Test و Swagger استفاده می‌شود.
