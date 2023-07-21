<script setup>
import { ref } from "vue";
const emit = defineEmits(["button-Click"]);

const buttonClick = (event, item) => {
  emit("button-Click", event, item);
}
const props = defineProps({
  nama_tamu: String,
  nama_laki: String,
  nama_perempuan : String ,
})


</script>

<template>
  <div class="h-screen ">
    <div class="relative rounded-xl overflow-auto p-8">
      <div class="flex flex-col mx-auto space-y-4  text-white  leading-6 ">
        <div class="p-4 flex items-center justify-center ">
          <h1>The Wedding Of</h1>
        </div>
        <div class="flex items-center justify-center">{{ nama_laki || 'nama laki laki' }} &  {{ nama_perempuan || 'nama perempuan' }}</div>
        <div class="flex items-center justify-center">Dear,</div>
        <div class="flex items-center justify-center">{{ nama_tamu || 'nama perempuan' }}</div>
        <div class="flex items-center justify-center">
          <button class="btn-primary" type="button" @click="buttonClick">
            📧 Buka Undangan</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
