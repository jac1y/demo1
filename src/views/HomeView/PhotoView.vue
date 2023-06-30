<template>
    <div class="wrapper">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="A类图片" name="A">
                <div id="upload">
                    <el-upload class="avatar-uploader" :action="'/api/upImg?type= ' + activeName + '&token=' + token"
                        :show-file-list="false" :http-request="upload" :before-upload='ImgBeforeAvatarUpload'>
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </div>
                <div class="card">
                    <el-row>
                        <el-col class="card1" :span="6" v-for="(item, index) in photoList.slice(
                            (currentPage - 1) * pageSize,
                            currentPage * pageSize)" :key="index" :offset="index == 0 || index % 3 == 0 ? 0 : 3">
                            <el-card :body-style="{ padding: '0px' }">
                                <el-image :src="item.url" lazy class="image">
                                </el-image>
                                <div style="padding: 14px;">
                                    <span>{{ item.name }}</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ item.time }}</time>
                                        <el-button type="text" class="button" @click="removeP(item)">删除图片</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div style="text-align: center;">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[3, 9, 18, 36]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="photoList.length">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="B类图片" name="B">
                <div class="header-box">
                    <el-upload class="avatar-uploader" :action="'/api/upImg?type= ' + activeName" :show-file-list="false"
                        :http-request="upload" :before-upload='ImgBeforeAvatarUpload'>
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </div>
                <div class="card">
                    <el-row>
                        <el-col class="card1" :span="6" v-for="(item, index) in photoList.slice(
                            (currentPage - 1) * pageSize,
                            currentPage * pageSize)" :key="index" :offset="index == 0 || index % 3 == 0 ? 0 : 3">
                            <el-card :body-style="{ padding: '0px' }">
                                <el-image :src="item.url" lazy class="image"></el-image>
                                <div style="padding: 14px;">
                                    <span>{{ item.name }}</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ item.time }}</time>
                                        <el-button type="text" class="button" @click="removeP(item)">删除图片</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div style="text-align: center;">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[3, 9, 18, 36]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="photoList.length">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="C类图片" name="C">
                <div class="header-box">
                    <el-upload class="avatar-uploader" :action="'/api/upImg?type= ' + activeName" :show-file-list="false"
                        :http-request="upload" :before-upload='ImgBeforeAvatarUpload'>
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </div>
                <div class="card">
                    <el-row>
                        <el-col class="card1" :span="6" v-for="(item, index) in photoList.slice(
                            (currentPage - 1) * pageSize,
                            currentPage * pageSize)" :key="index" :offset="index == 0 || index % 3 == 0 ? 0 : 3">
                            <el-card :body-style="{ padding: '0px' }">
                                <el-image :src="item.url" lazy class="image"></el-image>
                                <div style="padding: 14px;">
                                    <span>{{ item.name }}</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ item.time }}</time>
                                        <el-button type="text" class="button" @click="removeP(item)">删除图片</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div style="text-align: center;">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[3, 9, 18, 36]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="photoList.length">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="D类图片" name="D">
                <div class="header-box">
                    <el-upload class="avatar-uploader" :action="'/api/upImg?type= ' + activeName" :show-file-list="false"
                        :http-request="upload" :before-upload='ImgBeforeAvatarUpload'>
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </div>
                <div class="card">
                    <el-row>
                        <el-col class="card1" :span="6" v-for="(item, index) in photoList.slice(
                            (currentPage - 1) * pageSize,
                            currentPage * pageSize)" :key="index" :offset="index == 0 || index % 3 == 0 ? 0 : 3">
                            <el-card :body-style="{ padding: '0px' }">
                                <el-image :src="item.url" lazy class="image"></el-image>
                                <div style="padding: 14px;">
                                    <span>{{ item.name }}</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ item.time }}</time>
                                        <el-button type="text" class="button" @click="removeP(item)">删除图片</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div style="text-align: center;">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[3, 9, 18, 36]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="photoList.length">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="E类图片" name="E">
                <div class="header-box">
                    <el-upload class="avatar-uploader" :action="'/api/upImg?type= ' + activeName" :show-file-list="false"
                        :http-request="upload" :before-upload='ImgBeforeAvatarUpload'>
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </div>
                <div class="card">
                    <el-row>
                        <el-col class="card1" :span="6" v-for="(item, index) in photoList.slice(
                            (currentPage - 1) * pageSize,
                            currentPage * pageSize)" :key="index" :offset="index == 0 || index % 3 == 0 ? 0 : 3">
                            <el-card :body-style="{ padding: '0px' }">
                                <el-image :src="item.url" lazy class="image"></el-image>
                                <div style="padding: 14px;">
                                    <span>{{ item.name }}</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ item.time }}</time>
                                        <el-button type="text" class="button" @click="removeP(item)">删除图片</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div style="text-align: center;">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[3, 9, 18, 36]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="photoList.length">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="F类图片" name="F">
                <div class="header-box">
                    <el-upload class="avatar-uploader" :action="'/api/upImg?type= ' + activeName" :show-file-list="false"
                        :http-request="upload" :before-upload='ImgBeforeAvatarUpload'>
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </div>
                <div class="card">
                    <el-row>
                        <el-col class="card1" :span="6" v-for="(item, index) in photoList.slice(
                            (currentPage - 1) * pageSize,
                            currentPage * pageSize)" :key="index" :offset="index == 0 || index % 3 == 0 ? 0 : 3">
                            <el-card :body-style="{ padding: '0px' }">
                                <el-image :src="item.url" lazy class="image"></el-image>
                                <div style="padding: 14px;">
                                    <span>{{ item.name }}</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ item.time }}</time>
                                        <el-button type="text" class="button" @click="removeP(item)">删除图片</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div style="text-align: center;">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[3, 9, 18, 36]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="photoList.length">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="G类图片" name="G">
                <div class="header-box">
                    <el-upload class="avatar-uploader" :action="'/api/upImg?type= ' + activeName" :show-file-list="false"
                        :http-request="upload" :before-upload='ImgBeforeAvatarUpload'>
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </div>
                <div class="card">
                    <el-row>
                        <el-col class="card1" :span="6" v-for="(item, index) in photoList.slice(
                            (currentPage - 1) * pageSize,
                            currentPage * pageSize)" :key="index" :offset="index == 0 || index % 3 == 0 ? 0 : 3">
                            <el-card :body-style="{ padding: '0px' }">
                                <el-image :src="item.url" lazy class="image"></el-image>
                                <div style="padding: 14px;">
                                    <span>{{ item.name }}</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ item.time }}</time>
                                        <el-button type="text" class="button" @click="removeP(item)">删除图片</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div style="text-align: center;">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[3, 9, 18, 36]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="photoList.length">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="H类图片" name="H">
                <div class="header-box">
                    <el-upload class="avatar-uploader" :action="'/api/upImg?type= ' + activeName" :show-file-list="false"
                        :http-request="upload" :before-upload='ImgBeforeAvatarUpload'>
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </div>
                <div class="card">
                    <el-row>
                        <el-col class="card1" :span="6" v-for="(item, index) in photoList.slice(
                            (currentPage - 1) * pageSize,
                            currentPage * pageSize)" :key="index" :offset="index == 0 || index % 3 == 0 ? 0 : 3">
                            <el-card :body-style="{ padding: '0px' }">
                                <el-image :src="item.url" lazy class="image"></el-image>
                                <div style="padding: 14px;">
                                    <span>{{ item.name }}</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ item.time }}</time>
                                        <el-button type="text" class="button" @click="removeP(item)">删除图片</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div style="text-align: center;">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[3, 9, 18, 36]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="photoList.length">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="I类图片" name="I">
                <div class="header-box">
                    <el-upload class="avatar-uploader" :action="'/api/upImg?type= ' + activeName" :show-file-list="false"
                        :http-request="upload" :before-upload='ImgBeforeAvatarUpload'>
                        <el-button plain size="small" type="primary">点击上传</el-button>
                        <div slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                </div>
                <div class="card">
                    <el-row>
                        <el-col class="card1" :span="6" v-for="(item, index) in photoList.slice(
                            (currentPage - 1) * pageSize,
                            currentPage * pageSize)" :key="index" :offset="index == 0 || index % 3 == 0 ? 0 : 3">
                            <el-card :body-style="{ padding: '0px' }">
                                <el-image :src="item.url" lazy class="image"></el-image>
                                <div style="padding: 14px;">
                                    <span>{{ item.name }}</span>
                                    <div class="bottom clearfix">
                                        <time class="time">{{ item.time }}</time>
                                        <el-button plain type="text" class="button" @click="removeP(item)">删除图片</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div style="text-align: center;">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-sizes="[3, 9, 18, 36]" :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper" :total="photoList.length">
                    </el-pagination>
                </div>
            </el-tab-pane>
        </el-tabs>
        <!-- <div class="search">
            <el-row>
                <el-col :span="8" offset="8">
                    <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
                        <el-button type="primary" icon="el-icon-search" slot="append">搜索</el-button>
                    </el-input>
                </el-col>
            </el-row>
        </div> -->

    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            currentDate: "",
            activeName: "A",
            currentPage4: 4,
            photoList: [],
            fileList: [],
            pageSize: 9,
            currentPage: 1,
            isShow: true,
            imgUrl: "",
            token: this.$store.state.user.token
        }
    },
    watch: {},
    computed: {},
    methods: {
        nowYear() {
            var date = new Date();//date对象基于1970年1.1开始计算
            var year = date.getFullYear();
            var month = date.getMonth() + 1;
            var dates = date.getDate();
            var arr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
            var week = arr[date.getDay()]
            this.currentDate = (year + "年" + month + "月" + dates + "日" + week);
        },
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
        },
        handleClick(tab, event) {
            const that = this;
            this.getPhotoData(tab._props.name);
        },
        handleChange(file, fileList) {
            this.fileList = fileList.slice(-3);
        },
        handleSizeChange(val) {
            this.pageSize = val;
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val
            console.log(`当前页: ${val}`);
        },
        removeP(val) {
            const that = this;
            if (this.$store.state.user.user[0].role == "超级管理员") {
                this.$axios.get('api/removePhoto?id=' + val.id)
                    .then(function (response) {
                        const h = that.$createElement;
                        that.$notify({
                            title: '消息提示',
                            message: h('i', { style: 'color: teal' }, '已删除')
                        });
                        that.$addLogs("删除图片", "删除成功");
                    })
                    .catch(function (error) {
                        // 处理错误情况  
                        console.log(error);
                        that.$addLogs("删除图片", "删除失败");
                    })
                this.getPhotoData(val.photoType);
            }
            else {
                const h = that.$createElement;
                that.$notify({
                    title: '消息提示',
                    message: h('i', { style: 'color: teal' }, '权限不足')
                });
                that.$addLogs("删除图片", "权限不足删除失败");
            }
        },
        getPhotoData(val) {
            const that = this;
            this.$axios.get('api/getPhoto?name=' + val)
                .then(function (response) {
                    that.photoList = response.data;
                })
                .catch(function (error) {
                    // 处理错误情况
                    console.log(error);
                });
        },
        upload(f) {
            if (this.$store.state.user.user[0].role == "超级管理员") {
                // 1. 获取表单数据   fromData 表单数据
                let fromData = new FormData();
                let that = this;
                fromData.append("imgFile", f.file)
                // 2. 发起请求
                this.$axios({
                    method: 'post',
                    url: f.action,
                    data: fromData,
                }).then(res => {
                    this.$notify({
                        title: '成功',
                        message: '上传成功',
                        type: 'success'
                    });
                    this.getPhotoData(val.photoType);
                    that.$addLogs("上传图片", "成功上传");
                }).catch(error => {
                    this.$notify({
                        title: '失败',
                        message: '上传失败',
                        type: 'warning'
                    });
                })
            }
            else {
                this.$notify({
                    title: '权限不足',
                    message: '上传失败',
                    type: 'warning'
                });
                this.$addLogs("上传图片", "权限不足，上传失败");
            }

        },
        //上传前校验图片规则
        ImgBeforeAvatarUpload(file) {
            const isJPG = file.type === "image/jpeg" || file.type === "image/png";
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isJPG) {
                this.$message.error("上传图片只能是 JPG 和 Png 格式!");
                return false;
            }
            if (!isLt2M) {
                this.$message.error("上传图片大小不能超过 2MB!");
                return false;
            }
        },

    },
    created() {
        this.nowYear();
        this.getPhotoData('A');
    },
    mounted() { }
};
</script>
<style scoped>
* {
    color: rgb(32, 28, 28);
}

.search {
    margin-top: 40px;
}

.tab {
    margin-top: 40px;

}

.card1 {
    margin-top: 40px;
}

.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    height: 400px;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>