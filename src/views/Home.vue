<template>
    <div class="device">
        <div class="device-screen">
            <div class="device-top">
                <div class="device-top-clock"></div>
                <div class="device-top-hole"></div>
                <div class="device-top-system">
                    <svg width="19" height="12" viewBox="0 0 19 12" fill="currentColor">
                        <rect x="0" y="8" width="3.2" height="4" rx="1"></rect>
                        <rect x="5" y="5.5" width="3.2" height="6.5" rx="1"></rect>
                        <rect x="10" y="3" width="3.2" height="9" rx="1"></rect>
                        <rect x="15" y="0" width="3.2" height="12" rx="1" opacity=".4"></rect>
                    </svg>
                    <span style="font-size:15px">5G</span>
                    <svg width="28" height="13" viewBox="0 0 28 13">
                        <rect width="25" height="13" rx="4" fill="currentColor" opacity=".35"></rect>
                        <rect width="15" height="13" rx="4" fill="currentColor"></rect>
                        <rect x="26" y="4" width="2" height="5" rx="1" fill="currentColor" opacity=".4"></rect>
                    </svg>
                </div>
            </div>

            <transition name="slide-up">
                <LockComponent v-if="isLock" @click="unlock()"></LockComponent>
            </transition>
            <HomeComponent></HomeComponent>

            <div class="device-bottom" @click="unlock()"></div>
        </div>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import LockComponent from "@/components/home/LockComponent.vue";
import HomeComponent from "@/components/home/HomeComponent.vue";
import EventBus from "@/utils/event-bus.js";

export default defineComponent({
    name: 'Home',
    mixins: [],
    components: {HomeComponent, LockComponent},
    props: {},
    data() {
        return {
            isLock: true,
        };
    },
    created() {

    },
    mounted() {
        this.getClock();
        EventBus.$on('systemBlack', this.systemBlack);
        EventBus.$on('systemWhite', this.systemWhite);
    },
    beforeUnmount() {
        EventBus.$off('systemBlack');
        EventBus.$off('systemWhite');
    },
    unmounted() {
    },
    computed: {},
    methods: {
        getClock() {
            setInterval(() => {
                const clock = document.querySelector(".device-top-clock");
                const d = new Date();
                const h = String(d.getHours()).padStart(2, "0");
                const m = String(d.getMinutes()).padStart(2, "0");
                clock.innerText = `${h}:${m}`;
            }, 1000);

        },
        unlock() {
            if (this.isLock) {
                this.isLock = false;
            } else {
                EventBus.$emit('moveHome', '#kk');
            }
        },
        systemBlack() {
            const topClock = document.querySelector('.device-top-clock');
            const top = document.querySelector('.device-top');
            const bottom = document.querySelector('.device-bottom');
            topClock.classList.add('black');
            top.classList.add('black');
            bottom.classList.add('black');
        },
        systemWhite() {
            const topClock = document.querySelector('.device-top-clock');
            const top = document.querySelector('.device-top');
            const bottom = document.querySelector('.device-bottom');
            topClock.classList.remove('black');
            top.classList.remove('black');
            bottom.classList.remove('black');
        },

    },
    watch: {},
})


</script>