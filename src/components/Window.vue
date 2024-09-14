<template>
    <div ref="window" class="window resizers bg-light" :style="cssRootVars" @click="windowClick" v-resize="onResize">
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
                :title="`${isMaximized ? 'Minimizar tamaño ventana' : 'Maximizar tamaño ventana'}`"
                data-action="toggleMaximized"
            >
                <i :class="`fa-solid ${isMaximized ? 'fa-compress' : 'fa-expand'}`"></i>
            </span>
            <span class="tilebar-item" title="Minimizar ventana" data-action="minimized">
                <i class="fa-solid fa-minus fa-fw"></i>
            </span>
            <span class="m-auto ms-2 text-truncate">{{ title }}</span>
            <img :src="program.icon_src" class="program-icon" :alt="`Icono ${program.title}`" />
        </div>
        <div class="window-content bg-light overflow-auto" ref="windowContent" @scroll="onScroll"></div>
        <div class="resizer top-left"></div>
        <div class="resizer top-right"></div>
        <div class="resizer bottom-left"></div>
        <div class="resizer bottom-right"></div>
    </div>
</template>

<script>
import Vue from 'vue';

export default {
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      position: {
        x: this.x,
        y: this.y
      },
      size: {
        width: this.width,
        height: this.height
      },
      positionPrev: {
        x: this.x,
        y: this.y
      },
      sizePrev: {
        width: this.width,
        height: this.height
      },
      program: null,
      pos1: 0,
      pos2: 0,
      pos3: 0,
      pos4: 0,
      isMaximized: false,
      isMouseDown: false,
      isDragging: false
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

      if (evt.target.tagName == 'I') {
        action = evt.target.parentElement.dataset.action;
      }

      if (!action) this.toggleMaximized();
    },
    windowClick(evt) {
      let action = evt.target.dataset.action;

      if (evt.target.tagName == 'I') {
        action = evt.target.parentElement.dataset.action;
      }

      switch (action) {
        case 'close':
          this.close();
          break;
        case 'toggleMaximized':
          this.toggleMaximized();
          this.bringFront();
          break;
        case 'minimized':
          this.minimize();
          break;
        default:
          this.bringFront();
      }
    },
    bringFront() {
      this.$programs.forEach((program) => {
        program.window.$el.classList.remove('active');
      });

      this.$el.classList.remove('minimize');
      this.$el.classList.add('active');

      if (this.isMaximized && !this.$programsMaximized.find((program) => program.id === this.program.id)) {
        this.$programsMaximized.push(this.program);
      }

      this.$programActive = this.program;
    },
    minimize() {
      this.$el.classList.remove('active');
      this.$el.classList.add('minimize');

      this.$programActive = null;

      setTimeout(() => {
        this.$programsMaximized = this.$programsMaximized.filter((program) => program.id !== this.program.id);
      }, 500);

      this.bringFrontLastProgram();
    },
    toggleMaximized() {
      if (this.isMaximized) {
        this.$refs.window.classList.add('minimized-transition');
        this.$refs.window.classList.remove('maximized-transition');
      } else {
        this.$refs.window.classList.add('maximized-transition');
        this.$refs.window.classList.remove('minimized-transition');
      }

      this.isMaximized = !this.isMaximized;
    },
    close() {
      this.$el.classList.add('closing');

      setTimeout(() => {
        this.$destroy();
        this.program.$destroy();

        this.$el.parentNode.removeChild(this.$el);

        this.$programs = this.$programs.filter((program) => program.id !== this.program.id);

        this.bringFrontLastProgram();
      }, 200);

      this.$programsMaximized = this.$programsMaximized.filter((program) => program.id !== this.program.id);
    },
    bringFrontLastProgram() {
      const programs_reverse = [...this.$programs].reverse();

      const lastProgram = programs_reverse.find((program) => !program.window.$el.classList.contains('minimize'));

      if (lastProgram) {
        lastProgram.window.bringFront();
      } else {
        this.$programActive = null;
      }
    },
    updateSize() {
      if (this.isMaximized) {
        if (!this.$refs.window.classList.contains('no-transition')) this.$refs.window.classList.add('no-transition');

        this.size.width = Vue.prototype.$widthScreenContent;
        this.size.height = Vue.prototype.$heightScreenContent;
      }
    },
    onResize() {
      if (this.program && typeof this.program.onResize === 'function') this.program.onResize();
    },
    onScroll() {
      if (this.program && typeof this.program.onScroll === 'function') this.program.onScroll();
    },
    dragElement(element, self) {
      element.onmousedown = dragMouseDown;
      element.ontouchstart = dragMouseDown;

      function dragMouseDown(evt) {
        evt = evt || window.event;

        let action = evt.target.dataset.action;

        if (evt.target.tagName == 'I') {
          action = evt.target.parentElement.dataset.action;
        }

        if (!action) {
          if (!evt.touches) {
            self.pos3 = evt.clientX;
            self.pos4 = evt.clientY;
          } else {
            self.pos3 = evt.touches[0].clientX;
            self.pos4 = evt.touches[0].clientY;
          }

          self.$refs.window.parentElement.onmouseup = closeDragElement;
          self.$refs.window.parentElement.onmouseleave = closeDragElement;
          self.$refs.window.parentElement.onmousemove = elementDrag;

          self.$refs.window.parentElement.ontouchcancel = closeDragElement;
          self.$refs.window.parentElement.ontouchend = closeDragElement;
          self.$refs.window.parentElement.ontouchleave = closeDragElement;
          self.$refs.window.parentElement.ontouchmove = elementDrag;

          self.bringFront();
        }
      }

      function elementDrag(evt) {
        self.isDragging = true;

        if (!self.$refs.window.classList.contains('no-transition'))
          self.$refs.window.classList.add('no-transition');

        self.isMaximized = false;

        evt = evt || window.event;
        evt.preventDefault();

        if (!evt.touches) {
          self.pos1 = self.pos3 - evt.clientX;
          self.pos2 = self.pos4 - evt.clientY;
          self.pos3 = evt.clientX;
          self.pos4 = evt.clientY;
        } else {
          self.pos1 = self.pos3 - evt.touches[0].clientX;
          self.pos2 = self.pos4 - evt.touches[0].clientY;
          self.pos3 = evt.touches[0].clientX;
          self.pos4 = evt.touches[0].clientY;
        }

        self.position.x = self.position.x - self.pos1;
        self.position.y = self.position.y - self.pos2;
      }

      function closeDragElement() {
        if (self.$refs.window) {
          self.isDragging = false;

          self.$refs.window.classList.remove('no-transition');

          self.$refs.window.parentElement.onmouseup = null;
          self.$refs.window.parentElement.onmouseleave = null;
          self.$refs.window.parentElement.onmousemove = null;

          self.$refs.window.parentElement.ontouchcancel = null;
          self.$refs.window.parentElement.ontouchend = null;
          self.$refs.window.parentElement.ontouchleave = null;
          self.$refs.window.parentElement.ontouchmove = null;
        }
      }
    },
    resizeElement(element, self) {
      const resizers = element.querySelectorAll('.resizer');

      const minimum_size = 20;

      let original_width = 0;
      let original_height = 0;
      let original_x = 0;
      let original_y = 0;
      let original_mouse_x = 0;
      let original_mouse_y = 0;

      for (let i = 0; i < resizers.length; i++) {
        const currentResizer = resizers[i];

        currentResizer.addEventListener('touchstart', resizeEvent, false);
        currentResizer.addEventListener('mousedown', resizeEvent, false);

        function resizeEvent(e) {
          e.preventDefault();
          original_width = parseFloat(
            getComputedStyle(element, null).getPropertyValue('max-width').replace('px', '')
          );
          original_height = parseFloat(
            getComputedStyle(element, null).getPropertyValue('max-height').replace('px', '')
          );

          original_x = self.position.x;
          original_y = self.position.y;

          if (!e.touches) {
            original_mouse_x = e.pageX;
            original_mouse_y = e.pageY;
          } else {
            original_mouse_x = e.touches[0].pageX;
            original_mouse_y = e.touches[0].pageY;
          }

          window.addEventListener('touchmove', resize);
          window.addEventListener('touchcancel', stopResize);
          window.addEventListener('touchleave', stopResize);
          window.addEventListener('touchend', stopResize);

          window.addEventListener('mousemove', resize);
          window.addEventListener('mouseup', stopResize);
        }

        // eslint-disable-next-line no-inner-declarations
        function resize(e) {
          self.bringFront();

          if (!self.$refs.window.classList.contains('no-transition'))
            self.$refs.window.classList.add('no-transition');

          let pageX = e.pageX;
          let pageY = e.pageY;

          if (e.touches) {
            pageX = e.touches[0].pageX;
            pageY = e.touches[0].pageY;
          }

          if (currentResizer.classList.contains('bottom-right')) {
            const width = original_width + (pageX - original_mouse_x);
            const height = original_height + (pageY - original_mouse_y);

            if (width > minimum_size) {
              self.size.width = width;
            }
            if (height > minimum_size) {
              self.size.height = height;
            }
          } else if (currentResizer.classList.contains('bottom-left')) {
            const width = original_width - (pageX - original_mouse_x);
            const height = original_height + (pageY - original_mouse_y);

            if (width > minimum_size) {
              self.size.width = width;
            }
            if (height > minimum_size) {
              self.size.height = height;
              self.position.x = original_x + (pageX - original_mouse_x);
            }
          } else if (currentResizer.classList.contains('top-right')) {
            const width = original_width + (pageX - original_mouse_x);
            const height = original_height - (pageY - original_mouse_y);

            if (width > minimum_size) {
              self.size.width = width;
            }
            if (height > minimum_size) {
              self.size.height = height;
              self.position.y = original_y + (pageY - original_mouse_y);
            }
          } else {
            const width = original_width - (pageX - original_mouse_x);
            const height = original_height - (pageY - original_mouse_y);

            if (width > minimum_size) {
              self.size.width = width;
              self.position.x = original_x + (pageX - original_mouse_x);
            }
            if (height > minimum_size) {
              self.size.height = height;
              self.position.y = original_y + (pageY - original_mouse_y);
            }
          }
        }

        // eslint-disable-next-line no-inner-declarations
        function stopResize() {
          if (self.$refs.window) self.$refs.window.classList.remove('no-transition');

          window.removeEventListener('mousemove', resize);
          window.removeEventListener('touchmove', resize);
        }
      }
    },
    addWindowContent(node) {
      this.$refs.windowContent.appendChild(node);
    }
  },
  computed: {
    cssRootVars() {
      return {
        '--width': this.size.width + 'px',
        '--height': this.size.height + 'px',
        '--x': this.position.x + 'px',
        '--y': this.position.y + 'px',
        '--heightTileBar': '32px',
        '--maxHeight': Vue.prototype.$heightScreenContent + 'px'
      };
    }
  },
  watch: {
    isMouseDown(newValue) {
      if (newValue) {
        this.$refs.window.classList.add('no-transition');
      } else {
        this.$refs.window.classList.remove('no-transition');
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

        this.$refs.window.classList.remove('resizers');

        this.$refs.window.classList.add('maximize');

        this.$programsMaximized.push(this.program);
      } else {
        this.size = { ...this.sizePrev };

        if (!this.isDragging) this.position = { ...this.positionPrev };

        this.$refs.window.classList.add('resizers');

        this.$refs.window.classList.remove('maximize');

        this.$programsMaximized = this.$programsMaximized.filter((program) => program.id !== this.program.id);
      }
    }
  }
};
</script>

<style lang='css' scoped>
.window {
    position: absolute;
    width: 100%;
    height: 100%;
    left: var(--x);
    top: var(--y);
    display: flex;
    flex-direction: column;
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
    flex: 1;
}

.window-tilebar {
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
