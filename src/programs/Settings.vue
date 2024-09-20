<template>
  <div class="w-100 h-100">
    <div class="h-100 d-flex align-items-start overflow-auto" ref="content">
      <div class="nav justify-content-stretch flex-nowrap flex-column nav-pills me-3 shadow text-trucante bg-light overflow-y-auto" ref="nav" role="tablist" aria-orientation="vertical">
        <button
          class="nav-link active rounded-0"
          @click="onChangeTab"
          :id="`v-pills-general-tab-${id}`"
          type="button"
          title="General"
          data-bs-toggle="pill"
          :data-bs-target="`#v-pills-general-${id}`"
          role="tab"
          :aria-controls="`v-pills-general-${id}`"
          aria-selected="true"
        >
          <img class="icon" src="@assets/icons/monitor.png" alt="General" draggable="false" />
          <span>General</span>
        </button>
        <button
          class="nav-link rounded-0"
          @click="onChangeTab"
          :id="`v-pills-personalization-tab-${id}`"
          type="button"
          title="Temas"
          data-bs-toggle="pill"
          :data-bs-target="`#v-pills-personalization-${id}`"
          role="tab"
          :aria-controls="`v-pills-personalization-${id}`"
          aria-selected="false"
        >
          <img class="icon" src="@assets/icons/theme.png" alt="Temas" draggable="false" />
          <span>Temas</span>
        </button>
        <button
          class="nav-link rounded-0"
          @click="onChangeTab"
          :id="`v-pills-about-tab-${id}`"
          type="button"
          title="Acerca de"
          data-bs-toggle="pill"
          :data-bs-target="`#v-pills-about-${id}`"
          role="tab"
          :aria-controls="`v-pills-about-${id}`"
          aria-selected="false"
        >
          <img class="icon" src="@assets/icons/info.png" alt="Acerca de" draggable="false" />
          <span>Acerca de</span>
        </button>
      </div>
      <div class="tab-content flex-fill" ref="tabContent">
        <div class="tab-pane p-3 fade show active" :id="`v-pills-general-${id}`" role="tabpanel" :aria-labelledby="`v-pills-general-tab-${id}`">
          <h4>General</h4>
          <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center gap-2">
                <div class="d-flex flex-column gap-2">
                  <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
                  <label class="fw-bold" :for="`switch-fullscreen-${id}`">Habilitar modo pantalla completa</label>
                  <small class="fst-italic text-danger"
                    ><strong>Nota:</strong>
                    Si lo habilitas en el propio navegador puede que no funcione esta opción.
                  </small>
                </div>
                <div class="form-check form-switch">
                  <input
                    class="form-check-input"
                    v-model="$isFullscreen"
                    :id="`switch-fullscreen-${id}`"
                    type="checkbox"
                    :true-value="true"
                    :false-value="false"
                    draggable="false"
                    :title="`${!$isFullscreen ? 'Modo pantalla completa' : 'Modo pantalla normal'}`"
                    :aria-label="`${!$isFullscreen ? 'Modo pantalla completa' : 'Modo pantalla normal'}`"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane p-3 fade" :id="`v-pills-personalization-${id}`" role="tabpanel" :aria-labelledby="`v-pills-personalization-tab-${id}`">
          <h4>Temas</h4>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Escoger tema</h5>
              <div class="d-flex flex-wrap mt-5">
                <div class="theme-selector theme-1 p-3 my-2">
                  <div class="form-check fw-bold text-light">
                    <input
                      class="form-check-input"
                      v-model="$themeSelected"
                      :id="`rdb-theme-2-${id}`"
                      type="radio"
                      :name="`selector-theme-${id}`"
                      value="theme-2"
                      draggable="false"
                      aria-label="Tema azul oscuro"
                    />
                    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
                    <label class="form-check-label" :for="`rdb-theme-2-${id}`">Tema azul oscuro</label>
                  </div>
                </div>
                <div class="theme-selector theme-2 p-3 my-2">
                  <div class="form-check fw-bold text-dark">
                    <input
                      class="form-check-input"
                      v-model="$themeSelected"
                      :id="`rdb-theme-1-${id}`"
                      type="radio"
                      :name="`selector-theme-${id}`"
                      value="theme-1"
                      draggable="false"
                      aria-label="Tema morado claro"
                    />
                    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
                    <label class="form-check-label" :for="`rdb-theme-1-${id}`">Tema morado claro</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane p-3 fade" :id="`v-pills-about-${id}`" role="tabpanel" :aria-labelledby="`v-pills-about-tab-${id}`">
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
                    <a class="p-0" href="https://github.com/x140l1n/portfolio" target="_blank">https://github.com/x140l1n/portfolio</a>
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
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {},
    onChangeTab() {
      this.$refs.content.scrollTop = 0;
    },
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

<style lang="scss" scoped>
.theme-selector {
  width: 300px;
  height: 200px;
  margin: auto;

  &.theme-1,
  &.theme-2 {
    background-size: contain;
    background-repeat: no-repeat;
  }

  &.theme-1 {
    background-image: url('../assets/img/theme-1.png');
  }

  &.theme-2 {
    background-image: url('../assets/img/theme-2.png');
  }
}

.table td {
  display: inline-block;

  &.label {
    width: 200px;
  }
}

.tab-content {
  margin-left: 200px;

  &.tab-content-small {
    margin-left: 50px;
  }

  .form-check.form-switch {
    > .form-check-input {
      box-shadow: 0 0 0 0.25rem rgb(var(--bs-primary-rgb), 0.25);
      border-color: rgb(var(--bs-primary-light-rgb));

      &:focus {
        background-image: var(--bs-form-switch-focus-bg);
      }

      &:checked {
        background-color: rgb(var(--bs-primary-rgb));
      }
    }
  }
}

.nav {
  position: absolute;
  top: 32px;
  bottom: 0;
  width: 100%;
  min-width: 170px;
  max-width: 200px;
  z-index: 2;

  &-small {
    min-width: 50px;
    max-width: 50px;

    > .nav-link {
      padding: 0;
      justify-content: center;

      .icon {
        width: 30px;
        height: 30px;
      }

      span {
        display: none;
      }
    }
  }

  .nav-link {
    color: var(--bs-nav-link-primary-color) !important;
    min-height: 50px;
    display: flex;
    gap: 10px;
    align-items: center;

    &.active {
      background-color: rgb(var(--bs-primary-rgb)) !important;
      color: var(--bs-nav-link-active-primary-color) !important;
    }

    &:not(.active):hover {
      background-color: rgb(var(--bs-primary-light-rgb)) !important;
      color: var(--bs-nav-link-active-primary-color) !important;
    }

    .icon {
      width: 40px;
      height: 40px;
    }
  }
}
</style>
