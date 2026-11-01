<template>
    <div class="pad">
        <div class="nbar">
            <span class="nbk" @click="moveHome()">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
                     stroke="#f3b60b" stroke-width="2.800" stroke-linecap="round"
                     stroke-linejoin="round">
                    <path d="M15 4L7 12l8 8"></path>
                </svg>
                <span>폴더</span>
            </span>
            <span class="nbt">메모</span>
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#f3b60b" stroke-width="1.600">
                <circle cx="12" cy="12" r="10.500"></circle>
                <circle cx="7.500" cy="12" r="1" fill="#f3b60b"></circle>
                <circle cx="12" cy="12" r="1" fill="#f3b60b"></circle>
                <circle cx="16.500" cy="12" r="1" fill="#f3b60b"></circle>
            </svg>
        </div>
        <div class="scroll" id="nl" style="padding:10px 16px 20px">
            <div class="nsec">오늘</div>
            <div class="ncard" @click="showTextPopup(this.textData[2])">
                <div class="nit" data-i="0">
                    <div class="nt1">{{ this.textData[2].title }}</div>
                    <div class="nt2"><span>{{ this.textData[2].date }}</span>
                        {{ this.textData[2].text }}
                    </div>
                </div>
            </div>
            <div class="nsec">어제</div>
            <div class="ncard"@click="showTextPopup(this.textData[1])">
                <div class="nit">
                    <div class="nt1">{{ this.textData[1].title }}</div>
                    <div class="nt2"><span>{{ this.textData[1].date }}</span>
                        {{ this.textData[1].text }}
                    </div>
                </div>
            </div>
            <div class="nsec">이전 30일</div>
            <div class="ncard"@click="showTextPopup(this.textData[0])">
                <div class="nit">
                    <div class="nt1">{{ this.textData[0].title }}</div>
                    <div class="nt2"><span>{{ this.textData[0].date }}</span>
                        {{ this.textData[0].text }}
                    </div>
                </div>
            </div>
        </div>
        <div class="nfoot"><span id="ncnt">3개의 메모</span>
            <svg id="ncmp" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#f3b60b"
                 stroke-width="1.800" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"></path>
                <path d="M18.500 2.500a2.100 2.100 0 0 1 3 3L12 15l-4 1 1-4z"></path>
            </svg>
        </div>
    </div>
    <div id="ne" v-if="isShow">
        <div class="nbar">
            <span class="nbk" id="neb" @click="backList()">
                <svg width="22" height="22"
                     viewBox="0 0 24 24" fill="none"
                     stroke="#f3b60b"
                     stroke-width="2.800"
                     stroke-linecap="round"
                     stroke-linejoin="round">
                    <path
                        d="M15 4L7 12l8 8"></path>
                </svg>
                <span>메모</span>
            </span>
        </div>
        <div id="ned0">{{this.showText.date}}</div>
        <div class="note-title">{{this.showText.title}}</div>
        <textarea id="ned">{{this.showText.text}}</textarea>
    </div>
</template>

<script>

import {defineComponent} from "vue";
import EventBus from "@/utils/event-bus.js";

