<template>
    <div class="wrap-chat">
        <div class="chat-top">
            <span class="icon-back" @click="backList()">‹</span>
            <span class="chat-name">내 공주♥</span>
        </div>
        <div class="wrap-chat-list">
            <div v-if="!june30.isEmpty">
                <div class="chat-date-top first">2026년 06월 30일</div>
                <div class="chat-msg" v-for="item in june30">
                    <div class="msg-name" v-if="!item.isMe">내 공주♥</div>
                    <div class="wrap-msg" :class="{ me: item.isMe }">
                        <div class="chat-img" v-if="!item.isMe"></div>
                        <div class="chat-text">{{item.msg}}</div>
                        <div class="chat-time">{{item.time}}</div>
                    </div>
                </div>
            </div>
            <div v-if="!july17.isEmpty">
                <div class="chat-date-top">2026년 07월 17일</div>
                <div class="chat-msg" v-for="item in july17">
                    <div class="msg-name" v-if="!item.isMe">내 공주♥</div>
                    <div class="wrap-msg" :class="{ me: item.isMe }">
                        <div class="chat-img" v-if="!item.isMe"></div>
                        <div class="chat-text">{{item.msg}}</div>
                        <div class="chat-time">{{item.time}}</div>
                    </div>
                </div>
            </div>
            <div v-if="!july27.isEmpty">
                <div class="chat-date-top">2026년 07월 27일</div>
                <div class="chat-msg" v-for="item in july27">
                    <div class="msg-name" v-if="!item.isMe">내 공주♥</div>
                    <div class="wrap-msg" :class="{ me: item.isMe }">
                        <div class="chat-img" v-if="!item.isMe"></div>
                        <div class="chat-text">{{item.msg}}</div>
                        <div class="chat-time">{{item.time}}</div>
                    </div>
                </div>
            </div>
            <div v-if="!august03.isEmpty">
                <div class="chat-date-top">2026년 08월 03일</div>
                <div class="chat-msg" v-for="item in august03">
                    <div class="msg-name" v-if="!item.isMe">내 공주♥</div>
                    <div class="wrap-msg" :class="{ me: item.isMe }">
                        <div class="chat-img" v-if="!item.isMe"></div>
                        <div class="chat-text">{{item.msg}}</div>
                        <div class="chat-time">{{item.time}}</div>
                    </div>
                </div>
            </div>
            <div v-if="!august05.isEmpty">
                <div class="chat-date-top">2026년 08월 05일</div>
                <div class="chat-msg" v-for="item in august05">
                    <div class="msg-name" v-if="!item.isMe">내 공주♥</div>
                    <div class="wrap-msg" :class="{ me: item.isMe }">
                        <div class="chat-img" v-if="!item.isMe"></div>
                        <div class="chat-text">{{item.msg}}</div>
                        <div class="chat-time">{{item.time}}</div>
                    </div>
                </div>
            </div>
            <div v-if="!august07.isEmpty">
                <div class="chat-date-top">2026년 08월 07일</div>
                <div class="chat-msg" v-for="item in august07">
                    <div class="msg-name" v-if="!item.isMe">내 공주♥</div>
                    <div class="wrap-msg" :class="{ me: item.isMe }">
                        <div class="chat-img" v-if="!item.isMe"></div>
                        <div class="chat-text">{{item.msg}}</div>
                        <div class="chat-time">{{item.time}}</div>
                    </div>
                </div>
            </div>
            <div v-if="!september28.isEmpty">
                <div class="chat-date-top">2026년 09월 28일</div>
                <div class="chat-msg" v-for="item in september28">
                    <div class="msg-name" v-if="!item.isMe">내 공주♥</div>
                    <div class="wrap-msg" :class="{ me: item.isMe }">
                        <div class="chat-img" v-if="!item.isMe"></div>
                        <div class="chat-text">{{item.msg}}</div>
                        <div class="chat-time">{{item.time}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="wrap-chat-input">
            <span class="icon-plus">＋</span>
            <input class="chat-input" placeholder="메시지 입력" autocomplete="off">
            <button class="button-chat">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4 3.5L20 12L4 20.5L6.5 12L4 3.5Z"
                        fill="#111"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import {defineComponent} from "vue";
import EventBus from "@/utils/event-bus.js";
import talkData from "@/utils/talkData.json";

export default defineComponent({
    name: 'KakaoTalkChatComponent',
    mixins: [],
    components: {},
    props: {},
    data() {
        return {
            june30: [],
            july17: [],
            july27: [],
            august03: [],
            august05: [],
            august07: [],
            september28: [],
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
        backList() {
            EventBus.$emit('backList');
        },
        setData() {
            this.june30 = talkData?.['260630'];
            this.july17 = talkData?.['260717'];
            this.july27 = talkData?.['260727'];
            this.august03 = talkData?.['260803'];
            this.august05 = talkData?.['260805'];
            this.august07 = talkData?.['260807'];
            this.september28 = talkData?.['260928'];
        }
    },
    watch: {},
})
</script>