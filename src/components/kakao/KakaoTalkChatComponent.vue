<template>
    <div class="wrap-chat">
        <div class="chat-top">
            <span class="icon-back">‹</span>
            <span class="chat-name">내 공주♥</span>
        </div>
        <div class="wrap-chat-list"></div>
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

export default defineComponent({
    name: 'KakaoTalkChatComponent',
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