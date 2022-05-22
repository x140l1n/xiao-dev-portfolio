<template>
  <div class="screen bg-dark bg-image user-none-select" v-resize="onResize">
    <div ref="screenContent" class="screen-content" @click.self="cleanSelectProgram">
      <div class="program p-2" title="Ajustes" @click="selectProgram" @dblclick="openProgram('Settings')">
        <img id="program-settings" src="../assets/icons/settings.png" alt="Logo Ajustes"/>
        <label class="text-light" for="program-settings">Ajustes</label>
      </div>
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
    return {

    };
  },
  methods: {
    init() {
      Vue.prototype.$widthScreenContent = this.$refs.screenContent.offsetWidth;
      Vue.prototype.$heightScreenContent = this.$refs.screenContent.offsetHeight;

    },
    cleanSelectProgram() {
      this.$refs.screenContent.querySelectorAll(".program").forEach(program => {
        program.classList.remove("selected");
      });
    },
    selectProgram(evt) {
      this.$refs.screenContent.querySelectorAll(".program").forEach(program => {
        program.classList.remove("selected");
      });

      if (!evt.currentTarget.classList.contains("selected")) {
        evt.currentTarget.classList.add("selected");
      }
    },
    onResize() {
      Vue.prototype.$widthScreenContent = this.$refs.screenContent.offsetWidth;
      Vue.prototype.$heightScreenContent = this.$refs.screenContent.offsetHeight;

      Vue.prototype.$programs.forEach(program => program.window.updateSize());
    },
    openProgram(_program) {
      const program = this.getProgram(_program);

      program.then((result) => {
        const ProgramClass = Vue.extend(result);
        const programObject = new ProgramClass({
          propsData: {
            id: moment().format("DDMMYYYYHHmmssS"),
          }
        });

        programObject.$mount();

        this.addWindow(programObject);
      });
    },
    addWindow(programObject) {
      const width = programObject.width_default == 0 ? Vue.prototype.$widthScreenContent : programObject.width_default;
      const height = programObject.height_default == 0 ? Vue.prototype.$heightScreenContent : programObject.height_default;
      const x = programObject.x_default == 0 ? 0 : programObject.x_default;
      const y = programObject.y_default == 0 ? 0 : programObject.y_default;
    
      const WindowClass = Vue.extend(Window);
      const windowObject = new WindowClass({
        propsData: {
          title: programObject.title,
          width: parseInt(width),
          height: parseInt(height),
          x: parseInt(x),
          y: parseInt(y),
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
      switch (program) {
        case "Settings":
          program = (await import("../programs/Settings.vue")).default;
          break;
      }

      return program;
    }
  },
};
</script>

<style scoped>
.screen {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url("../svg/xiao.svg");
  background-size: 16rem;
  background-position: center;
  background-repeat: no-repeat;
}

.screen-content {
  padding: 20px 20px 4rem 20px;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
}

.program {
  border-radius: 5px;
}
.program:hover,
.program.selected {
  background-color: #ffffff48;
}

.program > * {
  display: block;
  margin: auto; 
  text-align: center;
  text-shadow: 1px 1px 2px black;
}
</style>
