import { defineConfig } from 'vitepress'

const moduleOptionsEn = [
  { text: 'Command overview', link: '/en/module/overview' },
  { text: '--api', link: '/en/module/api' },
  { text: '--controller / -c', link: '/en/module/controller-folder' },
  { text: '--requests / -r', link: '/en/module/requests' },
  { text: '--tests / -t', link: '/en/module/tests' },
  { text: '--actions', link: '/en/module/actions' },
  { text: '--policy', link: '/en/module/policy' },
  { text: '--swagger / -sg', link: '/en/module/swagger' },
  { text: '--all / --full', link: '/en/module/full-stack' },
  { text: '--fields', link: '/en/module/fields' },
  { text: '--from-migration / -fm', link: '/en/module/from-migration' },
  { text: '--force', link: '/en/module/force' },
  { text: '--no-controller', link: '/en/module/no-controller' },
  { text: '--no-resource', link: '/en/module/no-resource' },
  { text: '--no-dto', link: '/en/module/no-dto' },
  { text: '--no-test', link: '/en/module/no-test' },
  { text: '--no-provider', link: '/en/module/no-provider' },
  { text: '--no-actions', link: '/en/module/no-actions' },
  { text: '--no-policy', link: '/en/module/no-policy' },
  { text: '--no-swagger', link: '/en/module/no-swagger' },
]

const moduleOptionsFa = [
  { text: 'مرجع دستور make:module', link: '/fa/module/overview' },
  { text: '--api', link: '/fa/module/api' },
  { text: '--controller / -c', link: '/fa/module/controller-folder' },
  { text: '--requests / -r', link: '/fa/module/requests' },
  { text: '--tests / -t', link: '/fa/module/tests' },
  { text: '--actions', link: '/fa/module/actions' },
  { text: '--policy', link: '/fa/module/policy' },
  { text: '--swagger / -sg', link: '/fa/module/swagger' },
  { text: '--all / --full', link: '/fa/module/full-stack' },
  { text: '--fields', link: '/fa/module/fields' },
  { text: '--from-migration / -fm', link: '/fa/module/from-migration' },
  { text: '--force', link: '/fa/module/force' },
  { text: '--no-controller', link: '/fa/module/no-controller' },
  { text: '--no-resource', link: '/fa/module/no-resource' },
  { text: '--no-dto', link: '/fa/module/no-dto' },
  { text: '--no-test', link: '/fa/module/no-test' },
  { text: '--no-provider', link: '/fa/module/no-provider' },
  { text: '--no-actions', link: '/fa/module/no-actions' },
  { text: '--no-policy', link: '/fa/module/no-policy' },
  { text: '--no-swagger', link: '/fa/module/no-swagger' },
]

const layersEn = [
  { text: 'Repositories', link: '/en/layers/repositories' },
  { text: 'Services', link: '/en/layers/services' },
  { text: 'DTOs', link: '/en/layers/dtos' },
  { text: 'Actions', link: '/en/layers/actions' },
  { text: 'Controllers', link: '/en/layers/controllers' },
  { text: 'Form Requests', link: '/en/layers/form-requests' },
  { text: 'API Resources', link: '/en/layers/resources' },
  { text: 'Providers & bindings', link: '/en/layers/providers' },
  { text: 'Policies', link: '/en/layers/policies' },
  { text: 'Feature tests', link: '/en/layers/feature-tests' },
]

const layersFa = [
  { text: 'Repositoryها', link: '/fa/layers/repositories' },
  { text: 'Serviceها', link: '/fa/layers/services' },
  { text: 'DTOها', link: '/fa/layers/dtos' },
  { text: 'Actionها', link: '/fa/layers/actions' },
  { text: 'Controllerها', link: '/fa/layers/controllers' },
  { text: 'Form Requestها', link: '/fa/layers/form-requests' },
  { text: 'API Resourceها', link: '/fa/layers/resources' },
  { text: 'Provider و Binding', link: '/fa/layers/providers' },
  { text: 'Policyها', link: '/fa/layers/policies' },
  { text: 'Feature Testها', link: '/fa/layers/feature-tests' },
]

