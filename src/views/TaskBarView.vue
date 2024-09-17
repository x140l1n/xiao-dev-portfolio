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
        @click="selectProgram(program)"
      >
        <img class="img-fluid" :src="program.icon_src" :title="program.title" :alt="program.title" />
      </div>
    </div>
    <Clock class="taskbar-item" />
    <span class="taskbar-item taskbar-item-minimize-all border border-dark border-end-0 border-top-0 border-bottom-0" @click="minimizeAll"> </span>
  </div>
</template>

<script>
import Clock from '@components/Clock.vue';

export default {
  components: {
    Clock
  },
  methods: {
    selectProgram(program) {
      if (program.window.$el.classList.contains('active')) {
        program.window.minimize();
      } else {
        program.window.bringFront();
      }
    },
    minimizeAll() {
      this.$programs.forEach((program) => program.window.minimize());
    }
  },
  computed: {
    getProgramActiveId() {
      return this.$programActive ? this.$programActive.id : null;
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

.taskbar-item:hover {
  cursor: default;
  background-color: #ffffff48;
}

.taskbar-item.taskbar-item-minimize-all {
  width: 6px;
}

.taskbar-item.program {
  padding: 5px;
  border-radius: 5px;
  transition: background-color 0.2s;
}

.taskbar-item.program.selected {
  background-color: #ffffff48;
}

.taskbar-item.program > img {
  animation: bounce 0.5s;
}

.taskbar-item.program:active > img {
  transition: transform 0.2s;
  transform: scale(0.8);
}

.taskbar-item.program {
  width: 40px;
  height: 40px;
}

.taskbar-item.program > img {
  object-fit: fill;
}

.taskbar-programs {
  overflow-x: auto;
  overflow-y: hidden;
}

.taskbar-programs::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  border-radius: 5px;
}

/* Track */
.taskbar-programs::-webkit-scrollbar-track {
  border-radius: 5px;
  background: #f1f1f1;
}

/* Handle */
.taskbar-programs::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

/* Handle on hover */
.taskbar-programs::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
