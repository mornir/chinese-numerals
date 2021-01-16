<template>
  <div class="px-6 py-8">
    <TheHeader msg="fff" class="mb-12" />
    <main>
      <ChineseNumerals class="mb-12" />
      <FontSelect />
    </main>
  </div>
</template>

<script setup>
import TheHeader from './components/TheHeader.vue'
import ChineseNumerals from './components/ChineseNumerals.vue'
import FontSelect from './components/FontSelect.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat:wght@500&display=swap');

h1,
h2,
h3 {
  font-family: 'Montserrat', sans-serif;
}

p,
label {
  font-family: 'Lato', sans-serif;
  font-weight: 500;
}
</style>
