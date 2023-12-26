<script setup>
import { ref } from "vue";

const userInput = ref("");
let cnt=1;
const title="";
const todos = ref([
  // {
  //   id: 1,
  //   title: "밥먹기",
  // },
]);

function addTodo(){
  if(userInput.value){
    console.log(userInput.value);
    console.log(cnt);
    todos.value.push({id: cnt++, title: userInput.value});
  }
  else{
    alert("할 일을 입력해주세요");
  }
  userInput.value="";
}
</script>

<template>
  <header>
    <h1>Todo List</h1>
    <input
      type="text"
      placeholder="할 일을 입력하세요"
      v-model="userInput"
      @keyup.enter="addTodo"
    />
    <button @click="addTodo">추가</button>
  </header>

  <main>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
    <div v-else>할 일이 없습니다.</div>
  </main>
</template>
