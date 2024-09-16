<template>
  <div ref="screen" class="screen bg-image user-none-select" v-resize="onResize">
    <div ref="screenContent" :class="['screen-content', someProgramMaximized ? '' : 'overflow-auto']" @click.self="cleanSelectProgram">
      <div class="program p-2">
        <button type="button" class="program-inner program-knowledge p-2" title="Ajustes" alt="Ajustes" @click="openProgram('Settings')" tabindex="4">
          <img id="program-settings" src="@assets/icons/settings.png" alt="Logo ajustes" />
          <label class="text-light" for="program-settings">Ajustes</label>
        </button>
      </div>
      <div class="program p-2">
        <button type="button" class="program-inner p-2" title="Sobre mi" alt="Sobre mi" @click="openProgram('AboutMe')" tabindex="5">
          <img id="program-about-me" src="@assets/icons/about-me.png" alt="Logo sobre mi" />
          <label class="text-light" for="program-about-me">Sobre mi</label>
        </button>
      </div>
      <div class="program p-2">
        <button type="button" class="program-inner program-knowledge p-2" title="Mis conocimientos" alt="Mis conocimientos" @click="openProgram('Knowledge')" tabindex="6">
          <img id="program-knowledge" src="@assets/icons/knowledge.png" alt="Logo mis conocimientos" />
          <label class="text-light" for="program-knowledge">Mis conocimientos</label>
        </button>
      </div>
      <div class="program p-2">
        <button
          type="button"
          class="program-inner program-experiences-studies p-2"
          title="Estudios y experiencias"
          alt="Estudios y experiencias"
          @click="openProgram('StudiesExperiences')"
          tabindex="7"
        >
          <img id="program-experiences-studies" src="@assets/icons/experiences-studies.png" alt="Logo estudios y experiencias" />
          <label class="text-light" for="program-experiences-studies">Estudios y experiencias</label>
        </button>
      </div>
      <div class="program p-2">
        <button type="button" class="program-inner program-projects p-2" title="Mis proyectos" alt="Mis proyectos" @click="openProgram('Projects')" tabindex="8">
          <img id="program-projects" src="@assets/icons/projects.png" alt="Logo Mis proyectos" />
          <label class="text-light" for="program-projects">Mis proyectos</label>
        </button>
      </div>
      <div class="program p-2">
        <button type="button" class="program-inner program-contactme p-2" title="Contáctame" alt="Contáctame" @click="openProgram('ContactMe')" tabindex="9">
          <img id="program-contactme" src="@assets/icons/email.png" alt="Logo contáctame" />
          <label class="text-light" for="program-contactme">Contáctame</label>
        </button>
      </div>
      <div class="program p-2">
        <button type="button" class="program-inner program-browser p-2" title="Mis proyectos" alt="Mis proyectos" @click="openProgram('Browser')" tabindex="10">
          <img id="program-browser" src="@assets/icons/browser.png" alt="Logo Navegador" />
          <label class="text-light" for="program-browser">Navegador</label>
        </button>
      </div>
      <div class="program p-2">
        <button type="button" class="program-inner program-cv p-2" title="Currículum vitae" alt="Currículum vitae" @click="openProgram('CV')" tabindex="11">
          <img id="program-cv" src="@assets/icons/pdf.png" alt="Logo PDF" />
          <label class="text-light" for="program-cv">Currículum Vitae</label>
        </button>
      </div>
    </div>
    <div v-if="!$isFullscreen" ref="tipFullscreen" class="toast show position-absolute top-0 end-0 m-2" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <img src="@assets/icons/tips.png" class="rounded me-2" alt="Icono tips" title="Icono tips" width="30px" />
        <strong class="me-auto">Modo pantalla completa</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        Habilita la pantalla completa para tener una mejor experiencia de navegación. Para habilitar entra en
        <span class="fw-bold fst-italic"> Ajustes > General > Habilitar modo pantalla completa</span>
      </div>
    </div>
    <TaskBarView ref="taskBarView" />
  </div>
</template>

<script>
import Vue from 'vue';
import TaskBarView from '@views/TaskBarView.vue';
import Window from '@components/Window.vue';
import { v4 } from 'uuid';

