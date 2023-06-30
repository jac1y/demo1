<template>
  <div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
        <el-card id="sale">
          <div class="card_header">
            <span>总销售额：</span>
            <span>￥50000</span>
          </div>
          <div class="card_container">
            <span class="saleConL">周同比：4%</span>
            <span class="saleConR">日同比：1%</span>
          </div>
          <div class="card_footer">
            <span>日销售额：</span>
            <span>￥1000</span>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6"><el-card id="visit">
          <div class="card_header">
            <span>总访问量：</span>
            <span>1485454</span>
          </div>
          <div class="card_container">
            <div id="sole"></div>
          </div>
          <div class="card_footer">
            <span>日访问量：</span>
            <span>1025</span>
          </div>
        </el-card></el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6"><el-card id="turnover">
          <div class="card_header">
            <span>总订单数：</span>
            <span>500000</span>
          </div>
          <div class="card_container">
            <div id="CardTurnover"></div>
          </div>
          <div class="card_footer"><span>成交率：</span> <span>80%</span></div>
        </el-card></el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6"><el-card id="attention">
          <div class="card_header">
            <span>当前储量：</span>
            <span>1000000</span>
          </div>
          <div class="card_container">
            <el-progress class="attention_schedule" type="circle" :percentage="25"></el-progress>
          </div>
          <div class="card_footer"></div>
        </el-card></el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div id="barChart"></div>
      </el-col>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="24">
        <div>排行榜</div>
        <el-table ref="singleTable" :data="tableData" highlight-current-row @current-change="handleCurrentChange"
          header-cell-style="background-color: rgb(84, 92, 100)" cell-style="background-color: rgb(84, 92, 100)">
          <el-table-column type="index" width="50" label="排名">
          </el-table-column>
          <el-table-column property="date" label="日期" width="120">
          </el-table-column>
          <el-table-column property="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column property="address" label="地址"> </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      loading: true,
    };
  },
  watch: {},
  computed: {},
  methods: {
    cardSole() {
      var chartDom = document.getElementById("sole");
      var myChart = this.$echarts.init(chartDom);
      var option;
      option = {
        xAxis: {
          type: "category",
          data: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        },
        yAxis: {
          type: "value",
          //   去除横线
          splitLine: {
            show: false,
          },
        },
        grid: {
          left: "0%",
          right: "10%",
          bottom: "0%",
          containLabel: false,
        },
        series: [
          {
            data: [820, 932, 8000, 934, 1290, 1330, 10000, 5000, 6428],
            type: "line",
            smooth: true,
            // 关闭折线图的点
            showSymbol: false,
          },
        ],
      };

      option && myChart.setOption(option);
    },
    CardTurnover() {
      var chartDom = document.getElementById("CardTurnover");
      var myChart = this.$echarts.init(chartDom);
      var option;
      option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
          splitLine: {
            show: false,
          },
        },
        grid: {
          left: "0%",
          right: "10%",
          bottom: "0%",
          containLabel: false,
        },
        series: [
          {
            data: [120, 200, 800, 80, 70, 700, 130],
            type: "bar",
          },
        ],
      };

      option && myChart.setOption(option);
    },
    barChart() {
      var chartDom = document.getElementById("barChart");
      var myChart = this.$echarts.init(chartDom);
      var option;

      option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12",
            ],
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel: {
              color: "rgb(255, 255, 255)",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              color: "rgb(255, 255, 255)",
            },
          },
        ],
        series: [
          {
            name: "月销售额",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220, 124, 55, 44, 155, 575],
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
  created() { },
  mounted() {
    this.cardSole();
    this.CardTurnover();
    this.barChart();
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  color: rgb(255, 255, 255);
}

#attention,
#turnover,
#sale,
#visit {
  min-width: 24%;
  max-width: 100%;
  height: 300px;
  background-color: rgb(84, 92, 100);
}

.card_header {
  margin-top: 10px;
  height: 100px;
}

.card_container {
  position: relative;
  height: 100px;
  width: 100%;
}

.card_footer {
  margin-top: 10px;
  height: 100px;
}

#sole {
  width: 100%;
  height: 100px;
  position: absolute;
  transform: translateY(-50%);
}

.saleConL {
  display: block;
  float: left;
}

.saleConR {
  display: block;
  text-align: end;
}

#CardTurnover {
  width: 100%;
  height: 100px;
  position: absolute;
  transform: translateY(-50%);
}

.attention_schedule {
  width: 100%;
  height: 100px;
  position: absolute;
  transform: translateY(-50%);
  left: 25%;
}

#barChart {
  width: 100%;
  height: 400px;
}

#barChart::before {
  position: absolute;
  content: "月销售额";
  display: block;
  width: 100%;
  height: 10%;
  left: 6%;
  top: 5%;
}
</style>
