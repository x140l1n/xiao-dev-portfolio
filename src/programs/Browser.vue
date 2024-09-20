<template>
  <div class="w-100 h-100 d-flex flex-column">
    <div class="flex-grow-1">
      <div class="d-flex flex-column h-100">
        <div class="p-2">
          <form class="d-flex gap-2" @submit.prevent="onSearch" ref="form" target="iframe">
            <div class="flex-grow-1">
              <input class="form-control form-control-sm rounded-pill" ref="inputSearch" type="text" name="input-search" placeholder="Escribe para buscar" />
            </div>
            <button class="btn bg-primary text-light btn-sm rounded-circle border border-1" ref="btnSubmit" type="submit" title="Buscar" aria-label="Buscar">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <iframe class="flex-grow-1" :ref="`iframe-${id}`" frameborder="0" scrolling="auto"> </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconBrowser from '@assets/icons/browser.png';

@Component({
  props: {
    id: {
      type: String,
      required: true
    },
    urlDefault: {
      type: String,
      required: false,
      default: ''
    }
  },
  mounted() {
    this.init();
  },
  data() {
    return {};
  },
  methods: {
    init() {
      if (this.urlDefault) {
        this.$refs.inputSearch.value = this.urlDefault;

        setTimeout(() => this.$refs.btnSubmit.click(), 200);
      }
    },
    onSearch() {
      const inputSearch = this.$refs.inputSearch.value;
      let search = inputSearch.value;

      if (!this.isValidHttpUrl(inputSearch.value)) {
        search = `https://www.google.com/search?igu=1&ei=&q=${encodeURI(inputSearch.value)}`;
      } else {
        if (!inputSearch.value.startsWith('https://') && !inputSearch.value.startsWith('http://')) {
          search = `https://${inputSearch.value}`;
        }
      }

      this.$refs.iframe.src = search;
    },
    isValidHttpUrl(string) {
      var pattern = new RegExp(
        '^(https?:\\/\\/)?' +
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
          '((\\d{1,3}\\.){3}\\d{1,3}))' +
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
          '(\\?[;&a-z\\d%_.~+=-]*)?' +
          '(\\#[-a-z\\d_]*)?$',
        'i'
      );

      return pattern.test(string);
    }
  }
})
export default class Browser extends Program {
  created() {
    this.title = 'Navegador';
    this.widthDefault = 600;
    this.heightDefault = 400;
    this.maximizedDefault = true;
    this.xDefault = this.$widthScreenContent / 2 - this.widthDefault / 2;
    this.yDefault = this.$heightScreenContent / 2 - this.heightDefault / 2;
    this.iconSrc = IconBrowser;
    this.window = null;
  }
}
</script>

<style lang="scss" scoped></style>
