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

    const vw = window.visualViewport
        ? window.visualViewport.width
        : window.innerWidth;

    const vh = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;

    // 기기 전체 크기
    const deviceWidth = 441;
    const deviceHeight = 900;

    // 화면 여백 20px 확보
    const scaleX = (vw - 40) / deviceWidth;
    const scaleY = (vh - 40) / deviceHeight;

    const scale = Math.min(scaleX, scaleY, 1);

    device.style.setProperty(
        '--device-scale',
        Math.max(0.1, scale)
    );
}
