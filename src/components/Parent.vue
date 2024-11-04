<script setup>
import Child from '@/components/Child.vue'
import { ref } from 'vue'

const refChildren = ref(null);

function changeMessageFromParent() {
  refChildren.value.changeMessage();
}
</script>

<template>
  <Child ref="refChildren">
    <template #default="{ data }">
      <p>{{ data.message }}</p>
    </template>
  </Child>

  <button @click="changeMessageFromParent">Change Message</button>
</template>

<style scoped></style>
