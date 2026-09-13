---
title: سینتکس --fields
lang: fa
---

# سینتکس `--fields`

```bash
php artisan make:module Product \
  --fields="name:string:unique,price:decimal(10,2),is_active:boolean"
```

فرمت هر فیلد:

```text
name:type[:modifier[:modifier...]]
```

Fieldها با کاما جدا می‌شوند؛ Parser عمق پرانتز را نگه می‌دارد، بنابراین کامای `decimal(10,2)` Field را نصف نمی‌کند.

Modifierها می‌توانند با `:`، `|` یا فاصله جدا شوند:

```text
email:email:unique
website:url|nullable
user_id:integer fk=users.id
```

Nullable:

```text
nullable | null | optional
```

Required:

```text
required | notnull | not-null
```

Unique:

```text
unique | uniq
```

Foreign:

```text
fk=users.id
foreign=users.id
references=users.id
```
