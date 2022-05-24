<template>
  <div class="w-100 h-100 d-flex flex-column">
    <ul class="nav nav-tabs d-flex flex-nowrap d-none" @click="clickTab">
      <div ref="tabsList" class="d-flex flex-nowrap">
        <li class="nav-item">
          <a
            class="nav-link active d-flex"
            data-bs-toggle="tab"
            aria-current="page"
            href="#"
            :id="`v-tab-1-${id}`"
            :data-bs-target="`#v-tab-pane-1-${id}`"
            type="button"
            role="tab"
            :aria-controls="`v-tab-1-${id}`"
            aria-selected="true"
          >
            <span class="text-truncate" :ref="`title-iframe-tab-pane-1-${id}`"
              >Nueva pestaña</span
            >
            <span
              class="btn-close-tab ms-2"
              type="button"
              title="Eliminar esta pestaña"
              data-action="close-tab"
              ><i class="fa-solid fa-xmark fa-fw"></i
            ></span>
          </a>
        </li>
      </div>
      <li class="nav-item d-flex">
        <a
          class="add-tab ms-2 d-flex m-auto text-dark"
          title="Añadir nueva pestaña"
          aria-current="page"
          href="#"
          :id="`v-add-tab-${id}`"
          type="button"
          role="tab"
          :aria-controls="`v-add-tab-`"
        >
          <i class="fa-solid fa-plus m-auto"></i>
        </a>
      </li>
    </ul>
    <div ref="tabContent" class="tab-content flex-grow-1">
      <div
        class="tab-pane show active d-flex flex-column h-100"
        :id="`v-tab-pane-1-${id}`"
        role="tabpanel"
        :aria-labelledby="`v-tab-pane-1-${id}`"
      >
        <div class="d-flex p-2">
          <form
            @submit.prevent="search"
            :ref="`form-tab-pane-1-${id}`"
            :target="`iframe-tab-pane-1-${id}`"
            class="w-100 d-flex"
          >
            <input
              type="text"
              name="input-search"
              class="form-control rounded-pill"
              placeholder="Escribe para buscar"
            />
            <button
              class="search-button ms-2 d-flex border border-1"
              name="input-submit"
              type="submit"
            >
              <i class="fa-solid fa-magnifying-glass m-auto"></i>
            </button>
          </form>
        </div>
        <iframe class="flex-grow-1" :ref="`iframe-tab-pane-1-${id}`"> </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Program from "./Program";
import Component from "vue-class-component";
import icon_browser from "../assets/icons/browser.png";
import Vue from "vue";

@Component({
  props: {
    id: {
      type: String,
      required: true,
    },
    url_default: {
      type: String,
      required: false,
      default: "",
    },
  },
  mounted() {
    this.init();
  },
  data() {
    return {};
  },
  methods: {
    init() {
      this.$refs[`form-tab-pane-1-${this.id}`].elements["input-search"].value = this.url_default;

      setTimeout(() => this.$refs[`form-tab-pane-1-${this.id}`].elements["input-submit"].click(), 200);
    },
    onResize() {},
    clickTab() {},
    search(evt) {
      let form = evt.target;
      let inputSearch = form.elements["input-search"];
      let targetIframe = form.target;
      let search;

      if (!this.isValidHttpUrl(inputSearch.value)) {
        search = `https://www.google.com/search?igu=1&ei=&q=${encodeURI(
          inputSearch.value
        )}`;
      } else {
        if (!inputSearch.value.startsWith("https://") && !inputSearch.value.startsWith("http://")) {
          search = `https://${inputSearch.value}`;
        } else {
          search = inputSearch.value;
        }
      }

      this.$refs[targetIframe].src = search;

      this.$refs[targetIframe].onload = (evt) => {
        let iframe = evt.currentTarget;

        this.$refs[`title-${targetIframe}`].innerText = (
          iframe.contentDocument || iframe.contentWindow.document
        ).title;
      };
    },
    isValidHttpUrl(string) {
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

      return !!pattern.test(string);
    },
  },
  computed: {},
})
export default class Browser extends Program {
  //Initialize the variables of superclass Program.
  created() {
    this.title = "Navegador";
    this.width_default = 600;
    this.height_default = 400;
    this.maximized_default = true;
    this.x_default =
      Vue.prototype.$widthScreenContent / 2 - this.width_default / 2;
    this.y_default =
      Vue.prototype.$heightScreenContent / 2 - this.height_default / 2;
    this.icon_src = icon_browser;
    this.window = null;
  }
}
</script>

<style scoped>
.nav-link {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  cursor: default;
  max-width: 200px;
  font-size: 0.8rem;
}

.search-button {
  width: 50px;
  background-color: #fff;
  border-radius: 50%;
}

.add-tab {
  border-radius: 50%;
  text-decoration: none;
  width: 30px;
  height: 30px;
  background-color: rgb(var(--bs-primary-rgb), 0.5);
}

.add-tab:hover {
  background-color: rgb(var(--bs-primary-rgb), 0.2);
}

.nav-item {
  cursor: default;
}

.btn-close-tab {
  border-radius: 50%;
  cursor: default;
  width: 20px;
  height: 20px;
  margin: auto;
  display: flex;
}

.btn-close-tab i {
  margin: auto;
}

.btn-close-tab:hover {
  background-color: #ffffff48;
}
</style>
