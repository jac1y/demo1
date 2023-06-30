<template>
    <div>
        <el-tabs tab-position="left" style="height: 800px;">
            <el-tab-pane label="侧边菜单栏">
                <div>
                    <el-row>
                        <el-button @click="refreshData" type="primary">刷新</el-button>
                        <!-- <el-button type="primary">新增</el-button> -->
                        <el-input v-model="SearchValue" placeholder="请输入内容" class="search">
                            <el-button slot="append" icon="el-icon-search" @click="search(SearchValue)"></el-button>
                        </el-input>
                    </el-row>
                    <el-row>
                        <el-empty description="未发现..." v-show="flag"></el-empty>
                        <el-table :data="data.slice(
                            (currentPage - 1) * pageSize,
                            currentPage * pageSize
                        )" style="width: 100%;margin-bottom: 20px;" row-key="id" border
                            :tree-props="{ children: 'children', hasChildren: 'hasChildren' }" height="300"
                            header-cell-style="background-color:  rgb(34, 34, 34)"
                            cell-style="background-color: rgb(84, 92, 100)" empty-text="暂无数据">
                            <el-table-column prop="title" label="姓名" sortable width="180">
                            </el-table-column>
                            <el-table-column prop="path" sortable width="180" label="路由">
                            </el-table-column>
                            <el-table-column prop="iconicon" label="图标">
                            </el-table-column>
                            <el-table-column fixed="right" label="操作" width="100">
                                <template slot-scope="scope">
                                    <!-- 点击事件 -->
                                    <el-button plain @click="handleClick2(scope.row)" size="small">删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </el-row>
                    <el-row> <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize"
                            layout="total, sizes, prev, pager, next, jumper" :total="data.length" background class="page">
                        </el-pagination></el-row>
                </div>
            </el-tab-pane>
            <!-- <el-tab-pane label="顶部菜单栏">
         
            </el-tab-pane> -->
        </el-tabs>
    </div>
</template>
<script>
export default {
    components: {},
    props: {
        asideList: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            tableData: [],
            // 分页
            currentPage: 1,
            pageSize: 5,
            pageSizes: [1, 5, 10, 20],
            total: 0,
            SearchValue: '',
            arrs: [],
            data: [],
            flag: false,
            value: true,
        };
    },
    watch: {

    },
    computed: {},
    methods: {
        // gettabDate
        getTabDate() {
            this.tableData = this.asideList;
            this.data = this.tableData;
        },
        // 分页操作
        handleSizeChange(val) {
            // val每页显示val条
            this.pageSize = val;
        },
        handleCurrentChange(val) {
            // val 当前页
            this.currentPage = val
        },
        handleClick2(value) {
            console.log(value);
            this.$addLogs("删除导航栏--" + value.title, "权限不足，删除失败");
            this.$notify.error({
                title: '错误',
                message: '权限不足'
            });
        },
        //search
        search(value) {

        },
        // refreshData
        refreshData() {
            this.$router.go(0)
        },
    },
    beforeCreate() {
    },
    created() {
        this.getTabDate();
    },
    mounted() {

    }
};
</script>
<style scoped>
.search {
    float: right;
    width: 200px;
}

::v-deep .el-table__expand-icon {
    color: #ffffff;
    /** 这里是要修改图标的颜色 **/
}
</style>