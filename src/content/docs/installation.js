export default {
  title: 'Installation',
  faTitle: 'نصب',
  sections: [
    {
      title: 'Install package',
      command: 'composer require afshinefati/laravel-scaffolder'
    },
    {
      title: 'Publish configuration',
      command: 'php artisan vendor:publish --tag=scaffolder-config'
    }
  ]
}
