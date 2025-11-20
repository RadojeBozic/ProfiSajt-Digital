<script setup>
import Header from './../partials/Header.vue'
import HeroApps from '../partials/HeroApps.vue'
import AppList from '../partials/AppList.vue'
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
      <HeroApps />
      <AppList />
      <Cta />  

    </main>

    <!-- Site footer -->
    <Footer :border="true" />

  </div>
</template>