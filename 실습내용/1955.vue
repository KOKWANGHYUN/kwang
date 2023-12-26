<script setup>
import { ref } from "vue";

let cnt=0;
const arrs=[];
const btn1class = ref("btn");
const btn2class = ref("btn");
const btn3class = ref("btn");
const btn4class = ref("btn");
const btn5class = ref("btn");
const btn6class = ref("btn");
const btn7class = ref("btn");
const btn8class = ref("btn");
const result = ref("btn");

function selectedBtn(n) {
  if (n === 1 && btn2class.value!=="btn selected") {
    btn1class.value = "btn selected";
    arrs.push('E');
    cnt++;
  } else if (n === 2 && btn1class.value!=="btn selected") {
    btn2class.value = "btn selected";
    arrs.push('I');
    cnt++;
  } else if (n === 3 && btn4class.value!=="btn selected") {
    btn3class.value = "btn selected";
    arrs.push('S');
    cnt++;
  } else if (n === 4 && btn3class.value!=="btn selected") {
    btn4class.value = "btn selected";
    arrs.push('N');
    cnt++;
  } else if (n === 5 && btn6class.value!=="btn selected") {
    btn5class.value = "btn selected";
    arrs.push('T');
    cnt++;
  } else if (n === 6 && btn5class.value!=="btn selected") {
    btn6class.value = "btn selected";
    arrs.push('F');
    cnt++;
  } else if (n === 7 && btn8class.value!=="btn selected") {
    btn7class.value = "btn selected";
    arrs.push('J');
    cnt++;
  } else if (n === 8 && btn7class.value!=="btn selected") {
    btn8class.value = "btn selected";
    arrs.push('P');
    cnt++;
  } else if (n === 9) {
    if(cnt===4){
      btn1class.value = "btn";
      btn2class.value = "btn";
      btn3class.value = "btn";
      btn4class.value = "btn";
      btn5class.value = "btn";
      btn6class.value = "btn";
      btn7class.value = "btn";
      btn8class.value = "btn";
      cnt=0;
      console.log(arrs);
      arrs.length=0;
    }
    else{
      alert("유형을 모두 선택해 주세요!");
    }
    
  }
}
</script>

<template>
  <div class="container">
    <h1>MBTI 검사기</h1>
    <section class="buttonArea">
      <div class="buttonRow">
        <div :class="btn1class" @click="selectedBtn(1)">
          <span class="type">E</span>
          <span>외향형</span>
        </div>
        <div :class="btn2class" @click="selectedBtn(2)">
          <span class="type">I</span>
          <span>내향형</span>
        </div>
      </div>
      <div class="buttonRow">
        <div :class="btn3class" @click="selectedBtn(3)">
          <span class="type">S</span>
          <span>감각형</span>
        </div>
        <div :class="btn4class" @click="selectedBtn(4)">
          <span class="type">N</span>
          <span>직관형</span>
        </div>
      </div>
      <div class="buttonRow">
        <div :class="btn5class" @click="selectedBtn(5)">
          <span class="type">T</span>
          <span>사고형</span>
        </div>
        <div :class="btn6class" @click="selectedBtn(6)">
          <span class="type">F</span>
          <span>감정형</span>
        </div>
      </div>
      <div class="buttonRow">
        <div :class="btn7class" @click="selectedBtn(7)">
          <span class="type">J</span>
          <span>판단형</span>
        </div>
        <div :class="btn8class" @click="selectedBtn(8)">
          <span class="type">P</span>
          <span>인식형</span>
        </div>
      </div>
    </section>
    <button class="result" @click="selectedBtn(9)">결과 보기</button>
  </div>
</template>

<style>
* {
  color: rgb(38, 38, 38);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: 0 auto;
}

h1 {
  color: #50b8e7;
}

.buttonArea {
  margin: 0 auto;
  width: 80%;
}

.buttonRow {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  height: 80px;
}

.btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  border: 1px solid #50b8e7;
  cursor: pointer;
}

.result {
  margin-top: 10px;
  outline: none;
  background: none;
  border: 1px solid #50b8e7;
  width: 100px;
  height: 50px;
  cursor: pointer;
  font-size: large;
}

.result:hover {
  background-color: #b9e2f5;
}

.type {
  font-size: x-large;
  font-weight: bold;
}

.selected {
  background-color: #b9e2f5;
}
</style>