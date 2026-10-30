<template>
    <div class="wrap-kakao">
        <div class="top-kakao">
            <div class="top-kakao-text">채팅</div>
            <span style="display:flex;gap:16px;color:#333"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                                stroke="currentColor" stroke-width="2"
                                                                stroke-linecap="round"><circle cx="10.500" cy="10.500"
                                                                                               r="6.500"></circle><path
                d="M15.500 15.500L21 21"></path></svg><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                           stroke="currentColor" stroke-width="2"
                                                           stroke-linecap="round"><path
                d="M12 4v16M4 12h16"></path></svg></span>
        </div>
        <div class="wrap-kakao-list">
            <div class="list-kakao">
                <div class="list-chat" @click="moveChat()">
                    <div class="list-img-profile">
                    </div>
                    <div>
                        <div class="list-chat-name">내 공주♥
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="#9a9a9a"
                                 style="margin-left:6px;vertical-align:-2px">
                                <path
                                    d="M16 3l5 5-2 .8-3.600 3.600.6 4.100-1.800 1.800-3.200-3.200L5 21.500 3.500 20l5.700-6.800-3.200-3.200L7.800 8.200l4.100.6L15.500 5.200z"></path>
                            </svg>
                        </div>
                        <div class="list-chat-text">사랑해 ♥</div>
                    </div>
                    <div class="list-chat-time">0:00</div>
                </div>
            </div>
            <div class="bottom-kakao">
                <svg viewBox="0 0 32 32">
                    <circle cx="16" cy="11" r="6"></circle>
                    <path d="M4 28c0-6 5-10 12-10s12 4 12 10z"></path>
                </svg>
                <svg viewBox="0 0 32 32" class="a">
                    <ellipse cx="16" cy="14" rx="13" ry="11"></ellipse>
                    <path d="M8 22l-3 8 10-5z"></path>
                </svg>
                <svg viewBox="0 0 32 32">
                    <ellipse cx="14" cy="13" rx="11" ry="10"></ellipse>
                    <path d="M8 20l-3 8 9-4z"></path>
                    <circle cx="22" cy="19" r="8" opacity=".75"></circle>
                    <path d="M13 9.500v7l6-3.500z" fill="#fff"></path>
                </svg>
                <svg viewBox="0 0 32 32">
                    <rect x="5" y="11" width="22" height="18" rx="3"></rect>
                    <path d="M11 14V9a5 5 0 0 1 10 0v5" fill="none" stroke="currentColor" stroke-width="2.500"></path>
                </svg>
                <svg viewBox="0 0 32 32">
                    <circle cx="6" cy="17" r="2.800"></circle>
                    <circle cx="16" cy="17" r="2.800"></circle>
                    <circle cx="26" cy="17" r="2.800"></circle>
                </svg>
            </div>
        </div>
    </div>
    <KakaoTalkChatComponent v-if="isChat"></KakaoTalkChatComponent>
</template>

<script>
import {defineComponent} from "vue";
import EventBus from "@/utils/event-bus.js";
import KakaoTalkChatComponent from "@/components/kakao/KakaoTalkChatComponent.vue";

export default defineComponent({
    name: 'KakaoTalkHomeComponent',
    mixins: [],
    components: {KakaoTalkChatComponent},
    props: {},
    data() {
        return {
            isChat: false,
        };
    },
    created() {

    },
    mounted() {
        EventBus.$on('backList', this.backList);
    },
    beforeUnmount() {
        EventBus.$off('backList');
    },
    unmounted() {
    },
    computed: {},
    methods: {
        moveChat() {
            this.isChat = true;
        },
        backList() {
            this.isChat = false;
        },
        moveHome() {
            this.isChat = false;
            if (!this.isChat) {
                EventBus.$emit('moveHome', '#kk');
            }
        }
    },
    watch: {},
})
</script>