export default {
  components: {
    TaskBarView
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      timoutOpenProgram: null
    };
  },
  methods: {
    init() {
      Vue.prototype.$widthScreenContent = this.$refs.screenContent.offsetWidth;
      Vue.prototype.$heightScreenContent = this.$refs.screenContent.offsetHeight;

      let themeSession = sessionStorage.getItem('theme');

      if (themeSession) {
        this.$themeSelected = themeSession;
      } else {
        this.$themeSelected = 'theme-2';
      }
    },
    cleanSelectProgram() {
      this.$refs.screenContent.querySelectorAll('.program').forEach((program) => {
        program.classList.remove('selected');
      });
    },
    selectProgram(evt) {
      this.$refs.screenContent.querySelectorAll('.program').forEach((program) => {
        program.classList.remove('selected');
      });

      if (!evt.currentTarget.classList.contains('selected')) {
        evt.currentTarget.classList.add('selected');
      }
    },
    onResize() {
      Vue.prototype.$widthScreenContent = this.$refs.screenContent.offsetWidth;
      Vue.prototype.$heightScreenContent = this.$refs.screenContent.offsetHeight;

      Vue.prototype.$programs.forEach((program) => program.window.updateSize());
    },
    openProgram(_program, default_props = {}) {
      if (!this.timoutOpenProgram) {
        this.timoutOpenProgram = setTimeout(() => {
          this.timoutOpenProgram = null;
        }, 1000);

        this.getProgram(_program).then((result) => {
          const ProgramClass = Vue.extend(result);
          const programObject = new ProgramClass({
            propsData: { id: v4(), ...default_props }
          });

          programObject.$mount();

          this.addWindow(programObject);
        });
      }
    },
    addWindow(programObject) {
      const width = programObject.width_default == 0 ? Vue.prototype.$widthScreenContent : programObject.width_default;
      const height = programObject.height_default == 0 ? Vue.prototype.$heightScreenContent : programObject.height_default;
      const x = programObject.x_default == 0 ? 0 : programObject.x_default;
      const y = programObject.y_default == 0 ? 0 : programObject.y_default;

      const self = this;

      const WindowClass = Vue.extend(Window);
      const windowObject = new WindowClass({
        propsData: {
          title: programObject.title,
          width: parseInt(width),
          height: parseInt(height),
          x: parseInt(x),
          y: parseInt(y)
        },
        methods: {
          openProgram(_program, default_props = {}) {
            self.openProgram(_program, default_props);
          }
        }
      });

      programObject.window = windowObject;
      windowObject.program = programObject;

      windowObject.$mount();

      this.$refs.screenContent.appendChild(windowObject.$el);

      windowObject.addWindowContent(programObject.$el);

      this.$programs.push(programObject);
    },
    async getProgram(program) {
      return (await import(`@programs/${program}.vue`)).default;
    }
  },
  watch: {
    $themeSelected() {
      switch (this.$themeSelected) {
        case 'theme-1':
          this.$refs.screen.classList.add('theme-1');
          this.$refs.screen.classList.remove('theme-2');

          document.documentElement.style.removeProperty('--bs-primary-rgb');
          document.documentElement.style.removeProperty('--bs-secondary-rgb');
          document.documentElement.style.setProperty('--bs-primary-rgb', '93, 69, 149');
          document.documentElement.style.setProperty('--bs-seconbndary-rgb', '19, 116, 142');
          break;

        case 'theme-2':
          this.$refs.screen.classList.add('theme-2');
          this.$refs.screen.classList.remove('theme-1');

          document.documentElement.style.removeProperty('--bs-primary-rgb');
          document.documentElement.style.removeProperty('--bs-secondary-rgb');
          document.documentElement.style.setProperty('--bs-primary-rgb', '19, 116, 142');
          document.documentElement.style.setProperty('--bs-secondary-rgb', '93, 69, 149');
          break;

        default:
          this.$themeSelected = 'theme-2';
      }

      sessionStorage.setItem('theme', this.$themeSelected);
    },
    $urlToOpen() {
      if (this.$urlToOpen) {
        this.openProgram('Browser', { url_default: this.$urlToOpen });

        this.$urlToOpen = null;
      }
    }
  },
  computed: {
    someProgramMaximized() {
      return this.$programsMaximized.length > 0;
    }
  }
};
</script>

<style lang="css" scoped>
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
  background-image: url('../svg/xiao-theme-2.svg');
}

.screen.theme-2 {
  background-color: rgb(33, 37, 41);
  background-image: url('../svg/xiao-theme-1.svg');
}

.screen-content {
  height: calc(100% - 3rem);
  position: relative;
  padding: 5px;
  display: grid;
  grid-auto-columns: 130px;
  grid-template-rows: repeat(auto-fit, 110px);
  grid-auto-flow: column;
}

.program {
  user-select: none;
  width: 100%;
}

.program > .program-inner {
  width: 100%;
  background-color: transparent;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.program > .program-inner > img {
  width: 50px;
  height: 50px;
}

.program .program-inner:hover,
.program.selected > .program-inner {
  background-color: #ffffff48;
}

.program > .program-inner > label {
  text-align: center;
  text-shadow: 1px 1px 4px black;
  font-size: 0.9em;
  line-height: 1.2em;
  cursor: pointer;
  word-break: break-word;
}

.toast {
  width: 370px;
}

@media screen and (max-width: 600px) {
  .toast {
    width: 250px;
  }
}
</style>
