function fitDevice() {
    const d = document.querySelector('.device');
    if (!d) return;

    const DEVICE_W = 441;
    const DEVICE_H = 900;
    const MARGIN_X = 32;   // 좌우 여백
    const MARGIN_Y = 80;   // 상하 여백 (더 줄이고 싶으면 이 값을 낮추세요)

    // 핀치 줌 배율을 보정해서 실제 보이는 CSS 크기를 구함
    const vv = window.visualViewport;
    const w = vv ? vv.width * vv.scale : window.innerWidth;
    const h = vv ? vv.height * vv.scale : window.innerHeight;

    const s = Math.min(
        (w - MARGIN_X * 2) / DEVICE_W,
        (h - MARGIN_Y * 2) / DEVICE_H,
        1
    );

    d.style.setProperty(
        'transform',
        `translate(-50%, -50%) scale(${s.toFixed(4)})`,
        'important'
    );
}

fitDevice();
window.addEventListener('DOMContentLoaded', fitDevice);
window.addEventListener('load', fitDevice);
window.addEventListener('resize', fitDevice);
window.addEventListener('orientationchange', fitDevice);
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', fitDevice);
}

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

window.global = window

const app = createApp(App)

app.use(router)

app.mount('#app')
