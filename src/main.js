import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Maska from 'maska'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/scss/styles.scss'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
createApp(App)
    .use(store)
    .use(router)
    .use(Maska)
    .use(VueAxios, axios)
    .mount('#app')
