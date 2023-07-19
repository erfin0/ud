<script setup>
import { ref } from "vue";
import Sampul from "./components/Sampul.vue";
import isi from "./components/isi.vue";

const lihat = ref(true);
</script>

<template>
  <div class="mx-auto set-lebar bg-indigo-500 ">
    <sampul v-if="lihat" @button-Click="lihat = !lihat" />
    <isi v-else />
  </div>
</template>

<style scoped></style>
