<template>
    <div>
        <el-row>
            <el-button @click="refreshData" type="primary" size="small">刷新</el-button>
            <!-- <el-button type="primary">新增</el-button> -->
            <el-button type="primary" size="small" @click="handleClick2()">新增</el-button>
            <!-- 新增 -->
            <el-input v-model="SearchValue" placeholder="请输入内容" class="search">
                <el-button slot="append" icon="el-icon-search" @click="search(SearchValue)"></el-button>
            </el-input>
            <div class="add">
                <el-dialog title="新增" :visible.sync="dialogVisible2" width="50%" :before-close="handleClose" center modal>
                    <div style="margin: 20px;"></div>
                    <!-- 表单格式 -->
                    <el-form :model="row" :rules="rules" ref="row" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="管理员id" prop="id">
                            <el-input v-model="row.id"></el-input>
                        </el-form-item>
                        <el-form-item label="管理员" prop="username">
                            <el-input v-model="row.username"></el-input>
                        </el-form-item>
                        <el-form-item label="权限" prop="role">
                            <el-input v-model="row.role"></el-input>
                        </el-form-item>
                        <el-form-item label="状态" prop="state">
                            <el-select v-model="value" clearable>
                                <el-option v-for="(item, index) in 2" :key="index" :label="state" :value="index">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" size="small" @click="submitForm(row)">立即创建</el-button>
                            <el-button type="primary" size="small" @click="resetForm()">重置</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </div>
        </el-row>
        <el-row>
            <el-empty description="未发现..." v-show="flag"></el-empty>
            <el-table :data="data.slice(
                (currentPage - 1) * pageSize,
                currentPage * pageSize
            )" style="width: 100%" height="300" header-cell-style="background-color:  rgb(34, 34, 34)"
                cell-style="background-color: rgb(84, 92, 100)" v-show="!flag" class="tables">
                <!-- tableHeader: ["用户id", "用户昵称", "优先级", "状态", "详细信息", "备注"], -->
                <el-table-column label="管理员id" prop="id">
                </el-table-column>
                <el-table-column label="管理员名称" prop="username">
                </el-table-column>
                <el-table-column label="账户密码" prop="password">
                </el-table-column>
                <el-table-column label="状态" prop="state">
                    <template slot-scope="scoped">
                        <el-switch v-model="scoped.row.state" inactive-color="#13ce66" active-color="#ff4949"
                            :active-value="1" :inactive-value="0" @change="changeStatus($event, scoped.row, scoped.$index)">
                        </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="权限" prop="role">
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <!-- 点击事件 -->
                        <el-button type="text" @click="handleClick1(scope.row)" size="small">编辑</el-button>
                        <el-button type="text" plain @click="handleClick3(scope.row)" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="editor">
                <el-dialog title="编辑" :visible.sync="dialogVisible1" width="50%" :before-close="handleClose" center modal>
                    <div style="margin: 20px;"></div>
                    <!-- 表单格式 -->
                    <el-form :model="row" :rules="rules" ref="row" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="管理员id" prop="id">
                            <el-input v-model="row.id"></el-input>
                        </el-form-item>
                        <el-form-item label="管理员" prop="username">
                            <el-input v-model="row.username"></el-input>
                        </el-form-item>
                        <el-form-item label="权限" prop="role">
                            <el-input v-model="row.role"></el-input>
                        </el-form-item>
                        <el-form-item label="状态" prop="state">
                            <el-select v-model="value" clearable>
                                <el-option v-for="(item, index) in 2" :key="index" :label="state" :value="index">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button plain size="small" @click="editorForm(row)">修改</el-button>
                        </el-form-item>
                    </el-form>
                </el-dialog>
            </div>
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
    props: {
        role: {
            type: String,
            default: ''
        }
    },
    // 子组件注入 相当于获取了父组件的this，可以为所欲为
    inject: ['thisObj'],
    // 孙组件注入
    // inject: ['thisObj'],
    data() {
        return {
            flag: false,
            // 表单内容
            data: [],
            arrs: [],
            value: true,
            dialogVisible1: false,
            dialogVisible2: false,
            // 分页
            currentPage: 1,
            pageSize: 5,
            pageSizes: [1, 5, 10, 20],
            total: 0,
            SearchValue: '',
            row: {
                id: '',
                username: '',
                password: '',
                role: '',
                state: '',
            },
        };
    },
    watch: {},
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
        handleClick1(row) {
            console.log(row);
            this.dialogVisible1 = true;
            this.row = row;
        },
        handleClick2() {
            this.dialogVisible2 = true
        },
        handleClick3(val) {
            this.$notify({
                title: '警告',
                message: '权限不足',
                type: 'warning'
            });
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => { });
        },
        //获取表单数据
        getTabDate(val) {
            let that = this;

            this.$axios.post("api/getRole", {
                sys: {
                    role: val,
                }
            })
                .then(function (response) {
                    that.data = response.data;
                    console.log(that.data);
                })
                .catch(function (error) {
                    alert(error);
                })
        },
        //search
        search(value) {
            this.arrs = [];
            this.data.forEach(element => {
                if (value == element.uid) {
                    this.arrs.push(element)
                }
                else if (value == element.name) {
                    this.arrs.push(element)
                }
                else if (value == element.count) {
                    this.arrs.push(element)
                }
                else if (value == element.time) {
                    this.arrs.push(element)
                }
                else if (value == element.rank_type) {
                    this.arrs.push(element)
                }
                else if (value == element.gacha_type) {
                    this.arrs.push(element)
                }
            });
            if (this.arrs == '') {
                this.$message({
                    message: '未查找到该数据...',
                    type: 'error',
                    center: true
                });
            }
            else {
                this.data = this.arrs
                this.$message({
                    message: '查找成功!!!',
                    type: 'success',
                    center: true
                });
            }
        },
        submitForm(value) {
            console.log(value);
        },
        resetForm() {
            this.row.uid = '';
            this.row.name = '';
            this.row.count = '';
            this.row.time = '';
            this.row.rank_type = '';
            this.row.gacha_type = '';
            this.dialogVisible2 = false;
            this.$nextTick(() => {
                this.dialogVisible2 = true;
            })
        },
        // refreshData
        refreshData() {
            // 全局刷新
            location.reload();
        },
        // 改变用户状态
        changeStatus(val1, val2, val3) {

        },
        // 修改用户基本信息
        editorForm(val) {
            this.$notify({
                title: '警告',
                message: '禁止该操作',
                type: 'warning'
            });

        }
    },
    created() {
        this.getTabDate(this.role)
    },
    mounted() { }
};
</script>
<style scoped>
.tables {
    background-color: rgb(84, 92, 100);
}

.search {
    float: right;
    width: 200px;
}
</style>