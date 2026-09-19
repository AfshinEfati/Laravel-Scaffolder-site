<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import Documentation from './App.vue'

const repo = 'https://github.com/AfshinEfati/Laravel-Scaffolder'
const hash = ref(window.location.hash)
const locale = ref(window.location.hash.startsWith('#/fa') || localStorage.getItem('scaffolder-language') === 'fa' ? 'fa' : 'en')
const example = ref('api')
const copied = ref(false)
let copyTimer

const isDocs = computed(() => /^#\/(en|fa)\/[a-z-]+/.test(hash.value))
const language = computed(() => isDocs.value ? (hash.value.startsWith('#/fa/') ? 'fa' : 'en') : locale.value)
const isFa = computed(() => language.value === 'fa')
const syncRoute = () => {
  hash.value = window.location.hash
  if (isDocs.value) locale.value = hash.value.startsWith('#/fa/') ? 'fa' : 'en'
  document.documentElement.lang = language.value
  document.documentElement.dir = isFa.value ? 'rtl' : 'ltr'
  document.title = isDocs.value ? 'Laravel Scaffolder — Documentation' : 'Laravel Scaffolder — Generate the architecture, own the code'
}
onMounted(() => { window.addEventListener('hashchange', syncRoute); syncRoute() })
onUnmounted(() => { window.removeEventListener('hashchange', syncRoute); clearTimeout(copyTimer) })

function setLanguage(next) {
  locale.value = next
  localStorage.setItem('scaffolder-language', next)
  if (isDocs.value) {
    const slug = hash.value.split('/')[2] || 'introduction'
    window.location.hash = `#/${next}/${slug}`
  } else syncRoute()
}
const home = () => { window.location.hash = '#/'; syncRoute(); window.scrollTo({ top: 0, behavior: 'smooth' }) }
const docUrl = (slug = 'introduction') => `#/${language.value}/${slug}`

const copySnippet = async () => {
  try {
    await navigator.clipboard.writeText(snippets[example.value])
    copied.value = true
    clearTimeout(copyTimer)
    copyTimer = setTimeout(() => { copied.value = false }, 1800)
  } catch { copied.value = false }
}
const snippets = {
  api: 'composer require efati/laravel-scaffolder\nphp artisan make:model Product -m\nphp artisan make:module Product --api',
  full: 'composer require efati/laravel-scaffolder\nphp artisan make:model Product -m\nphp artisan make:module Product --all',
  schema: 'php artisan make:module Product --api \\\n  --fields="name:string:unique,price:decimal(10,2),is_active:boolean"',
}

const text = {
  en: {
    docs: 'Documentation', github: 'GitHub', source: 'Source code', start: 'Get started', explore: 'Explore features',
    eyebrow: 'THE LARAVEL FEATURE GENERATOR',
    headline: 'Generate the architecture. Own the code.',
    lead: 'Turn a model or inline schema into an explicit, editable Laravel feature stack. Repositories, services, DTOs, actions, controllers, requests, tests and API documentation—without repeatedly writing the same foundation.',
    primary: 'Read the quick start', secondary: 'Explore the documentation',
    badges: ['PHP 8.1–8.5', 'Laravel 10–13', 'MIT licensed'],
    sample: 'A REAL ARTISAN WORKFLOW', copy: 'Copy', copied: 'Copied', tabs: { api: 'API module', full: 'Full stack', schema: 'Inline schema' },
    sampleNote: 'Generated files live in your application. Review and extend them like any other Laravel code.',
    featuresEyebrow: 'BUILT AROUND YOUR WORKFLOW', featuresTitle: 'The layers you need, when you need them.',
    featuresLead: 'Choose a focused API module, enable the complete stack, or customize individual layers with command switches.',
    features: [
      { num:'01', title:'Module generation', body:'Generate repository and service contracts, their implementations, controllers, requests, resources, DTOs, actions, providers and optional policies or tests.', slug:'module-generator', tag:'make:module' },
      { num:'02', title:'Schema-aware scaffolding', body:'Infer fields from a model or migration, or provide --fields. Use field types, nullable and unique modifiers, and foreign-key metadata.', slug:'schema-generation', tag:'--fields' },
      { num:'03', title:'Swagger & OpenAPI', body:'Create an OpenAPI 3 JSON document from API routes, initialize a standalone UI and configure its appearance and output.', slug:'swagger', tag:'swagger:generate' },
      { num:'04', title:'Goli / Jalali dates', body:'Work with Jalali dates through Goli, format and convert dates, use Persian digits and an Eloquent date cast.', slug:'goli', tag:'goli()' },
      { num:'05', title:'Configurable architecture', body:'Publish stubs and base classes, customize namespaces and output paths, and select exactly which files to generate.', slug:'configuration', tag:'vendor:publish' },
      { num:'06', title:'Tests & authorization', body:'Generate feature-test scaffolds and optional policy classes. Add the authentication and business assertions your application needs.', slug:'testing', tag:'--tests · --policy' },
    ],
    flowEyebrow: 'FROM IDEA TO FEATURE', flowTitle: 'One command. Familiar Laravel files.',
    flowLead: 'No proprietary runtime layer: the generated classes are ordinary application code you can inspect, adapt and maintain.',
    steps: [
      ['01', 'Describe your feature', 'Start with an Eloquent model, a migration, or an inline --fields schema.'],
      ['02', 'Choose the layers', 'Use --api, --all or specific flags to select the generated artifacts.'],
      ['03', 'Make it yours', 'Review the code, add domain rules, connect routes and extend the generated tests.'],
    ],
    treeTitle: 'Example output', treeNote: 'Illustrative layout; exact files depend on the selected options.',
    detailEyebrow: 'MORE THAN A GENERATOR', detailTitle: 'A practical toolkit for Laravel development.',
    detailText: 'Explore the command reference, customize your templates, and generate an API specification when your routes are ready. The documentation includes English and Persian guides.',
    links: [['Command reference', 'command-options'], ['Architecture', 'architecture'], ['Customization', 'extending'], ['Troubleshooting', 'troubleshooting']],
    ctaTitle: 'Ready to scaffold your next feature?', ctaText: 'Install with Composer, try one module, and keep complete control of the generated code.', ctaButton: 'Open installation guide',
    footer: 'Open-source under the MIT License.', home: 'Home', back: 'Back to homepage'
  },
  fa: {
    docs: 'مستندات', github: 'گیت‌هاب', source: 'کد منبع', start: 'شروع سریع', explore: 'امکانات',
    eyebrow: 'ابزار تولید ساختار برای لاراول',
    headline: 'ساختار را بساز؛ مالک کد بمان.',
    lead: 'از یک مدل یا Schema دستی، ساختار شفاف و قابل‌ویرایش یک قابلیت در لاراول را تولید کن؛ از Repository و Service تا DTO، Action، Controller، Request، تست و مستندات API. به‌جای تکرار زیرساخت، روی منطق محصول تمرکز کن.',
    primary: 'شروع سریع', secondary: 'مشاهده مستندات',
    badges: ['PHP 8.1–8.5', 'Laravel 10–13', 'مجوز MIT'],
    sample: 'نمونه واقعی دستورهای Artisan', copy: 'کپی', copied: 'کپی شد', tabs: { api: 'ماژول API', full: 'تمام لایه‌ها', schema: 'Schema دستی' },
    sampleNote: 'فایل‌های تولیدشده داخل پروژه خودت قرار می‌گیرند؛ می‌توانی مانند بقیه کدهای لاراول بررسی و ویرایششان کنی.',
    featuresEyebrow: 'متناسب با جریان کاری تو', featuresTitle: 'هر لایه‌ای که لازم داری، همان‌قدر که لازم داری.',
    featuresLead: 'یک ماژول API بساز، ساختار کامل را فعال کن یا با گزینه‌های Artisan تک‌تک خروجی‌ها را کنترل کن.',
    features: [
      { num:'01', title:'تولید ماژول', body:'تولید Repository و Service همراه Contract، به‌علاوه Controller، Request، Resource، DTO، Action، Provider و Policy و تست اختیاری.', slug:'module-generator', tag:'make:module' },
      { num:'02', title:'تولید مبتنی بر Schema', body:'استخراج فیلد از Model و Migration یا تعریف مستقیم با --fields؛ همراه با نوع فیلد، nullable، unique و مشخصات کلید خارجی.', slug:'schema-generation', tag:'--fields' },
      { num:'03', title:'Swagger و OpenAPI', body:'تولید سند JSON مطابق OpenAPI 3 از Routeهای API، راه‌اندازی رابط مستقل و تنظیم ظاهر و محل خروجی.', slug:'swagger', tag:'swagger:generate' },
      { num:'04', title:'تاریخ جلالی با Goli', body:'کار با تاریخ جلالی، تبدیل و قالب‌بندی تاریخ، ارقام فارسی و Cast اختصاصی برای Eloquent.', slug:'goli', tag:'goli()' },
      { num:'05', title:'معماری قابل‌تنظیم', body:'انتشار Stubها و کلاس‌های پایه، تنظیم Namespace و مسیر فایل‌ها و انتخاب دقیق لایه‌های موردنیاز.', slug:'configuration', tag:'vendor:publish' },
      { num:'06', title:'تست و دسترسی', body:'ساخت اسکلت Feature Test و کلاس Policy اختیاری؛ سپس افزودن قواعد احراز هویت و تست منطق واقعی برنامه.', slug:'testing', tag:'--tests · --policy' },
    ],
    flowEyebrow: 'از ایده تا قابلیت', flowTitle: 'یک فرمان، فایل‌های آشنای لاراول.',
    flowLead: 'بدون وابستگی به یک لایه اجرایی اختصاصی؛ کلاس‌های خروجی کد معمولی پروژه‌اند و می‌توانی آن‌ها را توسعه بدهی.',
    steps: [
      ['۰۱', 'قابلیت را تعریف کن', 'از Model، Migration یا Schema دستی با --fields شروع کن.'],
      ['۰۲', 'لایه‌ها را انتخاب کن', 'با --api یا --all و سایر فلگ‌ها، خروجی دلخواه را مشخص کن.'],
      ['۰۳', 'کد را کامل کن', 'خروجی را بررسی کن، منطق دامنه و Routeها را تکمیل کن و تست‌ها را توسعه بده.'],
    ],
    treeTitle: 'نمونه ساختار خروجی', treeNote: 'این ساختار نمونه است؛ فایل‌های نهایی به گزینه‌های فرمان بستگی دارند.',
    detailEyebrow: 'فراتر از تولید فایل', detailTitle: 'ابزار کاربردی برای توسعه لاراول.',
    detailText: 'مرجع کامل فرمان‌ها را ببین، قالب‌های تولید کد را مطابق پروژه تغییر بده و بعد از آماده‌شدن Routeها، مشخصات API را تولید کن. راهنماها به فارسی و انگلیسی در دسترس‌اند.',
    links: [['مرجع فرمان‌ها', 'command-options'], ['معماری', 'architecture'], ['شخصی‌سازی', 'extending'], ['رفع اشکال', 'troubleshooting']],
    ctaTitle: 'برای قابلیت بعدی آماده‌ای؟', ctaText: 'پکیج را با Composer نصب کن، یک ماژول نمونه بساز و کنترل کامل کد خروجی را در اختیار داشته باش.', ctaButton: 'راهنمای نصب',
    footer: 'متن‌باز با مجوز MIT.', home: 'خانه', back: 'بازگشت به صفحه اصلی'
  },
}
const t = computed(() => text[language.value])
const tree = `app/\n├── Actions/\n├── DTOs/\n├── Docs/\n├── Http/\n│   ├── Controllers/\n│   ├── Requests/\n│   └── Resources/\n├── Policies/\n├── Providers/\n├── Repositories/\n│   ├── Contracts/\n│   └── Eloquent/\n└── Services/\n    └── Contracts/`
</script>

<template>
  <div v-if="isDocs" class="docs-shell">
    <Documentation :key="hash" />
    <button type="button" class="return-home" @click="home">← {{ t.back }}</button>
  </div>
  <div v-else class="landing" :dir="isFa ? 'rtl' : 'ltr'">
    <a class="skip-link" href="#main-content">{{ t.explore }}</a>
    <header class="landing-header">
      <div class="landing-container nav-inner">
        <a href="#/" class="landing-brand" @click.prevent="home" aria-label="Laravel Scaffolder home"><span class="brand-symbol">{'{ }'}</span><span><strong>Laravel Scaffolder</strong><small>Feature stack generator</small></span></a>
        <nav class="landing-nav" :aria-label="t.docs">
          <a href="#features">{{ t.explore }}</a>
          <a :href="docUrl('installation')">{{ t.start }}</a>
          <a :href="docUrl()">{{ t.docs }}</a>
          <a :href="repo" target="_blank" rel="noopener noreferrer">{{ t.github }} ↗</a>
        </nav>
        <div class="landing-tools">
          <button type="button" class="locale-toggle" :aria-label="isFa ? 'Switch to English' : 'تغییر زبان به فارسی'" @click="setLanguage(isFa ? 'en' : 'fa')">{{ isFa ? 'EN' : 'فا' }}</button>
          <a class="nav-cta" :href="docUrl('installation')">{{ t.start }} <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </header>

    <main id="main-content">
      <section class="landing-container landing-hero">
        <div class="hero-copy">
          <span class="landing-kicker"><span class="pulse-dot"></span>{{ t.eyebrow }}</span>
          <h1>{{ t.headline }}</h1>
          <p class="hero-lead">{{ t.lead }}</p>
          <div class="landing-cta-row">
            <a class="action-primary" :href="docUrl('installation')">{{ t.primary }} <span aria-hidden="true">↗</span></a>
            <a class="action-secondary" :href="docUrl()">{{ t.secondary }} <span aria-hidden="true">→</span></a>
          </div>
          <div class="hero-badges"><span v-for="badge in t.badges" :key="badge">{{ badge }}</span></div>
        </div>
        <div class="terminal-card" aria-label="Artisan command examples">
          <div class="terminal-top"><span class="traffic"><i></i><i></i><i></i></span><span>artisan / scaffolder</span><span class="terminal-suffix">PHP</span></div>
          <div class="terminal-content">
            <div class="terminal-label">{{ t.sample }}</div>
            <div class="terminal-tabs" role="group" :aria-label="t.sample">
              <button v-for="(name, id) in t.tabs" :key="id" type="button" :class="{ selected: example === id }" :aria-pressed="example === id" @click="example = id; copied = false">{{ name }}</button>
            </div>
            <div class="terminal-code"><span class="prompt">$</span><pre>{{ snippets[example] }}</pre></div>
            <div class="terminal-bottom"><span>✓ Laravel Scaffolder</span><button type="button" @click="copySnippet">{{ copied ? t.copied : t.copy }} ↗</button></div>
          </div>
          <p class="terminal-caption">{{ t.sampleNote }}</p>
        </div>
      </section>

      <section id="features" class="landing-container features-section">
        <div class="section-head"><div><span class="section-kicker">{{ t.featuresEyebrow }}</span><h2>{{ t.featuresTitle }}</h2><p>{{ t.featuresLead }}</p></div><a class="section-link" :href="docUrl('command-options')">{{ t.docs }} ↗</a></div>
        <div class="feature-grid"><a v-for="feature in t.features" :key="feature.num" class="feature-card" :href="docUrl(feature.slug)"><div class="feature-meta"><span>{{ feature.num }} / 06</span><span aria-hidden="true">↗</span></div><h3>{{ feature.title }}</h3><p>{{ feature.body }}</p><span class="feature-tag">{{ feature.tag }}</span></a></div>
      </section>

      <section class="workflow-wrap"><div class="landing-container workflow-grid"><div class="workflow-copy"><span class="section-kicker">{{ t.flowEyebrow }}</span><h2>{{ t.flowTitle }}</h2><p class="workflow-lead">{{ t.flowLead }}</p><div class="workflow-steps"><div v-for="step in t.steps" :key="step[0]" class="workflow-step"><span>{{ step[0] }}</span><div><h3>{{ step[1] }}</h3><p>{{ step[2] }}</p></div></div></div><a class="action-secondary" :href="docUrl('architecture')">{{ t.docs }} ↗</a></div><div class="tree-panel"><div class="tree-top"><span class="tree-mark">◈</span>{{ t.treeTitle }}<span>app/</span></div><pre dir="ltr">{{ tree }}</pre><p>{{ t.treeNote }}</p></div></div></section>

      <section class="landing-container detail-section"><div class="detail-copy"><span class="section-kicker">{{ t.detailEyebrow }}</span><h2>{{ t.detailTitle }}</h2><p>{{ t.detailText }}</p></div><div class="resource-links"><a v-for="link in t.links" :key="link[1]" :href="docUrl(link[1])"><span>{{ link[0] }}</span><span aria-hidden="true">↗</span></a></div></section>
      <section class="landing-container bottom-banner"><div><span class="section-kicker">LARAVEL SCAFFOLDER</span><h2>{{ t.ctaTitle }}</h2><p>{{ t.ctaText }}</p></div><a class="action-primary" :href="docUrl('installation')">{{ t.ctaButton }} ↗</a></section>
    </main>
    <footer class="landing-footer"><div class="landing-container footer-inner"><div><strong>Laravel Scaffolder</strong><small>{{ t.footer }}</small></div><div><a :href="docUrl()">{{ t.docs }}</a><a :href="repo" target="_blank" rel="noopener noreferrer">{{ t.source }} ↗</a><a :href="`${repo}/issues`" target="_blank" rel="noopener noreferrer">Issues ↗</a></div></div></footer>
  </div>
</template>
