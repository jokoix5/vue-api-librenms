import Vue from "vue";
import VueFusionCharts from "vue-fusioncharts";
import FusionCharts from "fusioncharts";
import Widgets from "fusioncharts/fusioncharts.widgets";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

Vue.use(VueFusionCharts, FusionCharts, Widgets, FusionTheme);

export default FusionCharts;
