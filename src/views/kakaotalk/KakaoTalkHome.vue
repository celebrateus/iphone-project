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

            <KakaoTalkHomeComponent></KakaoTalkHomeComponent>

            <div class="device-bottom" @click="moveHome()"></div>
        </div>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import LockComponent from "@/components/home/LockComponent.vue";
import HomeComponent from "@/components/home/HomeComponent.vue";
import KakaoTalkHomeComponent from "@/components/kakao/KakaoTalkHomeComponent.vue";

export default defineComponent({
    name: 'KakaoTalkHome',
    mixins: [],
    components: {KakaoTalkHomeComponent, HomeComponent, LockComponent},
    props: {},
    data() {
        return {
        };
    },
    created() {

    },
    mounted() {

    },
    beforeUnmount() {

    },
    unmounted() {
    },
    computed: {},
    methods: {
        movePage(url) {
            this.$router.push(url);
        },
        moveBack() {
            this.$router.back();
        },
        moveHome() {
            this.$router.replace('/');
        }
    },
    watch: {},
})
</script>