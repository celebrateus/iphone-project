<template>
    <div class="device-home">
        <div class="app-list-home">
            <div class="app-home" data-app="kk" @click="movePage('#kk')">
                <svg viewBox="0 0 100 100">
                    <rect width="100" height="100" rx="23" fill="#FAE100"></rect>
                    <ellipse cx="50" cy="46" rx="39" ry="31" fill="#3A1D1D"></ellipse>
                    <path d="M27 66 L19 90 L47 74 Z" fill="#3A1D1D"></path>
                    <text x="50" y="55" text-anchor="middle" font-family="Arial Black,Arial,Helvetica,sans-serif"
                          font-weight="900" font-size="25" fill="#FAE100" letter-spacing="-.5">TALK
                    </text>
                </svg>
                카카오톡
            </div>
            <div class="app-home" data-app="pho" @click="movePage('#pho')">
                <svg viewBox="0 0 100 100">
                    <rect width="100" height="100" rx="23" fill="#fff"></rect>
                    <g transform="translate(50 50)">
                        <ellipse cx="0" cy="-17" rx="10" ry="19" transform="rotate(0)" fill="#f59a3c" opacity=".85"
                                 style="mix-blend-mode:multiply"></ellipse>
                        <ellipse cx="0" cy="-17" rx="10" ry="19" transform="rotate(45)" fill="#f5d53a" opacity=".85"
                                 style="mix-blend-mode:multiply"></ellipse>
                        <ellipse cx="0" cy="-17" rx="10" ry="19" transform="rotate(90)" fill="#8ed04b" opacity=".85"
                                 style="mix-blend-mode:multiply"></ellipse>
                        <ellipse cx="0" cy="-17" rx="10" ry="19" transform="rotate(135)" fill="#3fc77f" opacity=".85"
                                 style="mix-blend-mode:multiply"></ellipse>
                        <ellipse cx="0" cy="-17" rx="10" ry="19" transform="rotate(180)" fill="#3ba7e0" opacity=".85"
                                 style="mix-blend-mode:multiply"></ellipse>
                        <ellipse cx="0" cy="-17" rx="10" ry="19" transform="rotate(225)" fill="#6b6fd8" opacity=".85"
                                 style="mix-blend-mode:multiply"></ellipse>
                        <ellipse cx="0" cy="-17" rx="10" ry="19" transform="rotate(270)" fill="#b266c9" opacity=".85"
                                 style="mix-blend-mode:multiply"></ellipse>
                        <ellipse cx="0" cy="-17" rx="10" ry="19" transform="rotate(315)" fill="#ee5a6f" opacity=".85"
                                 style="mix-blend-mode:multiply"></ellipse>
                    </g>
                </svg>
                사진
            </div>
            <div class="app-home" data-app="ig" @click="movePage('#ig')">
                <svg viewBox="0 0 100 100">
                    <defs>
                        <radialGradient id="g5" cx="30%" cy="107%" r="130%">
                            <stop offset="0" stop-color="#fdf497"></stop>
                            <stop offset=".05" stop-color="#fdf497"></stop>
                            <stop offset=".45" stop-color="#fd5949"></stop>
                            <stop offset=".6" stop-color="#d6249f"></stop>
                            <stop offset=".9" stop-color="#285aeb"></stop>
                        </radialGradient>
                    </defs>
                    <rect width="100" height="100" rx="23" fill="url(#g5)"></rect>
                    <rect x="22" y="22" width="56" height="56" rx="17" fill="none" stroke="#fff"
                          stroke-width="5.500"></rect>
                    <circle cx="50" cy="50" r="13.500" fill="none" stroke="#fff" stroke-width="5.500"></circle>
                    <circle cx="66" cy="34" r="3.500" fill="#fff"></circle>
                </svg>
                Instagram
            </div>
            <div class="app-home" data-app="yt" @click="movePage('#yt')">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

                    <circle cx="50" cy="50" r="48" fill="#ff0000"/>
                    <circle cx="50" cy="50" r="28" fill="#ffffff"/>
                    <circle cx="50" cy="50" r="24.5" fill="#ff0000"/>
                    <path d="M41 36 L41 64 L65 50 Z" fill="#ffffff"/>
                </svg>
                YT Music
            </div>
            <div class="app-home" data-app="nfx" @click="movePage('#nfx')">
                <svg viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="gnf" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0" stop-color="#b1060f"></stop>
                            <stop offset="1" stop-color="#e50914"></stop>
                        </linearGradient>
                    </defs>
                    <rect width="100" height="100" rx="23" fill="#000"></rect>
                    <path d="M33 17h12v66H33z" fill="#b1060f"></path>
                    <path d="M55 17h12v66H55z" fill="#b1060f"></path>
                    <path d="M33 17h12l22 66H55z" fill="#e50914"></path>
                </svg>
                Netflix
            </div>
            <div class="app-home" data-app="st" @click="movePage('#st')">
                <svg viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="g6" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stop-color="#dcdce0"></stop>
                            <stop offset="1" stop-color="#9a9aa0"></stop>
                        </linearGradient>
                    </defs>
                    <rect width="100" height="100" rx="23" fill="url(#g6)"></rect>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#3a3a3c" stroke-width="8"
                            stroke-dasharray="2.600 2.400"></circle>
                    <circle cx="50" cy="50" r="36" fill="#48484b"></circle>
                    <circle
                        cx="50"
                        cy="50"
                        r="28"
                        fill="none"
                        stroke="#c6c6cb"
                        stroke-width="3.5"
                    />
                    <circle cx="50" cy="50" r="23" fill="#27272a"></circle>
                    <path d="M50 50V28M50 50L69 61M50 50L31 61" stroke="#cfcfd4" stroke-width="6.500"
                          stroke-linecap="round"></path>
                    <circle cx="50" cy="50" r="7" fill="#cfcfd4"></circle>
                </svg>
                설정
            </div>
        </div>
        <div class="app-list-bottom">
            <div class="app-home" data-app="ph">
                <svg viewBox="0 0 100 100">
                    <rect width="100" height="100" rx="23" fill="url(#g1)"></rect>
                    <g transform="translate(18 18) scale(2.7)">
                        <path fill="#fff"
                              d="M6.600 10.800c1.400 2.800 3.800 5.100 6.600 6.600l2.200-2.200c.3-.3.7-.4 1-.2 1.100.4 2.300.6 3.600.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.600 21 3 13.400 3 4c0-.6.4-1 1-1h3.500c.6 0 1 .4 1 1 0 1.300.2 2.500.6 3.600.1.3 0 .7-.2 1l-2.300 2.200z"></path>
                    </g>
                </svg>
            </div>
            <div class="app-home" data-app="nt" @click="movePage('#nt')">
                <svg viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="g3" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stop-color="#ffd95a"></stop>
                            <stop offset="1" stop-color="#f8b90c"></stop>
                        </linearGradient>
                    </defs>
                    <rect width="100" height="100" rx="23" fill="#fff"></rect>
                    <path d="M0 23A23 23 0 0 1 23 0h54a23 23 0 0 1 23 23v10H0z" fill="url(#g3)"></path>
                    <path d="M8 40h84" stroke="#c9c9ce" stroke-width="3" stroke-dasharray="0.1 5.2"
                          stroke-linecap="round"></path>
                    <path d="M0 60h100M0 82h100" stroke="#cfcfd4" stroke-width="2.600"></path>
                </svg>
            </div>
            <div class="app-home" data-app="sms">
                <svg viewBox="0 0 100 100">
                    <defs>
                        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0" stop-color="#6bf178"></stop>
                            <stop offset="1" stop-color="#0bd338"></stop>
                        </linearGradient>
                    </defs>
                    <rect width="100" height="100" rx="23" fill="url(#g1)"></rect>
                    <ellipse cx="50" cy="46" rx="33" ry="26" fill="#fff"></ellipse>
                    <path d="M30 64 L22 80 L44 71 Z" fill="#fff"></path>
                </svg>
            </div>
        </div>

        <div id="kk" class="screen-app">
            <KakaoTalkHomeComponent></KakaoTalkHomeComponent>
        </div>
        <div id="pho" class="screen-app">
        </div>
        <div id="ig" class="screen-app">
        </div>
        <div id="yt" class="screen-app">
        </div>
        <div id="nfx" class="screen-app">
        </div>
        <div id="st" class="screen-app">
        </div>
        <div id="nt" class="screen-app">
        </div>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import KakaoTalkHomeComponent from "@/components/kakao/KakaoTalkHomeComponent.vue";
import EventBus from "@/utils/event-bus.js";

export default defineComponent({
    name: 'HomeComponent',
    mixins: [],
    components: {KakaoTalkHomeComponent},
    props: {},
    data() {
        return {};
    },
    created() {

    },
    mounted() {
        EventBus.$on('moveHome', this.moveHome);
    },
    beforeUnmount() {
        EventBus.$off('moveHome');
    },
    unmounted() {
    },
    computed: {},
    methods: {
        movePage(key) {
            EventBus.$emit('systemBlack');
            const element = document.querySelector(key);
            element.classList.add('on');
        },
        moveHome(key) {
            EventBus.$emit('systemWhite');
            const element = document.querySelector(key);
            element.classList.remove('on');
        }
    },
    watch: {},
})
</script>