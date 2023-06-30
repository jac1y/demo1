<template>
  <div class="wrapper" v-show="refresh">
    <el-row>
      <el-button type="primary" @click="refreshData" size="small">刷新</el-button>
      <!-- <el-button type="primary">新增</el-button> -->
      <el-button type="danger" @click="clearData" size="small">清空</el-button>
      <el-input v-model="SearchValue" placeholder="请输入内容" class="search">
        <el-button slot="append" icon="el-icon-search" @click="search(SearchValue)"></el-button>
      </el-input>
    </el-row>
    <el-row>
      <el-table :data="data.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
      )" style="width: 100%" height="300" header-cell-style="background-color:  rgb(34, 34, 34)"
        cell-style="background-color: rgb(84, 92, 100)">
        <el-table-column label="用户" prop="username">
        </el-table-column>
        <el-table-column label="操作类型" prop="operation">
        </el-table-column>
        <el-table-column label="详情" prop="details">
        </el-table-column>
        <el-table-column label="操作时间" prop="data">
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
  props: {},
  data() {
    return {
      tableData: this.$store.state.journal,
      // 分页
      currentPage: 1,
      pageSize: 5,
      pageSizes: [1, 5, 10, 20],
      total: 0,
      SearchValue: '',
      arrs: [],
      data: [],
      flag: false,
      refresh: true,
    };
  },
  watch: {

  },
  computed: {},
  methods: {
    // getHTTp
    getHttp() {

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
    //search
    search(value) {
      this.arrs = [];
      this.tableData.forEach(element => {
        if (value == element.username) {
          this.arrs.push(element)
        }
        else if (value == element.operation) {
          this.arrs.push(element)
        }
        else if (value == element.details) {
          this.arrs.push(element)
        }
        else if (value == element.data) {
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
    // clear
    clearData() {
      this.$store.commit("clearJournal");
      this.$axios.get('api/clearLogs')
        .then(function (response) {
          alert("清除成功")
        })
        .catch(function (error) {
          alert("系统错误，请刷新重试")
        });
      // 全局刷新
      // location.reload();
      this.$router.go(0);
      this.$message({
        message: '已清空!!!',
        type: 'success',
        center: true
      });
    },
    // refreshData
    refreshData() {
      // 局部刷新
      location.reload();
    },
  },
  created() {
    this.data = this.tableData;
    let that = this;
    this.$axios.get('api/getLogs')
      .then(function (response) {
        that.$store.state.journal = response.data;
      })
      .catch(function (error) {
        alert("系统错误，请刷新重试")
      });
  },
  mounted() { }
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
