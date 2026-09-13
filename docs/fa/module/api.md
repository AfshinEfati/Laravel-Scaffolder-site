---
title: --api
lang: fa
---

# `--api`

Controller را به حالت API می‌برد:

```bash
php artisan make:module Product --api
```

API mode علاوه بر Controller، Form Requestها و Actionها را هم فعال می‌کند؛ مگر اینکه Action را صریحاً خاموش کنی:

```bash
php artisan make:module Product --api --no-actions
```

در Config پیش‌فرض `controller_type=api` است، پس این Flag بیشتر برای صریح بودن Command یا پروژه‌ای که Default را تغییر داده کاربرد دارد.
