<template>
  <header class="flex items-center">
    <div
      class="inline-block px-2 pt-2 pb-4 mr-8 text-3xl text-white bg-primary logo-font double-border"
      style="writing-mode: vertical-lr"
    >
      中文<br />数字
    </div>
    <h1 class="inline-block text-3xl text-gray-800">Chinese <br />Numerals</h1>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style scoped>
.logo-font {
  font-family: 'Hachi Maru Pop', cursive;
}

.double-border {
  border: 2px solid white;
  border-radius: 0.4rem;
  box-shadow: 0 0 0 2px #dc2626;
}
</style>
