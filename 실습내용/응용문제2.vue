<template>
  <div>
    {{ word }}
    <br>
    <br>
    <button v-on:click="rclick">Reverse Message</button>
    <br>
    <button v-on:click="addclick">Append"!"</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const word=ref("Hello World!");
function rclick(){
   const nword = word.value.split("");
   const rword = nword.reverse();
   word.value = rword.join("");
}
function addclick(){
   word.value += "!";
}

</script>

<style lang="scss" scoped>

</style>