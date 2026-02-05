import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  watch: {
    '$i18n.locale'() {
      if (this.titleKey && this.$t) {
        this.$set(this, 'title', this.$t(this.titleKey));
      }
    }
  }
})
export default class Program extends Vue {
  title = '';
  titleKey = '';
  widthDefault = 0;
  heightDefault = 0;
  maximizedDefault = false;
  currentMaximized = false;
  xDefault = 0;
  yDefault = 0;
  iconSrc = '';
  window = null;
}
