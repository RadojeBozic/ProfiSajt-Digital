<script setup>
import Header from './../partials/Header.vue'
import PricingTables from './../partials/PricingTables.vue'
import ComparePlans from './../partials/ComparePlans.vue'
import Faqs from './../partials/Faqs.vue'
import Cta from './../partials/Cta.vue'
import Footer from './../partials/Footer.vue'
// import TestimonialsGrid from './../partials/TestimonialsGrid.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <PricingTables />
      <ComparePlans />
      <!-- <TestimonialsGrid /> -->
      <Faqs />
      <Cta />       

    </main>

    <!-- Site footer -->
    <Footer :border="true" />

  </div>
</template>
