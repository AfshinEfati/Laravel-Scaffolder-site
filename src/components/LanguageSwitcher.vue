<template>
  <button class="language-switcher" @click="toggle">
    {{ locale === 'fa' ? 'English' : 'فارسی' }}
  </button>
</template>

<script setup>
import { ref } from 'vue'

const locale = ref('en')

function toggle() {
  locale.value = locale.value === 'en' ? 'fa' : 'en'
  document.documentElement.dir = locale.value === 'fa' ? 'rtl' : 'ltr'
}
</script>
