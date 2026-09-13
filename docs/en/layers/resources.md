---
title: API Resources
lang: en
---

# API Resources

API Resource generation is enabled by default and uses discovered field/relation metadata.

```php
return [
    'id' => $this->id,
    'name' => $this->name,
    'price' => $this->price,
];
```

Relations discovered from schema/runtime information can be represented using Laravel's conditional relation helpers so unloaded relations do not trigger extra queries.

Disable resource generation with `--no-resource` if your application has its own response mapping layer.
