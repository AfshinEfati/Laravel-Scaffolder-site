---
title: Jalali and Goli dates
lang: en
---

# Jalali / Goli dates

Laravel Scaffolder includes a Jalali date utility named `Goli`, a `Verta` compatibility wrapper, `HasGoliDates` trait and `GoliDateCast`.

The helper function resolves a Goli instance:

```php
$now = goli();
$date = goli('2026-03-21');
```

A model can use the cast when a property should be exposed through the package's Jalali date object:

```php
protected function casts(): array
{
    return [
        'published_at' => \Efati\ModuleGenerator\Casts\GoliDateCast::class,
    ];
}
```

Use the utility only where Jalali presentation/domain behavior belongs; keep database timestamps in standard database-friendly formats.
