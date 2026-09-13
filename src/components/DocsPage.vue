<template>
  <article class="docs-page">
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>

    <TerminalDemo :lines="page.terminal" />

    <section v-for="item in page.sections" :key="item.title">
      <h2>{{ item.title }}</h2>
      <p>{{ item.body }}</p>
    </section>
  </article>
</template>

<script setup>
import TerminalDemo from './TerminalDemo.vue'

defineProps({
  page: Object
})
</script>
