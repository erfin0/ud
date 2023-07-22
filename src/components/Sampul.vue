<script setup>
import { ref } from "vue";
const emit = defineEmits(["button-Click"]);

const buttonClick = (event, item) => {
  emit("button-Click", event, item);
}
const props = defineProps({
  nama_tamu: String,
  nama_laki: String,
  nama_perempuan: String,
})


</script>

<template>
  <div class="h-screen bg-indigo-500 overflow-hidden">
    <div class="relative rounded-xl p-8 h-full">
      <div class="flex h-full flex-col mx-auto space-y-4  text-white  leading-6 ">
        <div class="h-full">
          
          <div class="h-1/3">
            <div class="p-4 flex items-center justify-center ">
              <h1>The Wedding Of</h1>
            </div>
            <div class="mx-auto px-8">
              <img class="rounded-t-full mx-auto rounded-tr-full  " src="https://picsum.photos/600">
            </div>
          </div>

          <div class="h-4/3 grid grid-cols-1 gap-12 content-center">
          
              <div class="my-8  font-cinzel text-5xl space-y-4 capitalize text-center ">
                
            <p >{{ nama_laki || 'nama laki laki' }} </p>
            <p>&</p>
            <p>{{ nama_perempuan || 'nama perempuan' }}</p>
          </div>
          <div class=" text-center ">
            <p>Dear,</p>
            <p>{{ nama_tamu || 'nama perempuan' }}</p>
          </div>
            <div>
              
          <div class="flex items-center justify-center my-4">
            <button class="btn-primary" type="button" @click="buttonClick">
              📧 Buka Undangan</button>
          </div>
          <div class="text-center my-4">
            <p> Kami berharap Anda</p>
            <p> menjadi bagian dari hari istimewa kami</p>
          </div>
            </div>
           
          </div>

          
         


        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
