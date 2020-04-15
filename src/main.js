import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import fusionCharts from "./plugins/fushionchart";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  fusionCharts,
  render: h => h(App)
}).$mount("#app");
