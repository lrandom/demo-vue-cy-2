<script setup>
import Child2 from '@/views/Child2.vue'

function handleEmitFromChild(data) {
  console.log(data)
}
</script>

<template>
  <Child2 @onChildClick="handleEmitFromChild" />
</template>

<style scoped></style>
