<template>
  <section class="content overflow-x-hidden overflow-y-auto h-100 m-0 p-4">
    <article class="card shadow-lg mx-auto w-100">
      <div class="card-header bg-primary text-light">
        <h5 class="fw-bold mb-0">
          Cookies Policies
        </h5>
      </div>
      <div class="card-body">
        <small class="text-muted text-end">
          <strong>Last updated:</strong> October 8, 2024
        </small>
        <p>
          This Cookies Policies explains how <strong>xiaojl.dev</strong> ("I", "me", "my") uses cookies and similar
          technologies to recognize you when you visit my website at <strong>xiaojl.dev</strong> ("Website"). It
          explains
          what these technologies are and why I use them, as well as your rights to control my use of them.
        </p>
        <h5 class="fw-bold mt-4 mb-3">
          What are Cookies?
        </h5>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website.
          Cookies are widely used by website owners to make their websites work or to work more efficiently, as well as
          to
          provide reporting information.
        </p>
        <h5 class="fw-bold mt-4 mb-3">
          Types of Cookies I Use
        </h5>
        <p>I use the following types of cookies on my Website:</p>
        <div class="bg-white p-3 rounded border mb-3">
          <h5 class="fw-bold mt-4 mb-3">
            1. Essential Cookies
          </h5>
          <p>
            These cookies are necessary to provide you with services available through my Website and to use some of its
            features, such as access to secure areas.
          </p>
        </div>
        <div class="bg-white p-3 rounded border mb-3">
          <h6 class="mt-2">
            2. Analytics Cookies
          </h6>
          <p>
            I use Google Analytics to collect information about how my Website is used. These cookies help me understand
            which pages are visited, how long users stay, and other metrics that help me improve the overall user
            experience. Information collected by these cookies is anonymized and does not include personal data.
          </p>
        </div>
        <div class="bg-white p-3 rounded border mb-3">
          <h6 class="mt-2">
            3. Security Cookies
          </h6>
          <p>
            I use reCAPTCHA v3 to protect my Website from fraudulent activity and ensure it is being accessed by humans
            and not bots. reCAPTCHA sets cookies to ensure proper functionality and user verification.
          </p>
        </div>
        <h5 class="fw-bold mt-4 mb-3">
          Managing Cookies
        </h5>
        <p>
          You have the right to accept or reject cookies. You can exercise your cookie preferences by modifying your
          browser settings. Please note that if you disable cookies, some parts of my Website may not function properly.
        </p>
        <h5 class="fw-bold mt-4 mb-3">
          Changes to This Cookies Policies
        </h5>
        <p>
          I may update this Cookies Policies from time to time to reflect changes to the cookies I use or for other
          operational, legal, or regulatory reasons. Please revisit this Cookies Policies regularly to stay informed
          about my
          use of cookies.
        </p>
        <h5 class="fw-bold mt-4 mb-3">
          Contact Me
        </h5>
        <p>
          If you have any questions about my use of cookies or other technologies, please email me at <a
            href="mailto:info@xiaojl.dev"
          >info@xiaojl.dev</a>.
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
  name: 'CookiesPolicies',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    getCurrentHost() {
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
export default class CookiesPolicies extends Program {
  created() {
    this.title = 'Cookies Policies';
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
