<template>
  <section class="w-100 h-100">
    <form
      v-if="!showSuccess"
      @submit.prevent="onSubmit"
      class="overflow-auto h-100 p-4"
    >
      <div class="mb-3 mx-2">
        <h5 class="fw-bold">
          If you have any questions, feel free to send me an email. 😁
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
          >First Name *</label>
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
          >Last Name *</label>
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
        >Subject *</label>
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
        >Message *</label>
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
          class="btn bg-primary text-light w-100"
          type="submit"
          title="Send"
        >
          <i
            v-if="isSending"
            class="fas fa-spinner fa-pulse fa-fw me-2"
          />
          <i
            v-else
            class="fa-solid fa-paper-plane fa-fw me-2"
          />
          Send
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
        title="Contact Me"
        alt="Contact Me"
        draggable="false"
      >
      <h3 class="mx-auto fw-bold my-4">
        Thank you so much for contacting me!
      </h3>
      <button
        @click="showSuccess = false"
        class="btn-go-back mb-auto"
        type="button"
        title="Go back to the contact form"
      >
        <i class="fa-solid fa-angle-left me-3" />
        Go back to the contact form
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
    async onSubmit(evt) {
      const form = evt.target;

      const formData = new FormData(form);
      formData.append('send', true);

      this.resultMessage = null;
      this.isSending = true;

      try {
        await this.$recaptchaLoaded();

        const token = await this.$recaptcha('contactme');

        formData.append('g-recaptcha-response', token);

        const response = await fetch(`${this.$env.API_ENDPOINT_URL}email.php`, {
          method: 'POST',
          body: formData
        });
    
        const data = await response.json();

        if (data.status == 1) {
          this.showSuccess = true;
          this.statusMessage = 1;
        } else {
          this.showSuccess = false;
          this.statusMessage = data.status;
          this.resultMessage = data.message;
        }
      } catch (error) {
        this.showSuccess = false;
        this.statusMessage = 0;
        this.resultMessage = error.message;
      } finally {
        if (this.statusMessage == 1) {
          form.reset();
        }

        this.isSending = false;
      }
    }
  }
})
export default class ContactMe extends Program {
  created() {
    this.title = 'Contact Me';
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
