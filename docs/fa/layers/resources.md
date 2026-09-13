---
title: API Resourceها
lang: fa
---

# API Resourceها

Resource به‌صورت پیش‌فرض فعال است و از Metadata Field و Relation استفاده می‌کند.

```php
return [
    'id' => $this->id,
    'name' => $this->name,
    'price' => $this->price,
];
```

Relationهای شناخته‌شده می‌توانند با Helperهای Conditional لاراول نمایش داده شوند تا Relation لودنشده Query اضافی نسازد.

با `--no-resource` این لایه را خاموش کن.
