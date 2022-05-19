<template>
  <div class="screen bg-dark bg-image">
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
    Window,
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      windows: [],
      mouseX: 0,
      mouseY: 0,
    };
  },
  methods: {
    init() {
      setTimeout(() => {
        this.addWindow("Window 1", 250, 150);
      }, 1000);

      setTimeout(() => {
        this.addWindow("Window 2", 250, 150, 250, 150);
      }, 2000);

      Vue.prototype.$widthScreenContent = this.$refs.screenContent.offsetWidth;
      Vue.prototype.$heightScreenContent = this.$refs.screenContent.offsetHeight;
    },
    addWindow(title, _width = 0, _height = 0, _x = 0, _y = 0) {
      const width = _width == 0 ? Vue.prototype.$widthScreenContent : _width;
      const height = _height == 0 ? Vue.prototype.$heightScreenContent : _height;

      const WindowClass = Vue.extend(Window);
      const window = new WindowClass({
        propsData: {
          id: moment().format("DDMMYYYYHHmmssS"),
          title,
          width,
          height,
          x: _x,
          y: _y,
          windows: this.windows,
        },
      });

      window.$mount();

      this.$refs.screenContent.appendChild(window.$el);

      this.windows.push(window);
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
