<script setup>
// import { useCounterStore2 } from '@/stores/useCounterStore2.js'

// const store = useCounterStore2()

import { increment } from '@/views/extractFunction.js'

function handleCounter() {
  increment()
}
</script>

<template>
  <button @click="handleCounter()">Increment Count</button>
</template>

<style scoped></style>
