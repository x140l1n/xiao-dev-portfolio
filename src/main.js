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

const observablePrograms = Vue.observable({ programs: [] })

Object.defineProperty(Vue.prototype, '$programs', {
  get () {
    return observablePrograms.programs;
  },
  set (value) {
    observablePrograms.programs = value;
  }
})

const observableProgramActive = Vue.observable({ programActive: null })

Object.defineProperty(Vue.prototype, '$programActive', {
  get () {
    return observableProgramActive.programActive;
  },
  set (value) {
    observableProgramActive.programActive = value;
  }
})

window.oncontextmenu = function () {
  return false;
}

new Vue({
  render: h => h(App),
}).$mount("#app");