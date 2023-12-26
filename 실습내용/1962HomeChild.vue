<script setup>
  import { ref } from "vue";  
  const props = defineProps({
    homeData: String,
    parentData: String,
    childData: String,
  });

  const userInputChildData=ref("");
</script>

<template>
  <h3>HomeChild</h3>
  <input type="text" v-model="userInputChildData" />
  <div>homeData: {{ homeData }}</div>
  <div>parentData: {{ parentData }}</div>
  <div>childData: {{ childData }}</div>
</template>