<template>
  <div class="program-content">
    <div class="d-flex align-items-start h-100 fs-6">
      <div ref="nav" class="nav justify-content-stretch flex-nowrap flex-column nav-pills me-3 shadow h-100 text-trucante" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button class="nav-link active rounded-0 language" title="Idioma" :id="`v-pills-general-tab-${id}`" data-bs-toggle="pill" :data-bs-target="`#v-pills-general-${id}`" type="button" role="tab" :aria-controls="`v-pills-general-${id}`" aria-selected="true">
          <span>Idioma</span>
        </button>
        <button class="nav-link rounded-0 theme" title="Temas" :id="`v-pills-personalization-tab-${id}`" data-bs-toggle="pill" :data-bs-target="`#v-pills-personalization-${id}`" type="button" role="tab" :aria-controls="`v-pills-personalization-${id}`" aria-selected="false">
          <span>Temas</span>
        </button>
        <button class="nav-link rounded-0 about" title="Acerca de" :id="`v-pills-about-tab-${id}`" data-bs-toggle="pill" :data-bs-target="`#v-pills-about-${id}`" type="button" role="tab" :aria-controls="`v-pills-about-${id}`" aria-selected="false">
          <span>Acerca de</span>
        </button>
      </div>
      <div class="tab-content w-100">
        <div class="tab-pane p-3 fade show active" :id="`v-pills-general-${id}`" role="tabpanel" :aria-labelledby="`v-pills-general-tab-${id}`">
          <h4>Idioma</h4>
        </div>
        <div class="tab-pane p-3 fade" :id="`v-pills-personalization-${id}`" role="tabpanel" :aria-labelledby="`v-pills-personalization-tab-${id}`">
          <h4>Temas</h4>
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
  methods: {
    onResize() {
      if (this.$el.clientWidth < 400) {
        this.$refs.nav.classList.add("nav-small");
      } else {
        this.$refs.nav.classList.remove("nav-small");
      }
    },
  }
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
.nav {
  width: 100%;
  max-width: 200px;
}

.program-content {
  width: 100%;
  height: 100%;
}

.nav-link:not(.active):hover {
  background-color: #13738e4b;
}

.nav-link {
  min-height: 50px;
  image-rendering: -webkit-optimize-contrast;
}

.nav.nav-small {
  max-width: 50px;
}

.nav.nav-small > .nav-link {
  background-position: center;
  padding-left: 0;
}

.nav.nav-small > .nav-link span {
  display: none;
}

button.language {
  background-image: url("../assets/icons/language.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 30px;
  background-position-x: 10%;
  padding-left: 35px;
}

button.about {
  background-image: url("../assets/icons/info.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 30px;
  background-position-x: 10%;
  padding-left: 52px;
}

button.theme {
  background-image: url("../assets/icons/theme.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 30px;
  background-position-x: 10%;
  padding-left: 30px;
}
</style>
