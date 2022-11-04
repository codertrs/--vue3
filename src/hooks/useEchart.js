import * as echarts from 'echarts';
import {
  onUnmounted
} from 'vue';

export default function useEchart(divEl) {


  const echartInstance = echarts.init(divEl, null, {
    renderer: "svg"
  });

  onUnmounted(() => {
    echartInstance.dispose(); //销毁实例
  });

  // 为了方便 该hooks的使用
  function setOption(option) {
    echartInstance.setOption(option);
  }

  // 容器动态 发生改变
  function resizeEchart() {
    echartInstance.resize();
  }

  return {
    echartInstance,
    setOption,
    resizeEchart
  };

}