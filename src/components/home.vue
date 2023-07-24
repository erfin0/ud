<script setup>
import {usePengantinStore} from "../stores/pegantin.js";

const PengantinStore = usePengantinStore();

</script>

<template>
  <div class="h-screen bg-indigo-500 overflow-hidden">
    
    <div class="relative rounded-xl p-8 h-full">
      <div class="flex h-full flex-col mx-auto space-y-4  text-white  leading-6 ">
        <div class="h-full">
          <div class="p-4 flex items-center justify-center ">
            <h1>The Wedding Of</h1>
          </div>
          <div class="h-4/3 grid grid-cols-1 gap-12 content-center">
            <div class="my-8  font-cinzel text-5xl space-y-4 capitalize text-center ">
              <p>{{ PengantinStore.pria|| 'nama laki laki' }} </p>
              <p>&</p>
              <p>{{ PengantinStore.wanita || 'nama perempuan' }}</p>
            </div>
          
            <div>
              <div class="text-center my-4">
                <p> Kami berharap Anda</p>
                <p> menjadi bagian dari hari istimewa kami</p>
              </div>
            </div>
            <div>
              <div class="text-center my-4">
               {{ PengantinStore.tgl}}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
