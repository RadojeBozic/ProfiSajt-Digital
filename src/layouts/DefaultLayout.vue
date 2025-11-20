<script setup>
import Header from '../partials/Header.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white">
    <!-- Globalni header -->
    <Header />

    <!-- Glavni sadržaj -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Ako imaš footer, ubaci ovde -->
    <!-- <Footer /> -->
  </div>
</template>
