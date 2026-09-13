---
title: Controllerها
lang: fa
---

# Controllerها

Controller Generator براساس API/Web Mode و لایه‌های فعال، کد متفاوت تولید می‌کند.

API پیش‌فرض:

```text
app/Http/Controllers/Api/V1/ProductController.php
```

Web پیش‌فرض:

```text
app/Http/Controllers/ProductController.php
```

`--controller=Admin` یک Subfolder به Root مربوطه اضافه می‌کند.

## API Controller

Generator با توجه به Optionها این بخش‌ها را Wiring می‌کند:

- Model و Service یا Actionها؛
- Store/Update Form Request؛
- DTO؛
- API Resource؛
- `ApiResponseHelper`؛
- Relation Loading؛
- `controller_middleware`؛
- Swagger ماژول.

اگر Request خاموش باشد `Illuminate\Http\Request` استفاده می‌شود؛ اگر DTO خاموش باشد Array ارسال می‌شود؛ اگر Resource خاموش باشد Response Helper مستقیماً Data را برمی‌گرداند.

با Action Mode، Controller به Operation Classها متکی می‌شود نه Service مستقیم برای هر CRUD.
