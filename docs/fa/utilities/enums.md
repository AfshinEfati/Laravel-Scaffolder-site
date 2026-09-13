---
title: Enum Helper Trait
lang: fa
---

# Enum Helper Trait

`EnumHelperTrait` امکانات کمکی برای Native Enumهای PHP فراهم می‌کند.

```php
enum Status: int
{
    use \Efati\ModuleGenerator\Enums\Concerns\EnumHelperTrait;

    case Draft = 0;
    case Published = 1;
}
```

این Trait برای داشتن API یکدست‌تر روی Enumها مفید است و خود Enum همچنان Native PHP باقی می‌ماند.
