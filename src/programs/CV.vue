<template>
  <div class="w-100 h-100 overflow-hidden">
    <iframe title="Currículum Vitae" v-show="!isMinimized && isLoadedCV" :src="$env.CV_URL" @load="onLoadCV" width="100%" height="100%" draggable="false"></iframe>
    <div class="h-100 d-flex justify-content-center align-items-center" v-if="!isLoadedCV">
      <h4>Cargando currículum...</h4>
    </div>
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
  data() {
    return {
      isMinimized: false,
      isLoadedCV: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {},
    onLoadCV() {
      this.isLoadedCV = true;
    },
    onMinimize() {
      this.isMinimized = true;
    },
    onBringFront() {
      this.isMinimized = false;
    }
  }
})
export default class Knowledge extends Program {
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

<style lang="scss" scoped></style>
