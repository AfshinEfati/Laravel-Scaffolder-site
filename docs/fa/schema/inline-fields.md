---
title: سینتکس --fields
lang: fa
---

# سینتکس Inline Field

تعریف‌ها با کاما از هم جدا می‌شوند:

```text
name:type[:modifier[:modifier...]]
```

مثال:

```bash
php artisan make:module Product --api \
  --fields="name:string:unique,description:text:nullable,price:decimal(10,2),is_active:boolean,user_id:integer:fk=users.id"
```

Modifierها می‌توانند با `:` یا `|` و در بخش Modifier با فاصله جدا شوند:

```text
name:string:unique
bio:text:nullable
email:email|required|unique
user_id:integer:fk=users.id
category_id:integer:foreign(categories.id)
```

Parser Parenthesis را در نظر می‌گیرد تا `decimal(10,2)` اشتباه Split نشود.
