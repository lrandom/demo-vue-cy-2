import { computed, ref } from 'vue'

const counter = ref(0)

const doubleCounter = computed(() => counter.value * 2)

export {
  counter,
  doubleCounter
}
