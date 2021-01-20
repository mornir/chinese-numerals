<template>
  <div class="max-w-xl px-6 py-8 mx-auto">
    <TheHeader msg="fff" class="mb-12" />
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC&family=Montserrat:wght@500&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&family=ZCOOL+KuaiLe&family=Liu+Jian+Mao+Cao&text=负点零一二三四五六七八九十百千万');

h1,
h2,
h3 {
  font-family: 'Montserrat', sans-serif;
}

p,
label {
  font-family: 'Noto Sans SC', sans-serif;
  font-weight: 500;
}
</style>
