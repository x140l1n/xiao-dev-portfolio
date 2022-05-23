<template>
  <div class="taskbar bg-primary d-flex flex-row-reverse user-select-none">
    <span class="taskbar-item border border-dark border-end-0 border-top-0 border-bottom-0" style="width: 6px">
    </span>
    <Clock class="taskbar-item" />
    <div class="taskbar-programs d-flex w-100">
      <div v-for="program in $programs" :key="program.id" :id="`program-${program.id}`" :class="`taskbar-item program ${ getProgramActiveId == program.id ? 'selected' : ''}`" :title="program.title" @click="selectProgram(program)">
        <img :src="program.icon_src" :alt="`Logo ${program.title}`"/>
      </div>
    </div>
  </div>
</template>

<script>
import Clock from "../components/Clock.vue";

export default {
  components: {
    Clock,
  },
  methods: {
    selectProgram(program) {
      program.window.bringFront();
    },
    isProgramInFront(id) {
      return this.$programs.some(program => {        
        if (program.id == id && program.window.$el.classList.contains("active")) {
          return true;
        }
      });
    }
  },
  computed: {
    getProgramActiveId() {
      return this.$programActive ? this.$programActive.id : 0;
    }
  },
  watch: {
  }
};
</script>

<style>
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

.taskbar-item.program {
  display: flex;
  margin: 5px;
  border-radius: 5px;
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

@keyframes bounce {
  0% {
    transform: translateY(-10px);
  }
  30% {
    transform: translateY(5px);
  }
  50% {
    transform: translateY(0px);
  }
  80% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}

.taskbar-item.program {
  width: 100%;
  height: 100%;
  max-width: 40px;
  max-height: 40px
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
