export const examples = {
  moduleGenerator: {
    command: 'php artisan make:module Product',
    output: [
      'app/Modules/Product',
      'Models',
      'Controllers',
      'Requests',
      'Resources',
      'Services'
    ]
  },
  apiGenerator: {
    command: 'php artisan make:module Product --api',
    output: [
      'API Controller',
      'Form Requests',
      'API Resources',
      'Routes'
    ]
  }
}
