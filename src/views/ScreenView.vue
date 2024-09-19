<template>
  <div class="screen user-none-select" v-resize="onScreenResize" ref="screen">
    <div class="screen-content" ref="screenContent" @click.self="onRemoveProgramActive">
      <div class="program p-2">
        <button class="program-inner program-knowledge p-2" type="button" title="Ajustes" alt="Ajustes" @click="onOpenProgram('Settings')" tabindex="4">
          <img id="program-settings" src="@assets/icons/settings.png" alt="Logo ajustes" draggable="false" />
          <label class="text-light" for="program-settings">Ajustes</label>
        </button>
      </div>
      <div class="program p-2">
        <button class="program-inner p-2" type="button" title="Sobre mi" alt="Sobre mi" @click="onOpenProgram('AboutMe')" tabindex="5">
          <img id="program-about-me" src="@assets/icons/about-me.png" alt="Logo sobre mi" draggable="false" />
          <label class="text-light" for="program-about-me">Sobre mi</label>
        </button>
      </div>
      <div class="program p-2">
        <button class="program-inner program-knowledge p-2" type="button" title="Mis conocimientos" alt="Mis conocimientos" @click="onOpenProgram('Knowledge')" tabindex="6">
          <img id="program-knowledge" src="@assets/icons/knowledge.png" alt="Logo mis conocimientos" draggable="false" />
          <label class="text-light" for="program-knowledge">Mis conocimientos</label>
        </button>
      </div>
      <div class="program p-2">
        <button
          class="program-inner program-experiences-studies p-2"
          type="button"
          title="Estudios y experiencias"
          alt="Estudios y experiencias"
          @click="onOpenProgram('StudiesExperiences')"
          tabindex="7"
        >
          <img id="program-experiences-studies" src="@assets/icons/experiences-studies.png" alt="Logo estudios y experiencias" draggable="false" />
          <label class="text-light" for="program-experiences-studies">Estudios y experiencias</label>
        </button>
      </div>
      <div class="program p-2">
        <button class="program-inner program-projects p-2" type="button" title="Mis proyectos" alt="Mis proyectos" @click="onOpenProgram('Projects')" tabindex="8">
          <img id="program-projects" src="@assets/icons/projects.png" alt="Logo Mis proyectos" draggable="false" />
          <label class="text-light" for="program-projects">Mis proyectos</label>
        </button>
      </div>
      <div class="program p-2">
        <button class="program-inner program-contactme p-2" type="button" title="Contáctame" alt="Contáctame" @click="onOpenProgram('ContactMe')" tabindex="9">
          <img id="program-contactme" src="@assets/icons/email.png" alt="Logo contáctame" draggable="false" />
          <label class="text-light" for="program-contactme">Contáctame</label>
        </button>
      </div>
      <div class="program p-2">
        <button class="program-inner program-browser p-2" type="button" title="Mis proyectos" alt="Mis proyectos" @click="onOpenProgram('Browser')" tabindex="10">
          <img id="program-browser" src="@assets/icons/browser.png" alt="Logo Navegador" draggable="false" />
          <label class="text-light" for="program-browser">Navegador</label>
        </button>
      </div>
      <div class="program p-2">
        <button class="program-inner program-cv p-2" type="button" title="Currículum vitae" alt="Currículum vitae" @click="onOpenProgram('CV')" tabindex="11">
          <img id="program-cv" src="@assets/icons/pdf.png" alt="Logo PDF" draggable="false" />
          <label class="text-light" for="program-cv">Currículum Vitae</label>
        </button>
      </div>
    </div>
    <TaskBarView ref="taskBarView" draggable="false" />
    <div class="toast show" v-if="!isClosedToast" ref="tipFullscreen" role="alert" draggable="false" tabindex="-1">
      <div class="toast-header">
        <img class="rounded me-2" src="@assets/icons/tips.png" alt="Icono tips" title="Icono tips" width="30px" draggable="false" />
        <strong class="me-auto">Modo pantalla completa</strong>
        <button class="btn-close" type="button" title="Cerrar tips" @click="isClosedToast = true"></button>
      </div>
      <div class="toast-body">
        Habilita la pantalla completa para tener una mejor experiencia de navegación. Para habilitar entra en
        <span class="fw-bold fst-italic"> Ajustes > General > Habilitar modo pantalla completa</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { v4 } from 'uuid';

