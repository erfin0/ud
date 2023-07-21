<script setup>
const MILLISECONDS_SECOND = 1000;
const MILLISECONDS_MINUTE = 60 * MILLISECONDS_SECOND;
const MILLISECONDS_HOUR = 60 * MILLISECONDS_MINUTE;
const MILLISECONDS_DAY = 24 * MILLISECONDS_HOUR;
function days(e) {
  return Math.floor(e / MILLISECONDS_DAY);
}


function hours(e) {
  return Math.floor((e % MILLISECONDS_DAY) / MILLISECONDS_HOUR);
}


function minutes(e) {
  return Math.floor((e % MILLISECONDS_HOUR) / MILLISECONDS_MINUTE);
}



function seconds(e) {
  return Math.floor((e % MILLISECONDS_MINUTE) / MILLISECONDS_SECOND);
}


const targetDate = new Date("2023-08-08T12:00:00Z").getTime();
let countdown = 0;

function startCountdown() {
  const difference = targetDate - new Date().getTime();
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
      <p>The countdown until {{ targetDate }} is: {{ countdown }}</p>
    </div>
  </div>
</template>

<style scoped></style>

