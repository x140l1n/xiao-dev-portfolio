<template>
  <section class="taskbar bg-primary">
    <div class="taskbar-programs d-flex gap-2 justify-content-start align-items-center flex-shrink-1 mx-auto overflow-y-hidden overflow-x-auto">
      <button
        v-for="(program, index) in $programs"
        :id="`program-${program.id}`"
        :key="program.id"
        :tabindex="10 + index"
        :class="`taskbar-item program ${getProgramActiveId === program.id ? 'selected' : ''}`"
        :title="program.title"
        @click="onSelectProgram(program)"
        :aria-label="program.title"
        type="button"
      >
        <img
          :src="program.iconSrc"
          :title="program.title"
          :alt="program.title"
          class="img-fluid"
          draggable="false"
        >
      </button>
    </div>
    <Clock class="taskbar-item clock flex-shrink-0" />
    <button
      @click="onMinimizeAllPrograms"
      type="button"
      class="taskbar-item taskbar-item-minimize-all border border-dark border-end-0 border-top-0 border-bottom-0 flex-shrink-0"
      title="Minimizar todos los programas"
    />
  </section>
</template>

<script>
export default {
  name: 'TaskBar',
  components: {
    Clock: () => import('@components/Clock.vue')
  },
  computed: {
    getProgramActiveId() {
      return this.$currentProgramActive ? this.$currentProgramActive.id : null;
    }
  },
  methods: {
    onSelectProgram(program) {
      if (program.window.$el.classList.contains('active')) {
        program.window.minimize();
      } else {
        program.window.bringFront();
      }
    },
    onMinimizeAllPrograms() {
      this.$programs.forEach((program) => program.window.minimize());
    }
  }
};
</script>

<style lang="scss" scoped>
.taskbar {
  position: fixed;
  bottom: 0;
  height: 3rem;
  width: 100%;
  z-index: 3;
  display: flex;

  .taskbar-item:hover {
    cursor: default;
    background-color: #ffffff48;
  }

  .taskbar-programs {
    > .taskbar-item.program {
      cursor: default;
      background-color: transparent;
      border: none;
      position: relative;
      min-width: 40px;
      min-height: 40px;
      max-width: 40px;
      max-height: 40px;
      padding: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      transition: background-color 0.2s;

      &.selected {
        background-color: #ffffff48;
        padding: 8px;

        &:before {
          content: '';
          position: absolute;
          top: 90%;
          left: 50%;
          transform: translate(-50%, -90%);
          width: 100%;
          max-width: 15px;
          height: 2px;
          border-radius: 2px;
          background-color: rgb(var(--bs-primary-rgb));
          animation: expand 1s;
        }
      }

      img {
        animation: bounce 0.5s;
        object-fit: fill;
      }

      :active img {
        transition: transform 0.2s;
        transform: scale(0.8);
      }
    }
  }

  > .taskbar-item.clock {
    width: 100px;
  }

  > .taskbar-item.taskbar-item-minimize-all {
    cursor: default;
    width: 6px;
    background-color: transparent;
    border: none;
    padding: 0;

    &:hover {
      background-color: #ffffff48;
    }
  }
}

@keyframes expand {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
</style>
