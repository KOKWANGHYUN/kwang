<template>
  <div>
     <h1>첫 번째 입력 : SSAFY 여러분들을</h1>
     <input type="text" v-model="message1">
     <h1>두 번째 입력 : 응원합니다!</h1>
     <input type="text" v-model="message2">
    <h1>합산 입력 : {{ message1 }} {{ message2 }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message1= ref("SSAFY 여러분들을");
const message2= ref("응원합니다!");

</script>

<style scoped>

</style>