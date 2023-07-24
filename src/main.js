import { createApp } from 'vue';
import { createPinia } from "pinia";
 import router from "./router"; 
import './style.css';
import App from './App.vue';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { usePengantinStore } from './stores/pegantin';

const pinia = createPinia();

AOS.init();
createApp(App).use(router).use(pinia).mount("#app");
const pengantinStore = usePengantinStore(pinia);
pengantinStore.fetch();

