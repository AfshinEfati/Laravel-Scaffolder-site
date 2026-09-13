<template>
  <div class="docs-layout">
    <aside><slot name="sidebar" /></aside>
    <main><slot /></main>
  </div>
</template>

<style scoped>
.docs-layout{display:grid;grid-template-columns:280px 1fr;min-height:100vh}
aside{border-right:1px solid rgba(255,255,255,.08);padding:24px}
main{padding:40px;max-width:900px}
</style>
