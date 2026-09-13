---
title: Form Requests
lang: en
---

# Form Requests

The generator creates separate store and update request classes when requests are enabled.

```text
StoreProductRequest.php
UpdateProductRequest.php
```

Rules are inferred from schema metadata. String/email/url, numeric, boolean, date/datetime, array/json and foreign fields are translated into appropriate Laravel validation constraints. Nullable and unique metadata are carried into rules when discovered.

```php
public function rules(): array
{
    return [
        'name' => ['required', 'string', 'unique:products,name'],
        'price' => ['required', 'numeric'],
    ];
}
```
