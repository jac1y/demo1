<template>
  <div class="block">
    <el-row>
      <el-button type="primary" @click="refreshData">刷新</el-button>
      <!-- <el-button type="primary">新增</el-button> -->
      <el-input v-model="SearchValue" placeholder="请输入内容" class="search">
        <el-button slot="append" icon="el-icon-search" @click="search(SearchValue)"></el-button>
      </el-input>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <!-- slice(a,b)的作用是从已有的数组中返回选定的元素"a"表示开始，"b"表示结束。
            currentPage和pageSize在此网页的作用会在接下来进行说明 -->
        <el-table :data="tableData.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        )
          " style="width: 100%" height="300" header-cell-style="background-color:  rgb(34, 34, 34)"
          cell-style="background-color: rgb(84, 92, 100)" highlight-current-row="true" border="true">
          <el-table-column fixed prop="date" label="日期" width="150">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="province" label="省份" width="120">
          </el-table-column>
          <el-table-column prop="city" label="市区" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="300">
          </el-table-column>
          <el-table-column prop="zip" label="邮编" width="120">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <!-- 点击事件 -->
              <el-button type="text" @click="handleClick(scope.row)" size="small">查看</el-button>
              <el-button type="text" @click="handleClick2(scope.row)" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 查看 -->
        <div class="look">
          <el-dialog title="订单信息" :visible.sync="dialogVisible" width="50%" :before-close="handleClose" center modal>
            <el-descriptions title="订单信息">
              <el-descriptions-item label="用户名"> {{ row.name }} </el-descriptions-item>
              <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
              <el-descriptions-item label="日期">{{ row.date }}</el-descriptions-item>
              <el-descriptions-item label="备注">
                <el-tag size="small">学校</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="联系地址">{{ row.address }}</el-descriptions-item>
            </el-descriptions>
          </el-dialog>
        </div>
        <!-- 编辑 -->
        <div class="editor">
          <el-dialog title="编辑" :visible.sync="dialogVisible2" width="50%" :before-close="handleClose" center modal>
            <div style="margin: 20px;"></div>
            <!-- 表单格式 -->
            <el-form :model="row" :rules="rules" ref="row" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="name">
                <el-input v-model="row.name"></el-input>
              </el-form-item>
              <el-form-item label="电话号码" prop="name">
                <el-input v-model="row.phone"></el-input>
              </el-form-item>
              <el-form-item label="地址" prop="name">
                <el-cascader :options="provinceList" clearable :props="{ value: 'code', label: 'value' }"></el-cascader>
              </el-form-item>
              <el-form-item label="详细地址" prop="desc">
                <el-input type="textarea" v-model="row.address"></el-input>
              </el-form-item>
              <el-form-item label="下单时间" required>
                <el-col :span="11">
                  <el-form-item prop="date1">
                    <el-date-picker type="date" placeholder="选择日期" v-model="row.name"
                      style="width: 100%;"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-form-item prop="date2">
                    <el-time-picker placeholder="选择时间" v-model="row.name" style="width: 100%;"></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="备注" prop="desc">
                <el-input type="textarea" v-model="row.province"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" size="small" @click="submitForm('row')">立即创建</el-button>
                <el-button type="primary" size="small" @click="resetForm('row')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
        </div>
        <!-- :current-page的值表示当前是第几页；
            :page-sizes的值表示可以选择一页多少条；
            :page-size的值表示当前一页显示几条；
            layout的值表示分页需要显示的内容，例如“total” 表示总数、“next” 表示下一页等；
            :total的值表示共几页；
           :data="tableData.slice((currentPage - 1) * pageSize,currentPage * pageSize) -->
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
          :page-sizes="pageSizes" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length" background class="page">
        </el-pagination>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import addressJSON from "@/utils/json/address.json"
export default {
  components: {},
  props: {},
  data() {
    return {
      // 表格数据,前端分页，全部拿到
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎1",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎2",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎3",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎4",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎5",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎6",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
        {
          date: "2016-05-03",
          name: "王小虎7",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333,
        },
      ],
      // 分页
      currentPage: 1,
      pageSize: 5,
      pageSizes: [1, 5, 10, 20],
      total: 0,
      dialogVisible: false,
      dialogVisible2: false,
      row: {
        address: '',
        phone: '',
        city: '',
        date: '',
        name: '',
        province: '',
        zip: '',
      },
      rules: {
        phone: [
          { required: true, message: '不能为空' },
          { type: 'number', message: '必须为数字值' }
        ],

      },
      form: {
        province: "北京",
        // 市
        city: "北京市",
        // 区
        district: "朝阳区",
        //详细地址
        detail: "",
      },
      provinceList: addressJSON,
      arrs: [],
      data: [],
      SearchValue: '',
    };
  },
  watch: {

  },
  computed: {},
  methods: {
    // 组件信息
    self() {
      this.$emit("self", this.myData)
    },
    // 表格
    handleClick(row) {
      this.dialogVisible = true
      this.row = null
      this.row = row
    },
    handleClick2(row) {
      this.dialogVisible2 = true
      this.row = null
      this.row = row
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
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
        if (element.name.indexOf(value) > 0) {
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
        this.tableData.length = 0;
        this.tableData = this.arrs;
        this.$message({
          message: '查找成功!!!',
          type: 'success',
          center: true
        });
      }
    },
    // refreshData
    refreshData() {
      // 局部刷新
      location.reload();
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }

  },
  created() {
  },
  mounted() { },
};
</script>
<style scoped>
* {
  color: rgb(255, 255, 255);
}

.page {
  margin-top: 5px;
}

/* bug,样式问题 */
::v-deep .el-table__body-wrapper {
  background-color: rgb(84, 92, 100)
}


::v-deep .el-table__fixed-header-wrapper {
  background-color: rgb(84, 92, 100)
}

::v-deep .el-table__header-wrapper {
  background-color: black;
}

.search {
  float: right;
  width: 200px;
}
</style>
