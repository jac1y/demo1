<template>
    <div id="charts" style="width: 1000px; height: 800px"></div>
</template>

<script>
import '../../../public/js/china.js'
import china from '../../../public/json/china.json'
import zg from "@/utils/json/zhongguo.json"
export default {
    components: {},
    props: {},
    data() {
        return {
            zhongguo: zg
        };
    },
    watch: {},
    computed: {},
    methods: {
        initCharts() {
            var chartDom = document.getElementById('charts');
            var charts = this.$echarts.init(chartDom);
            var option;
            option = {
                // 背景颜色
                backgroundColor: "#404a59",
                // // 提示浮窗样式
                tooltip: {
                    show: true,
                    trigger: "item",
                    alwaysShowContent: false,
                    backgroundColor: "#0C121C",
                    borderColor: "rgba(0, 0, 0, 0.16);",
                    hideDelay: 100,
                    triggerOn: "mousemove",
                    enterable: true,
                    textStyle: {
                        color: "#DADADA",
                        fontSize: "12",
                        width: 20,
                        height: 30,
                        overflow: "break",
                    },
                    showDelay: 100
                },
                // 地图配置
                geo: {
                    // 使用 registerMap 注册的地图名称
                    map: "china",
                    // 是否开启鼠标缩放和平移漫游。默认不开启。
                    // 如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
                    roam: 'scale',
                    // 图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等。
                    label: {
                        // 通常状态下的样式
                        show: true,
                        color: "#fff",
                        // 鼠标放上去的样式
                        emphasis: {
                            color: "#fff",
                        },
                    },
                    // 地图区域的样式设置
                    itemStyle: {
                        normal: {
                            borderColor: "rgba(147, 235, 248, 1)",
                            borderWidth: 1,
                            areaColor: {
                                type: "radial",
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: "rgba(147, 235, 248, 0)", // 0% 处的颜色
                                    },
                                    {
                                        offset: 1,
                                        color: "rgba(147, 235, 248, .2)", // 100% 处的颜色
                                    },
                                ],
                                globalCoord: false, // 缺省为 false
                            },
                            shadowColor: "rgba(128, 217, 248, 1)",
                            shadowOffsetX: -2,
                            shadowOffsetY: 2,
                            shadowBlur: 10,
                        },
                        // 鼠标放上去高亮的样式
                        emphasis: {
                            areaColor: "#389BB7",
                            borderWidth: 0,
                        },
                    },
                },
            },
                // 地图注册，第一个参数的名字必须和option.geo.map一致
                this.$echarts.registerMap("china", china)
            charts.setOption(option);
        },
    },
    created() {
        this.$nextTick(() => {
            this.initCharts();
        })
    },
    mounted() { }
};
</script>
<style scoped>
.wrapper {}
</style>