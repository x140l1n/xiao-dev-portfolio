<template>
  <div
    ref="window"
    class="window resizers bg-light user-select-none"
    :style="cssRootVars"
    @click="windowClick"
    v-resize="onResize"
  >
    <div
      ref="windowTilebar"
      @dblclick="windowTilebarDblclick"
      class="window-tilebar bg-primary text-light d-flex flex-row-reverse border-dark border-bottom"
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
      <span class="m-auto ms-2 text-truncate">{{ title }}</span>
      <img
        :src="program.icon_src"
        class="program-icon"
        :alt="`Icono ${program.title}`"
      />
    </div>
    <div
      class="window-content bg-light overflow-auto"
      ref="windowContent"
      @scroll="onScroll"
    ></div>
    <div class="resizer top-left"></div>
    <div class="resizer top-right"></div>
    <div class="resizer bottom-left"></div>
    <div class="resizer bottom-right"></div>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  props: {
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
      program: null,
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
      isMaximized: false,
      isMouseDown: false,
      isDragging: false,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.dragElement(this.$refs.windowTilebar, this);
      this.resizeElement(this.$refs.window, this);

      if (this.program) this.isMaximized = this.program.maximized_default;

      this.bringFront();
    },
    windowTilebarDblclick(evt) {
      let action = evt.target.dataset.action;

      if (evt.target.tagName == "I") {
        action = evt.target.parentElement.dataset.action;
      }

      if (!action) this.toggleMaximized();
    },
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
          this.bringFront();
          break;
        case "minimized":
          this.minimize();
          break;
        default: this.bringFront();
      }
    },
    bringFront() {
      this.$programs.forEach((program) => {
        program.window.$el.classList.remove("active");
      });

      this.$el.classList.remove("minimize");
      this.$el.classList.add("active");

      this.$programActive = this.program;
    },
    minimize() {
      this.$el.classList.remove("active");
      this.$el.classList.add("minimize");

      this.$programActive = null;

      this.bringFrontLastProgram();
    },
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
      this.$el.classList.add("closing");

      setTimeout(() => {
        this.$destroy();
        this.program.$destroy();

        this.$el.parentNode.removeChild(this.$el);

        const indexProgramRemove = this.$programs.findIndex((program) => {
          return program.id === this.program.id;
        });

        this.$programs.splice(indexProgramRemove, 1);

        this.bringFrontLastProgram();
      }, 200);
    },
    bringFrontLastProgram() {
        let programs_reverse = [...this.$programs];

        programs_reverse = programs_reverse.reverse();

        const lastProgram = programs_reverse.find(program => !program.window.$el.classList.contains("minimize"));

        if (lastProgram) {
          lastProgram.window.bringFront();

          let _p = this.$programs.find(program => program.id == lastProgram.id);
          _p = lastProgram;
        }
    },
    updateSize() {
      if (this.isMaximized) {
        if (!this.$refs.window.classList.contains("no-transition"))
          this.$refs.window.classList.add("no-transition");

        this.size.width = Vue.prototype.$widthScreenContent;
        this.size.height = Vue.prototype.$heightScreenContent;
      }
    },
    onResize() {
      if (this.program && typeof this.program.onResize === "function") this.program.onResize();
    },
    onScroll() {
      if (this.program && typeof this.program.onScroll === "function") this.program.onScroll();
    },
    dragElement(element, me) {
      element.onmousedown = dragMouseDown;

      function dragMouseDown(evt) {
        evt = evt || window.event;

        let action = evt.target.dataset.action;

        if (evt.target.tagName == "I") {
          action = evt.target.parentElement.dataset.action;
        }

        if (!action) {
          me.pos3 = evt.clientX;
          me.pos4 = evt.clientY;

          me.$refs.window.parentElement.onmouseup = closeDragElement;
          me.$refs.window.parentElement.onmouseleave = closeDragElement;
          me.$refs.window.parentElement.onmousemove = elementDrag;

          me.bringFront();
        }
      }

      function elementDrag(evt) {
        me.isDragging = true;

        if (!me.$refs.window.classList.contains("no-transition"))
          me.$refs.window.classList.add("no-transition");

        if (me.isMaximized) me.isMaximized = false;

        evt = evt || window.event;
        evt.preventDefault();

        me.pos1 = me.pos3 - evt.clientX;
        me.pos2 = me.pos4 - evt.clientY;
        me.pos3 = evt.clientX;
        me.pos4 = evt.clientY;

        me.position.x = me.position.x - me.pos1;
        me.position.y = me.position.y - me.pos2;
      }

      function closeDragElement() {
        if (me.$refs.window) {
          me.isDragging = false;

          me.$refs.window.classList.remove("no-transition");
          me.$refs.window.parentElement.onmouseup = null;
          me.$refs.window.parentElement.onmousemove = null;
        }
      }
    },
    resizeElement(element, me) {
      const resizers = element.querySelectorAll(".resizer");

      const minimum_size = 20;

      let original_width = 0;
      let original_height = 0;
      let original_x = 0;
      let original_y = 0;
      let original_mouse_x = 0;
      let original_mouse_y = 0;

      for (let i = 0; i < resizers.length; i++) {
        const currentResizer = resizers[i];

        currentResizer.addEventListener("mousedown", function (e) {
          e.preventDefault();
          original_width = parseFloat(
            getComputedStyle(element, null)
              .getPropertyValue("max-width")
              .replace("px", "")
          );
          original_height = parseFloat(
            getComputedStyle(element, null)
              .getPropertyValue("max-height")
              .replace("px", "")
          );

          original_x = me.position.x;
          original_y = me.position.y;

          original_mouse_x = e.pageX;
          original_mouse_y = e.pageY;

          window.addEventListener("mousemove", resize);
          window.addEventListener("mouseup", stopResize);
        });

        // eslint-disable-next-line no-inner-declarations
        function resize(e) {
          me.bringFront();

          if (!me.$refs.window.classList.contains("no-transition"))
            me.$refs.window.classList.add("no-transition");

          if (currentResizer.classList.contains("bottom-right")) {
            const width = original_width + (e.pageX - original_mouse_x);
            const height = original_height + (e.pageY - original_mouse_y);
            if (width > minimum_size) {
              me.size.width = width;
            }
            if (height > minimum_size) {
              me.size.height = height;
            }
          } else if (currentResizer.classList.contains("bottom-left")) {
            const width = original_width - (e.pageX - original_mouse_x);
            const height = original_height + (e.pageY - original_mouse_y);
            if (width > minimum_size) {
              me.size.width = width;
            }
            if (height > minimum_size) {
              me.size.height = height;
              me.position.x = original_x + (e.pageX - original_mouse_x);
            }
          } else if (currentResizer.classList.contains("top-right")) {
            const width = original_width + (e.pageX - original_mouse_x);
            const height = original_height - (e.pageY - original_mouse_y);
            if (width > minimum_size) {
              me.size.width = width;
            }
            if (height > minimum_size) {
              me.size.height = height;
              me.position.y = original_y + (e.pageY - original_mouse_y);
            }
          } else {
            const width = original_width - (e.pageX - original_mouse_x);
            const height = original_height - (e.pageY - original_mouse_y);
            if (width > minimum_size) {
              me.size.width = width;
              me.position.x = original_x + (e.pageX - original_mouse_x);
            }
            if (height > minimum_size) {
              me.size.height = height;
              me.position.y = original_y + (e.pageY - original_mouse_y);
            }
          }
        }

        // eslint-disable-next-line no-inner-declarations
        function stopResize() {
          if (me.$refs.window) me.$refs.window.classList.remove("no-transition");

          window.removeEventListener("mousemove", resize);
        }
      }
    },
    addWindowContent(node) {
      this.$refs.windowContent.appendChild(node);

      /*this.$el.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          this.openProgram("Browser", { url_default: a.href });
        });
      });*/
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
        "--maxHeight": Vue.prototype.$heightScreenContent + "px"
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

        this.$refs.window.classList.remove("resizers");

        this.$refs.window.classList.add("maximize");
      } else {
        this.size = { ...this.sizePrev };

        if (!this.isDragging) this.position = { ...this.positionPrev };

        this.$refs.window.classList.add("resizers");

        this.$refs.window.classList.remove("maximize");
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
  z-index: 1;
  animation: zoomOut 0.2s;
}

.window.minimize {
  transition: top 0.5s;
  animation: zoomIn 0.5s;
  transform: scale(0);
  top: var(--maxHeight);
}

.window.closing {
  animation: zoomIn 0.2s;
  transform: scale(0);
}

@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes zoomOut {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.active {
  z-index: 2;
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

.program-icon {
  width: 32px;
  width: 32px;
  padding: 2px;
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
  z-index: 3;
  height: var(--heightTileBar);
}

.resizers .resizer {
  position: absolute;
  width: 10px;
  height: 10px;
}

.resizers .resizer.top-left {
  left: -5px;
  top: -5px;
  cursor: nwse-resize; /*resizer cursor*/
}
.resizers .resizer.top-right {
  right: -5px;
  top: -5px;
  cursor: nesw-resize;
}
.resizers .resizer.bottom-left {
  left: -5px;
  bottom: -5px;
  cursor: nesw-resize;
}
.resizers .resizer.bottom-right {
  right: -5px;
  bottom: -5px;
  cursor: nwse-resize;
}
</style>
