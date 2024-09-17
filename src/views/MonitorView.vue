<template>
  <div class="container-fluid bg-dark vh-100 d-flex p-0">
    <div ref="monitor" class="card monitor mx-auto bg-light border-0">
      <div :class="`card-body monitor-inner ${isMonitorOn ? '' : 'bg-dark'}`">
        <div :class="`layer-on-off ${!isFirstTime ? (isMonitorOn ? 'layer-on' : 'layer-off') : ''}`"></div>
        <div class="wrap-introduction text-light" v-if="!isMonitorOn">
          <div class="row g-4">
            <div class="col-md-8">
              <h2 class="fw-bold mb-4" tabindex="1">
                ¡Bienvenido a mi portfolio! 😁
              </h2>
              <p tabindex="2">
                Para comenzar a explorar, solo tienes que hacer clic en el siguiente botón 👉
              </p>
            </div>
            <div class="col-md-4 d-flex flex-column gap-5 justify-content-center align-items-center">
              <button type="button" tabindex="3" :class="`btn-on-off d-inline rounded-circle mb-2 ${isMonitorOn ? 'btn-on' : 'btn-off'}`" title="Encender monitor" @click="isMonitorOn = !isMonitorOn">
                <i class="fa-solid fa-power-off"></i>
              </button>
            </div>
          </div>
        </div>
        <img src="@assets/img/greet.png" alt="Saludo" title="Saludo" class="image-greet" v-if="!isMonitorOn" />
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
      isFirstTime: true
    };
  },
  methods: {
    init() {
      this.startFullscreenListener();
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
      this.$isFullscreen = !!(window.screenTop && window.screenY);
    }
  },
  watch: {
    $isFullscreen(value) {
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
.wrap-introduction {
  position: absolute;
  width: 100%;
  max-width: 800px;
  padding: 3rem;
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

.btn-on-off {
  min-width: 100px;
  min-height: 100px;
  font-size: 3rem;
}

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
  animation: monitor-on 0.2s forwards ease-in;
}

.layer-off {
  animation: monitor-off 0.2s forwards ease-in;
}
</style>
