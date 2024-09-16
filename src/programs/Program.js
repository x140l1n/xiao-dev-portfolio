import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Program extends Vue {
  title;
  width_default;
  height_default;
  maximized_default;
  current_maximized;
  x_default;
  y_default;
  icon_src;
  window;
}
