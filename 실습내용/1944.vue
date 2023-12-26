<template>
    <div>
      {{ message }}
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const message= ref("반가워요");
  </script>
  
  <style lang="scss" scoped>
  
  </style>