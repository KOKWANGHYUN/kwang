<template>
  <div>
    <input placehorder="아이디" v-model="userId">
    {{ userId }}
    <br>
    <input type="password" placehorder="비밀번호" v-model="userPassword">
    {{ userPassword }}
    <br>
    <input type="checkbox" v-model="isAgree"> {{ isAgree }}

    <br>
    <input type="radio" v-model="userColor" value="red"> 빨강
    <input type="radio" v-model="userColor" value="blue"> 파랑
    <br>
    {{ userColor }}
    <br>
    직업
    <select v-model="userJob"> 
      <option value="student">학생</option>
      <option value="teacher">교사</option>
    </select>
    <br>
    {{ userJob }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

//userId
const userId = ref("");

//userPassword
const userPassword = ref("");

//동의여부 isAgree
const isAgree = ref("false");

//userColor
const userColor = ref("red");

//userJob
const userJob = ref("student");

</script>

<style lang="scss" scoped>

</style>