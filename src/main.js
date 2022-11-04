import {
  createApp
} from 'vue'
import router from './router';
import App from './App.vue'

// 重置样式
import "normalize.css"
import  './assets/mian.css';

createApp(App).use(router).mount('#app')