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

    // 기기 전체 크기 (417 + 좌우 padding 24)
    const deviceWidth = 441;
    const deviceHeight = 900;

    // 현재 화면 크기
    const screenWidth = document.documentElement.clientWidth;
    const screenHeight = document.documentElement.clientHeight;

    // 여백 20px 확보
    const scaleX = (screenWidth - 40) / deviceWidth;
    const scaleY = (screenHeight - 40) / deviceHeight;

    // 가로와 세로 중 더 작은 비율 적용
    const scale = Math.min(scaleX, scaleY, 1);

    device.style.setProperty('--device-scale', scale);
}

// 처음 실행
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', resizeDevice);
} else {
    resizeDevice();
}

// 화면 크기 변경 시 재실행
window.addEventListener('resize', resizeDevice);
window.addEventListener('orientationchange', resizeDevice);

// 모바일 브라우저 주소창 크기 변경 대응
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', resizeDevice);
}