export default defineConfig({
  title: 'Laravel Scaffolder',
  description: 'Production-friendly Laravel feature scaffolding, schema intelligence and OpenAPI tooling.',
  base: '/Laravel-Scaffolder-site/',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: 'https://afshinefati.github.io/Laravel-Scaffolder-site/' },
  head: [
    ['meta', { name: 'theme-color', content: '#e44332' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Laravel Scaffolder Documentation' }],
    ['meta', { property: 'og:description', content: 'Generate complete Laravel feature stacks with repositories, services, DTOs, actions, policies, resources, tests and OpenAPI documentation.' }],
  ],
  themeConfig: {
    logo: '/mark.svg',
    siteTitle: 'Laravel Scaffolder',
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/AfshinEfati/Laravel-Scaffolder' }
    ],
    nav: [
      { text: 'English', link: '/en/' },
      { text: 'فارسی', link: '/fa/' },
      { text: 'v8.x', items: [
        { text: 'Package repository', link: 'https://github.com/AfshinEfati/Laravel-Scaffolder' },
        { text: 'Releases', link: 'https://github.com/AfshinEfati/Laravel-Scaffolder/releases' }
      ]}
    ],
    sidebar: {
      '/en/': [
        { text: 'Getting Started', items: [
          { text: 'Introduction', link: '/en/' },
          { text: 'Installation', link: '/en/getting-started/installation' },
          { text: 'Quick start', link: '/en/getting-started/quick-start' },
          { text: 'Generated architecture', link: '/en/getting-started/generated-architecture' },
          { text: 'Configuration', link: '/en/getting-started/configuration' },
          { text: 'Publishing & custom stubs', link: '/en/getting-started/publishing' },
        ]},
        { text: 'make:module options', collapsed: false, items: moduleOptionsEn },
        { text: 'Generated Layers', collapsed: false, items: layersEn },
        { text: 'Schema Intelligence', items: [
          { text: 'How field discovery works', link: '/en/schema/discovery' },
          { text: 'Inline field syntax', link: '/en/schema/inline-fields' },
          { text: 'Supported field types', link: '/en/schema/types' },
          { text: 'Modifiers & foreign keys', link: '/en/schema/modifiers' },
          { text: 'Relationships', link: '/en/schema/relationships' },
        ]},
        { text: 'OpenAPI / Swagger', items: [
          { text: 'Overview', link: '/en/swagger/' },
          { text: 'swagger:init', link: '/en/swagger/init' },
          { text: 'swagger:generate', link: '/en/swagger/generate' },
          { text: 'swagger:ui', link: '/en/swagger/ui' },
          { text: 'swagger:config', link: '/en/swagger/config' },
          { text: 'Themes & appearance', link: '/en/swagger/themes' },
          { text: 'Security & environment', link: '/en/swagger/security' },
          { text: 'Legacy make:swagger', link: '/en/swagger/legacy' },
        ]},
        { text: 'Utilities', items: [
          { text: 'Criteria pattern', link: '/en/utilities/criteria' },
          { text: 'Jalali / Goli dates', link: '/en/utilities/jalali' },
          { text: 'Enum helper trait', link: '/en/utilities/enums' },
          { text: 'API response helper', link: '/en/utilities/api-response' },
        ]},
        { text: 'Reference', items: [
          { text: 'Command index', link: '/en/reference/commands' },
          { text: 'Configuration reference', link: '/en/reference/configuration' },
          { text: 'Compatibility', link: '/en/reference/compatibility' },
          { text: 'Troubleshooting', link: '/en/reference/troubleshooting' },
        ]},
      ],
      '/fa/': [
        { text: 'شروع کار', items: [
          { text: 'معرفی', link: '/fa/' },
          { text: 'نصب', link: '/fa/getting-started/installation' },
          { text: 'شروع سریع', link: '/fa/getting-started/quick-start' },
          { text: 'معماری خروجی', link: '/fa/getting-started/generated-architecture' },
          { text: 'پیکربندی', link: '/fa/getting-started/configuration' },
          { text: 'Publish و Stub سفارشی', link: '/fa/getting-started/publishing' },
        ]},
        { text: 'آپشن‌های make:module', collapsed: false, items: moduleOptionsFa },
        { text: 'لایه‌های تولیدشده', collapsed: false, items: layersFa },
        { text: 'تشخیص Schema', items: [
          { text: 'روش کشف فیلدها', link: '/fa/schema/discovery' },
          { text: 'سینتکس --fields', link: '/fa/schema/inline-fields' },
          { text: 'نوع‌های پشتیبانی‌شده', link: '/fa/schema/types' },
          { text: 'Modifier و Foreign Key', link: '/fa/schema/modifiers' },
          { text: 'Relationها', link: '/fa/schema/relationships' },
        ]},
        { text: 'OpenAPI / Swagger', items: [
          { text: 'معرفی', link: '/fa/swagger/' },
          { text: 'swagger:init', link: '/fa/swagger/init' },
          { text: 'swagger:generate', link: '/fa/swagger/generate' },
          { text: 'swagger:ui', link: '/fa/swagger/ui' },
          { text: 'swagger:config', link: '/fa/swagger/config' },
          { text: 'Theme و ظاهر', link: '/fa/swagger/themes' },
          { text: 'امنیت و ENV', link: '/fa/swagger/security' },
          { text: 'make:swagger قدیمی', link: '/fa/swagger/legacy' },
        ]},
        { text: 'ابزارهای جانبی', items: [
          { text: 'Criteria Pattern', link: '/fa/utilities/criteria' },
          { text: 'تاریخ جلالی / Goli', link: '/fa/utilities/jalali' },
          { text: 'Enum Helper Trait', link: '/fa/utilities/enums' },
          { text: 'API Response Helper', link: '/fa/utilities/api-response' },
        ]},
        { text: 'مرجع', items: [
          { text: 'فهرست دستورات', link: '/fa/reference/commands' },
          { text: 'مرجع پیکربندی', link: '/fa/reference/configuration' },
          { text: 'سازگاری', link: '/fa/reference/compatibility' },
          { text: 'رفع اشکال', link: '/fa/reference/troubleshooting' },
        ]},
      ],
    },
    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous page', next: 'Next page' },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Laravel Scaffolder by Afshin Efati'
    }
  }
})
