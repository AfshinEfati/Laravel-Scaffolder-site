<template>
  <div class="landing">
    <header class="header">
      <div class="brand">
        <span class="logo">L</span>
        Laravel Scaffolder
      </div>
      <nav>
        <a href="#features">Features</a>
        <a href="#workflow">Workflow</a>
        <a href="https://github.com/AfshinEfati/Laravel-Scaffolder">GitHub</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-content">
          <span class="badge">Laravel Code Generation Toolkit</span>
          <h1>Build Laravel projects faster with clean architecture.</h1>
          <p>
            Laravel Scaffolder generates structured modules, layers and boilerplate code
            so developers can focus on business logic instead of repetitive setup.
          </p>

          <div class="actions">
            <a class="primary" href="https://github.com/AfshinEfati/Laravel-Scaffolder">Get Started</a>
            <a class="secondary" href="#features">Explore Features</a>
          </div>
        </div>

        <div class="terminal">
          <div class="terminal-head">terminal</div>
          <pre><code>$ php artisan make:module User

✓ Domain created
✓ Repository generated
✓ Service layer ready
✓ Tests scaffolded</code></pre>
        </div>
      </section>

      <section id="features" class="features">
        <article>
          <h3>Modular Development</h3>
          <p>Create organized Laravel modules with a predictable structure.</p>
        </article>
        <article>
          <h3>Clean Layers</h3>
          <p>Generate controllers, services, repositories and tests quickly.</p>
        </article>
        <article>
          <h3>Developer Workflow</h3>
          <p>Reduce repetitive work and keep your projects maintainable.</p>
        </article>
      </section>
    </main>
  </div>
</template>
