---
title: Relationships
lang: en
---

# Relationship discovery

Laravel Scaffolder carries relationship metadata alongside fields so Resource, Action, Swagger and other generators can produce relation-aware output where supported.

## Foreign-key metadata

The simplest explicit relation hint is a foreign field:

```bash
php artisan make:module Post \
  --fields="title:string,user_id:integer:fk=users.id"
```

The parser records the referenced table and column.

## Runtime and migration discovery

Without `--fields`, relation metadata may come from runtime inspection and migration parsing. The command merges those sources and can rebuild relation metadata after aligning fields to the model's fillable columns.

## API Resources

Discovered relations can be represented with Laravel conditional relation helpers so serialization does not need to trigger an accidental query merely because a relation exists.

## Keep business relations explicit

Schema inference can identify structural relationships, but it cannot decide domain semantics such as custom relation names, scopes or ownership rules. Treat generated relations as scaffolding and refine them in application code.
