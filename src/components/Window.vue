<template>
  <section
    ref="window"
    v-resize="onWindowResize"
    @click="onSelectedProgram"
    :style="cssRootVars"
    class="window resizers border border-2 border-dark bg-light"
    role="presentation"
    aria-label="Window"
  >
    <div
      ref="windowTitleBar"
      @click="onClickWindowTitleBar"
      class="window-title-bar bg-primary text-light d-flex justify-content-between align-items-center border-bottom border-2 border-dark user-select-none"
      role="presentation"
      aria-label="Title bar"
    >
      <img
        :src="program.iconSrc"
        :alt="`Icono ${program.title}`"
        class="program-icon"
        draggable="false"
      >
      <h1 class="m-auto ms-2 text-truncate">
        {{ title }}
      </h1>
      <div
        ref="windowTitleBarActions"
        class="h-100 d-flex align-items-center"
      >
        <button
          class="title-bar-item"
          data-action="minimize"
          type="button"
          title="Minimize window"
          aria-label="Minimize window"
        >
          <i class="fa-solid fa-minus fa-fw" />
        </button>
        <button
          :title="`${isMaximized ? 'Minimize window size' : 'Maximize window size'}`"
          :aria-label="`${isMaximized ? 'Minimize window size' : 'Maximize window size'}`"
          class="title-bar-item"
          data-action="toggleMaximized"
          type="button"
        >
          <i :class="`fa-solid ${isMaximized ? 'fa-compress' : 'fa-expand'}`" />
        </button>
        <button
          class="title-bar-item"
          data-action="close"
          type="button"
          title="Close window"
          aria-label="Close window"
        >
          <i class="fa-solid fa-xmark fa-fw" />
        </button>
      </div>
    </div>
    <div
      ref="windowContent"
      @scroll="onScroll"
      class="window-content bg-light overflow-hidden"
    />
    <span class="resizer top-left" />
    <span class="resizer top" />
    <span class="resizer top-right" />
    <span class="resizer right" />
    <span class="resizer bottom-right" />
    <span class="resizer bottom" />
    <span class="resizer bottom-left" />
    <span class="resizer left" />
  </section>
</template>

