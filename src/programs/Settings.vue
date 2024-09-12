<template>
  <div class="w-100">
    <div class="d-flex align-items-start h-100 fs-6">
      <div
        ref="nav"
        class="nav justify-content-stretch flex-nowrap flex-column nav-pills me-3 shadow text-trucante bg-light overflow-auto"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          class="nav-link active rounded-0 general"
          title="General"
          :id="`v-pills-general-tab-${id}`"
          data-bs-toggle="pill"
          :data-bs-target="`#v-pills-general-${id}`"
          type="button"
          role="tab"
          :aria-controls="`v-pills-general-${id}`"
          aria-selected="true"
        >
          <span>General</span>
        </button>
        <button
          class="nav-link rounded-0 theme"
          title="Temas"
          :id="`v-pills-personalization-tab-${id}`"
          data-bs-toggle="pill"
          :data-bs-target="`#v-pills-personalization-${id}`"
          type="button"
          role="tab"
          :aria-controls="`v-pills-personalization-${id}`"
          aria-selected="false"
        >
          <span>Temas</span>
        </button>
        <button
          class="nav-link rounded-0 about"
          title="Acerca de"
          :id="`v-pills-about-tab-${id}`"
          data-bs-toggle="pill"
          :data-bs-target="`#v-pills-about-${id}`"
          type="button"
          role="tab"
          :aria-controls="`v-pills-about-${id}`"
          aria-selected="false"
        >
          <span>Acerca de</span>
        </button>
      </div>
      <div ref="tabContent" class="tab-content w-100">
        <div
          class="tab-pane p-3 fade show active"
          :id="`v-pills-general-${id}`"
          role="tabpanel"
          :aria-labelledby="`v-pills-general-tab-${id}`"
        >
          <h4>General</h4>
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <label class="fw-bold">Habilitar modo pantalla completa</label>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :id="`switch-fullscreen-${id}`"
                    true-value="true"
                    false-value="false"
                    @click="$isFullScreenFromToggle = true"
                    v-model="$isFullScreen"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane p-3 fade"
          :id="`v-pills-personalization-${id}`"
          role="tabpanel"
          :aria-labelledby="`v-pills-personalization-tab-${id}`"
        >
          <h4>Temas</h4>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Escoger tema</h5>
              <div class="d-flex flex-wrap mt-5">
                <div class="theme-selector theme-1 p-3 my-2">
                  <div class="form-check fw-bold text-light">
                    <input
                      class="form-check-input"
                      type="radio"
                      :name="`selector-theme-${id}`"
                      v-model="$themeSelected"
                      value="theme-2"
                      :id="`rdb-theme-2-${id}`"
                    />
                    <label class="form-check-label" :for="`rdb-theme-2-${id}`">
                      Tema azul
                    </label>
                  </div>
                </div>
                <div class="theme-selector theme-2 p-3 my-2">
                  <div class="form-check fw-bold text-dark">
                    <input
                      class="form-check-input"
                      type="radio"
                      :name="`selector-theme-${id}`"
                      v-model="$themeSelected"
                      value="theme-1"
                      :id="`rdb-theme-1-${id}`"
                    />
                    <label class="form-check-label" :for="`rdb-theme-1-${id}`">
                      Tema morado
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="tab-pane p-3 fade"
          :id="`v-pills-about-${id}`"
          role="tabpanel"
          :aria-labelledby="`v-pills-about-tab-${id}`"
        >
          <h4>Acerca de</h4>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Especificaciones del sistema</h5>
              <table class="table table-borderless mt-4">
                <tr>
                  <td class="fw-bold label">Edición</td>
                  <td>XiaoOS</td>
                </tr>
                <tr>
                  <td class="fw-bold label">Versión</td>
                  <td>{{ getVersion }}</td>
                </tr>
                <tr>
                  <td class="fw-bold label">Fecha de compilación</td>
                  <td>{{ getDateVersion }}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="fw-bold label">Creado por</td>
                  <td>Xiaolin Jin Lin</td>
                </tr>
                <tr>
                  <td class="fw-bold label">Github</td>
                  <td>
                    <a
                      href="https://github.com/x140l1n/portfolio-vue"
                      target="_blank"
                      class="p-0"
                      >https://github.com/x140l1n/portfolio-vue</a
                    >
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td class="fw-bold label pe-4">Desarrollado con</td>
                  <td>
                    <div class="d-inline-block text-center">
                      <img
                        src="../assets/icons/vue.png"
                        alt="Vue"
                        title="Vue"
                      />
                      <figcaption>Vue 2</figcaption>
                    </div>
                    <div class="d-inline-block text-center">
                      <img
                        src="../assets/icons/bootstrap.png"
                        width="85"
                        alt="Bootstrap"
                        title="Bootstrap"
                      />
                      <figcaption>Bootstrap 5</figcaption>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
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
import { version, date } from "../../package";

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
    return {};
  },
  methods: {
    init() {},
    onResize() {
      if (this.$el.clientWidth < 600) {
        this.$refs.nav.classList.add("nav-small");
        this.$refs.tabContent.classList.add("tab-content-small");
      } else {
        this.$refs.nav.classList.remove("nav-small");
        this.$refs.tabContent.classList.remove("tab-content-small");
      }
    },
  },
  computed: {
    getVersion() {
      return version;
    },
    getDateVersion() {
      return date;
    },
    selectTheme(theme) {
      this.$themeSelected = theme;
    },
  },
})
export default class Settings extends Program {
  //Initialize the variables of superclass Program.
  created() {
    this.title = "Ajustes";
    this.width_default = 550;
    this.height_default = 400;
    this.maximized_default = true;
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
.theme-selector {
  width: 300px;
  height: 200px;
  margin: auto;
}
.theme-selector.theme-1 {
  background-image: url("../assets/img/theme-1.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.theme-selector.theme-2 {
  background-image: url("../assets/img/theme-2.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.table td {
  display: inline-block;
}
.table td.label {
  width: 200px;
}
.tab-content.tab-content-small {
  margin-left: 50px;
}
.tab-content {
  margin-left: 200px;
}

.nav {
  position: absolute;
  top: 32px;
  bottom: 0;
  width: 100%;
  min-width: 170px;
  max-width: 200px;
  z-index: 2;
}
.nav-link:not(.active):hover {
  background-color: #13738e4b;
}

.nav-link {
  min-height: 50px;
}

.nav.nav-small {
  min-width: 50px;
  max-width: 50px;
}

.nav.nav-small > .nav-link {
  background-position: center;
  padding-left: 0;
}

.nav.nav-small > .nav-link span {
  display: none;
}

.nav.nav-small > button {
  background-position-x: center !important;
}

button.general {
  background-image: url("../assets/icons/general.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 30px;
  background-position-x: 10% !important;
  padding-left: 35px;
}

button.about {
  background-image: url("../assets/icons/info.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 30px;
  background-position-x: 10% !important;
  padding-left: 52px;
}

button.theme {
  background-image: url("../assets/icons/theme.png");
  background-repeat: no-repeat;
  background-position: left;
  background-size: 30px;
  background-position-x: 10% !important;
  padding-left: 30px;
}
</style>
