---
title: Inline field syntax
lang: en
---

# Inline field syntax

The parser accepts comma-separated definitions:

```text
name:type[:modifier[:modifier...]]
```

Example:

```bash
php artisan make:module Product --api \
  --fields="name:string:unique,description:text:nullable,price:decimal(10,2),is_active:boolean,user_id:integer:fk=users.id"
```

Modifiers may be separated with `:`, `|` or whitespace. Common examples:

```text
name:string:unique
bio:text:nullable
email:email|required|unique
user_id:integer:fk=users.id
category_id:integer:foreign(categories.id)
```

The parser respects parentheses while splitting fields, so decimal precision does not break the comma-separated list.
