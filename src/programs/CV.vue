<template>
    <div class="w-100 h-100 overflow-hidden">
        <!--display pdf from @assets/documents/cv.pdf-->
        <embed src="/cv.pdf" type="application/pdf" width="100%" height="100%">
    </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconPdf from '@assets/icons/pdf.png';

@Component({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.init();
  },
  data() {
    return {};
  },
  methods: {
    init() {},
    onResize() {}
  },
  computed: {}
})
export default class Knowledge extends Program {
  //Initialize the variables of superclass Program.
  created() {
    this.title = 'Currículum Vitae';
    this.width_default = 400;
    this.height_default = 600;
    this.maximized_default = true;
    this.x_default = Vue.prototype.$widthScreenContent / 2 - this.width_default / 2;
    this.y_default = Vue.prototype.$heightScreenContent / 2 - this.height_default / 2;
    this.icon_src = IconPdf;
    this.window = null;
  }
}
</script>

<style lang='css' scoped></style>