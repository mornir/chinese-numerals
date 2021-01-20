<template>
  <div class="mb-12">
    <label for="numeral" class="pl-2">Enter number</label>
    <input
      type="text"
      name="numeral"
      id="numeral"
      v-model="arabicNumerals"
      class="w-full px-2 py-2 mb-8 text-2xl font-medium border-2 rounded-lg shadow-md border-primary focus:outline-none focus:border-yellow-400"
    />
    <p class="mb-6 ml-2 text-4xl" :style="{ fontFamily: selectedFont }">
      {{ chineseNumerals }}
    </p>
    <p class="ml-2">
      <span>Yī wàn líng liùbǎi bāshíwǔ</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block w-6 h-6 ml-2 text-black cursor-pointer stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        />
      </svg>
    </p>
  </div>
  <FontSelect
    @selected="selectedFont = $event"
    :fonts="fonts"
    :selectedFont="selectedFont"
  />
</template>

<script>
import toChineseNumerals from 'to-chinese-numeral'
import FontSelect from './FontSelect.vue'

export default {
  name: 'ChineseNumerals',
  components: {
    FontSelect,
  },
  data() {
    return {
      fonts: [
        'Noto Sans SC',
        'ZCOOL KuaiLe',
        'Kaiti',
        'Liu Jian Mao Cao',
        'Ma Shan Zheng',
      ],
      arabicNumerals: '156',
      selectedFont: 'Noto Sans SC',
    }
  },
  computed: {
    chineseNumerals() {
      if (!this.arabicNumerals.trim()) return
      const num = parseFloat(this.arabicNumerals)
      return toChineseNumerals(num)
    },
  },
}
</script>
