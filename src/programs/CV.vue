<template>
  <section class="w-100 h-100 overflow-hidden">
    <iframe
      v-show="!isMinimized && isLoadedCV"
      :src="$env.CV_URL"
      @load="onLoadCV"
      title="Currículum Vitae"
      width="100%"
      height="100%"
      draggable="false"
    />
    <div
      v-if="!isLoadedCV"
      class="h-100 d-flex justify-content-center align-items-center"
    >
      <h4>Loading CV...</h4>
    </div>
  </section>
</template>

<script>
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconPdf from '@assets/icons/pdf.png';

@Component({
  name: 'CV',
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
  watch: {
    '$i18n.locale'() {
      this.title = this.$t ? this.$t('cv.title') : 'Curriculum Vitae';
    }
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
export default class CV extends Program {
  created() {
    this.title = this.$t ? this.$t('cv.title') : 'Curriculum Vitae';
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
