<template>
  <div>
    <h1>1 to 100</h1>
    <input type="number" v-model="in4"><br>
    <div v-if="in4 === null">1부터 100사이의 숫자를 입력하세요</div>
    <div v-else-if="in4 > 100 || in4 < 1">1 부터 100 까지의 수가 아닙니다.</div>
    <div v-else-if="in4 < 67">UP</div>
    <div v-else-if="in4 > 67">DOWN</div>
    <div v-else-if="in4 == 67">정답</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const in4 = ref(null);

</script>

<style scoped>

</style>