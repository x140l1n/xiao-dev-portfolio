<template>
  <div :title="getFullDate" class="clock text-light px-2">
    <span>
      {{ datetime.time }}
    </span>
    <span>
      {{ datetime.date }}
    </span>
  </div>
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

<style lang="css" scoped>
.clock {
  min-width: 7em;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
</style>
