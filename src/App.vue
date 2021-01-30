<template>
  <div class="min-h-screen pt-12">
    <div class="max-w-lg px-6 py-8 mx-auto bg-white rounded-xl">
      <TheHeader class="mb-12" />
      <main>
        <ChineseNumerals />
      </main>
    </div>
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

#app {
  background: rgb(220, 38, 38);
  background: linear-gradient(
    153deg,
    rgba(220, 38, 38, 1) 0%,
    rgba(254, 202, 202, 1) 100%
  );
}
</style>
