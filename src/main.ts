import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Import Bootstrap and BootstrapVue 3 CSS files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// Import BootstrapVue 3
import BootstrapVue3 from 'bootstrap-vue-3';
import { createPinia } from 'pinia';

const pinia = createPinia()
const app = createApp(App);
app.use(BootstrapVue3);
app.use(pinia)
app.mount('#app');