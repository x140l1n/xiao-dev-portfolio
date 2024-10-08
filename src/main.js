import Vue from 'vue';
import App from '@src/App.vue';
import moment from 'moment';
import VueMoment from 'vue-moment';
import resize from 'vue-resize-directive';
import VueGtag from 'vue-gtag';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import 'bootstrap/dist/js/bootstrap';
import 'moment/locale/es';
import '@src/assets/scss/styles.scss';

Vue.config.productionTip = process.env.NODE_ENV === 'production';

if (process.env.VUE_APP_RECAPTCHA_V3_SITE_KEY) {
  Vue.use(VueReCaptcha, {
    siteKey: process.env.VUE_APP_RECAPTCHA_V3_SITE_KEY,
    loaderOptions: {
      useRecaptchaNet: true,
      autoHideBadge: true
    }
  });
}

if (process.env.VUE_APP_GA_ID) {
  Vue.use(VueGtag, {
    config: {
      id: process.env.VUE_APP_GA_ID,
      params: {
        // eslint-disable-next-line camelcase
        send_page_view: false
      }
    },
    bootstrap: false
  });
}

Vue.prototype.$env = {
  API_ENDPOINT_URL: process.env.VUE_APP_API_ENDPOINT_URL,
  CV_URL: process.env.VUE_APP_CV_URL
};

Vue.use(VueMoment, { moment });

Vue.directive('resize', resize);

Vue.directive('init-animation', {
  bind(el, binding) {
    const animations = el.querySelectorAll('[data-animation]');

    if (animations.length === 0) {
      return;
    }

    let options = {};

    if (binding.expression) {
      try {
        options = eval(`(${binding.expression})`);
        // eslint-disable-next-line no-empty
      } catch {
        options = {};
      }
    }

    Object.assign(options, { duration: 1, threshold: 0 });

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

    animations.forEach((animation) => observer.observe(animation));

    binding.value = observer;
  },
  unbind(el, binding) {
    if (binding.value.disconnect && typeof binding.value.disconnect === 'function') {
      binding.value.disconnect();
    }
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

const observableWidthScreenContent = Vue.observable({ widthScreenContent: null });

Object.defineProperty(Vue.prototype, '$widthScreenContent', {
  get() {
    return observableWidthScreenContent.widthScreenContent;
  },
  set(value) {
    observableWidthScreenContent.widthScreenContent = value;
  }
});

const observableHeightScreenContent = Vue.observable({ heightScreenContent: null });

Object.defineProperty(Vue.prototype, '$heightScreenContent', {
  get() {
    return observableHeightScreenContent.heightScreenContent;
  },
  set(value) {
    observableHeightScreenContent.heightScreenContent = value;
  }
});

const observableCurrentProgramActive = Vue.observable({ currentProgramActive: null });

Object.defineProperty(Vue.prototype, '$currentProgramActive', {
  get() {
    return observableCurrentProgramActive.currentProgramActive;
  },
  set(value) {
    observableCurrentProgramActive.currentProgramActive = value;
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
