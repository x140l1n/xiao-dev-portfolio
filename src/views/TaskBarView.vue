<template>
  <div class="taskbar bg-primary d-flex">
    <div class="taskbar-programs d-flex gap-2 justify-content-center align-items-center flex-grow-1">
      <div
        v-for="(program, index) in $programs"
        :id="`program-${program.id}`"
        :key="program.id"
        :tabindex="10 + index"
        :class="`taskbar-item program ${getProgramActiveId === program.id ? 'selected' : ''}`"
        :title="program.title"
        @click="onSelectProgram(program)"
      >
        <img class="img-fluid" :src="program.iconSrc" :title="program.title" :alt="program.title" draggable="false" />
      </div>
    </div>
    <Clock class="taskbar-item" />
    <span class="taskbar-item taskbar-item-minimize-all border border-dark border-end-0 border-top-0 border-bottom-0" @click="onMinimizeAllPrograms"> </span>
  </div>
</template>

<script>
export default {
  components: {
    Clock: () => import('@components/Clock.vue')
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
  },
  computed: {
    getProgramActiveId() {
      return this.$currentProgramActive ? this.$currentProgramActive.id : null;
    }
  },
  watch: {}
};
</script>

<style lang="css" scoped>
.taskbar {
  height: 3rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 3;
}

.taskbar > .taskbar-programs > .taskbar-item.program {
  width: 40px;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  transition: background-color 0.2s;
}

.taskbar > .taskbar-programs > .taskbar-item.program.selected {
  background-color: #ffffff48;
}

.taskbar > .taskbar-programs > .taskbar-item:hover {
  cursor: default;
  background-color: #ffffff48;
}

.taskbar > .taskbar-programs > .taskbar-item.program > img {
  animation: bounce 0.5s;
  object-fit: fill;
}

.taskbar > .taskbar-programs > .taskbar-item.program:active > img {
  transition: transform 0.2s;
  transform: scale(0.8);
}

.taskbar > .taskbar-programs > .taskbar-item.taskbar-item-minimize-all {
  width: 6px;
}
</style>
