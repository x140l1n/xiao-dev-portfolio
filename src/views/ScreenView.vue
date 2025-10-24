<template>
  <div
    ref="screen"
    v-resize="onScreenResize"
    class="screen user-none-select"
  >
    <div
      ref="screenContent"
      @click.self="onRemoveProgramActive"
      class="screen-content"
      role="presentation"
      aria-label="Desktop"
    >
      <div class="program p-2">
        <button
          @click="onOpenProgram('Settings')"
          :title="$t('settings.title')"
          :alt="$t('settings.title')"
          class="program-inner program-knowledge p-2"
          type="button"
        >
          <img
            id="program-settings"
            :alt="$t('settings.title') + ' logo'"
            src="@assets/icons/settings.png"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-settings"
          >{{ $t('settings.title') }}</span>
        </button>
      </div>
      <div class="program p-2">
        <button
          @click="onOpenProgram('AboutMe')"
          :title="$t('aboutMe.title')"
          :alt="$t('aboutMe.title')"
          class="program-inner p-2"
          type="button"
        >
          <img
            id="program-about-me"
            :alt="$t('aboutMe.title') + ' logo'"
            src="@assets/icons/about-me.png"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-about-me"
          >{{ $t('aboutMe.title') }}</span>
        </button>
      </div>
      <div class="program p-2">
        <button
          @click="onOpenProgram('Knowledges')"
          :title="$t('knowledges.title')"
          :alt="$t('knowledges.title')"
          class="program-inner program-knowledge p-2"
          type="button"
        >
          <img
            id="program-knowledge"
            :alt="$t('knowledges.title') + ' logo'"
            src="@assets/icons/knowledge.png"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-knowledge"
          >{{ $t('knowledges.title') }}</span>
        </button>
      </div>
      <div class="program p-2">
        <button
          @click="onOpenProgram('StudiesExperiences')"
          :title="$t('studiesExperiences.title')"
          :alt="$t('studiesExperiences.title')"
          class="program-inner program-experiences-studies p-2"
          type="button"
        >
          <img
            id="program-experiences-studies"
            :alt="$t('studiesExperiences.title') + ' logo'"
            src="@assets/icons/experiences-studies.png"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-experiences-studies"
          >{{ $t('studiesExperiences.title') }}</span>
        </button>
      </div>
      <div class="program p-2">
        <button
          @click="onOpenProgram('Projects')"
          :title="$t('projects.title')"
          :alt="$t('projects.title')"
          class="program-inner program-projects p-2"
          type="button"
        >
          <img
            id="program-projects"
            :alt="$t('projects.title') + ' logo'"
            src="@assets/icons/projects.png"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-projects"
          >{{ $t('projects.title') }}</span>
        </button>
      </div>
      <div class="program p-2">
        <button
          @click="onOpenProgram('ContactMe')"
          :title="$t('contactMe.title')"
          :alt="$t('contactMe.title')"
          class="program-inner program-contactme p-2"
          type="button"
        >
          <img
            id="program-contactme"
            :alt="$t('contactMe.title') + ' logo'"
            src="@assets/icons/email.png"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-contactme"
          >{{ $t('contactMe.title') }}</span>
        </button>
      </div>
      <div class="program p-2">
        <button
          @click="onOpenProgram('Browser')"
          :title="$t('browser.title')"
          :alt="$t('browser.title')"
          class="program-inner program-browser p-2"
          type="button"
        >
          <img
            id="program-browser"
            :alt="$t('browser.title') + ' logo'"
            src="@assets/icons/browser.png"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-browser"
          >{{ $t('browser.title') }}</span>
        </button>
      </div>
      <div class="program p-2">
        <button
          @click="onOpenProgram('CV')"
          :title="$t('cv.title')"
          :alt="$t('cv.title')"
          class="program-inner program-cv p-2"
          type="button"
        >
          <img
            id="program-cv"
            :alt="$t('cv.title') + ' logo'"
            src="@assets/icons/pdf.png"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-cv"
          >{{ $t('cv.title') }}</span>
        </button>
      </div>
    </div>
    <TaskBar
      ref="taskBarView"
      draggable="false"
    />
    <div class="toasts">
      <div
        ref="tipFullscreen"
        v-show="!isClosedToast"
        class="toast show"
        role="alert"
        draggable="false"
        tabindex="-1"
      >
        <div class="toast-header">
          <img
            class="rounded me-2"
            src="@assets/icons/tips.png"
            title="Tips icon"
            alt="Tips icon"
            width="30px"
            draggable="false"
          >
          <strong class="me-auto">{{ $t('screen.fullscreenMode') }}</strong>
          <button
            @click="isClosedToast = true"
            :title="$t('common.close') + ' tips'"
            :aria-label="$t('common.close') + ' tips'"
            class="btn-close"
            type="button"
          />
        </div>
        <div class="toast-body">
          {{ $t('screen.fullscreenMessage') }}
        </div>
      </div>
      <div
        ref="cookies"
        v-show="!isClosedCookies"
        class="toast show"
        role="alert"
        draggable="false"
        tabindex="-1"
      >
        <div class="toast-header">
          <img
            class="rounded me-2"
            src="@assets/icons/cookies.png"
            title="Cookies icon"
            alt="Cookies icon"
            width="30px"
            draggable="false"
          >
          <strong class="me-auto">{{ getTitleCookiesConsent }}</strong>
          <button
            @click="isClosedCookies = true"
            class="btn-close"
            type="button"
            title="Close cookies"
            aria-label="Close cookies"
          />
        </div>
        <div class="toast-body">
          {{ getDescriptionCookiesConsent }}
          <div class="d-flex flex-column justify-content-end align-items-center gap-2 mt-2">
            <button
              :title="getAcceptAllCookies"
              class="btn bg-primary text-light w-100"
              type="button"
              data-cc="accept-all"
            >
              {{ getAcceptAllCookies }}
            </button>
            <button
              :title="getRejectAllCookies"
              class="btn bg-danger text-light w-100"
              type="button"
              data-cc="accept-necessary"
            >
              {{ getRejectAllCookies }}
            </button>
            <button
              :title="getShowPreferencesCookies"
              class="btn bg-secondary text-light w-100"
              type="button"
              data-cc="show-preferencesModal"
            >
              {{ getShowPreferencesCookies }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as CookieConsent from 'vanilla-cookieconsent';
import TaskBar from '@components/TaskBar.vue';
import Vue from 'vue';
import { v4 } from 'uuid';

export default {
  components: {
    TaskBar
  },
  data() {
    return {
      idTimeoutOpenNextProgram: null,
      isClosedToast: false,
      isClosedCookies: false,
      cookiesConsentSettings: {
        autoShow: false,
        categories: {
          necessary: {
            enabled: true,
            readonly: true,
            label: 'Strictly Necessary Cookies',
            description: 'These cookies are essential for the proper functioning of this website. Without these cookies, the website would not work properly.'
          },
          analytics: {
            readonly: false,
            label: 'Performance and Analytics Cookies',
            description: 'These cookies allow the website to remember the choices you have made in the past and to help improve this website.',
            autoClear: {
              cookies: [
                {
                  name: /^_ga/
                },
                {
                  name: '_gid'
                }
              ]
            },
            services: {
              ga: {
                label: 'Google Analytics',
                cookies: [
                  {
                    name: /^(_ga|_gid)/
                  }
                ]
              }
            }
          }
        },
        language: {
          default: this.$i18n?.locale || 'en',
          translations: {
            'en': {
              consentModal: {
                title: 'Cookie Consent',
                description: 'Cookies are used to enhance browsing experience and to analyze the traffic of this website. Please consent to the use of cookies.',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
                showPreferencesBtn: 'Manage preferences'
              },
              preferencesModal: {
                title: 'Cookie Preferences',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
                savePreferencesBtn: 'Save preferences',
                closeIconLabel: 'Close',
                sections: [
                  {
                    title: 'Cookie Usage',
                    description: `Cookies are used to ensure the basic functionalities of the website and to enhance online experience. 
                                    This includes the use of Google Analytics for tracking page visits and reCAPTCHA v3 for security.`
                  },
                  {
                    title: 'Strictly Necessary Cookies',
                    description: 'These cookies are essential for the proper functioning of this website. Without these cookies, the website would not work properly.',
                    linkedCategory: 'necessary'
                  },
                  {
                    title: 'Performance and Analytics Cookies',
                    description: 'These cookies allow the website to remember the choices made in the past and to help improve this website.',
                    linkedCategory: 'analytics',
                    cookieTable: {
                      headers: {
                        name: 'Name',
                        domain: 'Service',
                        description: 'Description',
                        expiration: 'Expiration'
                      },
                      body: [
                        {
                          name: '_ga',
                          domain: 'Google Analytics',
                          description: 'Cookie set by <a href="#das">Google Analytics</a> for tracking user interactions.',
                          expiration: 'Expires after 12 months'
                        },
                        {
                          name: '_gid',
                          domain: 'Google Analytics',
                          description: 'Cookie set by <a href="#das">Google Analytics</a> for session tracking.',
                          expiration: 'Expires after 24 hours'
                        }
                      ]
                    }
                  },
                  {
                    title: 'More Information',
                    description: `For any queries regarding the cookie policy and choices, 
                                          please use the contact form on this website or click <a href="#cookies">here</a> to learn more.`
                  }
                ]
              }
            },
            'es': {
              consentModal: {
                title: 'Consentimiento de Cookies',
                description: 'Se utilizan cookies para mejorar la experiencia de navegación y analizar el tráfico de este sitio web. Por favor, acepta el uso de cookies.',
                acceptAllBtn: 'Aceptar todas',
                acceptNecessaryBtn: 'Rechazar todas',
                showPreferencesBtn: 'Gestionar preferencias'
              },
              preferencesModal: {
                title: 'Preferencias de Cookies',
                acceptAllBtn: 'Aceptar todas',
                acceptNecessaryBtn: 'Rechazar todas',
                savePreferencesBtn: 'Guardar preferencias',
                closeIconLabel: 'Cerrar',
                sections: [
                  {
                    title: 'Uso de Cookies',
                    description: `Las cookies se utilizan para garantizar las funcionalidades básicas del sitio web y mejorar la experiencia online. 
                                    Esto incluye el uso de Google Analytics para rastrear visitas de páginas y reCAPTCHA v3 para seguridad.`
                  },
                  {
                    title: 'Cookies Estrictamente Necesarias',
                    description: 'Estas cookies son esenciales para el correcto funcionamiento de este sitio web. Sin estas cookies, el sitio web no funcionaría correctamente.',
                    linkedCategory: 'necessary'
                  },
                  {
                    title: 'Cookies de Rendimiento y Análisis',
                    description: 'Estas cookies permiten al sitio web recordar las decisiones que has tomado en el pasado y ayudar a mejorar este sitio web.',
                    linkedCategory: 'analytics',
                    cookieTable: {
                      headers: {
                        name: 'Nombre',
                        domain: 'Servicio',
                        description: 'Descripción',
                        expiration: 'Expiración'
                      },
                      body: [
                        {
                          name: '_ga',
                          domain: 'Google Analytics',
                          description: 'Cookie establecida por <a href="#das">Google Analytics</a> para rastrear interacciones del usuario.',
                          expiration: 'Expira después de 12 meses'
                        },
                        {
                          name: '_gid',
                          domain: 'Google Analytics',
                          description: 'Cookie establecida por <a href="#das">Google Analytics</a> para rastreo de sesión.',
                          expiration: 'Expira después de 24 horas'
                        }
                      ]
                    }
                  },
                  {
                    title: 'Más Información',
                    description: `Para cualquier consulta sobre la política de cookies y opciones, 
                                          por favor usa el formulario de contacto en este sitio web o haz clic <a href="#cookies">aquí</a> para obtener más información.`
                  }
                ]
              }
            }
          }
        },
        onConsent: ({ cookie }) => this.onCookiesConsented(cookie),
        onChange: ({ cookie }) => this.onCookiesConsented(cookie)
      }
    };
  },
  computed: {
    getTitleCookiesConsent() {
      return this.cookiesConsentSettings.language.translations[this.cookiesConsentSettings.language.default].consentModal.title;
    },
    getDescriptionCookiesConsent() {
      return this.cookiesConsentSettings.language.translations[this.cookiesConsentSettings.language.default].consentModal.description;
    },
    getAcceptAllCookies() {
      return this.cookiesConsentSettings.language.translations[this.cookiesConsentSettings.language.default].consentModal.acceptAllBtn;
    },
    getRejectAllCookies() {
      return this.cookiesConsentSettings.language.translations[this.cookiesConsentSettings.language.default].consentModal.acceptNecessaryBtn;
    },
    getShowPreferencesCookies() {
      return this.cookiesConsentSettings.language.translations[this.cookiesConsentSettings.language.default].consentModal.showPreferencesBtn;
    }
  },
  watch: {
    $isFullscreen(value) {
      this.isClosedToast = value;
    },
    $themeSelected(value) {
      switch (value) {
        case 'theme-1':
          this.$refs.screen.classList.add('theme-1');
          this.$refs.screen.classList.remove('theme-2');

          break;

        case 'theme-2':
          this.$refs.screen.classList.add('theme-2');
          this.$refs.screen.classList.remove('theme-1');

          break;

        default:
          this.$themeSelected = 'theme-2';
      }

      localStorage.setItem('theme', this.$themeSelected);

      this.checkMetaThemeColor();
    },
    $urlToOpen(value) {
      if (value) {
        this.onOpenProgram('Browser', { urlDefault: value });

        this.$urlToOpen = null;
      }
    },
    '$i18n.locale'(newLocale) {
      this.updateCookiesLanguage(newLocale);
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$themeSelected = localStorage.getItem('theme') ?? 'theme-2';
      
      this.initCookiesConsent();

      window.addEventListener('hashchange', () => {
        if (window.location.hash === '#cookies') {
          this.onOpenProgram('CookiesPolicy');

          CookieConsent.hidePreferences();

          window.history.replaceState(null, null, window.location.pathname);
        }
      });

      this.onScreenResize();
    },
    initCookiesConsent() {
      this.cookiesConsentSettings.language.default = this.$i18n?.locale || 'en';
      CookieConsent.run({ root: this.$refs.screen, ...this.cookiesConsentSettings });
    },
    updateCookiesLanguage(newLocale) {
      this.cookiesConsentSettings.language.default = newLocale;
      
      // Reinitialize cookie consent with new language
      CookieConsent.reset(true);
      this.initCookiesConsent();
      
      // Force update of computed properties for the custom toast
      this.$forceUpdate();
    },
    onCookiesConsented(cookie) {
      if (cookie.categories.includes('analytics')) {
        this.$gtag?.optIn();
      } else {
        this.$gtag?.optOut();
      }

      this.isClosedCookies = true;
    },
    checkMetaThemeColor() {
      const metaThemeColor = document.querySelector('meta[name=theme-color]');

      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', this.$themeSelected === 'theme-1' ? '#5d4595' : '#13748e');
      } else {
        const meta = document.createElement('meta');
        meta.name = 'theme-color';
        meta.content = this.$themeSelected === 'theme-1' ? '#5d4595' : '#13748e';

        document.head.appendChild(meta);
      }
    },
    onRemoveProgramActive() {
      if (this.$currentProgramActive) {
        this.$currentProgramActive.window.removeActive();
      }
    },
    onScreenResize() {
      this.$widthScreenContent = this.$refs.screenContent.clientWidth;
      this.$heightScreenContent = this.$refs.screenContent.clientHeight;

      this.$programs.forEach((program) => program.window.updateSizePosition());
    },
    onOpenProgram(programName, defaultProps = {}) {
      if (this.idTimeoutOpenNextProgram) return;

      this.idTimeoutOpenNextProgram = setTimeout(
        () => (this.idTimeoutOpenNextProgram = null),
        1000
      );

      this.getWindow().then(async (windowComponent) => {
        let windowObject = null;

        const programComponent = await this.getProgram(programName);
        const ProgramClass = Vue.extend(programComponent);

        const programObject = new ProgramClass({
          parent: windowObject,
          propsData: { id: v4(), ...defaultProps },
          i18n: this.$i18n
        });

        const width = programObject.widthDefault === 0 ? this.$widthScreenContent : programObject.widthDefault;
        const height = programObject.heightDefault === 0 ? this.$heightScreenContent : programObject.heightDefault;
        const x = programObject.xDefault === 0 ? 0 : programObject.xDefault;
        const y = programObject.yDefault === 0 ? 0 : programObject.yDefault;

        const WindowClass = Vue.extend(windowComponent);

        windowObject = new WindowClass({
          parent: this,
          propsData: {
            title: programObject.title,
            width,
            height,
            x,
            y
          },
          methods: {
            openProgram: (programName, defaultProps = {}) => this.onOpenProgram(programName, defaultProps)
          },
          i18n: this.$i18n
        });

        this.mountWindowProgram(windowObject, programObject);
      });
    },
    mountWindowProgram(windowObject, programObject) {
      programObject.window = windowObject;
      programObject.$mount();

      windowObject.program = programObject;
      windowObject.$mount();

      windowObject.appendWindowNode(programObject.$el);

      this.$refs.screenContent.appendChild(windowObject.$el);

      this.$programs.push(programObject);

      // eslint-disable-next-line camelcase
      this.$gtag?.event('open_program', { event_category: 'program', event_label: programObject.title });
    },
    async getWindow() {
      return (await import('@components/Window.vue')).default;
    },
    async getProgram(program) {
      return (await import(`@programs/${program}.vue`)).default;
    }
  }
};
</script>

