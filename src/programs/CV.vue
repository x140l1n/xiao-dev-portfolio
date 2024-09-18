<template>
  <div class="w-100 h-100 overflow-hidden">
    <iframe :src="$env.URL_CV" width="100%" height="100%" />
  </div>
</template>

<script>
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
    return {
      isMinimized: false
    };
  },
  methods: {
    init() {},
    onMinimize() {
      this.isMinimized = true;
    },
    onBringFront() {
      this.isMinimized = false;
    }
  },
  computed: {}
})
export default class Knowledge extends Program {
  //Initialize the variables of superclass Program.
  created() {
    this.title = 'Currículum Vitae';
    this.widthDefault = 400;
    this.heightDefault = 600;
    this.maximizedDefault = true;
    this.xDefault = this.$widthScreenContent / 2 - this.widthDefault / 2;
    this.yDefault = this.$heightScreenContent / 2 - this.heightDefault / 2;
    this.iconSrc = IconPdf;
    this.window = null;
  }
}
</script>

<style lang="css" scoped></style>
