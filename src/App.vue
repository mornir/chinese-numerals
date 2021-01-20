<template>
  <div class="max-w-xl px-6 py-8 mx-auto">
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

@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&text=负点零一二三四五六七八九十百千万');

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
