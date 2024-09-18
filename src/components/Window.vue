<template>
  <div ref="window" class="window resizers border border-2 border-dark bg-light" :style="cssRootVars" v-resize="onResize">
    <div
      ref="windowTitleBar"
      @click="onClickWindowTitleBar"
      class="window-tilebar bg-primary text-light d-flex justify-content-between align-items-center border-bottom border-2 border-dark user-select-none"
    >
      <img :src="program.iconSrc" class="program-icon" :alt="`Icono ${program.title}`" draggable="false" />
      <span class="m-auto ms-2 text-truncate">{{ title }}</span>
      <div ref="windowTitleBarActions" class="h-100 d-flex align-items-center">
        <button type="button" class="tilebar-item" title="Minimizar ventana" data-action="minimize">
          <i class="fa-solid fa-minus fa-fw"></i>
        </button>
        <button type="button" class="tilebar-item" :title="`${isMaximized ? 'Minimizar tamaño ventana' : 'Maximizar tamaño ventana'}`" data-action="toggleMaximized">
          <i :class="`fa-solid ${isMaximized ? 'fa-compress' : 'fa-expand'}`"></i>
        </button>
        <button type="button" class="tilebar-item" title="Cerrar ventana" data-action="close">
          <i class="fa-solid fa-xmark fa-fw"></i>
        </button>
      </div>
    </div>
    <div class="window-content bg-light overflow-hidden" ref="windowContent" @scroll="onScroll"></div>
    <span class="resizer top"></span>
    <span class="resizer top-left"></span>
    <span class="resizer top-right"></span>
    <span class="resizer bottom-left"></span>
    <span class="resizer bottom-right"></span>
  </div>
</template>

