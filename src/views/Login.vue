<script setup>
import { ref } from 'vue'
import { userService } from '@/services/userService.js'
import Profile from '@/views/Profile.vue'

const data = ref({
  email: '',
  password: '',
})

const isShowProfile = ref(false)

async function submit() {
  try {
    const { token } = await userService.login({
      email: data.value.email,
      password: data.value.password,
    })
    //save token
    //localStorage -> luu vinh vien tru khi nguoi dung xoa
    //sessionStorage -> luu ko vinh vien (dong trinh duyet, tab)
    //cookie -> luu tren may nguoi dung co thoi han
    localStorage.setItem('token', token)
    isShowProfile.value = true
  } catch (error) {
    alert('Loi cmnr')
    console.error(error)
  }
}
</script>

<template>
  <form @submit.prevent="submit">
    <input v-model="data.email" type="text" name="email" />
    <br />
    <input v-model="data.password" type="password" name="password" />
    <br />
    <button>Submit Data</button>
  </form>
  <Profile v-if="isShowProfile" />
</template>

<style scoped></style>
