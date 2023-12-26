<script setup>
import {ref} from "vue";
import axios from "axios";

const url = "https://api.thecatapi.com/v1/images/search";
const imgSrc=ref("");

async function getCat(){
  try{
    const response = await axios.get(url);
    imgSrc.value=response.data[0].url;
  } catch (error) {
    console.error(error);
  }
  
}

getCat();
</script>

<template>
  <h1>Home</h1>
  <img :src="imgSrc">
  <button @click="getCat">고양이를 가져와</button>
</template>
