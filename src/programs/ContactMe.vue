<template>
  <div class="w-100 h-100">
    <form class="overflow-auto h-100 p-4" v-if="!showSuccess" @submit.prevent="onSubmit">
      <div class="mb-3 mx-2">
        <h5 class="fw-bold"> Si tienes alguna duda no dudes en enviarme un correo ;) </h5>
      </div>
      <hr />
      <div class="mb-3 mx-2">
        <label class="form-label" for="input-email">Email *</label>
        <input class="form-control" id="input-email" type="email" name="from" required />
      </div>
      <div class="d-flex flex-wrap">
        <div class="mb-3 flex-grow-1 mx-2">
          <label class="form-label" for="input-firstname">Nombre *</label>
          <input class="form-control" id="input-firstname" type="text" name="firstname" required />
        </div>
        <div class="mb-3 flex-grow-1 mx-2">
          <label class="form-label" for="input-lastname">Apellidos *</label>
          <input class="form-control" id="input-lastname" type="text" name="lastname" required />
        </div>
      </div>
      <div class="mb-3 mx-2">
        <label class="form-label" for="input-subject">Asunto *</label>
        <input class="form-control" id="input-subject" type="text" name="subject" required />
      </div>
      <div class="mb-3 mx-2">
        <label class="form-label" for="input-message">Mensaje *</label>
        <textarea class="form-control" id="input-message" name="message" rows="5" required></textarea>
      </div>
      <div class="mb-3 mx-2">
        <label v-if="resultMessage" :class="`${statusMessage == 1 ? 'text-success' : 'text-danger'}`">
          <i class="fa-solid fa-circle-check" v-if="statusMessage == 1"></i>
          <i class="fa-solid fa-circle-exclamation" v-else></i>
          {{ resultMessage }}
        </label>
      </div>
      <div class="mb-3 mx-2">
        <button class="btn bg-primary text-light w-100" type="submit">
          <i class="fas fa-spinner fa-pulse fa-fw me-2" v-if="isSending"></i>
          <i class="fa-solid fa-paper-plane fa-fw me-2" v-else></i>
          Enviar
        </button>
      </div>
    </form>
    <div class="d-flex flex-column justify-content-center overflow-auto h-100 text-center" v-else>
      <img class="img-fluid mx-auto" src="@assets/img/contactme.png" title="Contáctame" draggable="false" />
      <h3 class="mx-auto fw-bold my-4"> ¡Muchas gracias por contactar conmigo! </h3>
      <a role="button" @click="showSuccess = false"><i class="fa-solid fa-angle-left me-3"></i>Volver al formulario de contacto</a>
    </div>
  </div>
</template>

<script>
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconEmail from '@assets/icons/email.png';

@Component({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      statusMessage: 0,
      resultMessage: null,
      isSending: false,
      showSuccess: false
    };
  },
  methods: {
    init() {},
    onResize() {},
    onSubmit(evt) {
      const form = evt.target;
      const formData = new FormData(form);
      formData.append('send', true);

      const self = this;

      form.querySelectorAll('input, textarea, button').forEach((element) => (element.disabled = true));

      this.resultMessage = null;

      this.isSending = true;

      fetch(`${this.$env.API_ENDPOINT}email.php`, {
        method: 'POST',
        body: formData
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status == 1) {
            self.showSuccess = true;
            self.statusMessage = 0;
          } else {
            self.showSuccess = false;
            self.statusMessage = data.status;
            self.resultMessage = data.msg;
          }
        })
        .catch(() => {
          self.showSuccess = false;
          self.statusMessage = -1;
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
  },
  computed: {}
})
export default class ContactMe extends Program {
  //Initialize the variables of superclass Program.
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

<style></style>
