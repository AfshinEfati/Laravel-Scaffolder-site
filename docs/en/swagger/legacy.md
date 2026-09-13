---
title: Legacy make:swagger
lang: en
---

# Legacy `make:swagger`

The package still registers:

```bash
php artisan make:swagger
```

but the command is marked **deprecated**. Its historical options are:

```text
--path=          Filter routes by URI prefix
--controller=    Filter controller namespace
--force, -f      Overwrite generated annotation files
--output=        Output directory (historically app/Docs)
```

For new projects prefer the JSON-based command:

```bash
php artisan swagger:generate
```
