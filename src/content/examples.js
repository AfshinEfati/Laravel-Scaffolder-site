export const examples = {
  installation: {
    command: 'composer require efati/laravel-scaffolder',
    description: 'Install Laravel Scaffolder in any supported Laravel application.'
  },
  moduleGenerator: {
    command: 'php artisan make:module Product --all',
    description: 'Generate a complete feature stack.',
    output: [
      'Repository Contract',
      'Eloquent Repository',
      'Service Contract',
      'Service Class',
      'DTO',
      'CRUD Actions',
      'Controller',
      'Form Requests',
      'API Resources',
      'Policies',
      'Providers',
      'Feature Tests'
    ]
  },
  apiGenerator: {
    command: 'php artisan make:module Product --api',
    description: 'Generate an API ready module.',
    output: [
      'API Controller',
      'Validation Requests',
      'API Resources',
      'OpenAPI documentation'
    ]
  },
  schemaGenerator: {
    command: 'php artisan make:module Product --api --fields="name:string:unique,price:decimal(10,2),is_active:boolean"',
    description: 'Generate module structure from inline schema definitions.'
  },
  generatedUsage: {
    controller: "public function store(StoreProductRequest $request) { return ProductResource::make(CreateProductAction::run(ProductDTO::fromRequest($request))); }",
    architecture: [
      'Controller handles HTTP layer',
      'Action contains business operation',
      'Service handles domain logic',
      'Repository handles persistence'
    ]
  }
}
