<template>
  <Listbox v-model="selectedFont">
    <ListboxLabel class="block">Change font</ListboxLabel>
    <ListboxButton
      class="flex items-center justify-between w-full px-2 py-2 border-2 rounded-lg shadow-md border-primary focus:outline-none focus:bg-red-100"
      >{{ selectedFont.pinyin }} ({{ selectedFont.hanzi }})
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
      <ListboxOptions>
        <!-- Use the `active` state to conditionally style the active option. -->
        <!-- Use the `selected` state to conditionally style the selected option. -->
        <ListboxOption
          as="template"
          v-slot="{ active, selected }"
          v-for="font in fonts"
          :key="font.id"
          :value="font"
          class="p-4"
        >
          <li
            :class="{
              'bg-red-200': active,
            }"
          >
            <!--    <CheckmarkIcon v-show="selected" /> -->
            {{ font.pinyin }}
          </li>
        </ListboxOption>
      </ListboxOptions>
    </transition>
  </Listbox>
</template>

<script>
import { ref } from 'vue'
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
  setup() {
    const fonts = [
      { id: 1, pinyin: 'Songti', hanzi: '宋体' },
      { id: 2, pinyin: 'Heiti', hanzi: '黑体' },
      { id: 3, pinyin: 'Kaiti', hanzi: '楷体' },
      { id: 4, pinyin: 'Fangsongti', hanzi: '仿宋体' },
      { id: 5, pinyin: 'Meishuti', hanzi: '美术体' },
    ]
    const selectedFont = ref(fonts[0])

    return {
      fonts,
      selectedFont,
    }
  },
}
</script>
