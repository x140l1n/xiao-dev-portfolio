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
  },
  methods: {
    init() {

    },
  },
};
</script>

<template>
  <main class="container-fluid bg-dark vh-100 d-flex">
    <div class="card monitor m-auto">
      <div class="card-body monitor-inner">
        <div
          :class="`layer-on-off ${
            !isFirstTime ? (isMonitorOn ? 'layer-on' : 'layer-off') : ''
          }`"
        ></div>
        <ScreenView ref="screenView" />
      </div>
      <div
        class="card-footer border-0 bg-transparent d-flex flex-row-reverse justify-content-between"
      >
        <span
          role="button"
          :class="`rounded-circle mt-2 btn-on-off d-flex ${
            isMonitorOn ? 'btn-on' : 'btn-off'
          }`"
          @click="isMonitorOn = !isMonitorOn"
        >
          <i class="fa-solid fa-power-off fa-fw m-auto"></i>
        </span>
      </div>
    </div>
  </main>
</template>

<style scoped>
.monitor {
  width: 100%;
  height: 100%;
  max-width: 84em;
  max-height: 52em;
  padding: 0.8em;
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
  color: inherit;
}

.btn-on {
  color: rgb(23, 210, 23);
  border: 2px rgb(23, 210, 23) solid;
}

.btn-off {
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
  animation: off forwards 0.2s ease-in;
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
