<script setup>
    import {ref} from "vue";
    const mes=ref("hello");
</script>

<template>
    <input type="text" v-model="mes">
    <p>{{ mes }}</p>
</template>