<template>
  <div>
    {{ message }}
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message= ref("Hello Vue.js");
</script>

<style lang="scss" scoped>

</style>