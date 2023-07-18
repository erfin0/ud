<script setup>
import { ref } from "vue";
import Sampul from "./components/Sampul.vue";
import isi from "./components/isi.vue";

const lihat = ref(true);
</script>

<template>
  <div>
    <sampul v-if="lihat" @button-Click="lihat=!lihat" />
    <isi v-else>Oh no 😢</isi>
  </div>
  <h1>{{lihat}}</h1>
  <button type="button" @click="lihat = !lihat">xzx🤐 </button>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped></style>
