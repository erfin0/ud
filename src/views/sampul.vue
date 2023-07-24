
<template>
   <sampul/>
</template>

<script setup>
import {usePengantinStore} from "../stores/pegantin.js";
import { useRoute } from 'vue-router'
import sampul from "../components/Sampul.vue";


const PengantinStore = usePengantinStore();
const route = useRoute();
console.log(route.query)
PengantinStore.setPengantin(route.query);
//

</script>