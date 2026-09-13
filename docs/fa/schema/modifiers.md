---
title: Modifier و Foreign Key
lang: fa
---

# Modifier و Foreign Key

Type به Scaffolder می‌گوید فیلد چه نوع داده‌ای دارد؛ Modifierها رفتار اضافه‌ی همان فیلد را مشخص می‌کنند.

## Nullable

```text
published_at:datetime:nullable
```

این سه Alias یک معنا دارند:

```text
nullable | null | optional
```

## Required

```text
name:string:required
```

Aliasها:

```text
required | notnull | not-null
```

ترتیب Modifierها مهم است. مثلاً اگر بعد از `nullable` مقدار `required` بیاید، فیلد دوباره Required می‌شود:

```text
name:string:nullable:required
```

## Unique

```text
email:email:unique
```

هر دو مقدار زیر شناخته می‌شوند:

```text
unique | uniq
```

این Metadata برای ساخت Unique Rule در Form Request استفاده می‌شود.

## Foreign Key

می‌توانی Table و Column مقصد را صریح مشخص کنی:

```text
user_id:integer:fk=users.id
category_id:integer:foreign=categories.id
owner_id:integer:references=users.id
```

Scaffolder این اطلاعات را نگه می‌دارد تا بتواند چیزهایی مثل `exists:users,id` و Relation Metadata را بسازد.

یک مثال کامل:

```bash
php artisan make:module Post \
  --fields="slug:string:unique,author_id:integer:fk=users.id,published_at:datetime:nullable"
```

::: tip
Modifierها قرار نیست تمام Validation کسب‌وکار را پوشش بدهند. Ruleهایی مثل شرط‌های وابسته به User، Status یا چند فیلد را بعداً داخل Form Request اضافه کن.
:::
