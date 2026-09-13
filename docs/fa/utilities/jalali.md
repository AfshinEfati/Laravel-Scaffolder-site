---
title: تاریخ جلالی و Goli
lang: fa
---

# تاریخ جلالی / Goli

پکیج ابزار تاریخ جلالی `Goli`، Wrapper سازگار `Verta`، Trait به نام `HasGoliDates` و Cast به نام `GoliDateCast` دارد.

Helper:

```php
$now = goli();
$date = goli('2026-03-21');
```

استفاده از Cast در Model:

```php
protected function casts(): array
{
    return [
        'published_at' => \Efati\ModuleGenerator\Casts\GoliDateCast::class,
    ];
}
```

برای Storage دیتابیس همچنان از Format استاندارد مناسب Database استفاده کن و Goli را برای رفتار/نمایش جلالی به‌کار ببر.
