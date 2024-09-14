<script>
import ScreenView from '@views/ScreenView.vue';

export default {
  components: {
    ScreenView
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      isMonitorOn: false,
      isFirstTime: true
    };
  },
  watch: {
    isMonitorOn() {
      if (this.isFirstTime) this.isFirstTime = false;
    },
    $isFullScreen() {
      if (this.$isFullScreenFromToggle) this.setFullScreen(this.$isFullScreen);

      if (this.$isFullScreen) {
        this.$refs.monitor.classList.add('fullscreen');
      } else {
        this.$refs.monitor.classList.remove('fullscreen');
      }
    }
  },
  methods: {
    init() {},
    setFullScreen(fullscreen) {
      let isInFullScreen =
        (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement &&
          document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement &&
          document.mozFullScreenElement !== null) ||
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
  }
};
</script>

<template>
  <div class="container-fluid bg-dark vh-100 d-flex p-0">
    <div ref="monitor" class="card monitor mx-auto bg-light border-0">
      <div :class="`card-body monitor-inner ${isMonitorOn ? '' : 'bg-dark'}`">
        <div
          :class="`layer-on-off ${
            !isFirstTime ? (isMonitorOn ? 'layer-on' : 'layer-off') : ''
          }`"
        ></div>
        <div class="wrap-introduction text-light" v-if="!isMonitorOn">
          <h2 class="fw-bold mb-4" tabindex="1">
            ¡Bienvenido a mi portafolio! 🙂
          </h2>
          <p tabindex="2">
            Para comenzar a explorar, solo tienes que hacer clic en el botón
            <img
              src="../assets/icons/button-off-on.png"
              class="btn-power-desc m-2"
              title="Botón on off"
              alt="Botón on off"
            />
            que está en la justo debajo.
          </p>

          <p tabindex="3">Tómate tu tiempo para mirar todo con calma. 😉</p>
        </div>
        <img
          src="../assets/img/greet.png"
          alt="Saludo"
          title="Saludo"
          class="image-greet"
          v-if="!isMonitorOn"
        />
        <ScreenView ref="screenView" v-show="isMonitorOn" />
      </div>
      <div
        class="card-footer border-0 bg-transparent d-flex justify-content-center align-items-center"
      >
        <button
          type="button"
          tabindex="4"
          :class="`rounded-circle btn-on-off d-flex ${
            isMonitorOn ? 'btn-on' : 'btn-off'
          }`"
          :title="isMonitorOn ? 'Apagar monitor' : 'Encender monitor'"
          :alt="isMonitorOn ? 'Botón on' : 'Botón off'"
          @click="isMonitorOn = !isMonitorOn"
        >
          <i class="fa-solid fa-power-off"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang='css' scoped>
.btn-power-desc {
  width: 30px;
  height: 30px;
}

.wrap-introduction {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
  z-index: 5;
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
}

.monitor.fullscreen {
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

.btn-on-off {
  width: 50px;
  height: 50px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 1.4rem;
  z-index: 5;
}

.btn-on-off > i {
  line-height: 0;
}

.btn-on-off:focus {
  outline: none;
}

.btn-on,
.btn-on:active,
.btn-on:focus {
  color: rgb(23, 210, 23);
  box-shadow: 0 0 10px rgb(23, 210, 23);
}

.btn-off,
.btn-off:active,
.btn-off:focus {
  color: rgb(210, 23, 23);
  box-shadow: 0 0 10px rgb(210, 23, 23);
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

@media screen and (max-width: 600px) {
  .card {
    margin: 0 !important;
  }
}
</style>
