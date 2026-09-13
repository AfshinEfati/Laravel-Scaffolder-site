export default {
  title: 'Commands',
  faTitle: 'دستورها',
  description: {
    en: 'Laravel Scaffolder provides Artisan commands to generate application components quickly.',
    fa: 'لاراول اسکفولدر مجموعه‌ای از دستورهای آرتیسان برای ساخت سریع بخش‌های مختلف برنامه ارائه می‌کند.'
  },
  commands: [
    {
      name: 'scaffold:make',
      example: 'php artisan scaffold:make User',
      output: [
        'app/Models/User.php',
        'app/Services/UserService.php',
        'app/Repositories/UserRepository.php'
      ]
    },
    {
      name: 'scaffold:list',
      example: 'php artisan scaffold:list'
    }
  ]
}
