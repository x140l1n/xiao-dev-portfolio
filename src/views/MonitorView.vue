<script>
import ScreenView from "./ScreenView.vue";

export default {
  components: {
    ScreenView,
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      isMonitorOn: false,
      isFirstTime: true,
    };
  },
  watch: {
    isMonitorOn() {
      if (this.isFirstTime) this.isFirstTime = false;
    },
    $isFullScreen() {
      if (this.$isFullScreenFromToggle) this.setFullScreen(this.$isFullScreen);

      if (this.$isFullScreen) {
        this.$refs.monitor.classList.add("fullscreen");
      } else {
        this.$refs.monitor.classList.remove("fullscreen");
      }
    },
  },
  methods: {
    init() {

    },
    setFullScreen(fullscreen) {
      let isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
          (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
          (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
          (document.msFullscreenElement && document.msFullscreenElement !== null);

      let docElm = document.documentElement;

      if (!isInFullScreen && fullscreen) {
          if (docElm.requestFullscreen) {
              docElm.requestFullscreen();
          } else if (docElm.mozRequestFullScreen) {
              docElm.mozRequestFullScreen();
          } else if (docElm.webkitRequestFullScreen) {
              docElm.webkitRequestFullScreen();
          } else if (docElm.msRequestFullscreen) {
              docElm.msRequestFullscreen();
          }
      } else {
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
    }
  },
};
</script>

<template>
  <main class="container-fluid bg-dark vh-100 d-flex p-0">
    <div ref="monitor" class="card monitor mt-3 mx-auto bg-light">
      <div :class="`card-body monitor-inner ${isMonitorOn ? '' : 'bg-dark'}`">
        <div
          :class="`layer-on-off ${
            !isFirstTime ? (isMonitorOn ? 'layer-on' : 'layer-off') : ''
          }`"
        ></div>
        <div class="wrap-introduction text-light" v-if="!isMonitorOn">
            <h2 class="fw-bold mb-4" tabindex="1">¡Bienvenido a mi portafolio! :D</h2>
            <p tabindex="2">
              Para empezar a navegar en mi portafolio
              pulse el botón <img src="../assets/icons/button-off-on.png" alt="Botón on off" title="Botón on off" class="m-2"/>
              que está situado en la esquina inferior derecha.
            </p>
        </div>
        <img src="../assets/img/greet.png" alt="Saludo" title="Saludo" class="image-greet" v-if="!isMonitorOn"/>
        <ScreenView ref="screenView" v-show="isMonitorOn"/>
      </div>
      <div
        class="card-footer border-0 bg-transparent d-flex flex-row-reverse justify-content-between"
      >
        <button
          tabindex="3"
          title="Botón on off"
          alt="Botón on off"
          :class="`rounded-circle mt-2 btn-on-off d-flex ${
            isMonitorOn ? 'btn-on' : 'btn-off'
          }`"
          @click="isMonitorOn = !isMonitorOn"
        >
          <i class="fa-solid fa-power-off fa-fw m-auto"></i>
        </button>
        
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background-image: url("../assets/img/background.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: auto;
}
.wrap-introduction {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  z-index: 5;
  text-align: justify;
  font-size: 1.2rem;
}

.image-greet {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 150px;
  z-index: 5;
}

.monitor {
  width: 100%;
  height: 100%;
  max-width: 78em;
  max-height: 52em;
  padding: 0.8em;
}
.monitor.fullscreen {
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  padding: 0 !important;
  margin: 0 !important;
  border: 0 !important;
}

.monitor-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
}

.btn-on-off {
  width: 50px;
  height: 50px;
  background-color: #000;
  z-index: 5;
}

.btn-on-off:focus {
  outline: none;
}

.btn-on,
.btn-on:active,
.btn-on:focus {
  color: rgb(23, 210, 23);
  border: 2px rgb(23, 210, 23) solid;
}

.btn-off, 
.btn-off:active,
.btn-off:focus {
  color: rgb(210, 23, 23);
  border: 2px rgb(210, 23, 23) solid;
}

.layer-on-off {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  z-index: 4;
}

.layer-on {
  animation: on forwards 0.2s ease-in;
}

.layer-off {
  animation: off forwards 0s ease-in;
}

@keyframes on {
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0);
  }
}

@keyframes off {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
