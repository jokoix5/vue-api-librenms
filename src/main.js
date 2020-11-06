import Vue from "vue";
import "./plugins/axios";
import "./plugins/firebase";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import fusionCharts from "./plugins/fushionchart";
import "@fortawesome/fontawesome-free/css/all.css";
import DatetimePicker from "vuetify-datetime-picker";

Vue.config.productionTip = false



Vue.use(DatetimePicker);

new Vue({
  router,
  vuetify,
  fusionCharts,
  render: h => h(App)
}).$mount("#app");

