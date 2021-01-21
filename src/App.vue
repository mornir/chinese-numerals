<template>
  <div class="max-w-xl px-6 py-8 mx-auto">
    <TheHeader class="mb-12" />
    <main>
      <ChineseNumerals />
    </main>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import ChineseNumerals from './components/ChineseNumerals.vue'
export default {
  name: 'App',
  components: {
    TheHeader,
    ChineseNumerals,
  },
}
</script>

<style>
h1,
h2,
h3 {
  font-family: 'Montserrat', sans-serif;
}

p,
label {
  font-family: 'Noto Sans SC', sans-serif;
  font-weight: 400;
}
</style>
