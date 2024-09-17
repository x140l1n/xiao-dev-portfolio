import Vue from 'vue';
import App from '@src/App.vue';
import VueMoment from 'vue-moment';
import resize from 'vue-resize-directive';
import 'bootstrap/dist/js/bootstrap';
import '@src/assets/scss/styles.scss';
import 'moment/locale/es'

Vue.prototype.$env = {
  API_ENDPOINT: process.env.VUE_APP_API_ENDPOINT
};

Vue.config.productionTip = false;

Vue.use(VueMoment, { locale: 'es' }); 

Vue.directive('resize', resize);

Vue.directive('init-animation', {
  bind(el, binding) {
    const animations = el.querySelectorAll('[data-animation]');

    if (animations.length === 0) {
      return;
    }

    let options = null;

    try {
      options = eval(`(${binding.expression})`);
      /* eslint-disable no-empty */
    } catch {}

    Object.assign(options, { duration: 1, threshold: 0.5 });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.style.animation = `${entry.target.dataset.animation} ${options.duration}s forwards`;
            entry.target.classList.add('animated');
          }
        });
      },
      { root: el, threshold: options.threshold }
    );

    animations.forEach((animation) => {
      observer.observe(animation);
    });

    binding.value = observer;
  },
  unbind(el, binding) {
    binding.value.disconnect();
  }
});

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

const observableIsFullscreen = Vue.observable({ isFullscreen: false });

Object.defineProperty(Vue.prototype, '$isFullscreen', {
  get() {
    return observableIsFullscreen.isFullscreen;
  },
  set(value) {
    observableIsFullscreen.isFullscreen = value;
  }
});

const observableIsFullscreenFromSettings = Vue.observable({
  isFullscreenFromSettings: false
});

Object.defineProperty(Vue.prototype, '$isFullscreenFromSettings', {
  get() {
    return observableIsFullscreenFromSettings.isFullscreenFromSettings;
  },
  set(value) {
    observableIsFullscreenFromSettings.isFullscreenFromSettings = value;
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

new Vue({
  render: (h) => h(App)
}).$mount('#app');
