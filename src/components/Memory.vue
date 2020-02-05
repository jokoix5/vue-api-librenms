<template>
  <div>
    <h4>Memory</h4>
    <fusioncharts
      :type="type"
      :width="width"
      :height="height"
      :dataFormat="dataFormat"
      :dataSource="dataSource"
    ></fusioncharts>
  </div>
</template>

<script>
const dataSource = {
  chart: {
    showBorder: "0",
    valueFontBold: "1",
    valueFontSize: "20",
    subcaptionFontBold: "0",
    lowerLimit: "0",
    upperLimit: "100",
    numberSuffix: "%",
    borderAlpha: "0",
    showValue: "1",
    gaugeFillColor: "#D9EDFF",
    showTickValues: "0",
    showGaugeBorder: "0",
    majorTMAlpha: "0",
    ledGap: "0",
    bgColor: "#ffffff",
    bgAlpha: "0",
    chartTopMargin: "3",
    chartBottomMargin: "10",
    baseFont: "Source Sans Pro SemiBold",
    baseFontSize: "14"
  },
  colorRange: {
    color: [
      {
        minValue: "0",
        maxValue: "50",
        code: "#62B58F"
      },
      {
        minValue: "50",
        maxValue: "75",
        code: "#FFC533"
      },
      {
        minValue: "75",
        maxValue: "100",
        code: "#F2726F"
      }
    ]
  },
  value: "45"
};

export default {
  name: "Memory",

  data: () => ({
    type: "hled",
    width: "100%",
    height: "100%",
    containerBackgroundOpacity: "0.8",
    dataFormat: "json",
    creditLabel: false,
    dataSource: dataSource
  })
};
</script>
