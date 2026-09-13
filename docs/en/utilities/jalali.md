---
title: Jalali dates with Goli
lang: en
---

# Jalali dates with Goli

`Goli` is Laravel Scaffolder's built-in Jalali date utility. It supports Jalali/Gregorian conversion, parsing, Persian digits, formatting, Carbon interoperability, human-readable differences and Eloquent casting.

## Helpers

The package autoloads two global helpers:

```php
$now = goli();
$date = goli_date('2026-09-13 12:00:00');
```

Both return `Efati\ModuleGenerator\Support\Goli`.

## Create and parse

```php
use Efati\ModuleGenerator\Support\Goli;

$now = Goli::now('Asia/Tehran');
$fromGregorian = Goli::parse('2026-09-13 12:00:00');
$fromJalali = Goli::parseGoli('1405-06-22 12:00:00');
$created = Goli::create(1405, 6, 22, 12, 0, 0);
```

`parseGoli` understands Persian/Arabic digits by normalizing them before Jalali parsing.

## Format

```php
$date->toGoliDateString();
$date->toGoliDateTimeString();
$date->format('Y/m/d');
$date->format('Y/m/d', true); // Persian digits
$date->formatGregorian('Y-m-d H:i:s');
```

## Carbon and time operations

```php
$carbon = $date->toCarbon();
$timestamp = $date->getTimestamp();
$date->addDays(2)->subDays(1);
$date->timezone('UTC');
```

Unknown method calls are forwarded to the underlying Carbon instance; Carbon results are wrapped back into Goli.

## Human-readable differences

```php
$date->diffForHumans();
$date->diffForHumans(null, true); // Persian digits
```

## Eloquent cast

```php
use Efati\ModuleGenerator\Casts\GoliDateCast;

protected function casts(): array
{
    return [
        'published_at' => GoliDateCast::class,
    ];
}
```

Reading the attribute returns a Goli instance. Writing accepts a Goli-compatible value and stores Gregorian data using the model date format.

## `HasGoliDates`

For several attributes:

```php
use Efati\ModuleGenerator\Support\HasGoliDates;

class Article extends Model
{
    use HasGoliDates;

    protected array $goliDates = [
        'published_at',
        'expires_at',
    ];
}
```

The trait registers `GoliDateCast` for every configured field during model initialization. You can also add casts at runtime:

```php
$article->addGoliDateCast('reviewed_at');
```
