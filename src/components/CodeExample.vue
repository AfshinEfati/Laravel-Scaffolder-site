<template>
  <div class="code-example">
    <div class="code-header">{{ title }}</div>
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  code: String
})
</script>
