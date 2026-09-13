import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import '@fontsource/fira-code/400.css'
import '@fontsource/fira-code/500.css'
import '@fontsource/fira-code/600.css'
import '@fontsource/fira-code/700.css'
import '@fontsource/vazirmatn/400.css'
import '@fontsource/vazirmatn/500.css'
import '@fontsource/vazirmatn/600.css'
import '@fontsource/vazirmatn/700.css'
import '@fontsource/vazirmatn/800.css'
import './custom.css'

function syncDocumentDirection(path: string) {
  if (typeof document === 'undefined') return

  const isPersian = path.startsWith('/fa/') || path === '/fa'
  const root = document.documentElement

  root.lang = isPersian ? 'fa' : 'en'
  root.dir = isPersian ? 'rtl' : 'ltr'
  root.classList.toggle('is-fa', isPersian)
}

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof document === 'undefined') return

    syncDocumentDirection(router.route.path)
    router.onAfterRouteChange = (to) => syncDocumentDirection(to)
  },
} satisfies Theme
