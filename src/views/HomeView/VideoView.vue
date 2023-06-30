<template>
    <div>
        <el-tabs tab-position="left">
            <el-tab-pane label="A类视频">
                <div class="card">
                    <el-row>
                        <el-col :span="6" v-for="(item, index) in totalPage.slice(
                            (currentPage - 1) * pageSize,
                            currentPage * pageSize)" :key="index" :offset="index % 3 == 0 ? 0 : 3" class="card1">
                            <el-card :body-style="{ padding: '0px' }">
                                <video width="100%" height="240" controls class="image">
                                    <source :src="videoUrl" type="video/mp4">
                                    您的浏览器不支持Video标签。
                                </video>
                                <div style="padding: 14px;">
                                    <span>视频名称：{{ item.name }}</span>
                                    <div class="bottom clearfix">
                                        <span>类别：{{ item.videoName }}</span>
                                        <el-button plain type="text" class="button"
                                            @click="deleteSinger(item.name)">删除</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div class="block">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next"
                        :total="totalPage.length">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="B类视频">
                <div class="card">
                    <el-row>
                        <el-col :span="6" v-for="(item, index) in totalPage.slice(
                            (currentPage - 1) * pageSize,
                            currentPage * pageSize)" :key="index" :offset="index % 3 == 0 ? 0 : 3" class="card1">
                            <el-card :body-style="{ padding: '0px' }">
                                <video width="100%" height="240" controls class="image">
                                    <source src="@/utils/video/ys2.mp4" type="video/mp4">
                                    您的浏览器不支持Video标签。
                                </video>
                                <div style="padding: 14px;">
                                    <span>视频名称：{{ item.name }}</span>
                                    <div class="bottom clearfix">
                                        <span>类别：{{ item.videoName }}</span>
                                        <el-button plain type="text" class="button"
                                            @click="deleteSinger(item.name)">删除</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div class="block">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next"
                        :total="totalPage.length">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="C类视频">
                <div class="card">
                    <el-row>
                        <el-col :span="6" v-for="(item, index) in totalPage.slice(
                            (currentPage - 1) * pageSize,
                            currentPage * pageSize)" :key="index" :offset="index % 3 == 0 ? 0 : 3" class="card1">
                            <el-card :body-style="{ padding: '0px' }">
                                <video width="100%" height="240" controls class="image">
                                    <source src="@/utils/video/ys2.mp4" type="video/mp4">
                                    您的浏览器不支持Video标签。
                                </video>
                                <div style="padding: 14px;">
                                    <span>视频名称：{{ item.name }}</span>
                                    <div class="bottom clearfix">
                                        <span>类别：{{ item.videoName }}</span>
                                        <el-button plain type="text" class="button"
                                            @click="deleteSinger(item.name)">删除</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div class="block">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next"
                        :total="totalPage.length">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="D类视频">
                <div class="card">
                    <el-row>
                        <el-col :span="6" v-for="(item, index) in totalPage.slice(
                            (currentPage - 1) * pageSize,
                            currentPage * pageSize)" :key="index" :offset="index % 3 == 0 ? 0 : 3" class="card1">
                            <el-card :body-style="{ padding: '0px' }">
                                <video width="100%" height="240" controls class="image">
                                    <source src="@/utils/video/ys2.mp4" type="video/mp4">
                                    您的浏览器不支持Video标签。
                                </video>
                                <div style="padding: 14px;">
                                    <span>视频名称：{{ item.name }}</span>
                                    <div class="bottom clearfix">
                                        <span>类别：{{ item.videoName }}</span>
                                        <el-button plain type="text" class="button"
                                            @click="deleteSinger(item.name)">删除</el-button>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </div>
                <div class="block">
                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next"
                        :total="totalPage.length">
                    </el-pagination>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 当前页
            currentPage: 1,
            // 每页显示数量
            pageSize: 9,
            // 数据
            totalPage: [
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
                { name: "测试视频", videoUrl: "../../utils/video/ys2.mp4", videoName: "测试视频", ImgUrl: "https://img1.baidu.com/it/u=3251825469,863101163&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1686589200&t=aa55db8e5326eaf90e327da7fa8f6527" },
            ],
            ImgUrl: "",
            videoUrl: "",
        }
    },
    computed: {

    },
    methods: {
        handleSizeChange(val) {
            this.pageSize = val;
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val
            console.log(`当前页: ${val}`);
        },
        deleteSinger(val) {
            this.$notify({
                title: '失败',
                message: '权限不足',
                type: 'warning'
            });
        }
    },
    created() {
        this.$axios("api/getVideoUrl").then(res => {

        }).catch(erro => {

        })
    },
}
</script>
<style scoped lang="less">
.singer {
    width: 100%;

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
    height: 100px;
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