<script>
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
      lastTap: 0,
      tapTimeout: null,
      position: {
        x: this.x,
        y: this.y
      },
      size: {
        width: this.width,
        height: this.height
      },
      positionIniDrag: {
        x: this.x,
        y: this.y
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
      isResizing: false,
      isDragging: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.isMaximized = this.program.maximizedDefault;

      this.bringFront();

      this.initDrag(this.$refs.windowTitleBar, this);
      this.initResize(this.$refs.window, this);
    },
    onClickWindowTitleBar(evt) {
      evt.stopPropagation();

      const action = evt.target?.dataset.action || evt.currentTarget?.dataset.action || evt.target?.parentElement?.dataset.action;

      if (action) {
        this.handleClickTitleBar(evt);

        return;
      }

      const currentTime = this.$moment().valueOf();
      const tapLength = currentTime - this.lastTap;

      clearTimeout(this.tapTimeout);

      if (tapLength < 300 && tapLength > 0) {
        this.handleDoubleClickTitleBar(evt);
      }

      this.lastTap = currentTime;
    },
    handleClickTitleBar(evt) {
      evt.stopPropagation();

      this.$refs.window.classList.remove('no-transition');

      const action = evt.target?.dataset.action || evt.currentTarget?.dataset.action || evt.target?.parentElement?.dataset.action;

      switch (action) {
        case 'close':
          this.close();
          break;
        case 'toggleMaximized':
          this.toggleMaximized();
          break;
        case 'minimize':
          this.minimize();
          break;
        default:
          this.bringFront();
      }
    },
    handleDoubleClickTitleBar(evt) {
      evt.stopPropagation();

      this.$refs.window.classList.remove('no-transition');

      const action = evt.target?.dataset.action || evt.currentTarget?.dataset.action || evt.target?.parentElement?.dataset.action;

      if (!action) this.toggleMaximized();
    },
    initDrag(element, self) {
      element.addEventListener('mousedown', startDrag);
      element.addEventListener('touchstart', startDrag, { passive: true });

      function startDrag(evt) {
        if (self.isResizing) return;

        evt.stopPropagation();

        const action = evt.target?.dataset.action || evt.currentTarget?.dataset.action || evt.target?.parentElement?.dataset.action;

        if (!action) {
          self.pos3 = evt.touches ? evt.touches[0].clientX : evt.clientX;
          self.pos4 = evt.touches ? evt.touches[0].clientY : evt.clientY;

          self.positionIniDrag = { x: self.pos3, y: self.pos4 };

          self.$refs.window.parentElement.addEventListener('mouseup', endDrag);
          self.$refs.window.parentElement.addEventListener('mouseleave', endDrag);
          self.$refs.window.parentElement.addEventListener('mousemove', onDrag);

          self.$refs.window.parentElement.addEventListener('touchcancel', endDrag, { passive: true });
          self.$refs.window.parentElement.addEventListener('touchend', endDrag, { passive: true });
          self.$refs.window.parentElement.addEventListener('touchleave', endDrag, { passive: true });
          self.$refs.window.parentElement.addEventListener('touchmove', onDrag, { passive: true });

          self.bringFront();
        }
      }

      function onDrag(evt) {
        evt.stopPropagation();

        self.$refs.window.classList.add('no-transition');

        self.pos1 = evt.touches ? self.pos3 - evt.touches[0].clientX : self.pos3 - evt.clientX;
        self.pos2 = evt.touches ? self.pos4 - evt.touches[0].clientY : self.pos4 - evt.clientY;
        self.pos3 = evt.touches ? evt.touches[0].clientX : evt.clientX;
        self.pos4 = evt.touches ? evt.touches[0].clientY : evt.clientY;

        self.position.x = self.position.x - self.pos1;
        self.position.y = self.position.y - self.pos2;

        self.isMaximized = false;
        self.isDragging = true;
      }

      function endDrag(evt) {
        evt.stopPropagation();

        self.$refs.window.classList.remove('no-transition');

        self.$refs.window.parentElement.removeEventListener('mouseup', endDrag);
        self.$refs.window.parentElement.removeEventListener('mouseleave', endDrag);
        self.$refs.window.parentElement.removeEventListener('mousemove', onDrag);

        self.$refs.window.parentElement.removeEventListener('touchcancel', endDrag, { passive: true });
        self.$refs.window.parentElement.removeEventListener('touchend', endDrag, { passive: true });
        self.$refs.window.parentElement.removeEventListener('touchleave', endDrag, { passive: true });
        self.$refs.window.parentElement.removeEventListener('touchmove', onDrag, { passive: true });

        self.isDragging = false;
      }
    },
    initResize(element, self) {
      const resizers = element.querySelectorAll('.resizer');

      const minimumSize = 20;

      let originalWidth = 0;
      let originalHeight = 0;
      let originalX = 0;
      let originalY = 0;
      let originalMouseX = 0;
      let originalMouseY = 0;

      for (let i = 0; i < resizers.length; i++) {
        const resizer = resizers[i];

        resizer.addEventListener('touchstart', startResize, { passive: true });
        resizer.addEventListener('mousedown', startResize);

        function startResize(evt) {
          if (self.isMaximized) return;

          originalWidth = parseFloat(
            getComputedStyle(element, null)
              .getPropertyValue('max-width')
              .replace('px', '')
          );
          originalHeight = parseFloat(
            getComputedStyle(element, null)
              .getPropertyValue('max-height')
              .replace('px', '')
          );

          originalX = self.position.x;
          originalY = self.position.y;

          originalMouseX = evt.touches ? evt.touches[0].pageX : evt.pageX;
          originalMouseY = evt.touches ? evt.touches[0].pageY : evt.pageY;

          window.addEventListener('touchmove', onResize, { passive: true });
          window.addEventListener('touchcancel', endResize, { passive: true });
          window.addEventListener('touchleave', endResize, { passive: true });
          window.addEventListener('touchend', endResize, { passive: true });

          window.addEventListener('mousemove', onResize);
          window.addEventListener('mouseup', endResize);
        }

        function onResize(evt) {
          self.bringFront();

          self.$refs.window.classList.add('no-transition');

          const pageX = evt.touches ? evt.touches[0].pageX : evt.pageX;
          const pageY = evt.touches ? evt.touches[0].pageY : evt.pageY;

          let width = 0;
          let height = 0;

          if (resizer.classList.contains('bottom-right')) {
            width = originalWidth + (pageX - originalMouseX);
            height = originalHeight + (pageY - originalMouseY);

            if (width > minimumSize) {
              self.size.width = width;
            }
            if (height > minimumSize) {
              self.size.height = height;
            }
          } else if (resizer.classList.contains('bottom-left')) {
            width = originalWidth - (pageX - originalMouseX);
            height = originalHeight + (pageY - originalMouseY);

            if (width > minimumSize) {
              self.size.width = width;
            }
            if (height > minimumSize) {
              self.size.height = height;
              self.position.x = originalX + (pageX - originalMouseX);
            }
          } else if (resizer.classList.contains('top-right')) {
            width = originalWidth + (pageX - originalMouseX);
            height = originalHeight - (pageY - originalMouseY);

            if (width > minimumSize) {
              self.size.width = width;
            }
            if (height > minimumSize) {
              self.size.height = height;
              self.position.y = originalY + (pageY - originalMouseY);
            }
          } else {
            width = originalWidth - (pageX - originalMouseX);
            height = originalHeight - (pageY - originalMouseY);

            if (width > minimumSize) {
              self.size.width = width;
              self.position.x = originalX + (pageX - originalMouseX);
            }
            if (height > minimumSize) {
              self.size.height = height;
              self.position.y = originalY + (pageY - originalMouseY);
            }
          }

          self.isResizing = true;
        }

        function endResize() {
          self.$refs.window.classList.remove('no-transition');

          window.removeEventListener('touchmove', onResize, { passive: true });
          window.removeEventListener('touchcancel', endResize, { passive: true });
          window.removeEventListener('touchleave', endResize, { passive: true });
          window.removeEventListener('touchend', endResize, { passive: true });

          window.removeEventListener('mousemove', onResize);
          window.removeEventListener('mouseup', endResize);

          self.isResizing = false;
        }
      }
    },
    bringFront() {
      this.onBringFront();

      this.$programs.forEach((program) => program.window.$el.classList.remove('active'));

      this.$el.classList.remove('minimize');
      this.$el.classList.add('active');

      this.$programActive = this.program;
    },
    bringFrontLastProgram() {
      const programsReverse = [...this.$programs].reverse();

      const lastProgram = programsReverse.find((program) => !program.window.$el.classList.contains('minimize'));

      if (lastProgram) {
        lastProgram.window.bringFront();
      } else {
        this.$programActive = null;
      }
    },
    updateSizePosition() {
      this.$refs.window.classList.add('no-transition');

      if (this.isMaximized) {
        this.size.width = this.$widthScreenContent;
        this.size.height = this.$heightScreenContent;
      }

      if (this.position.x + this.size.width > this.$widthScreenContent && this.position.x > 0) {
        this.position.x = this.$widthScreenContent - this.size.width;
      } else if (this.position.x < 0) {
        this.position.x = 0;
      } else if (this.position.y + this.size.height > this.$heightScreenContent && this.position.y > 0) {
        this.position.y = this.$heightScreenContent - this.size.height;
      } else if (this.position.y < 0) {
        this.position.y = 0;
      }
    },
    onResize() {
      if (this.program && typeof this.program.onResize === 'function') this.program.onResize();
    },
    onMinimize() {
      if (this.program && typeof this.program.onMinimize === 'function') this.program.onMinimize();
    },
    onScroll() {
      if (this.program && typeof this.program.onScroll === 'function') this.program.onScroll();
    },
    onBringFront() {
      if (this.program && typeof this.program.onBringFront === 'function') this.program.onBringFront();
    },
    minimize() {
      this.onMinimize();

      this.$el.classList.remove('active');
      this.$el.classList.add('minimize');

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

      this.bringFront();
    },
    close() {
      this.$el.classList.add('closing');

      setTimeout(() => {
        this.$destroy();
        this.program.$destroy();

        this.$el.parentNode.removeChild(this.$el);
      }, 500);

      this.$programs = this.$programs.filter((program) => program.id !== this.program.id);

      this.bringFrontLastProgram();
    },
    appendWindowNode(node) {
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
        '--minHeight': '100px',
        '--maxHeight': this.$heightScreenContent + 'px'
      };
    }
  },
  watch: {
    isMaximized(value) {
      if (value) {
        this.sizePrev = { ...this.size };
        this.size = { width: this.$widthScreenContent, height: this.$heightScreenContent };

        this.positionPrev = { ...this.position };
        this.position = { x: 0, y: 0 };

        this.$refs.window.classList.remove('resizers');
      } else {
        if (!this.isDragging) {
          this.position = { ...this.positionPrev };
        } else {
          const widthDifference = this.$widthScreenContent - this.sizePrev.width;
          const isInsideWindowTitleBarActions = this.positionIniDrag.x >= this.$widthScreenContent - this.$refs.windowTitleBarActions.clientWidth;

          if (isInsideWindowTitleBarActions) {
            this.position.x = this.$widthScreenContent - this.$refs.windowTitleBarActions.clientWidth;
          } else {
            const adjustedOffsetX = this.positionIniDrag.x > this.sizePrev.width ? this.sizePrev.width : this.positionIniDrag.x;

            this.position.x = this.positionIniDrag.x - widthDifference * (adjustedOffsetX / this.$widthScreenContent);
          }

          const windowWidth = this.sizePrev.width;
          const screenWidth = this.$widthScreenContent;

          if (this.position.x + windowWidth > screenWidth) {
            this.position.x = screenWidth - windowWidth;
          }

          if (this.position.x < 0) {
            this.position.x = 0;
          }
        }

        this.size = { ...this.sizePrev };

        this.$refs.window.classList.add('resizers');
      }
    }
  }
};
</script>

