<template>
  <section class="w-100 h-100">
    <form
      v-if="!showSuccess"
      @submit.prevent="onSubmit"
      class="overflow-auto h-100 p-4"
    >
      <div class="mb-3 mx-2">
        <h5 class="fw-bold">
          Si tienes alguna duda no dudes en enviarme un correo ;)
        </h5>
      </div>
      <hr>
      <div class="mb-3 mx-2">
        <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
        <label
          :for="`input-email-${id}`"
          class="form-label"
        >Email *</label>
        <input
          :id="`input-email-${id}`"
          class="form-control"
          name="from"
          type="email"
          required
        >
      </div>
      <div class="d-flex flex-wrap">
        <div class="mb-3 flex-grow-1 mx-2">
          <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
          <label
            :for="`input-firstname-${id}`"
            class="form-label"
          >Nombre *</label>
          <input
            :id="`input-firstname-${id}`"
            class="form-control"
            name="firstname"
            type="text"
            required
          >
        </div>
        <div class="mb-3 flex-grow-1 mx-2">
          <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
          <label
            :for="`input-lastname-${id}`"
            class="form-label"
          >Apellidos *</label>
          <input
            :id="`input-lastname-${id}`"
            class="form-control"
            name="lastname"
            type="text"
            required
          >
        </div>
      </div>
      <div class="mb-3 mx-2">
        <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
        <label
          :for="`input-subject-${id}`"
          class="form-label"
        >Asunto *</label>
        <input
          :id="`input-subject-${id}`"
          class="form-control"
          name="subject"
          type="text"
          required
        >
      </div>
      <div class="mb-3 mx-2">
        <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
        <label
          :for="`input-message-${id}`"
          class="form-label"
        >Mensaje *</label>
        <textarea
          :id="`input-message-${id}`"
          class="form-control"
          name="message"
          rows="5"
          required
        />
      </div>
      <div class="mb-3 mx-2">
        <p
          v-if="resultMessage"
          :class="`${statusMessage == 1 ? 'text-success' : 'text-danger'}`"
        >
          <i
            v-if="statusMessage == 1"
            class="fa-solid fa-circle-check"
          />
          <i
            v-else-if="statusMessage == -1"
            class="fa-solid fa-circle-exclamation"
          />
          <i
            v-else
            class="fa-solid fa-circle-xmark"
          />
          {{ resultMessage }}
        </p>
      </div>
      <div class="mb-3 mx-2">
        <button
          class="btn bg-primary text-light w-100"
          type="submit"
          title="Enviar"
        >
          <i
            v-if="isSending"
            class="fas fa-spinner fa-pulse fa-fw me-2"
          />
          <i
            v-else
            class="fa-solid fa-paper-plane fa-fw me-2"
          />
          Enviar
        </button>
      </div>
    </form>
    <div
      v-else
      class="d-flex flex-column text-center h-100 p-4 overflow-auto"
    >
      <img
        class="img-fluid mt-auto mx-auto"
        src="@assets/img/contactme.png"
        title="Contáctame"
        alt="Contáctame"
        draggable="false"
      >
      <h3 class="mx-auto fw-bold my-4">
        ¡Muchas gracias por contactar conmigo!
      </h3>
      <button
        @click="showSuccess = false"
        class="btn-go-back mb-auto"
        type="button"
        title="Volver al formulario de contacto"
      >
        <i class="fa-solid fa-angle-left me-3" />
        Volver al formulario de contacto
      </button>
    </div>
  </section>
</template>

<script>
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconEmail from '@assets/icons/email.png';

@Component({
  name: 'ContactMe',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      // 0: Error, 1: Success, -1: Warning
      statusMessage: 0,
      resultMessage: null,
      isSending: false,
      showSuccess: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {},
    onSubmit(evt) {
      const form = evt.target;
      const formData = new FormData(form);
      formData.append('send', true);

      const self = this;

      form.querySelectorAll('input, textarea, button').forEach((element) => (element.disabled = true));

      this.resultMessage = null;

      this.isSending = true;

      fetch(`${this.$env.API_ENDPOINT_URL}email.php`, {
        method: 'POST',
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status == 1) {
            self.showSuccess = true;
            self.statusMessage = 1;
          } else {
            self.showSuccess = false;
            self.statusMessage = data.status;
            self.resultMessage = data.msg;
          }
        })
        .catch(() => {
          self.showSuccess = false;
          self.statusMessage = 0;
          self.resultMessage = 'Error al enviar el formulario.';
        })
        .finally(() => {
          form.querySelectorAll('input, textarea, button').forEach((element) => (element.disabled = false));

          if (self.statusMessage == 1) {
            form.reset();
          }

          self.isSending = false;
        });
    }
  }
})
export default class ContactMe extends Program {
  created() {
    this.title = 'Contáctame';
    this.widthDefault = 550;
    this.heightDefault = 400;
    this.maximizedDefault = true;
    this.xDefault = this.$widthScreenContent / 2 - this.widthDefault / 2;
    this.yDefault = this.$heightScreenContent / 2 - this.heightDefault / 2;
    this.iconSrc = IconEmail;
    this.window = null;
  }
}
</script>

<style lang="scss" scoped>
.btn-go-back {
  color: #1a233a;
  font-size: 0.9rem;
  background-color: transparent;
  border: none;
}
</style>
