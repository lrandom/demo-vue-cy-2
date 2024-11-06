import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore2 = defineStore('useCounterStore2', () => {
  const count = () => {
    return ref({})
  }

  const abc = {
    doubleCount: computed(() => count.value * 2),
    increment: () => {
      count.value++
    },
  }

  return { count, ...abc }
})
