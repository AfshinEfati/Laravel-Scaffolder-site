<template>
  <div class="landing">
    <header class="header">
      <div class="brand">
        <span class="logo">L</span>
        Laravel Scaffolder
      </div>

      <nav>
        <a href="#features">Features</a>
        <a href="#docs">Documentation</a>
        <a href="https://github.com/AfshinEfati/Laravel-Scaffolder">GitHub</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-content">
          <span class="badge">Laravel Development Toolkit</span>
          <h1>Generate scalable Laravel modules with confidence.</h1>
          <p>
            Laravel Scaffolder helps developers create clean, structured and maintainable
            Laravel code faster with powerful generators and ready-to-use architecture.
          </p>

          <div class="actions">
            <a class="primary" href="#docs">Read Documentation</a>
            <a class="secondary" href="https://github.com/AfshinEfati/Laravel-Scaffolder">View Source</a>
          </div>
        </div>

        <TerminalDemo />
      </section>

      <section id="features" class="features">
        <article>
          <h3>Module Generator</h3>
          <p>Create modules and layers with simple commands.</p>
        </article>
        <article>
          <h3>Clean Architecture</h3>
          <p>Keep your Laravel projects organized and maintainable.</p>
        </article>
        <article>
          <h3>Developer Friendly</h3>
          <p>Fast workflow with documented commands and examples.</p>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup>
import TerminalDemo from './components/TerminalDemo.vue'
</script>
