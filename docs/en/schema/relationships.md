---
title: Relationships
lang: en
---

# Relationships

Laravel Scaffolder can discover relation metadata from foreign-key migrations and runtime model inspection. That information is reused by resources, actions and schema-aware generation.

A migration such as:

```php
$table->foreignId('user_id')->constrained()->cascadeOnDelete();
```

or an inline definition:

```bash
--fields="user_id:integer:fk=users.id"
```

provides enough metadata for the generator to understand the foreign target.

Runtime model parsing can add richer relationship information when Eloquent relation methods are available and safely inspectable.
