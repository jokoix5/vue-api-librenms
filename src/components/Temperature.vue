<template>
  <div>
    <h4>Temperature</h4>
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
    theme: "fusion",
    baseFont: "Source Sans Pro SemiBold",
    baseFontSize: "14",
    majorTMAlpha: "0",
    lowerLimit: "0",
    upperLimit: "100",
    showValue: "1",
    numberSuffix: "\xB0C",
    showBorder: "0",
    valueFontBold: "1",
    valueFontSize: "20",
    subcaptionFontBold: "0",
    borderAlpha: "0",
    gaugeFillColor: "#D9EDFF",
    showGaugeBorder: "0",
    ledGap: "0",
    bgColor: "#ffffff",
    bgAlpha: "0",
    chartTopMargin: "3",
    chartBottomMargin: "10"
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
  dials: {
    dial: [
      {
        value: "73"
      }
    ]
  }
};

export default {
  name: "Temperature",

  data: () => ({
    type: "angulargauge",
    width: "100%",
    height: "200",
    containerBackgroundOpacity: "0.8",
    dataFormat: "json",
    creditLabel: false,
    dataSource: dataSource
  })
};
</script>
