---
title: Inline field syntax
lang: en
---

# Inline field syntax

Use `--fields` to describe a schema without depending on a live database or migration discovery.

```bash
php artisan make:module Product \
  --fields="name:string:unique,price:decimal(10,2),is_active:boolean"
```

## Grammar

```text
name:type[:modifier[:modifier...]]
```

Definitions are comma-separated. The parser tracks parentheses, so the comma inside `decimal(10,2)` does not split the field.

Modifiers may be separated with colons, pipes or whitespace.

```text
email:email:unique
website:url|nullable
user_id:integer fk=users.id
```

## Nullable aliases

```text
nullable
null
optional
```

## Required aliases

```text
required
notnull
not-null
```

## Unique aliases

```text
unique
uniq
```

## Foreign references

```text
fk=users.id
foreign=users.id
references=users.id
```

The normalized result contains field name, canonical type, nullable/unique flags and optional foreign table/column metadata.
