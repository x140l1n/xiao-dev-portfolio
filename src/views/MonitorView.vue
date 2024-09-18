<template>
  <div class="container-fluid vh-100 p-0">
    <div ref="monitor" class="monitor mx-auto">
      <div class="monitor-inner">
        <div :class="`layer-on-off ${!isFirstTime ? (isMonitorOn ? 'layer-on' : 'layer-off') : ''}`"></div>
        <div v-if="!isMonitorOn" class="text-center text-xxl-start text-light">
          <div class="presentation">
            <div class="presentation-inner row g-4 mt-4 mt-md-0">
              <div class="typewriter col-xxl-10">
                <h1 ref="title" class="title fw-bold lh-lg" tabindex="1">
                  ¡Bienvenido a mi portfolio! 🖥️
                </h1>
                <br />
                <p class="fs-3">
                  <span ref="description" class="description" tabindex="2">Para comenzar a explorar solo tienes que hacer clic en el siguiente botón</span>
                  <span v-if="isFinishedTyping" class="d-none d-xxl-block point-right">👉</span>
                  <span v-if="isFinishedTyping" class="d-block d-xxl-none point-down">👇</span>
                </p>
              </div>
              <div class="col-xxl-2 d-flex flex-column justify-content-center align-items-center">
                <button v-if="isFinishedTyping" type="button" tabindex="3" class="btn-on d-inline rounded-circle mb-2" title="Encender monitor" @click="isMonitorOn = true">
                  <i class="fa-solid fa-power-off"></i>
                </button>
              </div>
            </div>
          </div>
          <img src="@assets/img/greet.png" alt="Saludo" title="Saludo" class="image-greet" draggable="false" />
        </div>
        <ScreenView ref="screenView" v-show="isMonitorOn" />
      </div>
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

      setTimeout(() => {
        this.isFinishedTyping = true;
      }, 500);
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

<style lang="css" scoped>
.monitor {
  width: 100vw;
  height: 100vh;
}

.monitor-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
}

.image-greet {
  position: fixed;
  top: 20px;
  left: 0;
  width: 100%;
  max-width: 200px;
  z-index: 5;
  animation: slide-right-and-rotate-right 1s ease-in;
}

.layer-on-off {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
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
  position: fixed;
  padding: 3rem;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  z-index: 5;
}

.presentation-inner {
  max-width: 1200px;
  margin: auto;
}

.typewriter .title,
.typewriter .description {
  display: inline;
  overflow: hidden;
}

.typewriter .title.typewriter-start,
.typewriter .description.typewriter-start {
  border-right: 0.15em solid #fff;
  animation: blink-caret 0.75s steps(40) infinite;
}

.typewriter .title.typewriter-finished,
.typewriter .description.typewriter-finished {
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
  animation: zoom-out-bounce 2s ease-in-out;
}

.btn-on:active {
  box-shadow: inset 0px 0px 20px 1px rgba(0, 0, 0, 0.75) !important;
  outline: none;
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #fff;
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

@keyframes slide-right-and-rotate-right {
  0% {
    transform: translate(-200%, 0) rotate(-90deg);
  }
  100% {
    transform: translate(0, 0);
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
