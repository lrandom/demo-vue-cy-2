<script setup>
import { computed, defineAsyncComponent, ref } from 'vue'

const loadComponent = ref(false)

const component = computed(() => {
  return loadComponent.value
    ? defineAsyncComponent({
        loader: () => import('./sub/A.vue'),
      })
    : null
})
</script>

<template>
  <component :is="component" />

  <button @click="loadComponent = true">Click Me hihi</button>
</template>

<style scoped></style>
