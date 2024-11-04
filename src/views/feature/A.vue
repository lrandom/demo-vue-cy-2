<script setup>
import { state } from '@/views/feature/extractData.js'

function handleChangeState() {
  state.value.data = 'new data'
}
</script>

<template>
  <B/>
</template>

<style scoped></style>
