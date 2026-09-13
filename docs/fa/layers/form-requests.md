---
title: Form Requestها
lang: fa
---

# Form Requestها

در صورت فعال بودن Requestها دو کلاس Store و Update ساخته می‌شود:

```text
StoreProductRequest.php
UpdateProductRequest.php
```

Ruleها از Metadata Schema استخراج می‌شوند: String/Email/URL، Numeric، Boolean، Date/Datetime، Array/JSON، Nullable، Unique و Foreign Key تا حدی که Parser اطلاعات داشته باشد.

```php
public function rules(): array
{
    return [
        'name' => ['required', 'string', 'unique:products,name'],
        'price' => ['required', 'numeric'],
    ];
}
```
