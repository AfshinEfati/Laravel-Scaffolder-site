---
title: تاریخ جلالی / Goli
lang: fa
---

# تاریخ جلالی با Goli

`Goli` Utility داخلی پکیج برای تبدیل جلالی/میلادی، Parse، ارقام فارسی، Format، Carbon، `diffForHumans` و Eloquent Cast است.

## Helperها

```php
$now = goli();
$date = goli_date('2026-09-13 12:00:00');
```

هر دو `Efati\ModuleGenerator\Support\Goli` برمی‌گردانند.

Service Provider همچنین `goli` را در Container ثبت می‌کند:

```php
$date = app('goli', [
    'datetime' => '2026-09-13 12:00:00',
    'timezone' => 'Asia/Tehran',
]);
```

## ساخت و Parse

```php
use Efati\ModuleGenerator\Support\Goli;

$now = Goli::now('Asia/Tehran');
$gregorian = Goli::parse('2026-09-13 12:00:00');
$jalali = Goli::parseGoli('1405-06-22 12:00:00');
$created = Goli::create(1405, 6, 22, 12, 0, 0);
```

`parseGoli` ارقام فارسی/عربی را Normalize می‌کند.

## Format

```php
$date->toGoliDateString();
$date->toGoliDateTimeString();
$date->format('Y/m/d');
$date->format('Y/m/d', true);
$date->formatGregorian('Y-m-d H:i:s');
```

## Carbon و عملیات زمانی

```php
$carbon = $date->toCarbon();
$date->addDays(2)->subDays(1);
$date->timezone('UTC');
$date->diffForHumans(null, true);
```

Methodهای ناشناخته به Carbon داخلی Forward می‌شوند و Resultهای Carbon دوباره داخل Goli Wrap می‌شوند.

## Eloquent Cast

```php
use Efati\ModuleGenerator\Casts\GoliDateCast;

protected function casts(): array
{
    return ['published_at' => GoliDateCast::class];
}
```

Read یک Goli برمی‌گرداند و Write مقدار را با Date Format مدل به Gregorian ذخیره می‌کند.

## Trait `HasGoliDates`

```php
use Efati\ModuleGenerator\Support\HasGoliDates;

class Article extends Model
{
    use HasGoliDates;

    protected array $goliDates = ['published_at', 'expires_at'];
}
```

برای افزودن Cast در Runtime:

```php
$article->addGoliDateCast('reviewed_at');
```
