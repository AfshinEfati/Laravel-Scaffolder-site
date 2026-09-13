---
title: Modifier و Foreign Key
lang: fa
---

# Modifier و Foreign Key

Parser، Nullable/Required، Unique و Foreign Key را می‌شناسد:

```text
nickname:string:nullable
email:email:required:unique
user_id:integer:fk=users.id
team_id:integer:foreign(teams.id)
owner_id:integer:references=users.id
```

Aliasهای Nullable شامل `nullable`، `null` و `optional` هستند. Required شامل `required`، `notnull` و `not-null` است. Unique نیز `unique` و `uniq` را قبول می‌کند.

برای Foreign Key می‌توان از `fk`، `foreign` یا `references` استفاده کرد؛ اگر Column مقصد مشخص نباشد `id` در نظر گرفته می‌شود.
