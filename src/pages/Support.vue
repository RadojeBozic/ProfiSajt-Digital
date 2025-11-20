<script setup>
import Header from './../partials/Header.vue'
import HeroSupport from '../partials/HeroSupport.vue'
import Faqs02 from '../partials/Faqs02.vue'
import Cta from '../partials/Cta.vue'
import Footer from './../partials/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <HeroSupport />
      <Faqs02 />
      <Cta/>  

    </main>

    <!-- Site footer -->
    <Footer :border="true" />

  </div>
</template>