export default {
  title: 'Command Options',
  sections: [
    {
      title: 'make:module options',
      content: `
# make:module options

Generate a complete Laravel feature stack with configurable layers.

## Full generation

```bash
php artisan make:module Product --all
```

Creates controllers, requests, resources, tests, provider, DTOs, swagger docs and actions.

## API modules

```bash
php artisan make:module Product --api
```

Enables API controller style and request generation.

## Individual generators

| Option | Description |
|---|---|
| --controller | Generate controller in optional subfolder |
| --requests | Generate Store and Update Form Requests |
| --tests | Force feature tests |
| --actions | Generate action classes |
| --policy | Generate policy |
| --swagger | Generate OpenAPI annotations |
| --fields | Generate from inline schema |
| --from-migration | Generate from migration |
| --force | Replace existing files |
| --no-controller | Skip controller |
| --no-resource | Skip resource |
| --no-dto | Skip DTO |
| --no-test | Skip tests |
| --no-provider | Skip provider |
| --no-actions | Skip actions |
| --no-policy | Skip policy |
| --no-swagger | Skip swagger |

## Inline schema example

```bash
php artisan make:module Product --api \\
 --fields="name:string:unique,price:decimal(10,2),is_active:boolean"
```
`
    }
  ]
}
