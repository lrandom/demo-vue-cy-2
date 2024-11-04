<script setup>
import Child from '@/components/Child.vue'
import { ref } from 'vue'

const refChildren = ref(null)
const changeDataOfChild = ref(false)
function changeMessageFromParent() {
  // refChildren.value.changeMessage()
  changeDataOfChild.value = true;
}


</script>

<template>
  <Child :is-change-data="changeDataOfChild">
    <template #default="{ data }">
      <p>{{ data.message }}</p>
    </template>
  </Child>

  <button @click="changeMessageFromParent">Change Message</button>
</template>

<style scoped></style>
