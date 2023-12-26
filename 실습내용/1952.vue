<script setup>
import { ref } from "vue";

const btn1class = ref("btn");
const btn2class = ref("btn");
const btn3class = ref("btn");
const btn4class = ref("btn");
const clear = ref("btn");

function selectedBtn(n) {
  if (n === 1) {
    btn1class.value = "btn selected";
  } else if (n === 2) {
    btn2class.value = "btn selected";
  } else if (n === 3) {
    btn3class.value = "btn selected";
  } else if (n === 4) {
    btn4class.value = "btn selected";
  } else if (n === 5) {
    btn1class.value = "btn";
    btn2class.value = "btn";
    btn3class.value = "btn";
    btn4class.value = "btn";
  }
}
</script>

<template>
  <div class="container">
    <h1>버튼 클릭하기</h1>
    <section class="buttonArea">
      <div class="buttonRow">
        <div :class="btn1class" @click="selectedBtn(1)">
          <span class="type">1</span>
        </div>
        <div :class="btn2class" @click="selectedBtn(2)">
          <span class="type">2</span>
        </div>
      </div>
      <div class="buttonRow">
        <div :class="btn3class" @click="selectedBtn(3)">
          <span class="type">3</span>
        </div>
        <div :class="btn4class" @click="selectedBtn(4)">
          <span class="type">4</span>
        </div>
      </div>
    </section>
    <button class="clear" @click="selectedBtn(5)">전체 해제</button>
  </div>
</template>

<style scoped>
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

.clear {
  margin-top: 10px;
  outline: none;
  background: none;
  border: 1px solid #50b8e7;
  width: 100px;
  height: 50px;
  cursor: pointer;
  font-size: large;
}

.clear:hover {
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
