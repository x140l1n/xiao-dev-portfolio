import Vue from 'vue';
import App from '@src/App.vue';
import VueMoment from 'vue-moment';
import moment from 'moment-timezone'
import resize from 'vue-resize-directive';
import 'bootstrap/dist/js/bootstrap';
import '@src/assets/scss/styles.scss';

Vue.prototype.$env = {
  API_ENDPOINT: process.env.VUE_APP_API_ENDPOINT
};

Vue.config.productionTip = false;

Vue.use(VueMoment, { moment });

Vue.directive('resize', resize);

const observablePrograms = Vue.observable({ programs: [] });

Object.defineProperty(Vue.prototype, '$programs', {
  get() {
    return observablePrograms.programs;
  },
  set(value) {
    observablePrograms.programs = value;
  }
});

const observableProgramsMaximized = Vue.observable({ programsMaximized: [] });

Object.defineProperty(Vue.prototype, '$programsMaximized', {
  get() {
    return observableProgramsMaximized.programsMaximized;
  },
  set(value) {
    observableProgramsMaximized.programsMaximized = value;
  }
});

const observableProgramActive = Vue.observable({ programActive: null });

Object.defineProperty(Vue.prototype, '$programActive', {
  get() {
    return observableProgramActive.programActive;
  },
  set(value) {
    observableProgramActive.programActive = value;
  }
});

const observableThemeSelected = Vue.observable({ themeSelected: null });

Object.defineProperty(Vue.prototype, '$themeSelected', {
  get() {
    return observableThemeSelected.themeSelected;
  },
  set(value) {
    observableThemeSelected.themeSelected = value;
  }
});

const observableIsFullScreen = Vue.observable({ isFullScreen: false });

Object.defineProperty(Vue.prototype, '$isFullScreen', {
  get() {
    return observableIsFullScreen.isFullScreen;
  },
  set(value) {
    observableIsFullScreen.isFullScreen = value;
  }
});

const observableIsFullScreenFromToggle = Vue.observable({
  isFullScreenFromToggle: true
});

Object.defineProperty(Vue.prototype, '$isFullScreenFromToggle', {
  get() {
    return observableIsFullScreenFromToggle.isFullScreenFromToggle;
  },
  set(value) {
    observableIsFullScreenFromToggle.isFullScreenFromToggle = value;
  }
});

const observableUrlToOpen = Vue.observable({ urlToOpen: null });

Object.defineProperty(Vue.prototype, '$urlToOpen', {
  get() {
    return observableUrlToOpen.urlToOpen;
  },
  set(value) {
    observableUrlToOpen.urlToOpen = value;
  }
});

const eventsFullScreen = ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'msfullscreenchange'];

eventsFullScreen.forEach((eventType) =>
  document.addEventListener(
    eventType,
    () => {
      if (!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement)) {
        observableIsFullScreen.isFullScreen = false;
      } else {
        observableIsFullScreen.isFullScreen = true;
      }

      observableIsFullScreenFromToggle.isFullScreenFromToggle = false;
    },
    false
  )
);

new Vue({
  render: (h) => h(App)
}).$mount('#app');