<style lang="css" scoped>
.window {
  position: absolute;
  width: 100%;
  height: 100%;
  left: var(--x);
  top: var(--y);
  display: flex;
  flex-direction: column;
  max-width: var(--width);
  min-width: 170px;
  max-height: var(--height);
  min-height: var(--minHeight);
  cursor: default;
  transition: max-width 0.1s, max-height 0.1s, left 0.1s 0.1s, top 0.1s 0.1s;
  z-index: 1;
  animation: zoom-out-only-transform 0.2s;
}

.window-content {
  flex: 1;
}

.window.minimize {
  top: var(--maxHeight);
  transition: top 0.5s;
  animation: zoom-in-only-transform 0.5s;
  transform: scale(0);
}

.window.closing {
  animation: zoom-in-only-transform 0.5s;
  transform: scale(0);
}

.active {
  z-index: 2;
}

.maximized-transition {
  transition: max-width 0.1s 0.1s, max-height 0.1s 0.1s, left 0.1s, top 0.1s;
}

.minimized-transition {
  transition: max-width 0.1s, max-height 0.1s, left 0.1s, top 0.1s;
}

.window-tilebar {
  width: 100%;
  z-index: 3;
  height: var(--heightTileBar);
}

.tilebar-item,
.tilebar-item:active {
  width: 50px;
  height: 100%;
  background-color: transparent;
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tilebar-item > i {
  font-size: 0.9rem;
}

.tilebar-item:hover {
  cursor: default;
  background-color: #106379;
}

.tilebar-item:nth-child(3):hover {
  cursor: default;
  background-color: #d9534f;
}

.program-icon {
  width: 32px;
  width: 32px;
  padding: 2px;
}

.resizers .resizer {
  position: absolute;
  width: 10px;
  height: 10px;
  user-select: none;
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
