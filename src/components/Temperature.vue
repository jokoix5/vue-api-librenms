
// duplicate temperature, modif membuat alert kalau temp ngak ada

<template>
  <v-card flat class="mx-auto">
    <div v-if="isEmpty">
      <v-alert type="warning">Opps! Graph for memory pools is not available.</v-alert>
    </div>

    <div v-if="!isEmpty">
      <fusioncharts
        :type="type"
        :width="width"
        :height="height"
        :dataFormat="dataFormat"
        :dataSource="dataSource"
      ></fusioncharts>
    </div>
  </v-card>
</template>

<script>

export default {
  name: "Temperature",

  data: () => ({
    dataTemp: [],

    type: "angulargauge",
    width: "100%",
    height: "200",
    containerBackgroundOpacity: "0.8",
    dataFormat: "json",
    creditLabel: false,
    dataSource: {
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
                          dial: [{
                            value: ""
                                  // this.value = '90'
                                  // value: this.$set(this.someObjec, '20', 2)
                                  // this.$set(this.value, 'b', 2)
                                }]
                        }
              
                },
                
                
    isEmpty: false
  }),
  
  computed: {
    // value() {
    //  return this.dataSource.dials.dial[0].value = 28 
    // }
  },
  //   computed: {
  //   value() {
  //     return this.dataSource.dials.dial.value;
  //     hasil: function() {
  //                   return this.a + 1;
  //   }
  // },
  watch: {
          // dial: {
            // handler (newvalue, oldvalue) {
              // this.value(response.dataTemp)
            // this.datasource.dials.dial[0].value = 28
               
               
            // },
            // deep: true
          // },
        },
  
//   setTimeout(() => {
//   vm.$data.item[0]['foo'] = 'bar';
// },1000)

  mounted() {
    this.fetchTemp();
  },

  methods: {
    fetchTemp() {
      this.axios
        .get(`/devices/${this.$route.params.hostname}/health/device_temperature`
        ).then(response => {
          // this.dataTemp = response.data.graphs
          let tmp = 0;
          for (var i = 0; i < response.data.graphs.length; i++) {
            this.axios
              .get(
                `devices/${this.$route.params.hostname}/health/device_temperature/${response.data.graphs[i].sensor_id}`
              )
              .then(resultResp => {
                // if (response.data.size === 0) {
                //   this.isEmpty = true;
                // } else {
                  if (i > tmp) {
                    tmp = i;
                  } else {
                    // this.dataTemp(resultResp.data.graphs[0]);
                    this.dataSource.dials.dial.value(resultResp.data.graphs)
                  }
                  console.log(resultResp);
                // }
              });
          }
          // console.log("damn",response)
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
};
</script>
