<template>
  <section class="w-100 h-100">
    <form
      v-if="!showSuccess"
      @submit.prevent="onSubmit"
      class="overflow-auto h-100 p-4"
    >
      <div class="mb-3 mx-2">
        <h5 class="fw-bold">
          {{ $t('contactMe.description') }}
        </h5>
      </div>
      <hr>
      <div class="mb-3 mx-2">
        <!-- eslint-disable-next-line vuejs-accessibility/label-has-for -->
        <label
          :for="`input-email-${id}`"
          class="form-label"
        >{{ $t('contactMe.form.email') }} *</label>
        <input
          :id="`input-email-${id}`"
          :disabled="isSending"
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
          >{{ $t('contactMe.form.firstName') }} *</label>
          <input
            :id="`input-firstname-${id}`"
            :disabled="isSending"
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
          >{{ $t('contactMe.form.lastName') }} *</label>
          <input
            :id="`input-lastname-${id}`"
            :disabled="isSending"
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
        >{{ $t('contactMe.form.subject') }} *</label>
        <input
          :id="`input-subject-${id}`"
          :disabled="isSending"
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
        >{{ $t('contactMe.form.message') }} *</label>
        <textarea
          :id="`input-message-${id}`"
          :disabled="isSending"
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
          :title="$t('contactMe.form.send')"
          class="btn bg-primary text-light w-100"
          type="submit"
        >
          <i
            v-if="isSending"
            class="fas fa-spinner fa-pulse fa-fw me-2"
          />
          <i
            v-else
            class="fa-solid fa-paper-plane fa-fw me-2"
          />
          {{ $t('contactMe.form.send') }}
        </button>
      </div>
    </form>
    <div
      v-else
      class="d-flex flex-column text-center h-100 p-4 overflow-auto"
    >
      <img
        :title="$t('contactMe.title')"
        :alt="$t('contactMe.title')"
        class="img-fluid mt-auto mx-auto"
        src="@assets/img/contactme.png"
        draggable="false"
      >
      <h3 class="mx-auto fw-bold my-4">
        {{ $t('contactMe.thankYou') }}
      </h3>
      <button
        @click="showSuccess = false"
        :title="$t('contactMe.goBack')"
        class="btn-go-back mb-auto"
        type="button"
      >
        <i class="fa-solid fa-angle-left me-3" />
        {{ $t('contactMe.goBack') }}
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
    getTranslatedMessage(status, message) {
      if (!this.$t) {
        return message;
      }

      switch (status) {
        case 1:
          return this.$t('contactMe.messages.success');
        case 0:
          // Error genérico
          return this.$t('contactMe.messages.error');
        case -1:
          // Error de validación
          return this.$t('contactMe.messages.validationError');
        case -2:
          // Error de reCAPTCHA
          return this.$t('contactMe.messages.recaptchaError');
        case -3:
          // Error del servidor
          return this.$t('contactMe.messages.serverError');
        case -4:
          // Error de red
          return this.$t('contactMe.messages.networkError');
        default:
          // Si hay un mensaje específico del servidor, úsalo, sino usa el genérico
          return message || this.$t('contactMe.messages.error');
      }
    },
    async onSubmit(evt) {
      const form = evt.target;

      const formData = new FormData(form);
      formData.append('send', true);

      this.isSending = true;
      this.resultMessage = this.$t ? this.$t('contactMe.messages.sending') : 'Sending message...';

      try {
        await this.$recaptchaLoaded();

        const token = await this.$recaptcha('contactme');

        formData.append('g-recaptcha-response', token);

        const response = await fetch(`${this.$env.API_ENDPOINT_URL}/email.php`, {
          method: 'POST',
          body: formData
        });
    
        const data = await response.json();

        if (data.status == 1) {
          this.showSuccess = true;
          this.statusMessage = 1;
          this.resultMessage = this.getTranslatedMessage(1);
        } else {
          this.showSuccess = false;
          this.statusMessage = data.status;
          this.resultMessage = this.getTranslatedMessage(data.status, data.message);
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);

        this.showSuccess = false;
        // Error de red/conexión
        this.statusMessage = -4;
        this.resultMessage = this.getTranslatedMessage(-4);
      } finally {
        this.isSending = false;

        if (this.statusMessage == 1) {
          form.reset();
        }
      }
    }
  }
})
export default class ContactMe extends Program {
  created() {
    this.title = this.$t ? this.$t('contactMe.title') : 'Contact Me';
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
