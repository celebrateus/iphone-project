function fitDevice() {
    const d = document.querySelector('.device');
    if (!d) return;

    // 실제 화면보다 커지지 않도록 screen 크기로 상한을 둠
    const w = Math.min(window.innerWidth, screen.width);
    const h = Math.min(window.innerHeight, screen.height);

    const s = Math.min((w - 40) / 441, (h - 40) / 900, 1);

    d.style.setProperty(
        'transform',
        `translate(-50%, -50%) scale(${s.toFixed(4)})`,
        'important'
    );

    // 임시 디버그 라벨 (확인 후 삭제)
    let dbg = document.getElementById('dbg');
    if (!dbg) {
        dbg = document.createElement('div');
        dbg.id = 'dbg';
        dbg.style.cssText = 'position:fixed;top:0;left:0;z-index:99999;background:#f00;color:#fff;font:12px monospace;padding:2px 6px';
        document.body.appendChild(dbg);
    }
    dbg.textContent = `${document.compatMode} in:${window.innerWidth}x${window.innerHeight} cl:${document.documentElement.clientWidth}x${document.documentElement.clientHeight} sc:${screen.width}x${screen.height} s=${s.toFixed(2)}`;
}

fitDevice();
window.addEventListener('DOMContentLoaded', fitDevice);
window.addEventListener('load', fitDevice);
window.addEventListener('resize', fitDevice);
window.addEventListener('orientationchange', fitDevice);

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

window.global = window

const app = createApp(App)

app.use(router)

app.mount('#app')
