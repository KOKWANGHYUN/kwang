<template>
  <div>
    <input type="text" v-model="in1"><br>
    {{ in1 }}<br>
    <input type="text" v-model="in2"><br>
    {{ in2 }}<br>
    <input type="text" v-model="in3"><br>
    {{ in3 }}<br>
    <input type="text" v-model="in4"><br>
    <div v-if="in4 === 'ABC'"></div>
    <div v-else-if="in4 === ''"></div>
    <div v-else>A B C가 아닙니다.</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const in1 = ref("");
const in2 = ref("");
const in3 = ref("");
const in4 = ref("");

</script>

<style scoped>

</style>