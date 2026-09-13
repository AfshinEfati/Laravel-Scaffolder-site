---
title: Modifier و Foreign Key
lang: fa
---

# Modifier و Foreign Key

## Nullable

```text
published_at:datetime:nullable
```

Aliasها: `nullable`، `null`، `optional`.

## Required

```text
name:string:nullable:required
```

Aliasها: `required`، `notnull`، `not-null`. اگر بعد از Nullable بیاید می‌تواند آن را دوباره Required کند.

## Unique

```text
email:email:unique
```

Aliasها: `unique` و `uniq`.

## Foreign Key

```text
user_id:integer:fk=users.id
category_id:integer:foreign=categories.id
owner_id:integer:references=users.id
```

Table و Column مرجع در Metadata ذخیره می‌شوند و برای Ruleهایی مثل `exists` و خروجی Relation-aware قابل استفاده‌اند.

```bash
php artisan make:module Post \
  --fields="slug:string:unique,author_id:integer:fk=users.id,published_at:datetime:nullable"
```
