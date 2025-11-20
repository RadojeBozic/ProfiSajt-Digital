<script setup>
import Header from './../partials/Header.vue'
import Footer from './../partials/Footer.vue'

// Tri odvojene sekcije iz partials/
import Address from './../partials/Address.vue'
import AboutUs from './../partials/AboutUs.vue'
import ContactForm from './../partials/ContactForm.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
    <Header />

    <main class="grow">
      <section class="pt-24 pb-20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <h1 class="text-3xl md:text-4xl font-bold mb-10">{{ $t('contact.title') }}</h1>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Leva kolona: Adresa + O nama -->
            <div class="col-span-1 space-y-4">
              <Address />
              <AboutUs />
            </div>

            <!-- Desna kolona: Kontakt forma -->
            <div class="col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer :border="true" />
  </div>
</template>
