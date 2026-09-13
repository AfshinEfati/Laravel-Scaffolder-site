---
title: --fields
lang: en
---

# `--fields`

`--fields` provides schema metadata directly on the command line and allows generation even when the Eloquent model does not exist yet.

```bash
php artisan make:module Product --api \
  --fields="name:string:unique,price:decimal(10,2),metadata:json:nullable,user_id:foreignId:fk=users.id"
```

Each definition follows:

```text
name:type[:modifier[:modifier...]]
```

Supported canonical modifiers include `nullable`, `required`, `unique` and foreign-key forms such as `fk=users.id`.

The parser understands commas inside type parentheses, so `decimal(10,2)` is kept as one type token.

See [Inline field syntax](/en/schema/inline-fields) for the full grammar.
