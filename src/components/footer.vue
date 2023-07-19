<script setup>
import { EnvelopeIcon, UsersIcon ,CalendarIcon,HeartIcon ,PhotoIcon, GiftIcon ,MapPinIcon } from '@heroicons/vue/24/outline'
function scrollToDiv(e){
  const div = document.getElementById(e);

// Scroll to the div element
div.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <footer class=" mb-3 fixed bottom-0 set-lebar ">
    <div class="flex justify-around py-1  mx-3 bg-gray-800 rounded-lg bg-slate-50 opacity-75">
      <div><button class="btn-ftr" @click="scrollToDiv('home')"><EnvelopeIcon class="ico-btn" /></button></div>
      <div><button class="btn-ftr" @click="scrollToDiv('pasangan')"><UsersIcon class="ico-btn"/></button></div>
      <div><button class="btn-ftr" @click="scrollToDiv('waktu')"><CalendarIcon class="ico-btn" /></button></div>
      <div><button class="btn-ftr" @click="scrollToDiv('peta')"><MapPinIcon class="ico-btn"/></button></div>
      <div><button class="btn-ftr" @click="scrollToDiv('cerita')"><HeartIcon class="ico-btn"/></button></div>
      <div><button class="btn-ftr" @click="scrollToDiv('galeri')"><PhotoIcon class="ico-btn"/></button></div>
      <div><button class="btn-ftr" @click="scrollToDiv('hadiah')"><GiftIcon class="ico-btn"/></button></div>
    </div>
  </footer>
</template>

<style scoped></style>
