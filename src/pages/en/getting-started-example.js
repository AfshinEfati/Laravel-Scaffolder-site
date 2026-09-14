export default {
 title: 'Examples',
 examples: [
  {
   title: 'Repository Service DTO stack',
   code: 'php artisan make:module Product --all'
  },
  {
   title: 'API with schema',
   code: 'php artisan make:module Product --api --fields="name:string,price:decimal(10,2)"'
  },
  {
   title: 'Swagger only',
   code: 'php artisan make:module Product --swagger'
  }
 ]
}
