---
title: Feature tests
lang: en
---

# Feature tests

Generated feature tests provide a starting point for CRUD endpoint coverage. The generator uses field metadata to create request payloads and assertions rather than producing an entirely empty test class.

```bash
php artisan make:module Product --tests
php artisan test --filter=ProductTest
```

Generated tests are scaffolding, not a replacement for business-specific behavior tests. Extend them with authorization, edge cases and domain invariants.
