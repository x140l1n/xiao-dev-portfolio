<template>
  <div class="w-100 h-100 d-flex flex-column">
    <div ref="tabContent" class="tab-content flex-grow-1">
      <div :id="`v-tab-pane-1-${id}`" class="tab-pane show active d-flex flex-column h-100" role="tabpanel" :aria-labelledby="`v-tab-pane-1-${id}`">
        <div class="p-2">
          <form @submit.prevent="search" :ref="`form-tab-pane-1-${id}`" :target="`iframe-tab-pane-1-${id}`" class="d-flex gap-2">
            <div class="flex-grow-1">
              <input type="text" name="input-search" class="form-control form-control-sm rounded-pill" placeholder="Escribe para buscar" />
            </div>
            <button type="submit" title="Buscar" class="btn bg-primary text-light btn-sm rounded-circle border border-1" name="input-submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <iframe class="flex-grow-1" :ref="`iframe-tab-pane-1-${id}`" frameborder="0" scrolling="auto"> </iframe>
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
      this.$refs[`form-tab-pane-1-${this.id}`].elements['input-search'].value = this.urlDefault;

      setTimeout(() => this.$refs[`form-tab-pane-1-${this.id}`].elements['input-submit'].click(), 200);
    },
    onResize() {},
    search(evt) {
      const form = evt.target;
      const inputSearch = form.elements['input-search'];
      const targetIframe = form.target;
      let search = inputSearch.value;

      if (!this.isValidHttpUrl(inputSearch.value)) {
        search = `https://www.google.com/search?igu=1&ei=&q=${encodeURI(inputSearch.value)}`;
      } else {
        if (!inputSearch.value.startsWith('https://') && !inputSearch.value.startsWith('http://')) {
          search = `https://${inputSearch.value}`;
        }
      }

      this.$refs[targetIframe].src = search;

      this.$refs[targetIframe].onload = (evt) => {
        this.$refs[`title-${targetIframe}`].innerText = (evt.currentTarget.contentDocument || evt.currentTarget.contentWindow.document).title;
      };
    },
    isValidHttpUrl(string) {
      var pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$',
        'i'
      ); // fragment locator

      return pattern.test(string);
    }
  },
  computed: {}
})
export default class Browser extends Program {
  //Initialize the variables of superclass Program.
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

<style lang="css" scoped>
.nav-link {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  cursor: default;
  max-width: 200px;
  font-size: 0.8rem;
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
