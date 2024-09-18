<template>
  <div ref="monitor" class="monitor">
    <div class="monitor-inner">
      <div :class="`layer-on-off ${!isFirstTime ? (isMonitorOn ? 'layer-on' : 'layer-off') : ''}`"></div>
      <div v-if="!isMonitorOn" class="presentation d-flex flex-column flex-xxl-row justify-content-center align-items-center gap-5 text-center text-xxl-start text-light overflow-auto">
        <div class="typewriter">
          <h1 ref="title" class="title fw-bold lh-lg" tabindex="1">
            ¡Bienvenido a mi portfolio! 🖥️
          </h1>
          <br />
          <div class="fs-3">
            <span ref="description" class="description" tabindex="2">Para comenzar a explorar solo tienes que hacer clic en el siguiente botón</span>
            <div :class="`${!isFinishedTyping ? 'd-none' : 'd-inline'}`">
              <span class="d-none d-xxl-block point-right">👉</span>
              <span class="d-block d-xxl-none point-down">👇</span>
            </div>
          </div>
        </div>
        <button type="button" tabindex="3" :class="`btn-on rounded-circle mt-xxl-5 mt-0 ${isFinishedTyping ? 'visible animated' : 'invisible'}`" title="Encender monitor" @click="isMonitorOn = true">
          <i class="fa-solid fa-power-off"></i>
        </button>
      </div>
      <img v-show="!isMonitorOn" src="@assets/img/greet.png" class="image-greet" alt="Saludo" title="Saludo" draggable="false" />
      <ScreenView ref="screenView" v-if="isMonitorOn" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ScreenView: () => import('@views/ScreenView.vue')
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      isMonitorOn: false,
      isFirstTime: true,
      isFinishedTyping: false
    };
  },
  methods: {
    init() {
      this.startTypeWriter();
      this.startFullscreenListener();
    },
    async startTypeWriter() {
      const title = this.$refs.title.textContent;
      this.$refs.title.textContent = '';

      const description = this.$refs.description.textContent;
      this.$refs.description.textContent = '';

      this.$refs.title.classList.add('typewriter-start');

      await this.typing({ element: this.$refs.title, originalText: title, startDelay: 1200 });

      this.$refs.title.classList.add('typewriter-finished');

      this.$refs.description.classList.add('typewriter-start');

      await this.typing({ element: this.$refs.description, originalText: description });

      this.$refs.description.classList.add('typewriter-finished');

      this.isFinishedTyping = true;
    },
    typing({ element, originalText, startDelay = 0, speed = 15, currentChar = '', currentIndex = 0 }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (currentIndex < originalText.length) {
            currentChar += originalText.charAt(currentIndex);
            element.textContent = currentChar;
            currentIndex++;

            setTimeout(() => this.typing({ element, originalText, currentChar, currentIndex, speed }).then(resolve), speed);
          } else {
            resolve();
          }
        }, startDelay);
      });
    },
    startFullscreenListener() {
      document.addEventListener('fullscreenchange', this.checkFullscreen);
      document.addEventListener('webkitfullscreenchange', this.checkFullscreen);
      document.addEventListener('mozfullscreenchange', this.checkFullscreen);
      document.addEventListener('MSFullscreenChange', this.checkFullscreen);
      window.addEventListener('resize', this.checkFullscreen);

      this.checkFullscreen();
    },
    checkFullscreen() {
      this.$nextTick(() => {
        try {
          if (document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) {
            this.$isFullscreen = true;
          } else {
            this.$isFullscreen = false;
          }
        } catch {
          this.$isFullscreen = false;
        }
      });
    }
  },
  watch: {
    $isFullscreen(value) {
      try {
        if (value) {
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.mozRequestFullscreen) {
            document.documentElement.mozRequestFullscreen();
          } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen();
          } else if (document.documentElement.msRequestFullscreen) {
            document.documentElement.msRequestFullscreen();
          }
        } else if (document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        }
        // eslint-disable-next-line
      } catch {}
    },
    isMonitorOn() {
      if (this.isFirstTime) {
        this.isFirstTime = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';

.monitor {
  width: 100dvw;
  height: 100dvh;
}

.monitor-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  display: flex;
}

.image-greet {
  position: fixed;
  top: 25%;
  bottom: auto;
  right: 0;
  width: 100%;
  max-width: 150px;
  z-index: 5;
  animation: slide-left 1s ease;
}

.layer-on-off {
  position: absolute;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100dvw;
  background-color: rgb(0, 0, 0);
  z-index: 4;
}

.layer-on {
  animation: monitor-on 0.2s forwards ease-in;
}

.layer-off {
  animation: monitor-off 0.2s forwards ease-in;
}

.presentation {
  width: 100%;
  height: 100%;
  padding: 3rem;
  font-size: 1.2rem;
  z-index: 5;
}

.typewriter > * {
  display: inline;
  overflow: hidden;
}

.typewriter .typewriter-start {
  border-right: 0.15em solid #fff;
  animation: blink-caret 0.75s steps(40) infinite;
}

.typewriter .typewriter-finished {
  border-right: none;
  animation: none;
}

.point-right {
  float: right;
  animation-name: point-right;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.point-down {
  animation-name: point-down;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

.btn-on {
  min-width: 100px;
  min-height: 100px;
  font-size: 3rem;
  border: 0;
  box-shadow: 0 0 30px rgb(210, 23, 23);
  color: rgb(210, 23, 23);
}

.btn-on.animated {
  animation: zoom-out-bounce 2s forwards;
}

.btn-on:active {
  box-shadow: inset 0px 0px 20px 1px rgba(0, 0, 0, 0.75) !important;
  outline: none;
}

@media (max-width: map-get($grid-breakpoints, 'lg')) {
  .image-greet {
    top: auto !important;
    bottom: 10%;
  }
}

@keyframes zoom-out-bounce {
  0% {
    transform: scale(0);
  }
  10% {
    transform: scale(0);
  }
  20% {
    transform: scale(0);
  }
  30% {
    transform: scale(1.1);
  }
  60% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes blink-caret {
  from {
    border-color: #fff;
  }
  to {
    border-color: transparent;
  }
}

@keyframes monitor-on {
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0);
  }
}

@keyframes monitor-off {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}

@keyframes point-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(20px);
  }
}

@keyframes point-down {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(20px);
  }
}
</style>
