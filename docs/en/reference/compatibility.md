---
title: Compatibility
lang: en
---

# Compatibility

Current Composer constraints are:

| Dependency | Supported |
| --- | --- |
| PHP | `^8.1 || ^8.2 || ^8.3 || ^8.4 || ^8.5` |
| Laravel Framework | `^10.0 || ^11.0 || ^12.0 || ^13.0` |
| Composer | 2.x recommended |

The package uses Laravel package discovery and is designed for normal Laravel application structures while allowing generated paths and the base namespace to be customized.

When upgrading Laravel, run the package test suite in CI before regenerating existing modules.
