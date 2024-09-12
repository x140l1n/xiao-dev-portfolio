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
import moment from "moment";

export default {
  mounted() {
    this.init();
  },
  data() {
    return {
      datetime: {
        time: moment().format("HH:mm:ss"),
        date: moment().format("DD-MM-YYYY"),
      },
    };
  },
  methods: {
    init() {
      setInterval(() => {
        this.datetime.time = moment().format("HH:mm:ss");
        this.datetime.date = moment().format("DD-MM-YYYY");
      }, 1000);
    },
  },
  computed: {
    getFullDate() {
      return moment().format("LL");
    },
  },
};
</script>

<style scoped>
.clock {
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 7em;
  justify-content: center;
}
</style>
