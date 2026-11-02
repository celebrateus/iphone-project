
function resizeDevice() {
    const device = document.querySelector('.device');
    if (!device) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const scale = Math.min((w - 40) / 441, (h - 40) / 900, 1);

    device.style.setProperty('--device-scale', scale.toFixed(4));
}

resizeDevice();
window.addEventListener('DOMContentLoaded', resizeDevice);
window.addEventListener('load', resizeDevice);
window.addEventListener('resize', resizeDevice);
window.addEventListener('orientationchange', resizeDevice);

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

window.global = window

const app = createApp(App)

app.use(router)

app.mount('#app')
