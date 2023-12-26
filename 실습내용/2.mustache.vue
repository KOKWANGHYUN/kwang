<!-- vbase-3-setup -->
<template>
  <div>
    <!-- <input type="text" v-model="message">
    message: {{ message }} -->
    <input type="text" v-model="message">
    <p>{{message}}</p>
  </div>
</template>

<script setup>
//import parameter from "vue"
// parameter.ref
import { ref } from "vue"
//vue라는 라이브러리에서 ref라는 함수를 가져왔다

//ref reactive reference <- 동적으로 변하는 무언가
const message = ref("Hello Vue");

</script>

<style lang="scss" scoped>

</style>