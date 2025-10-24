<template>
  <section class="w-100 h-100 d-flex flex-column">
    <div class="flex-grow-1">
      <div class="d-flex flex-column h-100">
        <div class="p-2">
          <form
            ref="form"
            @submit.prevent="onSearch"
            class="d-flex gap-2"
            target="iframe"
          >
            <div class="flex-grow-1">
              <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
              <input
                ref="inputSearch"
                :placeholder="$t ? $t('browser.placeholder') : 'Type to search'"
                class="form-control form-control-sm rounded-pill"
                name="input-search"
                type="text"
              >
            </div>
            <button
              ref="btnSubmit"
              :title="$t ? $t('browser.search') : 'Search'"
              :aria-label="$t ? $t('browser.search') : 'Search'"
              class="btn bg-primary text-light btn-sm rounded-circle border border-1"
              type="submit"
            >
              <i class="fa-solid fa-magnifying-glass" />
            </button>
          </form>
        </div>
        <iframe
          ref="iframe"
          :title="$t ? $t('browser.contentTitle') : 'Browser content'"
          class="flex-grow-1"
          frameborder="0"
          scrolling="auto"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconBrowser from '@assets/icons/browser.png';

@Component({
  name: 'Browser',
  props: {
    id: {
      type: String,
      required: true
    },
    urlDefault: {
      type: String,
      required: false,
      default: null
    }
  },
  data() {
    return {};
  },
  watch: {
    '$i18n.locale'() {
      this.title = this.$t ? this.$t('browser.title') : 'Browser';
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.urlDefault) {
        this.$refs.inputSearch.value = this.urlDefault;
      }

      setTimeout(() => this.$refs.btnSubmit.click(), 200);
    },
    onSearch() {
      let search = this.$refs.inputSearch.value;

      if (!this.isValidHttpUrl(search)) {
        search = `https://www.google.com/search?igu=1&ei=&q=${encodeURI(
          search
        )}`;
      } else {
        if (!search.startsWith('https://') && !search.startsWith('http://')) {
          search = `https://${search}`;
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
    this.title = this.$t ? this.$t('browser.title') : 'Browser';
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
