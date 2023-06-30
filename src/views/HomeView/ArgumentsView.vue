<template>
    <div class="wrapper">
        <el-row>
            <el-empty description="未发现..." v-show="flag"></el-empty>
            <el-table :data="data.slice(
                (currentPage - 1) * pageSize,
                currentPage * pageSize)" style="width: 100%" height="300"
                header-cell-style="background-color:  rgb(34, 34, 34)" cell-style="background-color: rgb(84, 92, 100)"
                v-show="!flag">
                <el-table-column label="用户" prop="username">
                </el-table-column>
                <el-table-column label="部门" prop="department">
                </el-table-column>
                <el-table-column label="登录ip" prop="ip">
                </el-table-column>
                <el-table-column label="登录地点" prop="address">
                </el-table-column>
                <el-table-column label="所用浏览器" prop="browser">
                </el-table-column>
                <el-table-column label="登录时间" prop="time">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <!-- 点击事件 -->
                        <el-button :plain="true" @click="handleClick2(scope.row)" size="small">强制下线</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-row>
        <el-row> <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper" :total="data.length" background class="page">
            </el-pagination></el-row>
    </div>
</template>
  
<script>
export default {
    components: {},
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
            data: [
                {
                    username: "张三",
                    department: "开发部",
                    ip: "127.0.0.1",
                    address: "中国江苏",
                    browser: "火狐",
                    time: "2023.06.02"
                },
                {
                    username: "王五",
                    department: "开发部",
                    ip: "127.0.0.1",
                    address: "中国江苏",
                    browser: "火狐",
                    time: "2023.06.03"
                },
                {
                    username: "李四",
                    department: "开发部",
                    ip: "127.0.0.1",
                    address: "中国江苏",
                    browser: "火狐",
                    time: "2023.06.02"
                },
            ],
            flag: false,
            dialogVisible2: false,
        };
    },
    watch: {

    },
    computed: {},
    methods: {

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
            this.$message.error('权限不足');
            this.$addLogs("强制管理员" + value.username + "下线", "权限不足，操作失败");
        },
        handleClick() {
            this.dialogVisible2 = true
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        // refreshData
        refreshData() {
            this.$router.go(0)
        },


    },
    beforeCreate() {
    },
    created() {
        // 获取 ip
        // this.$axios.get('https://www.ip.cn/api/index?ip&type=0')
        //     .then(res => {
        //         // 处理成功情况
        //         console.log("返回数据", res);
        //     })
        //     .catch(error => {
        //         // 处理错误情况
        //         console.log("报错", error);
        //     });
    },
    mounted() {

    }
};
</script>
<style scoped>
.wrapper {
    background-color: rgb(84, 92, 100)
}

.search {
    float: right;
    width: 200px;
}
</style>