<template>
  <main class="screen-bg">
    <div class="header"></div>
    <div class="left-top">
      <PieCharts :echartDatas="chargingPile"></PieCharts>
    </div>

    <div class="left-bottom">
      <LineCharts :echartDatas="processMonitoring"></LineCharts>
    </div>
    <div class="right-top">
      <RightTopPanel
        :panelItems="chargingTop4"
        :percentage="percentage"
      ></RightTopPanel>
    </div>
    <div class="right-center">
      <BarCharts :echartDatas="chargingStatistics"></BarCharts>
    </div>
    <div class="right-bottom"></div>
    <div class="center"></div>
    <div class="bottom"></div>
  </main>
</template>

<script setup>
import PieCharts from "@/components/pie-echarts.vue";
import LineCharts from "@/components/line-echarts.vue";
import BarCharts from "@/components/bar-echarts.vue";
import RightTopPanel from "@/components/right-top-panel.vue";
import { ref } from "vue";
import {
  chargingPileData,
  processMonitoringData,
  chargingStatisticsData,
  chargingTop4Data,
} from "./config/home-data";

// 接口引入
import { getPowerScreenData } from "@/services";
// 充电桩饱和比例
let chargingPile = ref(chargingPileData);
//流程监控
let processMonitoring = ref(processMonitoringData);
// 充电桩数据统计
let chargingStatistics = ref(chargingStatisticsData);
// 充电桩Top4占比
let chargingTop4 = ref(chargingTop4Data);
let percentage = ref(0);

const createData = async () => {
  let data = await getPowerScreenData();
  console.log("数据", data.data);
  chargingPile.value = data.data.chargingPile.data;
  processMonitoring.value = data.data.processMonitoring.data;
  chargingStatistics.value = data.data.chargingStatistics.data;

  chargingTop4.value = data.data.chargingTop4.data;
  percentage.value = data.data.chargingTop4.totalPercentage;
};

createData();
</script>

<style scoped>
.screen-bg {
  /*绝对定位  创建新的渲染层 */
  position: absolute;
  width: 100%;
  height: 100%;

  /* 背景 */
  background-color: #070a3c;
  background-image: url(../assets/images/bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.header {
  /* 定位 */
  position: absolute;
  top: 21px;
  height: 56px;
  width: 100%;
  /* 背景 */
  background-image: url(../assets/images/bg_header.svg);
  /* background-repeat: no-repeat; */
}
.left-top {
  position: absolute;
  left: 16px;
  top: 116px;
  width: 536px;
  height: 443px;
  /* 背景 */
  background-image: url(../assets/images/bg_left-top.svg);
  background-repeat: no-repeat;
}

.left-bottom {
  /* 定位 */
  position: absolute;
  left: 16px;
  bottom: 49px;
  width: 536px;
  height: 443px;
  /* 背景 */
  background-image: url(../assets/images/bg_left_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.right-top {
  position: absolute;
  right: 17px;
  top: 96px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_top.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.right-center {
  position: absolute;
  right: 17px;
  top: 443px;
  width: 519px;
  height: 327px;

  background-image: url(../assets/images/bg_right_center.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.right-bottom {
  position: absolute;
  right: 17px;
  bottom: 49px;
  width: 519px;
  height: 242px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(../assets/images/bg_right_bottom.svg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.center {
  position: absolute;
  right: 540px;
  bottom: 272px;
  width: 823px;
  height: 710px;
  border: 5px solid pink;
}
.bottom {
  position: absolute;
  right: 540px;
  bottom: 39px;
  width: 823px;
  height: 209px;

  background-image: url(../assets/images/bg_bottom.svg);
  background-repeat: no-repeat;
}
</style>
