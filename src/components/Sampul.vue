<script setup>
const emit = defineEmits(["button-Click"]);

const buttonClick = (event, item) => {
  emit("button-Click", event, item);
};
</script>

<template>
  <div class="h-screen ">
    <button
      class="btn-primary"
      type="button"
      @click="buttonClick"
    >
      xxx
    </button>
  </div>
</template>

<style scoped></style>
