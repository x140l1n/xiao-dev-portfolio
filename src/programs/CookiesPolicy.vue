<template>
  <section class="content overflow-x-hidden overflow-y-auto h-100 m-0 p-4">
    <article class="card shadow-lg mx-auto w-100">
      <div class="card-header bg-primary text-light">
        <h5 class="fw-bold mb-0">
          Cookies Policy
        </h5>
      </div>
      <div class="card-body">
        <small class="text-muted text-end">
          <strong>Last updated:</strong> October 8, 2024
        </small>
        <p class="mt-4">
          This Cookies Policy explains how <strong>{{ getHost }}</strong> uses cookies and similar technologies to recognize users 
          when they visit this website at <strong>{{ getHost }}</strong> ("Website"). 
          It explains what these technologies are and why they are used, as well as users' rights to control the use of them.
        </p>
        <h5 class="fw-bold mt-4 mb-3">
          What are Cookies?
        </h5>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
          Cookies are widely used by website owners to make their websites work or to work more efficiently, as well as to provide reporting information.
        </p>
        <h5 class="fw-bold mt-4 mb-3">
          Types of Cookies Used
        </h5>
        <p>This website uses the following types of cookies:</p>
        <div class="bg-white p-3 rounded border mb-3">
          <h5 class="fw-bold mt-4 mb-3">
            1. Essential Cookies
          </h5>
          <p>
            These cookies are necessary to provide users with services available through this website and to use some of its features, such as access to secure areas.
          </p>
        </div>
        <div class="bg-white p-3 rounded border mb-3">
          <h6 class="mt-2">
            2. Analytics Cookies
          </h6>
          <p>
            Google Analytics is used to collect information about how this website is used. 
            These cookies help understand which pages are visited, how long users stay, and other metrics that help improve the overall user experience. 
            Information collected by these cookies is anonymized and does not include personal data.
          </p>
        </div>
        <div class="bg-white p-3 rounded border mb-3">
          <h6 class="mt-2">
            3. Security Cookies
          </h6>
          <p>
            reCAPTCHA v3 is used to protect this website from fraudulent activity and ensure it is being accessed by humans and not bots. 
            reCAPTCHA sets cookies to ensure proper functionality and user verification.
          </p>
        </div>
        <h5 class="fw-bold mt-4 mb-3">
          Managing Cookies
        </h5>
        <p>
          Users have the right to accept or reject cookies. Cookie preferences can be exercised by modifying browser settings. 
          Please note that if cookies are disabled, some parts of this website may not function properly.
        </p>
        <h5 class="fw-bold mt-4 mb-3">
          Changes to This Cookies Policy
        </h5>
        <p>
          This Cookies Policy may be updated from time to time to reflect changes to the cookies used or for other operational, legal, or regulatory reasons. 
          Please revisit this Cookies Policy regularly to stay informed about the use of cookies.
        </p>
        <h5 class="fw-bold mt-4 mb-3">
          Contact Information
        </h5>
        <p>
          If there are any questions about the use of cookies or other technologies, please email at <a href="mailto:info@xiaojl.dev">info@xiaojl.dev</a>.
        </p>
      </div>
    </article>
  </section>
</template>

<script>
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconCookies from '@assets/icons/cookies.png';

@Component({
  name: 'CookiesPolicy',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    getHost() {
      return window.location.hostname;
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() { }
  }
})
export default class CookiesPolicy extends Program {
  created() {
    this.title = 'Cookies Policy';
    this.widthDefault = 400;
    this.heightDefault = 600;
    this.maximizedDefault = true;
    this.xDefault = this.$widthScreenContent / 2 - this.widthDefault / 2;
    this.yDefault = this.$heightScreenContent / 2 - this.heightDefault / 2;
    this.iconSrc = IconCookies;
    this.window = null;
  }
}
</script>

<style lang="scss" scoped>
.content>article {
  max-width: 600px;
}
</style>
