<template>
    <div class="w-100 p-4">
        <form @submit.prevent="onSubmit" v-if="!showSuccess">
            <div class="mb-3 mx-2">
                <h5 class="fw-bold">Si tienes alguna duda no dudes en enviarme un correo ;)</h5>
            </div>
            <hr />
            <div class="mb-3 mx-2">
                <label for="input-email" class="form-label">Email *</label>
                <input type="email" name="from" class="form-control" id="input-email" required />
            </div>
            <div class="d-flex flex-wrap">
                <div class="mb-3 flex-grow-1 mx-2">
                    <label for="input-firstname" class="form-label">Nombre *</label>
                    <input type="text" name="firstname" class="form-control" id="input-firstname" required />
                </div>
                <div class="mb-3 flex-grow-1 mx-2">
                    <label for="input-lastname" class="form-label">Apellidos *</label>
                    <input type="text" name="lastname" class="form-control" id="input-lastname" required />
                </div>
            </div>
            <div class="mb-3 mx-2">
                <label for="input-subject" class="form-label">Asunto *</label>
                <input type="text" name="subject" class="form-control" id="input-subject" required />
            </div>
            <div class="mb-3 mx-2">
                <label for="input-message" class="form-label">Mensaje *</label>
                <textarea class="form-control" name="message" id="input-message" rows="5" required></textarea>
            </div>
            <div class="mb-3 mx-2">
                <label v-if="resultMessage" :class="`${statusMessage == 1 ? 'text-success' : 'text-danger'}`">
                    <i class="fa-solid fa-circle-check" v-if="statusMessage == 1"></i>
                    <i class="fa-solid fa-circle-exclamation" v-else></i>
                    {{ resultMessage }}
                </label>
            </div>
            <div class="mb-3 mx-2">
                <button type="submit" class="btn bg-primary text-light w-100">
                    <i class="fas fa-spinner fa-pulse fa-fw me-2" v-if="isSending"></i>
                    <i class="fa-solid fa-paper-plane fa-fw me-2" v-else></i>
                    Enviar
                </button>
            </div>
        </form>
        <div class="d-flex flex-column justify-content-center h-100 text-center" v-else>
            <img src="../assets/img/contactme.png" class="img-fluid mx-auto" />
            <h3 class="mx-auto fw-bold my-4">¡Muchas gracias por contactar conmigo!</h3>
            <a role="button" @click="showSuccess = false"
                ><i class="fa-solid fa-angle-left me-3"></i>Volver al formulario de contacto</a
            >
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
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
      resultMessage: '',
      isSending: false,
      showSuccess: false
    };
  },
  methods: {
    init() {},
    onResize() {
      console.log('Resizing...');
    },
    onSubmit(evt) {
      const form = evt.target;
      const formData = new FormData(form);
      formData.append('send', true);

      const self = this;

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
            self.resultMessage = '';
          } else {
            self.showSuccess = false;
            self.statusMessage = data.status;
            self.resultMessage = data.msg;
          }
        })
        .catch((error) => {
          console.error(error);

          self.showSuccess = false;
          self.statusMessage = -1;
          self.resultMessage = 'Error al enviar el formulario.';
        })
        .finally(() => {
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
    this.title = 'Contácteme';
    this.width_default = 550;
    this.height_default = 400;
    this.maximized_default = true;
    this.x_default = Vue.prototype.$widthScreenContent / 2 - this.width_default / 2;
    this.y_default = Vue.prototype.$heightScreenContent / 2 - this.height_default / 2;
    this.icon_src = IconEmail;
    this.window = null;
  }
}
</script>

<style></style>
