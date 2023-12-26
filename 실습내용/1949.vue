<script setup>
import { computed } from "vue";
const nums = [1, 2, 3, 4, 5, 6];
const computedNums = computed(() => nums.filter((num) => num % 2 == 1));
</script>
<template>
  <ul v-for="(num, index) in computedNums" :key="index">
    <li>{{ num }}</li>
  </ul>
</template>