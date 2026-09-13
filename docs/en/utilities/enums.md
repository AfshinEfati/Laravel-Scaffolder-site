---
title: Enum helper trait
lang: en
---

# Enum helper trait

`EnumHelperTrait` adds convenience behavior for PHP enums used in Laravel applications.

```php
enum Status: int
{
    use \Efati\ModuleGenerator\Enums\Concerns\EnumHelperTrait;

    case Draft = 0;
    case Published = 1;
}
```

Use the helper when you want consistent enum value/label utilities while keeping the enum itself native PHP.

Because enum display conventions vary by project, review the trait API in your installed package before coupling external clients to its output.
