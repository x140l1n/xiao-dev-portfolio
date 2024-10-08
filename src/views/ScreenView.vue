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
          class="program-inner program-knowledge p-2"
          type="button"
          title="Settings"
          alt="Settings"
        >
          <img
            id="program-settings"
            src="@assets/icons/settings.png"
            alt="Settings logo"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-settings"
          >Settings</span>
        </button>
      </div>
      <div class="program p-2">
        <button
          @click="onOpenProgram('AboutMe')"
          class="program-inner p-2"
          type="button"
          title="About Me"
          alt="About Me"
        >
          <img
            id="program-about-me"
            src="@assets/icons/about-me.png"
            alt="About Me logo"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-about-me"
          >About Me</span>
        </button>
      </div>
      <div class="program p-2">
        <button
          @click="onOpenProgram('Knowledge')"
          class="program-inner program-knowledge p-2"
          type="button"
          title="Knowledge"
          alt="Knowledge"
        >
          <img
            id="program-knowledge"
            src="@assets/icons/knowledge.png"
            alt="Knowledge logo"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-knowledge"
          >Knowledge</span>
        </button>
      </div>
      <div class="program p-2">
        <button
          @click="onOpenProgram('StudiesExperiences')"
          class="program-inner program-experiences-studies p-2"
          type="button"
          title="Studies & Experiences"
          alt="Studies & Experiences"
        >
          <img
            id="program-experiences-studies"
            src="@assets/icons/experiences-studies.png"
            alt="Studies and experiences logo"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-experiences-studies"
          >Studies & Experiences</span>
        </button>
      </div>
      <div class="program p-2">
        <button
          @click="onOpenProgram('Projects')"
          class="program-inner program-projects p-2"
          type="button"
          title="Projects"
          alt="Projects"
        >
          <img
            id="program-projects"
            src="@assets/icons/projects.png"
            alt="Projects logo"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-projects"
          >Projects</span>
        </button>
      </div>
      <div class="program p-2">
        <button
          @click="onOpenProgram('ContactMe')"
          class="program-inner program-contactme p-2"
          type="button"
          title="Contact Me"
          alt="Contact Me"
        >
          <img
            id="program-contactme"
            src="@assets/icons/email.png"
            alt="Contact me logo"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-contactme"
          >Contact Me</span>
        </button>
      </div>
      <div class="program p-2">
        <button
          @click="onOpenProgram('Browser')"
          class="program-inner program-browser p-2"
          type="button"
          title="Browser"
          alt="Browser"
        >
          <img
            id="program-browser"
            src="@assets/icons/browser.png"
            alt="Browser logo"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-browser"
          >Browser</span>
        </button>
      </div>
      <div class="program p-2">
        <button
          @click="onOpenProgram('CV')"
          class="program-inner program-cv p-2"
          type="button"
          title="Curriculum Vitae"
          alt="Curriculum Vitae"
        >
          <img
            id="program-cv"
            src="@assets/icons/pdf.png"
            alt="Curriculum vitae logo"
            draggable="false"
          >
          <span
            class="text-light"
            for="program-cv"
          >Curriculum Vitae</span>
        </button>
      </div>
    </div>
    <TaskBar
      ref="taskBarView"
      draggable="false"
    />
    <div
      ref="tipFullscreen"
      v-if="!isClosedToast"
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
        <strong class="me-auto">Fullscreen mode</strong>
        <button
          @click="isClosedToast = true"
          class="btn-close"
          type="button"
          title="Close tips"
          aria-label="Close tips"
        />
      </div>
      <div class="toast-body">
        Enable fullscreen mode for a better browsing experience. To enable, go to
        <span class="fw-bold fst-italic">
          Settings > General > Enable fullscreen mode</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { v4 } from 'uuid';

export default {
  components: {
    TaskBar: () => import('@components/TaskBar.vue')
  },
  data() {
    return {
      idTimeoutOpenNextProgram: null,
      isClosedToast: false
    };
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
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$themeSelected = localStorage.getItem('theme') ?? 'theme-2';

      this.onScreenResize();
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
          propsData: { id: v4(), ...defaultProps }
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
          }
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

  >.toast {
    position: fixed;
    bottom: 56px;
    right: 5px;
    z-index: 1;
    width: auto;
    max-width: 300px;
    user-select: none;
    animation: slide-left 1s ease-in-out;
  }
}
</style>