<style lang="scss" scoped>
.screen {
  width: 100%;
  height: 100%;
  position: relative;
  background-size: clamp(100px, calc(100vw - 60%), 400px);
  background-position: center;
  background-repeat: no-repeat;

  &.theme-1 {
    background-color: rgb(149, 190, 195);
    background-image: url("~@svg/xiao-theme-2.svg");
  }

  &.theme-2 {
    background-color: rgb(33, 37, 41);
    background-image: url("~@svg/xiao-theme-1.svg");
  }

  >.screen-content {
    height: calc(100% - 3rem);
    position: relative;
    padding: 5px;
    display: grid;
    grid-auto-columns: 130px;
    grid-template-rows: repeat(auto-fit, 110px);
    grid-auto-flow: column;

    >.program {
      user-select: none;
      width: 100%;

      >.program-inner {
        width: 100%;
        background-color: transparent;
        border: none;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        &:hover,
        .program.selected & {
          background-color: #ffffff48;
        }

        >img {
          width: 50px;
          height: 50px;
        }

        >span {
          text-align: center;
          text-shadow: 1px 1px 4px #000;
          font-size: 0.9em;
          line-height: 1.2em;
          cursor: pointer;
          word-break: break-word;
        }
      }
    }
  }

  >.toasts {
    position: fixed;
    bottom: 56px;
    right: 5px;
    z-index: 9999;
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;

    &>.toast {
      animation: slide-left 1s ease-in-out;
      position: relative;
      max-width: 300px;
      width: auto;
      max-width: 300px;
    }
  }
}
</style>
