---
title: Modifiers and foreign keys
lang: en
---

# Modifiers and foreign keys

The inline parser recognizes nullable/required, unique and foreign-key metadata.

```text
nickname:string:nullable
email:email:required:unique
user_id:integer:fk=users.id
team_id:integer:foreign(teams.id)
owner_id:integer:references=users.id
```

Accepted nullable aliases include `nullable`, `null` and `optional`. Required aliases include `required`, `notnull` and `not-null`. Unique accepts `unique` or `uniq`.

Foreign metadata accepts `fk`, `foreign` or `references`; when the target column is omitted it defaults to `id`.
