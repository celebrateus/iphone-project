import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

window.global = window

const app = createApp(App)

app.use(router)

app.mount('#app')

function resizeDevice() {
    const device = document.querySelector('.device');

    if (!device) return;

    const scaleX = (window.innerWidth - 30) / 441;
    const scaleY = (window.innerHeight - 30) / 900;

    const scale = Math.min(1, scaleX, scaleY);

    device.style.setProperty('--device-scale', scale);
}

window.addEventListener('resize', resizeDevice);
resizeDevice();