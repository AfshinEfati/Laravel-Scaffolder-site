---
title: --fields
lang: en
---

# `--fields`

Provide schema metadata directly on the command line.

```bash
php artisan make:module Product \
  --fields="name:string:unique,price:decimal(10,2),is_active:boolean"
```

This is especially useful when the model or migration does not exist yet.

## Syntax

Each field follows this shape:

```text
name:type[:modifier[:modifier...]]
```

Field definitions are separated by commas. Commas inside type parentheses are preserved, so types such as `decimal(10,2)` are safe.

Supported modifier separators include `:`, `|` and whitespace. The parser recognizes:

```text
nullable | null | optional
required | notnull | not-null
unique | uniq
fk=table.column
foreign=table.column
references=table.column
```

## Examples

```bash
php artisan make:module Customer \
  --fields="email:email:unique,name:string,website:url:nullable"
```

```bash
php artisan make:module Order \
  --fields="user_id:integer:fk=users.id,total:decimal(12,2),paid:boolean"
```

```bash
php artisan make:module Article \
  --fields="title:string:unique,published_at:datetime:nullable,meta:json:nullable"
```

## Type normalization

The parser normalizes common database aliases. Examples include:

| Input | Canonical type |
| --- | --- |
| `varchar`, `char` | `string` |
| `text`, `longText` | `text` |
| `int`, `bigInteger`, `foreignId` | `integer` |
| `decimal`, `float`, `double` | `numeric` |
| `bool` | `boolean` |
| `timestamp` | `datetime` |
| `jsonb` | `json` |

It also understands `date`, `array`, `uuid`, `email` and `url` directly.

## Precedence

When `--fields` contains valid definitions, inline schema is kept intact and runtime/migration metadata is not merged into it. Treat the option as an explicit declaration of the schema the generators should use.

That metadata feeds DTO, request, resource, relation, test and Swagger generation.
