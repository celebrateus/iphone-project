<template>
    <div style="display: contents">
        <div class="cursor" id="cursor"></div>
        <router-view/>
    </div>
</template>

<script>

export default {
    name: "App",
    mixins: [],
    components: {},
    provide() {
        return {}
    },
    props: {},
    data() {
        return {
            loading: false,
        }
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

    },
    watch: {},
}
</script>

<style lang="scss">
//@import "../../../iphone-project/src/assets/scss/index.scss";
@use "./assets/scss/index.scss";

</style>
