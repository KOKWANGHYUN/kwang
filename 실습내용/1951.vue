<script setup>
import { ref } from "vue"
import { computed } from "vue";
const colors = ["red", "orange", "yellow", "green", "blue", "violet"];

const color = ref("black");

const changeColor = () => {
  color.value = colors[Math.floor(Math.random() * colors.length)]; 
}
</script>
<template>
  <h1>박스 색상 바꾸기</h1>
  <h3>색상 : {{ color }}</h3>
  <div class="box" :style="{ backgroundColor: color }" @click="changeColor"></div>
</template>

<style scoped>
.box {
  width: 100px;
  height: 100px;
}
</style>