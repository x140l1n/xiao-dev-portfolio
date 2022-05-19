<template>
  <div
    ref="window"
    class="window bg-light"
    :style="cssRootVars"
    @click="windowClick"
  >
    <div
      ref="windowTilebar"
      @mousedown="dragMouseDown"
      @mousemove="dragMouseMove"
      @mouseup="dragMouseUp"
      @mouseleave="dragMouseLeave"
      @mouseenter="dragMouseEnter"
      class="window-tilebar bg-primary text-light d-flex flex-row-reverse"
    >
      <span class="tilebar-item" title="Cerrar ventana" data-action="close">
        <i class="fa-solid fa-xmark fa-fw"></i>
      </span>
      <span
        class="tilebar-item"
        :title="`${
          isMaximized ? 'Minimizar tamaño ventana' : 'Maximizar tamaño ventana'
        }`"
        data-action="toggleMaximized"
      >
        <i :class="`fa-solid ${isMaximized ? 'fa-compress' : 'fa-expand'}`"></i>
      </span>
      <span
        class="tilebar-item"
        title="Minimizar ventana"
        data-action="minimized"
      >
        <i class="fa-solid fa-minus fa-fw"></i>
      </span>
      <span class="m-auto ms-2 user-select-none">{{ title }}</span>
    </div>
    <div class="window-content bg-light">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
    windows: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      position: {
        x: this.x,
        y: this.y,
      },
      size: {
        width: this.width,
        height: this.height,
      },
      positionPrev: {
        x: this.x,
        y: this.y,
      },
      sizePrev: {
        width: this.width,
        height: this.height,
      },
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
      isMaximized: false,
      isMouseDown: false,
    };
  },
  methods: {
    windowClick(evt) {
      let action = evt.target.dataset.action;

      if (evt.target.tagName == "I") {
        action = evt.target.parentElement.dataset.action;
      }

      switch (action) {
        case "close":
          this.close();
          break;
        case "toggleMaximized":
          this.toggleMaximized();
          break;
        case "minimized":
          this.minimize();
          break;
      }

      this.bringFront();
    },
    bringFront() {
      this.windows.forEach((window) => {
        if (window.id != this.id) {
          window.$el.style.zIndex = 1;
        } else {
          window.$el.style.zIndex = 2;
        }
      });
    },
    minimize() {},
    toggleMaximized() {
      if (this.isMaximized) {
        this.$refs.window.classList.add("minimized-transition");
        this.$refs.window.classList.remove("maximized-transition");
      } else {
        this.$refs.window.classList.add("maximized-transition");
        this.$refs.window.classList.remove("minimized-transition");
      }

      this.isMaximized = !this.isMaximized;
    },
    close() {
      this.$destroy();

      this.$el.parentNode.removeChild(this.$el);

      const indexWindowRemove = this.windows.findIndex((window) => {
        return window.id === this.id;
      });

      this.windows.splice(indexWindowRemove, 1);
    },
    dragMouseDown(evt) {
      if (
        !evt.target.classList.contains("tilebar-item") &&
        evt.target.tagName != "I"
      ) {
        this.pos3 = evt.clientX;
        this.pos4 = evt.clientY;
        this.isMouseDown = true;
      }

      this.bringFront();
    },
    dragMouseMove(evt) {
      if (this.isMouseDown) {
        this.isMaximized = false;

        this.pos1 = this.pos3 - evt.clientX;
        this.pos2 = this.pos4 - evt.clientY;
        this.pos3 = evt.clientX;
        this.pos4 = evt.clientY;

        this.position.x = this.position.x  - this.pos1;
        this.position.y = this.position.y  - this.pos2;
      }
    },
    dragMouseUp() {
      if (this.isMouseDown) this.isMouseDown = false;
    },
    dragMouseLeave(evt) {
      if (this.isMouseDown) this.isMouseDown = false;
    },
    dragMouseEnter() {
      if (this.isMouseDown) this.isMouseDown = false;
    }
  },
  computed: {
    cssRootVars() {
      return {
        "--width": this.size.width + "px",
        "--height": this.size.height + "px",
        "--x": this.position.x + "px",
        "--y": this.position.y + "px",
        "--heightTileBar": "32px",
      };
    },
  },
  watch: {
    isMouseDown(newValue) {
      if (newValue) {
        this.$refs.window.classList.add("no-transition");
      } else {
        this.$refs.window.classList.remove("no-transition");
      }
    },
    isMaximized(newValue) {
      if (newValue) {
        this.sizePrev = { ...this.size };
        this.positionPrev = { ...this.position };

        this.size.width = Vue.prototype.$widthScreenContent;
        this.size.height = Vue.prototype.$heightScreenContent;

        this.position.x = 0;
        this.position.y = 0;
      } else {
        this.size = { ...this.sizePrev };
        this.position = { ...this.positionPrev };
      }
    },
  },
};
</script>

<style scoped>
.window {
  position: absolute;
  width: 100%;
  height: 100%;
  left: var(--x);
  top: var(--y);
  max-width: var(--width);
  max-height: var(--height);
  min-width: 170px;
  min-height: var(--heightTileBar);
  cursor: default;
  border: 2px solid #000;
  transition: max-width 0.1s, max-height 0.1s, left 0.1s 0.1s, top 0.1s 0.1s;
}

.no-transition {
  transition: none !important;
}

.maximized-transition {
  transition: max-width 0.1s 0.1s, max-height 0.1s 0.1s, left 0.1s, top 0.1s;
}

.minimized-transition {
  transition: max-width 0.1s, max-height 0.1s, left 0.1s, top 0.1s;
}

.tilebar-item {
  width: 50px;
  display: flex;
}

.tilebar-item > i {
  font-size: 0.9rem;
  margin: auto;
}

.tilebar-item:hover {
  cursor: default;
  background-color: #106379;
}

.tilebar-item:nth-child(1):hover {
  cursor: default;
  background-color: red;
}

.window-content {
  padding-top: var(--heightTileBar);
  height: 100%;
}

.window-tilebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--heightTileBar);
}
</style>
