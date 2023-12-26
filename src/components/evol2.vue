<script setup>
  
</script>

<template>
  <h1>포켓몬 진화 단계 가이드</h1>
  <div class="container">
    <button class="btn" @click="goHome">Home</button>
    <button class="btn" @click="goStart">Start</button>
  </div>
</template>

<style scoped>
  h1{
    text-align: center;
  }
  .container{
    display: flex;
    justify-content: center;
  }
  .btn{
    border: 1px solid rgb(235, 208, 59);
    width: 80px;
    padding: 15px;
    background-color: white;
    margin: 20px;
  }
</style>