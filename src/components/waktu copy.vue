<script setup>
const MILLISECONDS_SECOND = 1000;
const MILLISECONDS_MINUTE = 60 * MILLISECONDS_SECOND;
const MILLISECONDS_HOUR = 60 * MILLISECONDS_MINUTE;
const MILLISECONDS_DAY = 24 * MILLISECONDS_HOUR;

const days = (e) => Math.floor(e / MILLISECONDS_DAY);
const hours = (e) => Math.floor((e % MILLISECONDS_DAY) / MILLISECONDS_HOUR);
const minutes = (e) => Math.floor((e % MILLISECONDS_HOUR) / MILLISECONDS_MINUTE);
const seconds = (e) => Math.floor((e % MILLISECONDS_MINUTE) / MILLISECONDS_SECOND);

const targetDate = new Date("2023-08-08T12:00:00Z");
let countdown = 0;

function startCountdown() {
  const difference = targetDate - new Date();
  countdown = difference / 1000;

  setTimeout(() => {
    startCountdown();
  }, 1000);
}

startCountdown();
</script>

<template>
  <div id="waktu" class="h-screen ">
    aku waktu
    <div>
     <!--  <p>The countdown until {{  days(targetDate) }} is: {{ countdown }}</p> -->

      <p>{{ time }}</p>
    </div>
  </div>
</template>

<style scoped></style>

