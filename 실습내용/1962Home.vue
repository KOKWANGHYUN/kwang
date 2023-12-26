<script setup>
import HomeParent from "@/components/HomeParent.vue";
import { ref } from "vue";

const homeData = ref("homeData");
const parentData = ref("parentData");
const childData = ref("childData");

</script>

<template>
  <h1>Home</h1>
  <input type="text" v-model="homeData" />
  <div>parentData: {{ parentData }}</div>
  <div>childData: {{ childData }}</div>
  <HomeParent
    :homeData="homeData"
    :parentData="parentData"
    :childData="childData"
    @changeParentData="changeParentData"
  />
</template>
