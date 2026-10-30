<template>
    <div class="device-lock">
        <div class="lock-date"></div>
        <div class="lock-clock"></div>
        <div class="lock-flash">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
                <path d="M8 2h8v4l-2 3v13a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9L8 6z"></path>
            </svg>
        </div>
        <div class="lock-camera">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                <path
                    d="M9 4h6l1.500 2H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.500z"></path>
                <circle cx="12" cy="13" r="4" fill="#555"></circle>
            </svg>
        </div>
        <div class="lock-text">위로 쓸어올려서 잠금 해제</div>
    </div>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
    name: 'LockComponent',
    mixins: [],
    components: {},
    props: {},
    data() {
        return {
            isLoading: true,
        };
    },
    created() {

    },
    mounted() {
        this.getClock();
        this.getDate();
    },
    beforeUnmount() {

    },
    unmounted() {
    },
    computed: {},
    methods: {
        getClock() {
            setInterval(() => {
                const clock = document.querySelector(".lock-clock");
                const now = new Date();
                const h = String(now.getHours()).padStart(2, "0");
                const m = String(now.getMinutes()).padStart(2, "0");
                clock.innerText = `${h}:${m}`;

                const dateClock = document.querySelector(".lock-date");

                const month = now.getMonth() + 1; // 월 (0부터 시작하므로 +1 필요)
                const date = now.getDate(); // 일

                const week = ['일', '월', '화', '수', '목', '금', '토']; // 요일 배열
                const dayOfWeek = week[now.getDay()]; // 요일 (0: 일요일 ~ 6: 토요일)

                dateClock.innerText = `${month}월 ${date}일 ${dayOfWeek}요일`;
            }, 1000);
        },
        getDate() {
            setInterval(() => {

            }, 1000);

        }
    },
    watch: {},
})
</script>