<script setup>
import Child from '@/views/Child.vue'
import { ref } from 'vue'
import DemoTelePort from '@/views/DemoTelePort.vue'

const message = ref('huhu')
</script>

<template>
  <Child
    :message="message"
    :action="
      () => {
        console.log('hiu')
      }
    "
  >
    This is slot

    <template #footer>hihi</template>
  </Child>

  <teleport to="body">
    <DemoTelePort />
  </teleport>
</template>

<style scoped></style>
