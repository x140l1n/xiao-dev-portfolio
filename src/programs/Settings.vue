<template>
  <section class="w-100 h-100">
    <div
      ref="content"
      class="h-100 d-flex align-items-start overflow-auto"
    >
      <div
        ref="nav"
        class="nav justify-content-stretch flex-nowrap flex-column nav-pills me-3 shadow text-truncate bg-light overflow-y-auto"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          @click="onChangeTab"
          :id="`v-pills-general-tab-${id}`"
          :data-bs-target="`#v-pills-general-${id}`"
          :aria-controls="`v-pills-general-${id}`"
          class="nav-link active rounded-0"
          data-bs-toggle="pill"
          type="button"
          title="General"
          role="tab"
          aria-selected="true"
        >
          <img
            class="icon"
            src="@assets/icons/monitor.png"
            alt="General"
            draggable="false"
          >
          <span>General</span>
        </button>
        <button
          @click="onChangeTab"
          :id="`v-pills-themes-tab-${id}`"
          :data-bs-target="`#v-pills-themes-${id}`"
          :aria-controls="`v-pills-themes-${id}`"
          class="nav-link rounded-0"
          data-bs-toggle="pill"
          type="button"
          title="Themes"
          role="tab"
          aria-selected="false"
        >
          <img
            class="icon"
            src="@assets/icons/theme.png"
            alt="Themes"
            draggable="false"
          >
          <span>Themes</span>
        </button>
        <button
          @click="onChangeTab"
          :id="`v-pills-about-tab-${id}`"
          :data-bs-target="`#v-pills-about-${id}`"
          :aria-controls="`v-pills-about-${id}`"
          class="nav-link rounded-0"
          data-bs-toggle="pill"
          type="button"
          title="About"
          role="tab"
          aria-selected="false"
        >
          <img
            class="icon"
            src="@assets/icons/info.png"
            alt="About"
            draggable="false"
          >
          <span>About</span>
        </button>
      </div>
      <div
        ref="tabContent"
        class="tab-content flex-fill"
      >
        <div
          :id="`v-pills-general-${id}`"
          :aria-labelledby="`v-pills-general-tab-${id}`"
          class="tab-pane p-3 fade show active"
          role="tabpanel"
        >
          <h4>General</h4>
          <article class="card">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center gap-2">
                <div class="d-flex flex-column gap-2">
                  <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
                  <label
                    :for="`switch-fullscreen-${id}`"
                    class="fw-bold"
                  >Enable fullscreen mode</label>
                  <small
                    class="fst-italic text-danger"
                  ><strong>Note:</strong>
                    If you enable it in browser options, this feature may not work correctly.
                  </small>
                </div>
                <div class="form-check form-switch">
                  <input
                    v-model="$isFullscreen"
                    :id="`switch-fullscreen-${id}`"
                    :true-value="true"
                    :false-value="false"
                    :title="`${!$isFullscreen ? 'Fullscreen mode' : 'Normal screen mode'}`"
                    :aria-checked="$isFullscreen"
                    class="form-check-input"
                    type="checkbox"
                    draggable="false"
                  >
                </div>
              </div>
            </div>
          </article>
        </div>
        <div
          :id="`v-pills-themes-${id}`"
          :aria-labelledby="`v-pills-themes-tab-${id}`"
          class="tab-pane p-3 fade"
          role="tabpanel"
        >
          <h4>Themes</h4>
          <article class="card">
            <div class="card-body">
              <h5 class="card-title">
                Choose theme
              </h5>
              <div class="d-flex flex-wrap mt-5">
                <div class="theme-selector theme-1 p-3 my-2">
                  <div class="form-check fw-bold text-light">
                    <input
                      v-model="$themeSelected"
                      :id="`rdb-theme-2-${id}`"
                      :name="`selector-theme-${id}`"
                      class="form-check-input"
                      type="radio"
                      value="theme-2"
                      draggable="false"
                    >
                    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
                    <label
                      :for="`rdb-theme-2-${id}`"
                      class="form-check-label"
                    >Dark blue theme</label>
                  </div>
                </div>
                <div class="theme-selector theme-2 p-3 my-2">
                  <div class="form-check fw-bold text-dark">
                    <input
                      v-model="$themeSelected"
                      :id="`rdb-theme-1-${id}`"
                      :name="`selector-theme-${id}`"
                      class="form-check-input"
                      type="radio"
                      value="theme-1"
                      draggable="false"
                    >
                    <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
                    <label
                      :for="`rdb-theme-1-${id}`"
                      class="form-check-label"
                    >Light purple theme</label>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div
          :id="`v-pills-about-${id}`"
          :aria-labelledby="`v-pills-about-tab-${id}`"
          class="tab-pane p-3 fade"
          role="tabpanel"
        >
          <h4>About</h4>
          <article class="card">
            <div class="card-body">
              <h5 class="card-title">
                System Specifications
              </h5>
              <table
                ref="tableSpecs"
                class="table table-borderless mt-4"
              >
                <tr>
                  <td class="fw-bold label">
                    Edition
                  </td>
                  <td>XiaoDev OS</td>
                </tr>
                <tr>
                  <td class="fw-bold label">
                    Version
                  </td>
                  <td>{{ getVersion }}</td>
                </tr>
                <tr>
                  <td class="fw-bold label">
                    Build date
                  </td>
                  <td>{{ getDateVersion }}</td>
                </tr>
                <tr>
                  <td class="fw-bold label">
                    Created by
                  </td>
                  <td>Xiaolin Jin Lin</td>
                </tr>
                <tr>
                  <td class="fw-bold label">
                    Github
                  </td>
                  <td>
                    <a
                      class="p-0"
                      href="https://github.com/x140l1n/portfolio"
                      target="_blank"
                    >https://github.com/x140l1n/portfolio</a>
                  </td>
                </tr>
                <tr>
                  <td class="fw-bold label pe-4">
                    Developed with
                  </td>
                  <td>
                    <div class="d-inline-block text-center">
                      <img
                        src="@assets/icons/vue.png"
                        title="Vue 2"
                        alt="Vue 2"
                        draggable="false"
                      >
                      <figcaption>Vue 2</figcaption>
                    </div>
                    <div class="d-inline-block text-center">
                      <img
                        src="@assets/icons/bootstrap.png"
                        title="Bootstrap 5"
                        alt="Bootstrap 5"
                        width="85"
                        draggable="false"
                      >
                      <figcaption>Bootstrap 5</figcaption>
                    </div>
                    <div class="d-inline-block text-center">
                      <img
                        src="@assets/icons/sass.png"
                        title="Sass"
                        alt="Sass"
                        draggable="false"
                      >
                      <figcaption>Sass</figcaption>
                    </div>
                    <div class="d-inline-block text-center">
                      <img
                        src="@assets/icons/php.png"
                        title="PHP"
                        alt="PHP"
                        draggable="false"
                      >
                      <figcaption>PHP</figcaption>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconSettings from '@assets/icons/settings.png';
import { date, version } from '@root/package';

@Component({
  name: 'Settings',
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
        this.$refs.tableSpecs.classList.add('table-small');
      } else {
        this.$refs.nav.classList.remove('nav-small');
        this.$refs.tabContent.classList.remove('tab-content-small');
        this.$refs.tableSpecs.classList.remove('table-small');
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
    this.title = 'Settings';
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

.table.table-small td {
  display: block;

  &:first-child {
    margin-top: 10px;
  }

  &.label {
    width: 100%;
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
        &:not(:checked) {
          background-image: var(--bs-form-switch-focus-bg) !important;
        }

        &:checked {
          background-image: var(--bs-form-switch-focus-bg-checked) !important;
        }
      }

      &:checked {
        background-color: rgb(var(--bs-primary-rgb));
      }
    }
  }

  .form-check:not(.form-switch) {
    > .form-check-input {
      box-shadow: 0 0 0 0.25rem rgb(var(--bs-primary-rgb), 0.25);
      border-color: rgb(var(--bs-primary-light-rgb));

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
