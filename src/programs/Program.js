import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Program extends Vue {
  title;
  widthDefault;
  heightDefault;
  maximizedDefault;
  currentMaximized;
  xDefault;
  yDefault;
  iconSrc;
  window;
}
