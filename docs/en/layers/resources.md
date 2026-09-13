---
title: API Resources
lang: en
---

# API Resources

The Resource generator creates:

```text
app/Http/Resources/ProductResource.php
```

It uses field metadata/model fillable data, casts and discovered relations to build a useful `JsonResource` instead of a blank transformer.

## Field formatting

Generated fields include `id` plus the fillable/schema fields. Special values are normalized through the published helper:

```text
date/datetime or *_at -> ApiResponseHelper::formatDates(...)
boolean or is_*/has_* -> ApiResponseHelper::getStatus(...)
```

Other fields are returned directly.

## Relations

Relations discovered from migration metadata or callable model relations are serialized conditionally with `whenLoaded()`.

Collection-style relations such as has-many/belongs-to-many use the related Resource collection when that Resource class exists. Single relations use the related Resource instance. If the related Resource has not been generated, the loaded relation itself is returned.

This design avoids triggering database queries simply because a Resource knows about a relation.

## Disable

```bash
php artisan make:module Product --no-resource
```

The controller generator adapts so it does not reference a missing Resource.