<script>
export default {
  name: 'Window',
  props: {
    title: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
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
        this.$refs.window.classList.remove('resizers');

        this.sizePrev = { ...this.size };
        this.size = { width: this.$widthScreenContent, height: this.$heightScreenContent };

        this.positionPrev = { ...this.position };
        this.position = { x: 0, y: 0 };
      } else {
        this.$refs.window.classList.add('resizers');

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
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.isMaximized = this.program.maximizedDefault;

      this.initDrag();
      this.initResize();

      this.bringFront();
    },
    onSelectedProgram() {
      this.bringFront();
    },
    onClickWindowTitleBar(evt) {
      evt.stopPropagation();

      const action = evt.target?.dataset.action ?? evt.currentTarget?.dataset.action ?? evt.target?.parentElement?.dataset.action;

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

      const action = evt.target?.dataset.action ?? evt.currentTarget?.dataset.action ?? evt.target?.parentElement?.dataset.action;

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

      const action = evt.target?.dataset.action ?? evt.currentTarget?.dataset.action ?? evt.target?.parentElement?.dataset.action;

      if (!action) this.toggleMaximized();
    },
    initDrag() {
      const element = this.$refs.windowTitleBar;
      const self = this;

      element.addEventListener('mousedown', onStartDrag);
      element.addEventListener('touchstart', onStartDrag, { passive: true });

      function onStartDrag(evt) {
        if (self.isResizing) return;

        evt.stopPropagation();

        const action = evt.target?.dataset.action ?? evt.currentTarget?.dataset.action ?? evt.target?.parentElement?.dataset.action;

        if (!action) {
          self.pos3 = evt.touches ? evt.touches[0].clientX : evt.clientX;
          self.pos4 = evt.touches ? evt.touches[0].clientY : evt.clientY;

          self.positionIniDrag = { x: self.pos3, y: self.pos4 };

          self.$refs.window.parentElement.addEventListener('mouseup', onEndDrag);
          self.$refs.window.parentElement.addEventListener('mouseleave', onEndDrag);
          self.$refs.window.parentElement.addEventListener('mousemove', onDragging);

          self.$refs.window.parentElement.addEventListener('touchcancel', onEndDrag, { passive: true });
          self.$refs.window.parentElement.addEventListener('touchend', onEndDrag, { passive: true });
          self.$refs.window.parentElement.addEventListener('touchleave', onEndDrag, { passive: true });
          self.$refs.window.parentElement.addEventListener('touchmove', onDragging, { passive: true });

          self.bringFront();
        }
      }

      function onDragging(evt) {
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

      function onEndDrag(evt) {
        evt.stopPropagation();

        self.$refs.window.classList.remove('no-transition');

        self.$refs.window.parentElement.removeEventListener('mouseup', onEndDrag);
        self.$refs.window.parentElement.removeEventListener('mouseleave', onEndDrag);
        self.$refs.window.parentElement.removeEventListener('mousemove', onDragging);

        self.$refs.window.parentElement.removeEventListener('touchcancel', onEndDrag, { passive: true });
        self.$refs.window.parentElement.removeEventListener('touchend', onEndDrag, { passive: true });
        self.$refs.window.parentElement.removeEventListener('touchleave', onEndDrag, { passive: true });
        self.$refs.window.parentElement.removeEventListener('touchmove', onDragging, { passive: true });

        self.isDragging = false;
      }
    },
    initResize() {
      const element = this.$refs.window;
      const self = this;

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

        resizer.addEventListener('touchstart', onStartResize, { passive: true });
        resizer.addEventListener('mousedown', onStartResize);

        function onStartResize(evt) {
          if (self.isMaximized) return;

          originalWidth = parseFloat(getComputedStyle(element, null).getPropertyValue('max-width').replace('px', ''));
          originalHeight = parseFloat(getComputedStyle(element, null).getPropertyValue('max-height').replace('px', ''));

          originalX = self.position.x;
          originalY = self.position.y;

          originalMouseX = evt.touches ? evt.touches[0].pageX : evt.pageX;
          originalMouseY = evt.touches ? evt.touches[0].pageY : evt.pageY;

          window.addEventListener('touchmove', onResizing, { passive: true });
          window.addEventListener('touchcancel', onEndResize, { passive: true });
          window.addEventListener('touchleave', onEndResize, { passive: true });
          window.addEventListener('touchend', onEndResize, { passive: true });

          window.addEventListener('mousemove', onResizing);
          window.addEventListener('mouseup', onEndResize);
        }

        function onResizing(evt) {
          self.bringFront();

          self.$refs.window.classList.add('no-transition');

          const pageX = evt.touches ? evt.touches[0].pageX : evt.pageX;
          const pageY = evt.touches ? evt.touches[0].pageY : evt.pageY;

          let width = 0;
          let height = 0;

          if (resizer.classList.contains('top-left')) {
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
          } else if (resizer.classList.contains('top')) {
            height = originalHeight - (pageY - originalMouseY);

            if (height > minimumSize) {
              self.size.height = height;
              self.position.y = originalY + (pageY - originalMouseY);
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
          } else if (resizer.classList.contains('right')) {
            width = originalWidth + (pageX - originalMouseX);

            if (width > minimumSize) {
              self.size.width = width;
            }
          } else if (resizer.classList.contains('bottom-right')) {
            width = originalWidth + (pageX - originalMouseX);
            height = originalHeight + (pageY - originalMouseY);

            if (width > minimumSize) {
              self.size.width = width;
            }

            if (height > minimumSize) {
              self.size.height = height;
            }
          } else if (resizer.classList.contains('bottom')) {
            height = originalHeight + (pageY - originalMouseY);

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
          } else if (resizer.classList.contains('left')) {
            width = originalWidth - (pageX - originalMouseX);

            if (width > minimumSize) {
              self.size.width = width;
              self.position.x = originalX + (pageX - originalMouseX);
            }
          }

          self.isResizing = true;
        }

        function onEndResize() {
          self.$refs.window.classList.remove('no-transition');

          window.removeEventListener('touchmove', onResizing, { passive: true });
          window.removeEventListener('touchcancel', onEndResize, { passive: true });
          window.removeEventListener('touchleave', onEndResize, { passive: true });
          window.removeEventListener('touchend', onEndResize, { passive: true });

          window.removeEventListener('mousemove', onResizing);
          window.removeEventListener('mouseup', onEndResize);

          self.isResizing = false;
        }
      }
    },
    bringFront() {
      this.onBringFront();

      this.$programs.forEach((program) => program.window.$el.classList.remove('active'));

      this.$el.classList.add('active');
      this.$el.classList.remove('minimize');

      this.$currentProgramActive = this.program;
    },
    bringFrontLastProgram() {
      const programsReverse = [...this.$programs].reverse();

      const lastProgram = programsReverse.find((program) => !program.window.$el.classList.contains('minimize'));

      if (lastProgram) {
        lastProgram.window.bringFront();
      } else {
        this.$currentProgramActive = null;
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
    onWindowResize() {
      if (this.program && typeof this.program.onWindowResize === 'function') this.program.onWindowResize();
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
    removeActive() {
      this.$el.classList.remove('active');

      this.$currentProgramActive = null;
    },
    minimize() {
      this.onMinimize();

      this.$el.classList.add('minimize');
      this.$el.classList.remove('active');

      this.bringFrontLastProgram();
    },
    close() {
      this.$el.classList.add('closing');

      this.$el.addEventListener('animationend', this.onAnimationClosingEnd, { once: true });
      
      this.$programs = this.$programs.filter((program) => program.id !== this.program.id);
      
      this.bringFrontLastProgram();
    },
    appendWindowNode(node) {
      this.$refs.windowContent.appendChild(node);
    },
    onAnimationClosingEnd() {
      this.program.$destroy();

      this.$destroy();

      this.$el.remove();

      this.$el.removeEventListener('animationend', this.onAnimationClosingEnd);
    }
  }
};
</script>

<style lang="css" scoped>
h1 {
  font-size: 1rem;
}

.window {
  width: 100%;
  height: 100%;
  position: absolute;
  left: var(--x);
  top: var(--y);
  display: flex;
  flex-direction: column;
  max-width: var(--width);
  min-width: 170px;
  max-height: var(--height);
  min-height: var(--minHeight);
  cursor: default;
  transition:
    max-width 0.2s,
    max-height 0.2s,
    left 0.2s 0.2s,
    top 0.2s 0.2s;
  z-index: 1;
  animation: zoom-out-only-transform 0.3s ease;

  &.minimize {
    top: var(--maxHeight);
    transition: top 0.2s;
    transform: scale(0);
    animation: zoom-in-only-transform 0.3s ease;
  }

  &.closing {
    transform: scale(0);
    animation: zoom-in-only-transform 0.3s ease;
  }

  &.active {
    z-index: 2;
  }

  &.minimized-transition,
  &.maximized-transition {
    transition:
      max-width 0.2s,
      max-height 0.2s,
      left 0.2s,
      top 0.2s;
  }

  & > .window-title-bar {
    width: 100%;
    z-index: 3;
    height: var(--heightTileBar);

    .title-bar-item,
    .title-bar-item:active {
      width: 50px;
      height: 100%;
      background-color: transparent;
      border: none;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: default;
        background-color: #106379;
      }

      &:nth-child(3):hover {
        background-color: red;
      }

      i {
        font-size: 0.9rem;
      }
    }

    .program-icon {
      width: 30px;
      height: 30px;
      padding: 2px;
    }
  }

  & > .window-content {
    flex: 1;
  }

  &.resizers {
    > .resizer {
      position: absolute;
      user-select: none;

      &.top-left {
        left: -8px;
        top: -8px;
        width: 8px;
        height: 8px;
        cursor: nwse-resize;
      }

      &.top {
        top: -8px;
        left: 8px;
        right: 8px;
        height: 8px;
        cursor: ns-resize;
      }

      &.top-right {
        right: -8px;
        top: -8px;
        width: 8px;
        height: 8px;
        cursor: nesw-resize;
      }

      &.right {
        top: 8px;
        bottom: 8px;
        right: -8px;
        width: 8px;
        cursor: ew-resize;
      }

      &.bottom-right {
        right: -8px;
        bottom: -8px;
        width: 8px;
        height: 8px;
        cursor: nwse-resize;
      }

      &.bottom {
        bottom: -8px;
        left: 8px;
        right: 8px;
        height: 8px;
        cursor: ns-resize;
      }

      &.bottom-left {
        left: -8px;
        bottom: -8px;
        width: 8px;
        height: 8px;
        cursor: nesw-resize;
      }

      &.left {
        top: 8px;
        bottom: 8px;
        left: -8px;
        width: 8px;
        cursor: ew-resize;
      }
    }
  }
}
</style>
