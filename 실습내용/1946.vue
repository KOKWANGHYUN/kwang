<script setup>
  import { ref } from 'vue';

  const btn1class=ref("btn");
  const btn2class=ref("btn");

  function selectedBtn(n){
    if(n==1){
      btn1class.value="btn selected";
      btn2class.value="btn";
    }
    else{
      btn2class.value="btn selected";
      btn1class.value="btn";
    }
  }
</script>

<template>
  <h1>버튼을 골라주세요</h1>
  <div class="container">
    <div :class="btn1class" @click="selectedBtn(1)">선택1</div>
    <div :class="btn2class" @click="selectedBtn(2)">선택2</div>
  </div>
</template>


<style scoped>
  .btn{
    border: 1px solid black;
    width: 180px;
    margin: 10px;
    padding: 10px;
    text-align: center;
  }

  .selected{
    background-color: aqua;
  }
</style>