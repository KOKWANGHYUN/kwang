<script setup>
import {useUserStore} from "@/stores/user";

const user = useUserStore();
  function returnAge(){
    user.setAge(1);
  }
</script>

<template>
    <h3>GrandChild</h3>
    <div>{{ user.name }}</div>
    <div>{{ user.age }}</div>
    <button @click="returnAge()">한살로 돌아가자</button>
</template>

<style scoped>

</style>