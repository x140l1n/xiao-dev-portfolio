<template>
  <div class="w-100 h-100">
    <div class="h-100 d-flex align-items-start overflow-auto">
      <div
        ref="nav"
        id="v-pills-tab"
        class="nav justify-content-stretch flex-nowrap flex-column nav-pills me-3 shadow text-trucante bg-light overflow-y-auto"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          :id="`v-pills-general-tab-${id}`"
          type="button"
          class="nav-link active rounded-0 general"
          title="General"
          data-bs-toggle="pill"
          :data-bs-target="`#v-pills-general-${id}`"
          role="tab"
          :aria-controls="`v-pills-general-${id}`"
          aria-selected="true"
        >
          <img src="@assets/icons/monitor.png" class="icon" alt="General" draggable="false" />
          <span>General</span>
        </button>
        <button
          :id="`v-pills-personalization-tab-${id}`"
          type="button"
          class="nav-link rounded-0 theme"
          title="Temas"
          data-bs-toggle="pill"
          :data-bs-target="`#v-pills-personalization-${id}`"
          role="tab"
          :aria-controls="`v-pills-personalization-${id}`"
          aria-selected="false"
        >
          <img src="@assets/icons/theme.png" class="icon" alt="Temas" draggable="false" />
          <span>Temas</span>
        </button>
        <button
          :id="`v-pills-about-tab-${id}`"
          type="button"
          class="nav-link rounded-0 about"
          title="Acerca de"
          data-bs-toggle="pill"
          :data-bs-target="`#v-pills-about-${id}`"
          role="tab"
          :aria-controls="`v-pills-about-${id}`"
          aria-selected="false"
        >
          <img src="@assets/icons/info.png" class="icon" alt="Acerca de" draggable="false" />
          <span>Acerca de</span>
        </button>
      </div>
      <div ref="tabContent" class="tab-content flex-fill">
        <div :id="`v-pills-general-${id}`" class="tab-pane p-3 fade show active" role="tabpanel" :aria-labelledby="`v-pills-general-tab-${id}`">
          <h4>General</h4>
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <label class="fw-bold" :for="`switch-fullscreen-${id}`">Habilitar modo pantalla completa</label>
                <div class="form-check form-switch">
                  <input :id="`switch-fullscreen-${id}`" class="form-check-input" type="checkbox" :true-value="true" :false-value="false" v-model="$isFullscreen" draggable="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :id="`v-pills-personalization-${id}`" class="tab-pane p-3 fade" role="tabpanel" :aria-labelledby="`v-pills-personalization-tab-${id}`">
          <h4>Temas</h4>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Escoger tema</h5>
              <div class="d-flex flex-wrap mt-5">
                <div class="theme-selector theme-1 p-3 my-2">
                  <div class="form-check fw-bold text-light">
                    <input :id="`rdb-theme-2-${id}`" class="form-check-input" type="radio" :name="`selector-theme-${id}`" v-model="$themeSelected" value="theme-2" draggable="false" />
                    <label class="form-check-label" :for="`rdb-theme-2-${id}`">
                      Tema azul oscuro
                    </label>
                  </div>
                </div>
                <div class="theme-selector theme-2 p-3 my-2">
                  <div class="form-check fw-bold text-dark">
                    <input :id="`rdb-theme-1-${id}`" class="form-check-input" type="radio" :name="`selector-theme-${id}`" v-model="$themeSelected" value="theme-1" draggable="false" />
                    <label class="form-check-label" :for="`rdb-theme-1-${id}`">
                      Tema morado
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div :id="`v-pills-about-${id}`" class="tab-pane p-3 fade" role="tabpanel" :aria-labelledby="`v-pills-about-tab-${id}`">
          <h4>Acerca de</h4>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Especificaciones del sistema</h5>
              <table class="table table-borderless mt-4">
                <tr>
                  <td class="fw-bold label">Edición</td>
                  <td>XiaoDev OS</td>
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
                    <a href="https://github.com/x140l1n/portfolio" target="_blank" class="p-0">https://github.com/x140l1n/portfolio</a>
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
                      <img src="@assets/icons/vue.png" alt="Vue" title="Vue" draggable="false" />
                      <figcaption>Vue 2</figcaption>
                    </div>
                    <div class="d-inline-block text-center">
                      <img src="@assets/icons/bootstrap.png" width="85" alt="Bootstrap" title="Bootstrap" draggable="false" />
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
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconSettings from '@assets/icons/settings.png';
import { date, version } from '@root/package';

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
    onResize() {
      if (this.$el.clientWidth < 600) {
        this.$refs.nav.classList.add('nav-small');
        this.$refs.tabContent.classList.add('tab-content-small');
      } else {
        this.$refs.nav.classList.remove('nav-small');
        this.$refs.tabContent.classList.remove('tab-content-small');
      }
    }
  },
  computed: {
    getVersion() {
      return version;
    },
    getDateVersion() {
      return date;
    }
  }
})
export default class Settings extends Program {
  //Initialize the variables of superclass Program.
  created() {
    this.title = 'Ajustes';
    this.widthDefault = 550;
    this.heightDefault = 400;
    this.maximizedDefault = true;
    this.xDefault = this.$widthScreenContent / 2 - this.widthDefault / 2;
    this.yDefault = this.$heightScreenContent / 2 - this.heightDefault / 2;
    this.iconSrc = IconSettings;
    this.window = null;
  }
}
</script>

<style lang="css" scoped>
.theme-selector {
  width: 300px;
  height: 200px;
  margin: auto;
}

.theme-selector.theme-1 {
  background-image: url('../assets/img/theme-1.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.theme-selector.theme-2 {
  background-image: url('../assets/img/theme-2.png');
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

.nav-link {
  min-height: 50px;
  display: flex;
  gap: 10px;
  align-items: center;
}

.nav > .nav-link .icon {
  width: 40px;
  height: 40px;
}

.nav.nav-small {
  min-width: 50px;
  max-width: 50px;
}

.nav.nav-small > .nav-link {
  padding: 0;
  justify-content: center;
}

.nav.nav-small > .nav-link .icon {
  width: 30px;
  height: 30px;
}

.nav.nav-small > .nav-link span {
  display: none;
}
</style>