export default defineComponent({
    name: 'NoteComponent',
    mixins: [],
    components: {},
    props: {},
    data() {
        return {
            isShow: false,
            textData: [
                {
                    title: 'D-7',
                    date: '2026. 10. 27.',
                    text: '할 줄 아는 게 이런 것 뿐이라서 시작했지만 공주가 좋아할지는 의문이다 아이디어가 급하게 일주일 전에 생각이 나서 퀄리티도 떨어지지 않을까 걱정이 되고...... 그래도 조금이라도 내 마음을 전할 수 있는 방법이라고 생각하면서 완성해 봐야지!',
                },
                {
                    title: 'D-1',
                    date: '어제',
                    text: '하루 전에 공주 기분을 망쳐버렸다 내 기억력이 언젠가는 사고를 칠 줄 알았지만 이렇게 거하게 사고를 칠 줄이야...... 진짜 내가 너무너무 잘못한 일이라서 뭐라고 할 말도 없고 그럴 입도 없고 여보는 기분 많이 안 좋아 보이고 그걸 넘어서 많이 화가 난 것 같아서 더 미안하다 나도 기대했고 여보도 기대했던 주말 데이트였는데 내가 다 망쳐버렸어 내일도 여보 기분이 안 풀리면 어떡하지......',
                },
                {
                    title: 'To. My Lover',
                    date: '오늘',
                    text: '항상 미안하고 고맙고 사랑하는 여보 드디어 우리가 맞는 첫번째 기념일이네?\n여보 기분을 안 좋게 만들어서 안 그래도 걱정되는 마음이 더 커졌어\n이걸 보고 있는 여보의 기분은 어떨까 좋아하고 있을까 그래도 여전히 기분이 안 좋아서 가라앉아 있을까\n내가 용서받지 못 할 짓을 해서 기분 풀렸으면 좋겠다는 말은 차마 못 하겠어\n나 때문에 우리의 기념적인 첫번째 기념일을 망친 것 같아서 나도 마음이 안 좋고 더 미안하고 그래\n그래도 백 일 기념 편지인데 이런 내용만 담고 싶진 않아\n이걸 준비하면서 우리 첫만남부터 지금까지의 대화도 보고 같이 나누었던 사진과 음악, 함께 영화를 보며 나누었던 대화도 보면서 우리 그래도 정말 재밌고 행복한 연애를 했구나 생각이 들었어\n특히나 나는 여보 덕에 못 해 본 것도 많이 해 본 것 같아\n일단 필명과 챌린지가 그랬고 누굴 위해서 사진을 찍어서 보여 주고 하늘 사진도 원래도 잘 찍긴 했었지만 나 혼자 보려고만 찍었었지 누굴 생각하면서 누군가에게 보여 주기 위해 찍은 적은 없었거든\n내 일상도 여보 덕에 많이 바뀌었어\n사실 여보한테는 그냥 연봉 일 때문에 퇴사를 했다곤 했지만 다른 많은 이유들이 있었거든 그 이유들이 퍽 그렇게 좋은 일들은 아니고\n그래서 여보를 만나지 않은 채로 퇴사를 하고 일상을 보냈다면 지금처럼은 보내지 못 했을 것 같아\n계속해서 빛 없는 흑백 같은 일상을 살아갔을 거야\n시간을 함께 보내는 사람이 있어서 다행이라고 생각하고 그게 여보라는 사실이 더더 다행이고 감사해\n나의 색깔이 되어 줘서 고마워 여보\n내가 싸가지 없게 굴고 모자라게 굴었는데도 잘 참고 나 만나 줘서 너무 고맙지\n아마 그래서 여보한테 내가 점점 마음이 열리고 보고 싶어지고 사랑하게 된 게 아닐까\n내가 여보에게 빠지게 된 건 다 여보 덕인 셈이지\n상대가 네가 아니었다면 연애 같은 것 안 했을 거라는 말 진심이야\n내가 생각하기에 나는 연애를 잘하는 사람도 아니고 연애하기에 좋은 사람이 아닌 것 같거든\n근데 혜원이 너는 놓치고 싶지 않더라\n이대로 보내면 보고 싶고 생각날 것 같고 무엇보다 후회할 것 같았어\n그래서 욕심내고 용기를 냈던 것 같아\n혜원아 우리 연애의 끝이 이별이 아닌 결혼이고 싶다고 했잖아\n나도 정말 같은 마음이야\n전에 말했던 것처럼 난 누구랑 같이 사는 건 생각도 해 본 적 없고 그러고 싶지도 않았는데 상대가 여보라면 괜찮을 것 같아\n아니 너무 좋을 것 같아\n마지막 인연이었으면 한다는 말도 동감해\n나는 정말 여보를 마지막 인연으로 생각하고 있거든\n어디 가서 내가 또 너 같이 예쁜 사람을 만날 수 있을까 혜원아\n아마 못 만날 거야 넌 세상에서 유일하고 소중한 사람이니까\n그럼 또 있을 때 잘하라고 그럴 것 같은데 그러게 있을 때 최선을 다하고 잘해야 하는데 왜 이렇게 마음처럼 쉽지가 않은지......\n그래도 내 나름대로 너에게 항상 최선을 다하는 사람이 될게\n조금이라도 널 행복하게 그리고 웃게 만들어 주는 사람이 되고 싶어\n글로 표현이 안 될만큼 정말 많이 사랑하고 좋아해 혜원아 ♥\n백 일이라는 시간이 지나고 계절이 지나는 동안 내 옆에 있어 줘서 고마워 ♥\n앞으로의 계절도 시간도 영원히 너와 함께 하고 싶어',
                }
            ],
            showText: {
                title: '',
                date: '',
                text: '',
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
        showTextPopup(item) {
            this.isShow = true;
            this.showText = item;
        },
        backList() {
            this.isShow = false;
            this.showText = {
                title: '',
                date: '',
                text: '',
            };
        },
        moveHome() {
            EventBus.$emit('moveHome', '#nt');
        }
    },
    watch: {},
})
</script>