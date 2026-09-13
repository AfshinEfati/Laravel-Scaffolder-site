---
title: Enum helper trait
lang: en
---

# Enum helper trait

`EnumHelperTrait` adds API-friendly lookup and mapping helpers to PHP backed enums.

```php
use Efati\ModuleGenerator\Enums\Concerns\EnumHelperTrait;

enum OrderStatus: int
{
    use EnumHelperTrait;

    case Pending = 1;
    case Paid = 2;

    public function faName(): string
    {
        return match ($this) {
            self::Pending => 'در انتظار',
            self::Paid => 'پرداخت شده',
        };
    }
}
```

## `toList()`

```php
OrderStatus::toList();
```

Returns rows shaped as:

```php
[
    'name' => 'Pending',
    'fa_name' => 'در انتظار',
    'code' => 1,
]
```

If the enum does not define `faName()`, `fa_name` is `null`.

## `toMap()`

```php
OrderStatus::toMap();
```

Keys the same metadata by backed enum value.

## Find helpers

```php
OrderStatus::findByValue(1);
OrderStatus::findByValue(OrderStatus::Paid);
OrderStatus::findByName('Pending');
```

Unknown values/names return `null`. `findByValue` accepts integers, strings and a BackedEnum instance.
