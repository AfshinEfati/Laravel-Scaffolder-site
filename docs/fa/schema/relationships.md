---
title: Relationها
lang: fa
---

# Relationها

پکیج می‌تواند از Foreign Keyهای Migration و بررسی Runtime Model اطلاعات Relation استخراج کند و آن را در Resource، Action و سایر Generatorهای Schema-aware استفاده کند.

Migration:

```php
$table->foreignId('user_id')->constrained()->cascadeOnDelete();
```

یا Inline:

```bash
--fields="user_id:integer:fk=users.id"
```

هر دو Metadata پایه‌ی ارتباط با `users.id` را فراهم می‌کنند. Runtime parsing در صورت امکان اطلاعات غنی‌تری از Relationهای Eloquent اضافه می‌کند.
