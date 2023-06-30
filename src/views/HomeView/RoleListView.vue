<template>
    <div>
        <el-tabs tab-position="left" style="height: 800px;">
            <el-tab-pane label="普通管理员">
                <RoleTable :role="'普通管理员'"></RoleTable>
            </el-tab-pane>
            <el-tab-pane label="超级管理员">
                <RoleTable :role="'超级管理员'"></RoleTable>
            </el-tab-pane>
            <el-tab-pane label="测试管理员">
                <RoleTable :role="'测试管理员'"></RoleTable>
            </el-tab-pane>
            <el-tab-pane label="网络管理员">
                <RoleTable :role="'网络管理员'"></RoleTable>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import RoleTable from '@/components/sys_Role/RoleTable.vue';
export default {
    components: {
        RoleTable,
    },
    // 父组件提供this对象，供子孙组件注入
    provide() {
        return {
            thisObj: this,
        }
    },
    data() {
        return {
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