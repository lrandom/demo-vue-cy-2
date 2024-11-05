<script setup>
import { useRoute } from 'vue-router'
import { onMounted, watch } from 'vue'

const route = useRoute()

onMounted(()=>{
  //call api o day
})

watch(()=>route, (newVal, oldVal)=>{
  //call api o day
},{
  deep:true
})
</script>

<template>
  <div>Page 2</div>
  <br />
  <div>{{ route.params.id }}</div>
  <div>{{ route.params.name }}</div>
  <div>{{ route?.query?.myAge }}</div>
</template>

<style scoped></style>
