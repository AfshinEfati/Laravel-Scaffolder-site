<template>
  <div class="site">
    <header class="header">
      <div class="brand">Laravel Scaffolder</div>
      <nav>
        <a href="#">Docs</a>
        <a href="#">GitHub</a>
        <button>EN / FA</button>
      </nav>
    </header>

    <main class="hero">
      <section>
        <span class="badge">Laravel Package Documentation</span>
        <h1>Build Laravel modules faster with clean architecture</h1>
        <p>Complete documentation, examples and interactive command previews for Laravel Scaffolder.</p>
      </section>

      <TerminalDemo />

      <div class="cards">
        <article>Module Generator</article>
        <article>Clean Layers</article>
        <article>API Ready</article>
      </div>
    </main>
  </div>
</template>

<script setup>
import TerminalDemo from './components/TerminalDemo.vue'
</script>
