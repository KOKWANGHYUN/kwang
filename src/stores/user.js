import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const name = ref("david");
  const age = ref(10);

  function setName(newName){
    name.value=newName;
  }

  function setAge(newAge){
    age.value=newAge;
  }

  return { name, age, setName, setAge }
})
