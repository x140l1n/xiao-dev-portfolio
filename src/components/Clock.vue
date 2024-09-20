<template>
  <small class="text-light px-2 d-flex flex-column justify-content-center align-items-end" :title="getFullDate">
    <span>
      {{ datetime.time }}
    </span>
    <span>
      {{ datetime.date }}
    </span>
  </small>
</template>

<script>
export default {
  mounted() {
    this.init();
  },
  data() {
    return {
      datetime: {
        time: null,
        date: null
      }
    };
  },
  methods: {
    init() {
      const remainingMilliseconds = 1000 - this.$moment().milliseconds();

      setTimeout(() => {
        this.updateDateTime();
        setInterval(() => {
          this.updateDateTime();
        }, 1000);
      }, remainingMilliseconds);
    },
    updateDateTime() {
      this.datetime.time = this.$moment().format('H:mm');
      this.datetime.date = this.$moment().format('DD/MM/YYYY');
    }
  },
  computed: {
    getFullDate() {
      return `${this.$moment().format('dddd, LL | h:mm')} (Hora local)`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
