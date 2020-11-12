<template>
  <div>
    <div v-if="isEmpty">
      <v-alert type="warning">
        Opps! Graph for Uptime is not available.
      </v-alert>
    </div>

    <div v-if="isLoading">
      <Loading />
    </div>

    <div v-if="!isLoading">
      <div v-if="!isEmpty">
        <fusioncharts
          :type="type"
          :width="width"
          :height="height"
          :dataFormat="dataFormat"
          :dataSource="dataSource"
        ></fusioncharts>
      </div>
    </div>
  </div>
</template>

<script>
let dataSource = {
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
    chartBottomMargin: "10",
  },
  colorRange: {
    color: [
      {
        minValue: "0",
        maxValue: "50",
        code: "#62B58F",
      },
      {
        minValue: "50",
        maxValue: "75",
        code: "#FFC533",
      },
      {
        minValue: "75",
        maxValue: "100",
        code: "#F2726F",
      },
    ],
  },
  dials: {
    dial: [
      {
        value: 0,
      },
    ],
  },
}

const initialData = () => ({
  tmp: 0,
  dataTemp: {},
  type: "angulargauge",
  width: "100%",
  height: "200",
  containerBackgroundOpacity: "0.8",
  dataFormat: "json",
  creditLabel: false,
  dataSource: dataSource,
  isEmpty: false,
  isLoading: false,
})

import Loading from "@/components/Loading"
import { toTimestamp } from "../utils/date"

export default {
  name: "Temperature",

  components: { Loading },

  data() {
    return initialData()
  },

  mounted() {
    this.fetchTemp()
  },

  methods: {
    fetchTemp() {
      this.axios
        .get(
          `/devices/${this.$route.params.hostname}/health/device_temperature`
        )
        .then((response) => {
          const graphs = response.data.graphs
          if (graphs.length > 0) {
            response.data.graphs.forEach((graph, i) => {
              this.axios
                .get(
                  `devices/${this.$route.params.hostname}/health/device_temperature/${graph.sensor_id}`
                )
                .then((sensorResponse) => {
                  const current = sensorResponse.data.graphs[0].sensor_current

                  if (this.tmp < current) {
                    this.tmp = current
                    this.dataSource.dials.dial[0].value = current
                  }
                })
                .catch((error) => console.log(error))
            })
          } else {
            this.tmp = 0
            this.dataSource.dials.dial[0].value = 0
          }
        })
        .catch((error) => console.log(error))
    }
  },
}
</script>

