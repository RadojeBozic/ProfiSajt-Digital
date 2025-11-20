<script setup>
import Header from './../partials/Header.vue'
import Footer from './../partials/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <Header />

    <main class="grow">
      <section class="pt-24 pb-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 class="text-3xl md:text-4xl font-bold mb-8">{{ $t('projects.title') || 'Projekti' }}</h1>

          <!-- Minimalni placeholder grid -->
          <div class="grid md:grid-cols-2 gap-4">
            <a href="https://express-web.express" target="_blank" rel="noopener"
               class="p-5 rounded-2xl bg-white shadow-sm border border-gray-100 hover:border-gray-200">
              <div class="font-medium">Express Web – glavni sajt</div>
              <p class="text-sm text-gray-600 mt-1">Naša polazna tačka i portfolio ponude.</p>
            </a>

            <!-- Dodaj još stavki kasnije… -->
            <div class="p-5 rounded-2xl bg-white shadow-sm border border-gray-100">
              <div class="font-medium">Cruip šabloni (preview)</div>
              <p class="text-sm text-gray-600 mt-1">Ovde ćemo dodati screenshots i opise.</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer :border="true" />
  </div>
</template>
