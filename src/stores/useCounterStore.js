import { defineStore } from 'pinia'

const useCouterStore = defineStore('useCounterStore', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount() {
      return this.count * 2
    },
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
