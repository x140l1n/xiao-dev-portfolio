<template>
  <div class="program-content p-5">
      <h4>AJUSTES</h4>
      <button class="btn btn-primary btn-sm" @click="counter++">TEST</button>
      <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      title: "Settings",
      width_default: 300,
      height_default: 200,
      x_default: 0,
      y_default: 0,
      window: null,

      counter: 0
    };
  },
};
</script>

<style scoped>
.program-content {
    width: 100%;
    height: 100%;
}
</style>