<script setup> 
  import { ref } from "vue";
  import HomeChild from "@/components/HomeChild.vue";

  const props = defineProps({
    homeData: String,
    parentData: String,
    childData: String,
  });
  const emit = defineEmit(["changeParentData"])

  const userInputParentData=ref("");

  function changeParentData(){
    console.log(userInputParentData.value);
    emit("changeParentData", userInputParentData);
  }
</script>

<template>
  <h2>HomeParent</h2>
  <input type="text" v-model="userInputParentData" @input="changeParentData"/>
  <div>homeData: {{ homeData }}</div>
  <div>childData: {{ childData }}</div>
  <HomeChild 
    :homeData="homeData"
    :parentData="parentData"
    :childData="childData"
  />
</template>