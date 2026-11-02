<template>
    <div class="wrap-netflix">
        <div class="wrap-net-top">
            <div class="wrap-net-top-profile">
                <div class="top-profile-img"></div>
                <div class="top-profile-name">Song</div>
                <div class="top-profile-icon">▼</div>
            </div>
            <div class="wrap-net-top-icons">
                <div class="top-icon-share">
                    <svg viewBox="0 0 32 32">
                        <path d="M5 5h22v22h-7v-2h5V7H7v5H5z"></path>
                        <path d="M5 17a10 10 0 0 1 10 10h-2a8 8 0 0 0-8-8z"></path>
                        <path d="M5 12a15 15 0 0 1 15 15h-2A13 13 0 0 0 5 14z"></path>
                        <path d="M5 22a5 5 0 0 1 5 5H5z"></path>
                    </svg>
                </div>
                <div class="top-icon-download">
                    <svg viewBox="0 0 32 32">
                        <path d="M16 3a1.5 1.5 0 0 1 1.5 1.5v13.379l4.439-4.44a1.5 1.5 0 0 1 2.122 2.122l-7 7a1.5 1.5 0 0 1-2.122 0l-7-7a1.5 1.5 0 0 1 2.122-2.122l4.439 4.44V4.5A1.5 1.5 0 0 1 16 3z"></path>
                        <path d="M4 25.5h24a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3z"></path>
                    </svg>
                </div>
                <div class="top-icon-alert">
                    <svg viewBox="0 0 32 32">
                        <path d="M16 3a2 2 0 0 1 2 2v2.08A9 9 0 0 1 23 15v6l2.5 3.5H6.5L9 21v-6a9 9 0 0 1 5-7.92V5a2 2 0 0 1 2-2z"></path>
                        <path d="M4 23h24v3H4z"></path>
                        <path d="M12 28h8a4 4 0 0 1-8 0z"></path>
                    </svg>
                </div>
            </div>
        </div>

        <div class="wrap-content-list">
            <div class="content-list-top">
                <div class="content-list-name">최근 시청한 콘텐츠</div>
                <div class="content-list-icon">모두 보기 ></div>
            </div>
            <div class="content-list">
                <div class="content-item" v-for="item in list" :style="{ backgroundImage: `url('${returnImg(item)}')` }"></div>
            </div>
        </div>

        <div class="bar-net">
            <div class="btn-home">
                <svg style="fill: none; color: #999;" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M6 15.5V24a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-8.5L16 6 6 15.5z"></path>
                    <path d="M12 23h8"></path>
                </svg>
                <div style="color: #999; padding-top: 3px">홈</div>
            </div>
            <div class="btn-search">
                <svg style="fill: none; color: #999;" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                    <circle cx="14" cy="14" r="8"></circle>
                    <path d="M20 20l7 7"></path>
                </svg>
                <div style="color: #999; padding-top: 3px">검색</div>
            </div>
            <div class="btn-my">
                <div class="bar-profile-img"></div>
                <div style="padding-top: 3px">나의 넷플릭스</div>
            </div>
        </div>
    </div>
</template>

<script>

import {defineComponent} from "vue";
import EventBus from "@/utils/event-bus.js";

export default defineComponent({
    name: 'NetflixComponent',
    mixins: [],
    components: {},
    props: {},
    data() {
        return {
            list: [
                'ch', 'ah', 'dae'
            ],
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
        returnImg(item) {
            return '/iphone-project/images/net/' + item + '.png';
        },
    },
    watch: {},
})
</script>