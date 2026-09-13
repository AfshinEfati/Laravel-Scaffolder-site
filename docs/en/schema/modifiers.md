---
title: Modifiers & foreign keys
lang: en
---

# Modifiers & foreign keys

Field modifiers add validation and relation metadata to an inline schema.

## Nullable

```text
published_at:datetime:nullable
```

Aliases: `nullable`, `null`, `optional`.

## Required

Fields are non-null by default. Explicit required aliases can override an earlier nullable token in the same parsed modifier sequence:

```text
name:string:nullable:required
```

Aliases: `required`, `notnull`, `not-null`.

## Unique

```text
email:email:unique
```

Aliases: `unique`, `uniq`.

This metadata is reused by Form Request generation so create/update validation can include uniqueness rules.

## Foreign keys

```text
user_id:integer:fk=users.id
category_id:integer:foreign=categories.id
owner_id:integer:references=users.id
```

Foreign metadata contains both the referenced table and column. It can influence validation (`exists`) and relation-aware generated output.

## Combining modifiers

```bash
php artisan make:module Post \
  --fields="slug:string:unique,author_id:integer:fk=users.id,published_at:datetime:nullable"
```
