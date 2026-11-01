<template>
    <div class="wrap-ig">
        <div class="hd-ig home">
            <button class="icon-plus" data-igt="tool">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                    <path d="M12 4v16M4 12h16"></path>
                </svg>
            </button>
            <button class="ig-logo" data-igt="tool">
                <img
                    src="/src/assets/images/insta/logo.png"
                    alt="Instagram"></button>
            <button class="icon-heart" data-igt="tool" aria-label="알림">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"
                     stroke-linecap="round">
                    <path
                        d="M16.2 4.3C14.5 4 13 4.9 12 6.6 10.8 4.6 9.2 3.8 7.4 3.8 4.3 3.8 2.2 6.6 3.1 9.9 4.3 14.4 12 20 12 20s7.7-5.6 8.9-10.1"></path>
                </svg>
                <i></i></button>
        </div>

        <div class="ig-stories">
            <button class="ig-st" data-igt="tool">
                <span class="wrap">
                    <span class="rg mine">
                <span>
                    <img
                src="/src/assets/images/insta/profile.jpg" alt="" decoding="async" loading="lazy">
                </span>
                    </span>
                    <span
                class="ig-plus">+</span>
                </span><b>내 스토리</b></button>
        </div>
    </div>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
    name: 'InstagramHomeComponent',
    mixins: [],
    components: {},
    props: {},
    data() {
        return {};
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
    methods: {},
    watch: {},
})
</script>