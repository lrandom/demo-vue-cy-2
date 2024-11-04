<script setup>
import { ref } from 'vue'

const data = ref({
  message: 'Hello from Child component',
})

function changeMessage() {
  data.value.message = 'Hello from Parent component'
}

defineExpose({
  changeMessage,
})
</script>

<template>
  <slot :data="data"></slot>
</template>

<style scoped></style>
