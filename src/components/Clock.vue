<template>
  <small
    :title="datetime.fullDate"
    class="text-light px-2 d-flex flex-column justify-content-center align-items-end"
  >
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
  name: 'Clock',
  data() {
    return {
      datetime: {
        time: null,
        date: null,
        fullDate: null
      }
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.updateDateTime();

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
      this.datetime.fullDate = `${this.$moment().format('dddd, LL | hh:mm')} (Hora local)`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
