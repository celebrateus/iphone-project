<template>
    <div class="wrap-gallery">
        <div class="icon-back" @click="moveHome()">
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none" stroke="#3b82f6" stroke-width="3"
                 stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 3L3 11l8 8"></path>
            </svg>앨범
        </div>
        <div class="wrap-top-gallery">
            <span>최근 항목</span>
            <span class="wrap-button-top-gallery">
                <b>선택</b>
                <b>···</b></span>
        </div>
        <div class="wrap-photo-gallery">
            <div class="container-photo">
                <div class="item-photo" v-for="item in this.photos"
                     :style="{ backgroundImage: `url('${returnImg(item)}')` }" @click="movePopup(item)"
                ></div>
            </div>
        </div>
        <div class="bar-bottom-gallery">
            <div>
                <svg viewBox="0 0 32 32">
                    <rect x="3" y="6" width="26" height="20" rx="4"></rect>
                    <path d="M5 24l7-8 5 5 4-4 7 7z" fill="#fff"></path>
                    <circle cx="21" cy="12" r="2.500" fill="#fff"></circle>
                </svg>
                보관함
            </div>
            <div>
                <svg viewBox="0 0 32 32">
                    <rect x="4" y="4" width="24" height="24" rx="5"></rect>
                    <path d="M16 23s-6-3.800-6-8a3.500 3.500 0 0 1 6-2 3.500 3.500 0 0 1 6 2c0 4.200-6 8-6 8z"
                          fill="#fff"></path>
                </svg>
                For You
            </div>
            <div class="on">
                <svg viewBox="0 0 32 32">
                    <rect x="6" y="3" width="20" height="5" rx="2.500" opacity=".5"></rect>
                    <rect x="3" y="11" width="26" height="18" rx="5"></rect>
                </svg>
                앨범
            </div>
            <div>
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="3.200" stroke-linecap="round">
                    <circle cx="14" cy="14" r="9"></circle>
                    <path d="M21 21l7 7"></path>
                </svg>
                검색
            </div>
        </div>
    </div>

    <div class="popup-img" v-if="isPopup">
        <div class="popup-top" @click="backHome()">
            ‹ 최근 항목
        </div>
        <img class="item-popup" :src="returnImg(imageSrc)"  alt=""/>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import EventBus from "@/utils/event-bus.js";

export default defineComponent({
    name: 'GalleryHomeComponent',
    mixins: [],
    components: {},
    props: {},
    data() {
        return {
            photos: [
                'fig.jpg', 'fig-icecream.jpg', 'sea.jpg', 'rabbit-moon.jpg', 'catdog.jpg', 'babies.webp', 'girl.webp'
            ],
            isPopup: false,
            imageSrc: '',
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
        moveHome() {
            if (!this.isPopup) {
                EventBus.$emit('moveHome', '#pho');
            }
        },
        returnImg(item) {
            return '/iphone-project/src/assets/images/etc/' + item;
        },
        movePopup(item) {
            this.imageSrc = item;
            this.isPopup = true;
        },
        backHome() {
            this.imageSrc = '';
            this.isPopup = false;
        },
    },
    watch: {},
})
</script>