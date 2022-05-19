import Vue from "vue";
import App from "./App.vue";
import "./assets/css/base.css";
import "bootstrap";
import Moment from "vue-moment";
import moment from 'moment';

Vue.config.productionTip = false;
Vue.use(Moment);
moment.locale("es");

new Vue({
  render: h => h(App)
}).$mount("#app");