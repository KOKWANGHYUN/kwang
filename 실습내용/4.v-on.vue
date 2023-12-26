<template>
  <div>
    {{ text }}
    <!-- v-on:이벤트명 = "이벤트함수" -->
    <!-- v-on 과 @는 같다 -->
    <button v-on:click="changeText">클릭</button>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';

const text=ref("???");

function changeText(){
  console.log(text);
  //script에서 ref의 내용을 접근할때는 .value로 접근해야한다
  console.log(text.value);
  text.value = "강산시치,,";
}

</script>

<style lang="scss" scoped>

</style>