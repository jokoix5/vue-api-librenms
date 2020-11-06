import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        background: "#eeeeee"
      }
    },
    options: {
      customProperties: true
    }
  }
});

