---
title: Enum Helper Trait
lang: fa
---

# Enum Helper Trait

اگر از PHP Backed Enum استفاده می‌کنی و مرتب باید آن‌ها را برای API به شکل `name` / `code` تبدیل کنی، `EnumHelperTrait` این Boilerplate را کم می‌کند.

مثال:

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
            self::Paid => 'پرداخت‌شده',
        };
    }
}
```

## `toList()`

```php
OrderStatus::toList();
```

برای هر Case چیزی شبیه این برمی‌گرداند:

```php
[
    'name' => 'Pending',
    'fa_name' => 'در انتظار',
    'code' => 1,
]
```

اگر `faName()` روی Enum نداشته باشی، `fa_name` برابر `null` است.

## `toMap()`

```php
OrderStatus::toMap();
```

همان Metadata را برمی‌گرداند، ولی Value هر Enum به‌عنوان Key آرایه استفاده می‌شود. برای ساخت Lookup سریع یا Meta Endpointها کاربردی است.

## پیدا کردن یک Case

```php
OrderStatus::findByValue(1);
OrderStatus::findByValue(OrderStatus::Paid);
OrderStatus::findByName('Pending');
```

`findByValue()` هم مقدار خام و هم خود `BackedEnum` را قبول می‌کند. اگر چیزی پیدا نشود، خروجی `null` است.
