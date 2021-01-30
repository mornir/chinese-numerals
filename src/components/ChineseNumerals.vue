<template>
  <div class="mb-10 h-52">
    <label for="numeral" class="pl-2">Enter number</label>
    <input
      type="number"
      :value="arabicNumeral"
      @input="convertToChineseNumeral"
      class="w-full px-2 py-2 mb-8 text-2xl font-medium border-2 rounded-lg shadow-md border-primary focus:outline-none focus:border-yellow-400"
    />
    <div v-if="!errorMessage">
      <p class="mb-6 ml-2 text-4xl" :style="{ fontFamily: selectedFont }">
        {{ chineseNumeral }}
      </p>
      <p class="ml-2">
        <span class="mr-3 text-gray-600">{{ pinyin }}</span>
        <button
          @click="pronounce"
          class="focus:outline-gold"
          v-if="chineseNumeral"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 text-gray-600 cursor-pointer stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            />
          </svg>
        </button>
      </p>
    </div>
    <div v-else>
      <p class="mb-8 ml-2 text-2xl font-semibold text-primary">
        {{ errorMessage }}
      </p>
      <img
        src="../assets/broken_abacus.png"
        alt="Broken Abacus"
        width="80"
        class="ml-auto mr-2"
      />
    </div>
  </div>

  <FontSelect
    @selected="selectedFont = $event"
    :fonts="fonts"
    :fontPreview="chineseNumeral"
    :selectedFont="selectedFont"
    v-if="!errorMessage"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import toChineseNumeral from 'to-chinese-numeral'
import FontSelect from './FontSelect.vue'

import convertToPinyin from '../utils/convertToPinyin'
import getVoices from '../utils/getVoices'

const FONTS = [
  'Noto Sans SC',
  'ZCOOL KuaiLe',
  'Kaiti',
  'Liu Jian Mao Cao',
  'Ma Shan Zheng',
]

export default defineComponent({
  name: 'ChineseNumerals',
  components: {
    FontSelect,
  },
  data() {
    const starterNumber = 156
    const chineseNumeral = toChineseNumeral(starterNumber)
    const pinyin = convertToPinyin(chineseNumeral)

    return {
      fonts: FONTS,
      arabicNumeral: starterNumber.toString(),
      chineseNumeral,
      selectedFont: FONTS[0],
      pinyin,
      voicesList: [] as SpeechSynthesisVoice[],
      errorMessage: '',
    }
  },
  methods: {
    convertToChineseNumeral({ target }: { target: HTMLInputElement }) {
      this.arabicNumeral = target.value

      if (!this.arabicNumeral.trim()) {
        this.chineseNumeral = ''
        this.pinyin = ''
        return
      }

      try {
        const num = parseFloat(this.arabicNumeral)

        if (num > 99_999.999) {
          this.errorMessage = 'Number is too high!'
          return
        }

        if (num < -99_999.999) {
          this.errorMessage = 'Number is too low!'
          return
        }

        this.chineseNumeral = toChineseNumeral(num)
        this.pinyin = convertToPinyin(this.chineseNumeral)
        this.errorMessage = ''
      } catch (error) {
        console.log(error.message)
      }
    },
    pronounce() {
      const utterance = new SpeechSynthesisUtterance(this.chineseNumeral)
      const lang = 'zh-CN'
      utterance.voice = this.voicesList.find(
        (voice) => voice.lang === lang
      ) as SpeechSynthesisVoice
      utterance.lang = lang
      utterance.rate = 0.5

      speechSynthesis.speak(utterance)
    },
  },
  async mounted() {
    const voices = await getVoices()
    this.voicesList = voices
  },
})
</script>
