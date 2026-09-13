export const docs = {
  en: {
    title: 'Documentation',
    direction: 'ltr',
    pages: [
      {
        slug: 'installation',
        title: 'Installation',
        description: 'Install Laravel Scaffolder and prepare your Laravel project.',
        examples: [
          'composer require afshinefati/laravel-scaffolder'
        ]
      },
      {
        slug: 'module-generator',
        title: 'Module Generator',
        description: 'Generate Laravel modules with predefined layers.',
        examples: [
          'php artisan make:module Product --api'
        ]
      },
      {
        slug: 'options',
        title: 'Options',
        description: 'Configure generators and generated resources.'
      }
    ]
  },
  fa: {
    title: 'مستندات',
    direction: 'rtl',
    pages: [
      {
        slug: 'installation',
        title: 'نصب',
        description: 'نصب Laravel Scaffolder و آماده سازی پروژه لاراول.',
        examples: [
          'composer require afshinefati/laravel-scaffolder'
        ]
      },
      {
        slug: 'module-generator',
        title: 'سازنده ماژول',
        description: 'ساخت ماژول های لاراول با لایه های مشخص.',
        examples: [
          'php artisan make:module Product --api'
        ]
      },
      {
        slug: 'options',
        title: 'گزینه ها',
        description: 'تنظیمات سازنده ها و فایل های تولید شده.'
      }
    ]
  }
}
