---
title: Compatibility
lang: en
---

# Compatibility

The current `composer.json` declares these runtime ranges:

| Dependency | Supported range |
| --- | --- |
| PHP | `^8.1 || ^8.2 || ^8.3 || ^8.4 || ^8.5` |
| Laravel Framework | `^10.0 || ^11.0 || ^12.0 || ^13.0` |

Development testing uses Orchestra Testbench ranges corresponding to those Laravel generations and PHPUnit 10.5/11.

## Laravel differences

Provider registration and application structure changed across Laravel releases. Laravel Scaffolder's provider generator contains version-aware registration logic rather than assuming one framework layout.

Controller generation also resolves the application's base controller namespace instead of hard-coding a namespace that could become invalid in a customized application.

## Upgrade checklist

When moving a project to a new Laravel/PHP version:

1. update the framework and package together in a test branch;
2. run the package/application test suites;
3. generate a disposable module and inspect imports/namespaces;
4. regenerate Swagger in a non-production environment;
5. compare published custom stubs with current package templates if you maintain overrides.
