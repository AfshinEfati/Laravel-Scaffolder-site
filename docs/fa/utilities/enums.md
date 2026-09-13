---
title: Enum Helper Trait
lang: fa
---

# Enum Helper Trait

`EnumHelperTrait` برای PHP Backed Enumها خروجی مناسب API و Lookup آماده می‌کند.

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

هر Case را با `name`، `fa_name` و `code` برمی‌گرداند. اگر `faName()` تعریف نشده باشد `fa_name=null` است.

## `toMap()`

```php
OrderStatus::toMap();
```

همان Metadata را با Value Enum به‌عنوان Key می‌سازد.

## Lookup

```php
OrderStatus::findByValue(1);
OrderStatus::findByValue(OrderStatus::Paid);
OrderStatus::findByName('Pending');
```

برای مقدار نامعتبر `null` برمی‌گردد.
