export default {
  en: {
    title: 'Configuration Options',
    description: 'Configure Laravel Scaffolder generation behavior.',
    sections: [
      {
        title: 'Available Options',
        body: 'Laravel Scaffolder supports options for controlling generated architecture and files.',
        options: [
          '--api',
          '--repository',
          '--service'
        ]
      },
      {
        title: 'Example',
        code: 'php artisan scaffolder:make Product --api --repository --service'
      }
    ]
  },
  fa: {
    title: 'تنظیمات و گزینه‌ها',
    description: 'شخصی سازی خروجی تولید شده توسط لاراول اسکفولدر.',
    sections: [
      {
        title: 'گزینه‌های قابل استفاده',
        body: 'برای کنترل ساختار فایل‌های تولیدی می‌توانید از گزینه‌ها استفاده کنید.',
        options: [
          '--api',
          '--repository',
          '--service'
        ]
      },
      {
        title: 'نمونه اجرا',
        code: 'php artisan scaffolder:make Product --api --repository --service'
      }
    ]
  }
};