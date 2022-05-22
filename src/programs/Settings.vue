<template>
  <div class="program-content">
    <div class="d-flex align-items-start h-100 fs-6">
      <div class="nav justify-content-stretch flex-nowrap flex-column nav-pills me-3 shadow h-100" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active rounded-0" :id="`v-pills-general-tab-${id}`" data-bs-toggle="pill" :data-bs-target="`#v-pills-general-${id}`" type="button" role="tab" :aria-controls="`v-pills-general-${id}`" aria-selected="true">
          General
        </button>
        <button class="nav-link rounded-0" :id="`v-pills-personalization-tab-${id}`" data-bs-toggle="pill" :data-bs-target="`#v-pills-personalization-${id}`" type="button" role="tab" :aria-controls="`v-pills-personalization-${id}`" aria-selected="false">
          Personalización
        </button>
        <button class="nav-link rounded-0" :id="`v-pills-about-tab-${id}`" data-bs-toggle="pill" :data-bs-target="`#v-pills-about-${id}`" type="button" role="tab" :aria-controls="`v-pills-about-${id}`" aria-selected="false">
          Acerca de
        </button>
      </div>
      <div class="tab-content w-100">
        <div class="tab-pane p-3 fade show active" :id="`v-pills-general-${id}`" role="tabpanel" :aria-labelledby="`v-pills-general-tab-${id}`">
          <h4>General</h4>
        </div>
        <div class="tab-pane p-3 fade" :id="`v-pills-personalization-${id}`" role="tabpanel" :aria-labelledby="`v-pills-personalization-tab-${id}`">
          <h4>Personalización</h4>
        </div>
        <div class="tab-pane p-3 fade" :id="`v-pills-about-${id}`" role="tabpanel" :aria-labelledby="`v-pills-about-tab-${id}`">
          <h4>Acerca de</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Program from "./Program";
import Component from "vue-class-component";
import icon_settings from "../assets/icons/settings.png";
import Vue from "vue";

@Component({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
    };
  },
})

export default class Settings extends Program {
  //Initialize the variables of superclass Program.
  created() {
    this.title = "Ajustes";
    this.width_default = 550;
    this.height_default = 400;
    this.x_default =
      Vue.prototype.$widthScreenContent / 2 - this.width_default / 2;
    this.y_default =
      Vue.prototype.$heightScreenContent / 2 - this.height_default / 2;
    this.icon_src = icon_settings;
    this.window = null;
  }
}
</script>

<style scoped>
.program-content {
  width: 100%;
  height: 100%;
}
</style>