export default {
  components: {
    TaskBarView: () => import('@views/TaskBarView.vue')
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      idTimeoutOpenNextProgram: null,
      isClosedToast: false
    };
  },
  methods: {
    init() {
      const themeSelected = sessionStorage.getItem('theme') || 'theme-2';

      this.$themeSelected = themeSelected;

      this.onScreenResize();
    },
    onRemoveProgramActive() {
      this.$currentProgramActive = null;
    },
    onScreenResize() {
      this.$widthScreenContent = this.$refs.screenContent.offsetWidth;
      this.$heightScreenContent = this.$refs.screenContent.offsetHeight;

      this.$programs.forEach((program) => program.window.updateSizePosition());
    },
    onOpenProgram(programName, defaultProps = {}) {
      if (this.idTimeoutOpenNextProgram) return;

      this.idTimeoutOpenNextProgram = setTimeout(() => (this.idTimeoutOpenNextProgram = null), 1000);

      this.getProgram(programName).then((result) => {
        const ProgramClass = Vue.extend(result);
        const programObject = new ProgramClass({
          propsData: { id: v4(), ...defaultProps }
        });

        programObject.$mount();

        this.addWindow(programObject);
      });
    },
    async addWindow(programObject) {
      const width = programObject.widthDefault == 0 ? this.$widthScreenContent : programObject.widthDefault;
      const height = programObject.heightDefault == 0 ? this.$heightScreenContent : programObject.heightDefault;
      const x = programObject.xDefault == 0 ? 0 : programObject.xDefault;
      const y = programObject.yDefault == 0 ? 0 : programObject.yDefault;

      const WindowClass = Vue.extend(await this.getWindow());

      const windowObject = new WindowClass({
        propsData: {
          title: programObject.title,
          width: parseInt(width),
          height: parseInt(height),
          x: parseInt(x),
          y: parseInt(y)
        },
        methods: {
          openProgram: (programName, defaultProps = {}) => this.onOpenProgram(programName, defaultProps)
        }
      });

      windowObject.program = programObject;
      windowObject.$mount();

      this.$refs.screenContent.appendChild(windowObject.$el);

      programObject.window = windowObject;

      windowObject.appendWindowNode(programObject.$el);

      this.$programs.push(programObject);
    },
    async getWindow() {
      return (await import('@components/Window.vue')).default;
    },
    async getProgram(program) {
      return (await import(`@programs/${program}.vue`)).default;
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

      sessionStorage.setItem('theme', this.$themeSelected);
    },
    $urlToOpen(value) {
      if (value) {
        this.onOpenProgram('Browser', { urlDefault: value });

        this.$urlToOpen = null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.screen {
  width: 100%;
  height: 100%;
  position: relative;
  background-size: clamp(100px, calc(100vw - 50%), 400px);
  background-position: center;
  background-repeat: no-repeat;
}

.screen.theme-1 {
  background-color: rgb(149, 190, 195);
  background-image: url('~@svg/xiao-theme-2.svg');
}

.screen.theme-2 {
  background-color: rgb(33, 37, 41);
  background-image: url('~@svg/xiao-theme-1.svg');
}

.screen > .screen-content {
  height: calc(100% - 3rem);
  position: relative;
  padding: 5px;
  display: grid;
  grid-auto-columns: 130px;
  grid-template-rows: repeat(auto-fit, 110px);
  grid-auto-flow: column;
}

.screen > .screen-content > .program {
  user-select: none;
  width: 100%;
}

.screen > .screen-content > .program > .program-inner {
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.screen > .screen-content > .program > .program-inner:hover,
.screen > .screen-content > .program > .program.selected > .program-inner {
  background-color: #ffffff48;
}

.screen > .screen-content > .program > .program-inner > img {
  width: 50px;
  height: 50px;
}

.screen > .screen-content > .program > .program-inner > label {
  text-align: center;
  text-shadow: 1px 1px 4px #000;
  font-size: 0.9em;
  line-height: 1.2em;
  cursor: pointer;
  word-break: break-word;
}

.screen > .toast {
  position: fixed;
  bottom: 56px;
  right: 5px;
  z-index: 1;
  width: auto;
  max-width: 300px;
  user-select: none;
  animation: slide-left 1s ease-in-out;
}
</style>
