<template>
  <button @click="handleSendEmit()">Emit Data</button>
</template>

<script setup>
const emits = defineEmits(['onChildClick', 'onChildClick2'])

function handleSendEmit() {
  emits('onChildClick', {
    data: 'Hello from child',
  })
}
</script>
