<template>
  <div class="w-100 h-100">
      <iframe src="https://x140l1n.github.io/portfolio/" width="100%" height="100%">
      </iframe>
  </div>
</template>

<script>
import Program from "./Program";
import Component from "vue-class-component";
import icon_browser from "../assets/icons/browser.png";
import Vue from "vue";

@Component({
  props: {
    id: {
      type: String,
      required: true,
    },
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

    },
    onResize() {

    },
  },
  computed: {

  }
})

export default class Browser extends Program {
  //Initialize the variables of superclass Program.
  created() {
    this.title = "Navegador";
    this.width_default = 600;
    this.height_default = 400;
    this.maximized_default = true;
    this.x_default = Vue.prototype.$widthScreenContent / 2 - this.width_default / 2;
    this.y_default = Vue.prototype.$heightScreenContent / 2 - this.height_default / 2;
    this.icon_src = icon_browser;
    this.window = null;
  }
}
</script>

<style scoped>

</style>