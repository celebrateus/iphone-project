<template>
    <div class="wrap-yt">
        <div class="wrap-yt-top">
            <div class="wrap-yt-title">
                <div class="name-yt-top">보관함</div>
                <div class="wrap-top-icon">
                    <div class="icon-yt time">
                        <svg viewBox="0 0 32 32" fill="none"
                             stroke="currentColor"
                             stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round">
                            <path d="M7 12a10 10 0 1 1 0 8"></path>
                            <path d="M7 12V6"></path>
                            <path d="M7 12h6"></path>
                            <path d="M16 9v7l4 3"></path>
                        </svg>
                    </div>
                    <div class="icon-yt search">
                        <svg viewBox="0 0 32 32" fill="none"
                             stroke="currentColor"
                             stroke-width="2"
                             stroke-linecap="round">
                            <circle cx="14" cy="14" r="8"></circle>
                            <path d="M20 20l7 7"></path>
                        </svg>
                    </div>
                    <div class="icon-yt-profile"></div>
                </div>
            </div>
            <div class="wrap-yt-tab">
                <div class="yt-tag">오프라인 저장</div>
                <div class="yt-tag">플레이리스트</div>
                <div class="yt-tag">팟캐스트</div>
                <div class="yt-tag">노래</div>
                <div class="yt-tag">앨범</div>
                <div class="yt-tag">아티스트</div>
            </div>
            <div class="wrap-yt-filter">
                <div class="yt-filter-left">
                    <div class="yt-filter-text">최근에 저장됨</div>
                    <div class="yt-filter-icon">
                        <svg viewBox="0 0 24 24" fill="none"
                             stroke="currentColor"
                             stroke-width="2"
                             stroke-linecap="round"
                             stroke-linejoin="round">
                            <path d="M5 9l7 7 7-7"></path>
                        </svg>
                    </div>
                </div>
                <div class="yt-filter-icon-all">
                    <svg viewBox="0 0 24 24" fill="none"
                         stroke="currentColor"
                         stroke-width="1.8"
                         stroke-linecap="round"
                         stroke-linejoin="round">
                        <rect x="3" y="3" width="7" height="7" rx="0.5"></rect>
                        <rect x="14" y="3" width="7" height="7" rx="0.5"></rect>
                        <rect x="3" y="14" width="7" height="7" rx="0.5"></rect>
                        <rect x="14" y="14" width="7" height="7" rx="0.5"></rect>
                    </svg>
                </div>
            </div>
            <div class="wrap-yt-list">
                <div class="item-yt-list" @click="this.selectMusic(this.myMusicData, 'to')">
                    <div class="wrap-list-right">
                        <div class="yt-list-img"></div>
                        <div class="yt-list-text">
                            <div class="yt-list-name">to</div>
                            <div class="yt-list-detail">재생목록•트랙 {{ this.myMusicData.length }}개</div>
                        </div>
                    </div>
                    <div class="yt-list-more-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="5" r="1.5"></circle>
                            <circle cx="12" cy="12" r="1.5"></circle>
                            <circle cx="12" cy="19" r="1.5"></circle>
                        </svg>
                    </div>
                </div>
                <div class="item-yt-list" @click="this.selectMusic(this.yourMusicData, 'from')">
                    <div class="wrap-list-right">
                        <div class="yt-list-img you"></div>
                        <div class="yt-list-text">
                            <div class="yt-list-name">from</div>
                            <div class="yt-list-detail">재생목록•트랙 {{ this.yourMusicData.length }}개</div>
                        </div>
                    </div>
                    <div class="yt-list-more-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="5" r="1.5"></circle>
                            <circle cx="12" cy="12" r="1.5"></circle>
                            <circle cx="12" cy="19" r="1.5"></circle>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap-yt-detail" v-if="showDetail">
            <div class="yt-detail-top">
                <div class="wrap-detail-top-left" @click="backList()">
                    <div class="back-icon">←</div>
                    <div class="top-title">{{ this.title }}</div>
                </div>
                <div class="wrap-detail-top-right">
                    <div class="tab-icon">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             width="24" height="24" viewBox="0 0 24 24"
                             fill="none" stroke="#FFFFFF"
                             stroke-width="2" stroke-linecap="round"
                             stroke-linejoin="round">
                            <path d="M3 4L11 12L3 20V4Z"/>
                            <path d="M11 4L19 12L11 20"/>
                        </svg>
                    </div>
                    <div class="tab-icon">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <circle cx="12" cy="5" r="1.5"></circle>
                            <circle cx="12" cy="12" r="1.5"></circle>
                            <circle cx="12" cy="19" r="1.5"></circle>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="wrap-scroll">
                <div class="yt-detail-img" :style="`background-image:url('${this.img}')`"></div>
                <div class="wrap-yt-detail-btn">
                    <div class="wrap-btn-left">
                        <div class="yt-detail-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 width="24" height="24" fill="none"
                                 stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3V16"/>
                                <path d="M6 11L12 17L18 11"/>
                                <path d="M4 21H20"/>
                            </svg>
                        </div>
                        <div class="yt-detail-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 width="24" height="24" fill="none"
                                 stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 20H21"/>
                                <path d="M16.5 3.5A2.12 2.12 0 0 1 19.5 6.5L8 18L3 19L4 14L16.5 3.5Z"/>
                            </svg>
                        </div>
                        <div class="yt-detail-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 width="24" height="24" fill="none"
                                 stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 16L21 7L12  -2"/>
                                <path d="M21 7H10C6 7 4 10 4 14V19"/>
                            </svg>
                        </div>
                    </div>
                    <div class="wrap-btn-right">
                        <div class="btn-suffle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 width="24" height="24" fill="none"
                                 stroke="currentColor" stroke-width="2"
                                 stroke-linecap="round" stroke-linejoin="round">
                                <path d="M16 3H21V8"/>
                                <path d="M4 20L21 3"/>
                                <path d="M21 16V21H16"/>
                                <path d="M15 15L21 21"/>
                                <path d="M4 4L9 9"/>
                            </svg>
                        </div>
                        <div class="btn-play">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                 width="24" height="24">
                                <path
                                    d="M7 3.5C6.3 3.1 5.5 3.6 5.5 4.4V19.6C5.5 20.4 6.3 20.9 7 20.5L20 13C20.7 12.6 20.7 11.4 20 11L7 3.5Z"
                                    fill="currentColor"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="wrap-music-list">
                    <div class="item-music" v-for="item in this.selectMusicData">
                        <div class="wrap-list-right">
                            <div class="yt-list-img" :style="`background-image:url('${item.imgUrl}')`"></div>
                            <div class="yt-list-text">
                                <div class="yt-list-name">{{item.name}}</div>
                                <div class="yt-list-detail">{{item.artist}} • {{item.running}}</div>
                            </div>
                        </div>
                        <div class="yt-list-more-icon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <circle cx="12" cy="5" r="1.5"></circle>
                                <circle cx="12" cy="12" r="1.5"></circle>
                                <circle cx="12" cy="19" r="1.5"></circle>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap-yt-bottom">
            <div class="yt-tab-bottom">
                <div class="tab-icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="#FFFFFF"
                         stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round">
                        <path d="M3 10.5L12 3L21 10.5"/>
                        <path d="M5 9.5V21H10V15H14V21H19V9.5"/>
                    </svg>
                </div>
                <div class="tab-text">홈</div>
            </div>
            <div class="yt-tab-bottom">
                <div class="tab-icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="#FFFFFF"
                         stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round">
                        <path d="M3 4L11 12L3 20V4Z"/>
                        <path d="M11 4L19 12L11 20"/>
                    </svg>
                </div>
                <div class="tab-text">샘플</div>
            </div>
            <div class="yt-tab-bottom">
                <div class="tab-icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="#FFFFFF"
                         stroke-width="2" stroke-linecap="round">
                        <circle cx="10.5" cy="10.5" r="7.5"/>
                        <path d="M16 16L22 22"/>
                    </svg>
                </div>
                <div class="tab-text">검색</div>
            </div>
            <div class="yt-tab-bottom">
                <div class="tab-icon">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="24" height="24" viewBox="0 0 24 24"
                         fill="#FFFFFF">
                        <path d="M6 2H18C19.1 2 20 2.9 20 4V22L12 17L4 22V4C4 2.9 4.9 2 6 2Z"/>
                    </svg>
                </div>
                <div class="tab-text">보관함</div>
            </div>
        </div>
    </div>
</template>

<script>

import {defineComponent} from "vue";
import EventBus from "@/utils/event-bus.js";
import musicData from "@/utils/musicData.json";

export default defineComponent({
    name: 'YmComponent',
    mixins: [],
    components: {},
    props: {},
    data() {
        return {
            myMusicData: [],
            yourMusicData: [],
            selectMusicData: [],
            showDetail: false,
            title: '',
            img: '',
        };
    },
    created() {

    },
    mounted() {
        this.setData();
    },
    beforeUnmount() {

    },
    unmounted() {
    },
    computed: {},
    methods: {
        moveHome() {
            EventBus.$emit('moveHome', '#yt');
        },
        setData() {
            this.myMusicData = musicData?.['myMusic'];
            this.yourMusicData = musicData?.['yourMusic'];
        },
        selectMusic(item, title) {
            this.title = title;
            this.selectMusicData = item;

            if (title === 'to') {
                this.img = '@/assets/images/insta/profile.jpg';
            } else {
                this.img = '@/assets/images/etc/rabbit-moon.jpg';
            }
            this.showDetail = true;
        },
        backList() {
            this.showDetail = false;
            this.title = '';
            this.img = '';
            this.selectMusicData = [];
        }
    },
    watch: {},
})
</script>