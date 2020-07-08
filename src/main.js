import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import fusionCharts from "./plugins/fushionchart";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  fusionCharts,
  render: h => h(App)
}).$mount("#app");
