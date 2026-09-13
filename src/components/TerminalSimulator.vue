<template>
  <div class="terminal">
    <div class="terminal-header">Laravel Scaffolder</div>
    <pre>{{ output }}</pre>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const output = ref(`$ php artisan make:module Product --api

✓ Model created
✓ Migration created
✓ Repository created
✓ Service created
✓ Controller created`)
</script>
