<template>
  <div class="screen bg-dark bg-image user-none-select" v-resize="onResize">
    <div ref="screenContent" class="screen-content"></div>
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
      mouseX: 0,
      mouseY: 0,
    };
  },
  methods: {
    async init() {
      Vue.prototype.$programs = [];

      Vue.prototype.$widthScreenContent = this.$refs.screenContent.offsetWidth;
      Vue.prototype.$heightScreenContent = this.$refs.screenContent.offsetHeight;

      this.openProgram((await import("../programs/Settings.vue")).default);
    },
    onResize() {
      Vue.prototype.$widthScreenContent = this.$refs.screenContent.offsetWidth;
      Vue.prototype.$heightScreenContent = this.$refs.screenContent.offsetHeight;

      Vue.prototype.$programs.forEach(program => program.window.updateSize());
    },
    openProgram(_program) {
      const ProgramClass = Vue.extend(_program);
      const program = new ProgramClass({
        propsData: {
          id: moment().format("DDMMYYYYHHmmssS"),
        }
      });

      program.$mount();

      this.addWindow(program);
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

      Vue.prototype.$programs.push(programObject);
    },
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
  padding-bottom: 3rem;
  height: 100%;
  position: relative;
}
</style>
