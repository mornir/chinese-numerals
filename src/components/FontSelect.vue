<template>
  <div class="font-medium font-body">
    <Listbox v-model="selectedFont">
      <ListboxLabel class="block pl-2">Change font</ListboxLabel>
      <ListboxButton
        class="flex items-center justify-between w-full px-2 py-2 mb-2 text-lg border-2 rounded-lg shadow-md border-primary focus:outline-none focus:border-yellow-400"
        >{{ selectedFont.pinyin }}
        <svg
          class="w-5 h-5 text-gray-700 stroke-current"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          /></svg
      ></ListboxButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <ListboxOptions
          class="py-2 border-2 shadow-md rounded-xl focus:border-yellow-400 border-primary focus:outline-none"
        >
          <!-- Use the `active` state to conditionally style the active option. -->
          <!-- Use the `selected` state to conditionally style the selected option. -->
          <ListboxOption
            as="template"
            v-slot="{ active, selected }"
            v-for="font in fonts"
            :key="font.id"
            :value="font"
            class="p-2"
          >
            <li
              :class="{
                'bg-red-500 text-white': active,
                'bg-red-300': selected,
              }"
              class="flex justify-between transition-colors duration-300 ease-out cursor-pointer select-none focus:outline-none"
            >
              <!--    <CheckmarkIcon v-show="selected" /> -->
              <span class="text-xl">{{ font.pinyin }}</span>
              <span :style="{ fontFamily: font.pinyin }" class="text-2xl"
                >三四五六七八九十</span
              >
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </Listbox>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

export default {
  components: {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },
  setup(_, { emit }) {
    const fonts = [
      { id: 1, pinyin: 'Ma Shan Zheng' },
      { id: 2, pinyin: 'ZCOOL KuaiLe' },
      { id: 3, pinyin: 'Kaiti' },
      { id: 4, pinyin: 'Fangsongti' },
      { id: 5, pinyin: 'Meishuti' },
    ]
    const selectedFont = ref(fonts[0])

    watch(selectedFont, (newFont) => {
      emit('selected', newFont)
    })

    return {
      fonts,
      selectedFont,
    }
  },
}
</script>
