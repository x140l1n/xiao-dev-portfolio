<template>
  <div
    ref="screen"
    class="screen bg-image user-none-select"
    v-resize="onResize"
  >
    <div
      ref="screenContent"
      class="screen-content"
      @click.self="cleanSelectProgram"
    >
      <button
        class="program program-settings p-2"
        title="Ajustes"
        alt="Ajustes"
        @click="openProgram('Settings')"
        tabindex="4"
      >
        <img
          id="program-settings"
          src="../assets/icons/settings.png"
          alt="Logo Ajustes"
        />
        <label class="text-light" for="program-settings">Ajustes</label>
      </button>
      <button
        class="program program-about-me p-2"
        title="¿Quién soy?"
        alt="¿Quién soy?"
        @click="openProgram('AboutMe')"
        tabindex="5"
      >
        <img
          id="program-about-me"
          src="../assets/icons/about-me.png"
          alt="Logo ¿Quién soy?"
        />
        <label class="text-light" for="program-about-me">¿Quién soy?</label>
      </button>
      <button
        class="program program-knowledge p-2"
        title="Mis conocimientos"
        alt="Mis conocimientos"
        @click="openProgram('Knowledge')"
        tabindex="6"
      >
        <img
          id="program-knowledge"
          src="../assets/icons/knowledge.png"
          alt="Logo Mis conocimientos"
        />
        <label class="text-light" for="program-knowledge"
          >Mis conocimientos</label
        >
      </button>
      <button
        class="program program-experiences-studies p-2"
        title="Estudios y experiencias"
        alt="Estudios y experiencias"
        @click="openProgram('ExperiencesStudies')"
        tabindex="7"
      >
        <img
          id="program-experiences-studies"
          src="../assets/icons/experiences-studies.png"
          alt="Logo Estudios y experiencias"
        />
        <label class="text-light" for="program-experiences-studies"
          >Estudios y experiencias</label
        >
      </button>
      <button
        class="program program-projects p-2"
        title="Mis proyectos"
        alt="Mis proyectos"
        @click="openProgram('Projects')"
        tabindex="8"
      >
        <img
          id="program-projects"
          src="../assets/icons/projects.png"
          alt="Logo Mis proyectos"
        />
        <label class="text-light" for="program-projects">Mis Proyectos</label>
      </button>
      <button
        class="program program-contactme p-2"
        title="Contácteme"
        alt="Contácteme"
        @click="openProgram('ContactMe')"
        tabindex="9"
      >
        <img
          id="program-contactme"
          src="../assets/icons/email.png"
          alt="Logo Contácteme"
        />
        <label class="text-light" for="program-contactme">Contácteme</label>
      </button>
      <button
        class="program program-browser p-2"
        title="Mis proyectos"
        alt="Mis proyectos"
        @click="openProgram('Browser')"
        tabindex="10"
      >
        <img
          id="program-browser"
          src="../assets/icons/browser.png"
          alt="Logo Navegador"
        />
        <label class="text-light" for="program-browser">Navegador</label>
      </button>
    </div>
    <TaskBarView ref="taskBarView" />
  </div>
</template>

<script>
import Vue from "vue";
import TaskBarView from "./TaskBarView.vue";
import Window from "../components/Window.vue";
import moment from "moment";

