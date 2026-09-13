---
title: تاریخ جلالی / Goli
lang: fa
---

# تاریخ جلالی با Goli

`Goli` Utility داخلی Laravel Scaffolder برای کار با تاریخ جلالی است. تبدیل جلالی/میلادی، Parse، Format، ارقام فارسی، Carbon، `diffForHumans` و حتی Eloquent Cast را پوشش می‌دهد.

## Helperهای آماده

```php
$now = goli();
$date = goli_date('2026-09-13 12:00:00');
```

هر دو یک `Efati\ModuleGenerator\Support\Goli` برمی‌گردانند.

Service Provider پکیج `goli` را داخل Container هم Bind می‌کند:

```php
$date = app('goli', [
    'datetime' => '2026-09-13 12:00:00',
    'timezone' => 'Asia/Tehran',
]);
```

## ساخت و Parse کردن تاریخ

```php
use Efati\ModuleGenerator\Support\Goli;

$now = Goli::now('Asia/Tehran');
$gregorian = Goli::parse('2026-09-13 12:00:00');
$jalali = Goli::parseGoli('1405-06-22 12:00:00');
$created = Goli::create(1405, 6, 22, 12, 0, 0);
```

`parseGoli()` ارقام فارسی و عربی را هم قبل از Parse نرمال می‌کند.

## Format

```php
$date->toGoliDateString();
$date->toGoliDateTimeString();
$date->format('Y/m/d');
$date->format('Y/m/d', true); // ارقام فارسی
$date->formatGregorian('Y-m-d H:i:s');
```

## Carbon و عملیات زمانی

```php
$carbon = $date->toCarbon();
$date->addDays(2)->subDays(1);
$date->timezone('UTC');
$date->diffForHumans(null, true);
```

اگر متدی روی خود Goli پیدا نشود، Call به Carbon داخلی Forward می‌شود. اگر نتیجه Carbon باشد، دوباره داخل Goli Wrap می‌شود تا Chain قطع نشود.

## Eloquent Cast مستقیم

```php
use Efati\ModuleGenerator\Casts\GoliDateCast;

protected function casts(): array
{
    return [
        'published_at' => GoliDateCast::class,
    ];
}
```

هنگام Read یک Goli می‌گیری. هنگام Write، مقدار با Date Format مدل به Gregorian تبدیل و ذخیره می‌شود؛ یعنی لازم نیست تاریخ جلالی را مستقیم داخل دیتابیس نگه داری.

## Trait برای چند فیلد تاریخ

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

اگر لازم شد در Runtime هم Cast اضافه کنی:

```php
$article->addGoliDateCast('reviewed_at');
```

::: tip
Goli برای نمایش و کار با تاریخ جلالی است؛ ذخیره‌سازی دیتابیس همچنان می‌تواند Gregorian و سازگار با رفتار معمول Laravel بماند.
:::
