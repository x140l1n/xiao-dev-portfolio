<script>
export default {
  components: {
    MonitorView: () => import('@views/MonitorView.vue')
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      window.history.replaceState(null, '', window.location.pathname);
    }
  }
};
</script>

<template>
  <MonitorView />
</template>

<style lang="css" scoped></style>
