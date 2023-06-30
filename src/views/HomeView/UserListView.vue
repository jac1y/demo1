<template>
    <div>
        <el-tabs tab-position="left" style="height: 800px;">
            <el-tab-pane label="游客">
                <HeaderView :MLevel="1"></HeaderView>
            </el-tab-pane>
            <el-tab-pane label="普通用户">
                <HeaderView :MLevel="2"></HeaderView>
            </el-tab-pane>
            <el-tab-pane label="vip用户">
                <HeaderView :MLevel="3"></HeaderView>
            </el-tab-pane>
            <el-tab-pane label="svip用户">
                <HeaderView :MLevel="4"></HeaderView>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import HeaderView from '../../components/userView/HeaderView.vue';
export default {
    components: {
        HeaderView,
    },
    // 父组件提供this对象，供子孙组件注入
    provide() {
        return {
            thisObj: this,
        }
    },
    data() {
        return {
            tableData: [],
            touristUrl: "",
        };
    },
    watch: {

    },
    computed: {},
    methods: {

    },
    beforeCreate() {
    },
    created() {
    },
    mounted() {

    }
};
</script>
<style scoped></style>