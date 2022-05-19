import Vue from "vue";
import App from "./App.vue";
import "./assets/css/base.css";
import "bootstrap";
import Moment from "vue-moment";
import moment from 'moment';
import resize from 'vue-resize-directive'

Vue.config.productionTip = false;
Vue.use(Moment);
moment.locale("es");

Vue.directive('resize', resize);

new Vue({
  render: h => h(App)
}).$mount("#app");