<script setup>

import {computed} from 'vue';
/* 
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
 */
/* 
startCountdown();
let time= "0d 0h 0m 0s";
function countdownt() {
  let countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
 time = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  if (distance < 0) {
    clearInterval(interval);
    time = "EXPIRED";
  }
}
countdownt(); */


const { days, hours, minutes, seconds } = computed(() => {
  const now = Math.trunc((new Date()).getTime() / 1000);
 const date = new Date("Jan 5, 2024 15:37:25").getTime();
  return {
    days: Math.trunc((date - now) / 60 / 60 / 24),
    hours: Math.trunc((date - now) / 60 / 60) % 24,
    minutes: Math.trunc((date - now) / 60) % 60,
    seconds: (date - now) % 60,
  };
});

</script>

<template>
  <div id="waktu" class="h-screen ">
    aku waktu
    <div>
      <p>{{ time }}</p>
    </div>
    <div class="block">
        <p class="digit">{{ days }}</p>
        <p class="text">Days</p>
    </div>
    <div class="block">
        <p class="digit">{{ hours }}</p>
        <p class="text">Hours</p>
    </div>
    <div class="block">
        <p class="digit">{{ minutes }}</p>
        <p class="text">Minutes</p>
    </div>
    <div class="block">
        <p class="digit">{{ seconds }}</p>
        <p class="text">Seconds</p>
    </div>
  </div>
</template>

<style scoped></style>

