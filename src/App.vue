<script setup>
import { ref } from "vue";
import Sampul from "./components/Sampul.vue";
import isi from "./components/isi.vue";

const lihat = ref(true);
const tamu ="tukijo";
const laki ="maman";
const perempuan="tukinem";
</script>

<template>
  <div class="mx-auto set-lebar bg-indigo-500 ">
    <sampul :nama_tamu="tamu"  :nama_laki="laki"  :nama_perempuan="perempuan"  v-if="lihat"
      @button-Click="lihat = !lihat" />
    <isi v-else />
  </div>
</template>

<style scoped></style>
