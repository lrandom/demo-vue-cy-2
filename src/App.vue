<script setup>
import { onMounted } from 'vue'
import { userService } from '@/services/userService.js'

onMounted(() => {
  userService.getUsers().then(users => {
    console.log(users)
  })
})
</script>

<template></template>
