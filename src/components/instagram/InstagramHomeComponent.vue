<template>
    <div class="view">
        <div class="scroll-ig">
            <div class="wrap-ig">
                <div class="hd-ig home">
                    <button class="icon-plus" data-igt="tool">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"
                             stroke-linecap="round">
                            <path d="M12 4v16M4 12h16"></path>
                        </svg>
                    </button>
                    <button class="ig-logo" data-igt="tool">
                        <img
                            src="/src/assets/images/insta/logo.png"
                            alt="Instagram"></button>
                    <button class="icon-heart" data-igt="tool" aria-label="알림">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                             stroke-linejoin="round"
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

                <div class="ig-box">
                    <article class="post" id="post-s0">
                        <div class="post-h" data-user="sub">
                            <img src="/src/assets/images/insta/profile.jpg" alt="d" data-ph="d" class=""
                                 decoding="async" loading="lazy">
                            <div><b>ppogwi.archive</b></div>
                        </div>
                        <div class="post-img car" data-img="s0">
                            <div class="car-track" data-fr="1.333">
                                <swiper
                                    ref="mySwiper"
                                    v-bind="slide"
                                    :modules="modules"
                                    :slides-per-view="1"
                                    :space-between="0"
                                    :pagination="{ clickable: true }"
                                    @slideChangeTransitionEnd="onSlideChange"
                                >
                                    <swiper-slide
                                        v-for="index in 15"
                                        :key="`slide${index}`"
                                        @click="setActiveIndex(index)"
                                        :style="`background-image:url('${returnGImg(index)}')`"
                                    >
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                        <div class="acts">
                            <div class="right-acts">
                                <button class="like on" data-like="s0" aria-label="좋아요">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
                                         stroke-linejoin="round">
                                        <path
                                            d="M12 20s-7.5-4.6-9.3-9.3C1.4 7.2 3.7 4 7 4c2 0 3.6 1.1 5 3 1.4-1.9 3-3 5-3 3.3 0 5.6 3.2 4.3 6.7C19.5 15.4 12 20 12 20z"></path>
                                    </svg>
                                </button>
                                <button aria-label="댓글">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
                                         stroke-linejoin="round">
                                        <path
                                            d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20l1.2-4.2A8.5 8.5 0 1 1 20.5 11.5z"></path>
                                    </svg>
                                </button>
                                <button aria-label="공유">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
                                         stroke-linejoin="round">
                                        <path d="M21 3L10 13.5M21 3l-6.5 18-4.5-7.5L2.5 9z"></path>
                                    </svg>
                                </button>
                            </div>
                            <button class="bm" aria-label="저장">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
                                     stroke-linejoin="round">
                                    <path d="M6 3.5h12v17l-6-4.5-6 4.5z"></path>
                                </svg>
                            </button>
                            <span class="car-dots">
                        <i class="on"></i>
                        <i class=""></i>
                        <i class=""></i>
                        <i class=""></i>
                    </span>
                        </div>
                        <div class="likes">좋아요 2026개</div>
                        <div class="cap"><b>ppogwi.archive</b> 🌊</div>
                        <div class="pdate">10월 5일</div>
                    </article>
                    <article class="post" id="post-s1">
                        <div class="post-h" data-user="sub">
                            <img src="/src/assets/images/insta/profile.jpg" alt="d" data-ph="d" class=""
                                 decoding="async" loading="lazy">
                            <div><b>ppogwi.archive</b></div>
                        </div>
                        <div class="post-img car" data-img="s0">
                            <div class="car-track" data-fr="1.333">
                                <swiper
                                    ref="mySwiper"
                                    v-bind="slide"
                                    :modules="modules"
                                    :slides-per-view="1"
                                    :space-between="0"
                                    :pagination="{ clickable: true }"
                                    @slideChangeTransitionEnd="onSlideChange"
                                >
                                    <swiper-slide
                                        v-for="index in 19"
                                        :key="`slide${index}`"
                                        @click="setActiveIndex(index)"
                                        :style="`background-image:url('${returnOImg(index)}')`"
                                    >
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                        <div class="acts">
                            <div class="right-acts">
                                <button class="like on" data-like="s0" aria-label="좋아요">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
                                         stroke-linejoin="round">
                                        <path
                                            d="M12 20s-7.5-4.6-9.3-9.3C1.4 7.2 3.7 4 7 4c2 0 3.6 1.1 5 3 1.4-1.9 3-3 5-3 3.3 0 5.6 3.2 4.3 6.7C19.5 15.4 12 20 12 20z"></path>
                                    </svg>
                                </button>
                                <button aria-label="댓글">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
                                         stroke-linejoin="round">
                                        <path
                                            d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20l1.2-4.2A8.5 8.5 0 1 1 20.5 11.5z"></path>
                                    </svg>
                                </button>
                                <button aria-label="공유">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
                                         stroke-linejoin="round">
                                        <path d="M21 3L10 13.5M21 3l-6.5 18-4.5-7.5L2.5 9z"></path>
                                    </svg>
                                </button>
                            </div>
                            <button class="bm" aria-label="저장">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
                                     stroke-linejoin="round">
                                    <path d="M6 3.5h12v17l-6-4.5-6 4.5z"></path>
                                </svg>
                            </button>
                            <span class="car-dots">
                        <i class="on"></i>
                        <i class=""></i>
                        <i class=""></i>
                        <i class=""></i>
                    </span>
                        </div>
                        <div class="likes">좋아요 727개</div>
                        <div class="cap"><b>ppogwi.archive</b> 🎡</div>
                        <div class="pdate">9월 26일</div>
                    </article>
                    <article class="post" id="post-s2">
                        <div class="post-h" data-user="sub">
                            <img src="/src/assets/images/insta/profile.jpg" alt="d" data-ph="d" class=""
                                 decoding="async" loading="lazy">
                            <div><b>ppogwi.archive</b></div>
                        </div>
                        <div class="post-img car" data-img="s0">
                            <div class="car-track" data-fr="1.333">
                                <swiper
                                    ref="mySwiper"
                                    v-bind="slide"
                                    :modules="modules"
                                    :slides-per-view="1"
                                    :space-between="0"
                                    :pagination="{ clickable: true }"
                                    @slideChangeTransitionEnd="onSlideChange"
                                >
                                    <swiper-slide
                                        v-for="index in 18"
                                        :key="`slide${index}`"
                                        @click="setActiveIndex(index)"
                                        :style="`background-image:url('${returnKImg(index)}')`"
                                    >
                                    </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                        <div class="acts">
                            <div class="right-acts">
                                <button class="like on" data-like="s0" aria-label="좋아요">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
                                         stroke-linejoin="round">
                                        <path
                                            d="M12 20s-7.5-4.6-9.3-9.3C1.4 7.2 3.7 4 7 4c2 0 3.6 1.1 5 3 1.4-1.9 3-3 5-3 3.3 0 5.6 3.2 4.3 6.7C19.5 15.4 12 20 12 20z"></path>
                                    </svg>
                                </button>
                                <button aria-label="댓글">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
                                         stroke-linejoin="round">
                                        <path
                                            d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.4L3.5 20l1.2-4.2A8.5 8.5 0 1 1 20.5 11.5z"></path>
                                    </svg>
                                </button>
                                <button aria-label="공유">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
                                         stroke-linejoin="round">
                                        <path d="M21 3L10 13.5M21 3l-6.5 18-4.5-7.5L2.5 9z"></path>
                                    </svg>
                                </button>
                            </div>
                            <button class="bm" aria-label="저장">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"
                                     stroke-linejoin="round">
                                    <path d="M6 3.5h12v17l-6-4.5-6 4.5z"></path>
                                </svg>
                            </button>
                            <span class="car-dots">
                        <i class="on"></i>
                        <i class=""></i>
                        <i class=""></i>
                        <i class=""></i>
                    </span>
                        </div>
                        <div class="likes">좋아요 630개</div>
                        <div class="cap"><b>ppogwi.archive</b> 🎋</div>
                        <div class="pdate">10월 15일</div>
                    </article>
                </div>

                <div class="ig-feed-end"><b>모두 확인했습니다</b><span>최근 3일 동안 새로운 게시물이 없어요</span></div>
            </div>
        </div>
        <nav class="ig-nav" id="igNav"><i class="ig-pill" id="igPill" data-x="6"
                                          style="width: 71px; transform: translateX(6px); opacity: 1;"></i>
            <button data-ig="home" aria-label="홈" class="on">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
                    <path d="M3.5 10.5L12 3.5l8.5 7V20a1 1 0 0 1-1 1h-5v-6.5h-5V21h-5a1 1 0 0 1-1-1z"></path>
                </svg>
            </button>
            <button data-ig="reels" aria-label="릴스">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5"></rect>
                    <path d="M10 8.8v6.4l5.2-3.2z"></path>
                </svg>
            </button>
            <button data-ig="dm" aria-label="메시지" class="">
                <svg style="margin-top: 7px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                     stroke-linejoin="round">
                    <path d="M21 3L10.5 13.5M21 3l-6.5 18-4-7.5L3 9.5z"></path>
                </svg>
                <i class="dot" id="igDmDot"></i></button>
            <button data-ig="search" aria-label="검색">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                    <circle cx="10.5" cy="10.5" r="7"></circle>
                    <path d="M15.8 15.8l5 5"></path>
                </svg>
            </button>
            <button data-ig="profile" aria-label="프로필" class=""><span class="ig-me" id="igMe"><img
                src="/src/assets/images/insta/profile.jpg" alt="" class="" decoding="async" loading="lazy"></span>
            </button>
        </nav>
    </div>
</template>

<script>

import {defineComponent} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css'

export default defineComponent({
    name: 'InstagramHomeComponent',
    mixins: [],
    components: {Swiper, SwiperSlide},
    props: {},
    data() {
        return {
            currentIndex: 0, // 현재 슬라이드 인덱스
            swiperInstance: null, // Swiper 인스턴스를 저장할 변수
            slide: {
                spaceBetween: 20,
                slidesPerView: 1,
            },
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
        returnGImg(index) {
            return `/iphone-project/src/assets/images/insta/g/${index}.jpg`;
        },
        returnOImg(index) {
            return `/iphone-project/src/assets/images/insta/o/${index}.jpg`;
        },
        returnKImg(index) {
            if (index === 1 || index === 11 || index === 15) {
                return `/iphone-project/src/assets/images/insta/k/${index}.webp`;
            }
            return `/iphone-project/src/assets/images/insta/k/${index}.jpg`;
        },
        onSlideChange(e) {
            this.currentIndex = e.activeIndex;
            if (this.swiperInstance) {
                this.currentIndex = this.swiperInstance.activeIndex;
            }
        },
    },
    watch: {},
})
</script>