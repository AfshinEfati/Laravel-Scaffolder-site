---
title: Controllerها
lang: fa
---

# Controllerها

Controller Generator براساس API/Web Mode و لایه‌هایی که فعال کرده‌ای خروجی متفاوتی می‌سازد.

مسیر پیش‌فرض API:

```text
app/Http/Controllers/Api/V1/ProductController.php
```

مسیر پیش‌فرض Web:

```text
app/Http/Controllers/ProductController.php
```

با `--controller=Admin` فقط یک Subfolder به همین Root اضافه می‌شود.

## API Controller چه چیزهایی را به هم وصل می‌کند؟

بسته به Optionها، Controller می‌تواند از این بخش‌ها استفاده کند:

- Model؛
- Service یا Actionها؛
- Store/Update Form Request؛
- DTO؛
- API Resource؛
- `ApiResponseHelper`؛
- Relation Loading؛
- Middlewareهای تنظیم‌شده؛
- و Swagger Doc ماژول.

Generator خروجی را با انتخاب‌هایت هماهنگ می‌کند. اگر DTO خاموش باشد Array می‌فرستد؛ اگر Resource خاموش باشد داده مستقیم به Response Helper می‌رود؛ و اگر Actionها روشن باشند Controller به‌جای صدا زدن مستقیم Service، Operation مربوطه را اجرا می‌کند.

## Request خام

در Flowهایی که Form Request فعال نیست، Controller از `Illuminate\Http\Request` استفاده می‌کند. در API Mode خود Scaffolder Requestها را فعال می‌کند.
