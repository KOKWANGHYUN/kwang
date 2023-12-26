<script setup>
import {ref} from "vue";
const lottoNums = ref([]);
function generateLottoNums(){
  lottoNums.value=[];
  while(lottoNums.value.length < 6){
    const num = Math.floor(Math.random() * 45) + 1;
    if(!lottoNums.value.includes(num)){
      lottoNums.value.push(num);
    }
  }
  lottoNums.value.sort((a, b) => a - b);
}
</script>

<template>
  <h1>로또 번호 생성기</h1>
  <button @click="generateLottoNums">번호 생성</button>
  <div>{{ lottoNums }}</div>
</template>