export default {
  components: {
    TaskBarView,
  },
  mounted() {
    this.init();
  },
  data() {
    return {};
  },
  methods: {
    init() {
      Vue.prototype.$widthScreenContent = this.$refs.screenContent.offsetWidth;
      Vue.prototype.$heightScreenContent =
        this.$refs.screenContent.offsetHeight;

      let themeSession = sessionStorage.getItem("theme");

      if (themeSession) {
        this.$themeSelected = themeSession;
      } else {
        this.$themeSelected = "theme-2";
      }
    },
    cleanSelectProgram() {
      this.$refs.screenContent
        .querySelectorAll(".program")
        .forEach((program) => {
          program.classList.remove("selected");
        });
    },
    selectProgram(evt) {
      this.$refs.screenContent
        .querySelectorAll(".program")
        .forEach((program) => {
          program.classList.remove("selected");
        });

      if (!evt.currentTarget.classList.contains("selected")) {
        evt.currentTarget.classList.add("selected");
      }
    },
    onResize() {
      Vue.prototype.$widthScreenContent = this.$refs.screenContent.offsetWidth;
      Vue.prototype.$heightScreenContent =
        this.$refs.screenContent.offsetHeight;

      Vue.prototype.$programs.forEach((program) => program.window.updateSize());
    },
    openProgram(_program, default_props = {}) {
      const program = this.getProgram(_program);

      let propsData = {
        id: moment().format("DDMMYYYYHHmmssS"),
      };

      program.then((result) => {
        const ProgramClass = Vue.extend(result);
        const programObject = new ProgramClass({
          propsData: { ...propsData, ...default_props },
        });

        programObject.$mount();

        this.addWindow(programObject);
      });
    },
    addWindow(programObject) {
      const width =
        programObject.width_default == 0
          ? Vue.prototype.$widthScreenContent
          : programObject.width_default;
      const height =
        programObject.height_default == 0
          ? Vue.prototype.$heightScreenContent
          : programObject.height_default;
      const x = programObject.x_default == 0 ? 0 : programObject.x_default;
      const y = programObject.y_default == 0 ? 0 : programObject.y_default;

      let me = this;

      const WindowClass = Vue.extend(Window);
      const windowObject = new WindowClass({
        propsData: {
          title: programObject.title,
          width: parseInt(width),
          height: parseInt(height),
          x: parseInt(x),
          y: parseInt(y),
        },
        methods: {
          openProgram(_program, default_props = {}) {
            me.openProgram(_program, default_props);
          },
        },
      });

      programObject.window = windowObject;
      windowObject.program = programObject;

      windowObject.$mount();

      this.$refs.screenContent.appendChild(windowObject.$el);

      windowObject.addWindowContent(programObject.$el);

      this.$programs.push(programObject);
    },
    async getProgram(program) {
      return (await import(`../programs/${program}.vue`)).default;
    },
  },
  watch: {
    $themeSelected() {
      switch (this.$themeSelected) {
        case "theme-1":
          this.$refs.screen.classList.add("theme-1");
          this.$refs.screen.classList.remove("theme-2");
          document.documentElement.style.removeProperty("--bs-primary-rgb");
          document.documentElement.style.removeProperty("--bs-secondary-rgb");
          document.documentElement.style.setProperty(
            "--bs-primary-rgb",
            "93, 69, 149"
          );
          document.documentElement.style.setProperty(
            "--bs-secondary-rgb",
            "19, 116, 142"
          );
          break;

        case "theme-2":
          this.$refs.screen.classList.add("theme-2");
          this.$refs.screen.classList.remove("theme-1");
          document.documentElement.style.removeProperty("--bs-primary-rgb");
          document.documentElement.style.removeProperty("--bs-secondary-rgb");
          document.documentElement.style.setProperty(
            "--bs-primary-rgb",
            "19, 116, 142"
          );
          document.documentElement.style.setProperty(
            "--bs-secondary-rgb",
            "93, 69, 149"
          );
          break;

        default:
          this.$themeSelected = "theme-2";
      }

      sessionStorage.setItem("theme", this.$themeSelected);
    },
    $urlToOpen() {
      if (this.$urlToOpen) {
        this.openProgram("Browser", { url_default: this.$urlToOpen });
        this.$urlToOpen = "";
      }
    },
  },
};
</script>

<style scoped>
.screen.theme-1 {
  width: 100%;
  height: 100%;
  position: relative;
  background-size: 16rem;
  background-position: center;
  background-repeat: no-repeat;
}

.screen {
  width: 100%;
  height: 100%;
  position: relative;
  background-size: 16rem;
  background-position: center;
  background-repeat: no-repeat;
}

.screen.theme-1 {
  background-color: rgb(149, 190, 195);
  background-image: url("../svg/xiao-theme-2.svg");
}
.screen.theme-2 {
  background-color: rgb(33, 37, 41);
  background-image: url("../svg/xiao-theme-1.svg");
}

.screen-content {
  height: calc(100% - 3rem);
  position: relative;
  display: grid;
  padding: 5px;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-template-areas:
    "settings . . . . . . . . . . ."
    "about-me . . . . . . . . . . ."
    "knowledge . . . . . . . . . . ."
    "experiences-studies . . . . . . . . . . ."
    "projects . . . . . . . . . . ."
    "contactme . . . . . . . . . . ."
    "browser . . . . . . . . . . .";
}
.program {
  border-radius: 5px;
  width: 100%;
  background-color: transparent;
  border: none;
}
.program-settings {
  grid-area: settings;
}
.program-about-me {
  grid-area: about-me;
}
.program-browser {
  grid-area: browser;
}
.program-knowledge {
  grid-area: knowledge;
}
.program-experiences-studies {
  grid-area: experiences-studies;
}
.program-projects {
  grid-area: projects;
}
.program-contactme {
  grid-area: contactme;
}
.program:hover,
.program.selected {
  background-color: #ffffff48;
}

.program > * {
  display: block;
  margin: auto;
}

.program > label {
  text-align: center;
  text-shadow: 1px 1px 4px black;
  font-size: 0.9em;
}
</style>
