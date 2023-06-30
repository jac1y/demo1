<template>
    <div class="wrapper"></div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        // 重定向回去
        this.$router.replace(this.$store.state.path)
        return {
        };
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() { }
};
</script>
<style  scoped>
.wrapper {}
</style>