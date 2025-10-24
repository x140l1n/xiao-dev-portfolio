<template>
  <section
    ref="content"
    class="w-100 h-100 overflow-auto p-2"
  >
    <div
      ref="card"
      class="card flip back shadow-lg"
    >
      <div class="flip-card-front">
        <header class="text-light d-flex gap-4 justify-content-between align-items-center">
          <img
            ref="iconFullStackDeveloper"
            src="@assets/icons/coding.png"
            title="Fullstack Developer Icon"
            alt="Fullstack Developer Icon"
            draggable="false"
          >
          <h2 class="m-0">
            FULLSTACK DEVELOPER
          </h2>
          <button
            @click="flip"
            class="btn btn-transparent btn-flip text-light"
            type="button"
            title="Flip the card"
            aria-label="Flip the card"
          >
            <i class="fa-solid fa-repeat fa-fw" />
          </button>
        </header>
        <div class="card-body p-0">
          <div
            ref="contentFront"
            class="d-flex gap-4 overflow-hidden p-4"
          >
            <div
              ref="photo"
              class="photo"
            >
              <img
                class="img-fluid"
                src="@assets/img/me.jpg"
                title="Me"
                alt="Me"
              >
            </div>
            <div
              ref="presentationFront"
              class="flex-grow-1 presentation"
            >
              <h6 class="fw-bold my-2">
                Presentation
              </h6>
              <p>
                Hi! I'm Xiaolin Jin Lin, and I am {{ getYearsOld }} years old. From a young age,
                I've always been drawn to the world of technology, and at 19, I decided to fully dive into computer
                science, choosing programming as my path.
              </p>
              <p>
                I studied DAM (Multiplatform Application Development) and then DAW (Web Application Development) at the
                <a
                  href="https://politecnics.barcelona"
                  target="_blank"
                >Centre d'Estudis Politècnics</a>. Over the years,
                I’ve learned a lot, and every day I become more passionate about this field. I'm eager to keep improving
                and learning new things.
              </p>
              <p>
                Besides programming, I also enjoy dancing, which has helped me to be more consistent, disciplined, and
                detail-oriented—qualities that I apply in both my personal and professional life.
              </p>
              <p>
                I love working in teams, proposing ideas and solutions, and I always aim to share my knowledge with
                others.
                I enjoy creating a positive atmosphere and collaborating to move projects forward.
              </p>
              <h6 class="fw-bold">
                Languages
              </h6>
              <p>Spanish (Native), Catalan (Native), English (Intermediate), Chinese (Intermediate).</p>
              <h6 class="fw-bold">
                Hobbies
              </h6>
              <p class="mb-0">
                Dance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card-back d-flex flex-column">
        <header class="text-light d-flex justify-content-end align-items-center">
          <button
            @click="flip"
            class="btn btn-transparent btn-flip text-light align-self-end"
            type="button"
            title="Flip the card"
            aria-label="Flip the card"
          >
            <i class="fa-solid fa-repeat fa-fw" />
          </button>
        </header>
        <div class="card-body flex-grow-1">
          <div
            ref="contentBack"
            class="d-flex flex-column justify-content-center align-items-center h-100 p-4"
          >
            <img
              ref="logo"
              class="logo img-fluid"
              src="@svg/xiao-theme-2.svg"
              title="Xiao Logo"
              alt="Xiao Logo"
              draggable="false"
            >
            <p class="fw-bold text-center my-2">
              Social Networks
            </p>
            <div class="d-flex justify-content-center">
              <a
                href="https://www.instagram.com/_xiao_97_"
                title="Instagram"
                target="_blank"
              >
                <img
                  src="@assets/icons/instagram.png"
                  alt="Instagram"
                  draggable="false"
                >
              </a>
              <a
                href="https://www.linkedin.com/in/xiaolin-jin-lin-017287173"
                title="LinkedIn"
                target="_blank"
              >
                <img
                  src="@assets/icons/linkedin.png"
                  alt="LinkedIn"
                  draggable="false"
                >
              </a>
              <a
                href="https://github.com/x140l1n"
                title="GitHub"
                target="_blank"
              >
                <img
                  src="@assets/icons/github.png"
                  alt="GitHub"
                  draggable="false"
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconAboutMe from '@assets/icons/about-me.png';
import { author } from '@root/package';

@Component({
  name: 'AboutMe',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => this.flip(), 100);
    },
    onWindowResize() {
      if (!this.$refs.iconFullStackDeveloper || !this.$refs.contentFront || !this.$refs.photo) {
        return;
      }

      if (this.$el.clientWidth < 800) {
        this.$refs.iconFullStackDeveloper.classList.add('d-none');
        this.$refs.contentFront.classList.remove('gap-4');
        this.$refs.contentFront.classList.add('flex-column', 'gap-2');
      } else {
        this.$refs.contentFront.classList.add('gap-4');
        this.$refs.contentFront.classList.remove('flex-column', 'gap-2');
        this.$refs.iconFullStackDeveloper.classList.remove('d-none');
      }

      if (this.$el.clientWidth < 800 && this.$el.clientWidth > 500) {
        this.$refs.photo.classList.add('photo-sm');
        this.$refs.photo.classList.remove('photo-xs');
      } else if (this.$el.clientWidth < 500) {
        this.$refs.photo.classList.remove('photo-sm');
        this.$refs.photo.classList.add('photo-xs');
      } else {
        this.$refs.photo.classList.remove('photo-sm', 'photo-xs');
      }
    },
    flip() {
      this.$refs.card.classList.toggle('back');

      this.$nextTick(() => {
        if (this.$refs.card.classList.contains('back')) {
          this.$refs.content.scrollTo({
            top: this.$refs.logo.offsetTop - this.$refs.content.clientHeight / 2 + 100
          });
        }
      });
    }
  },
  computed: {
    getEmail() {
      return author.email;
    },
    getYearsOld() {
      const birthdate = new Date('1997-10-26');
      const today = new Date();
      const months = today.getMonth() - birthdate.getMonth();
      let years = today.getFullYear() - birthdate.getFullYear();

      if (months < 0 || (months === 0 && today.getDate() < birthdate.getDate())) {
        years--;
      }

      return years;
    }
  }
})
export default class AboutMe extends Program {
  created() {
    this.title = this.$t ? this.$t('aboutMe.title') : 'About Me';
    this.widthDefault = 550;
    this.heightDefault = 400;
    this.maximizedDefault = true;
    this.xDefault = this.$widthScreenContent / 2 - this.widthDefault / 2;
    this.yDefault = this.$heightScreenContent / 2 - this.heightDefault / 2;
    this.iconSrc = IconAboutMe;
    this.window = null;
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  max-width: 250px;

  >img {
    object-fit: cover;
  }
}

.card {
  position: relative;
  border-radius: 25px;
  max-width: 1200px;
  margin: 40px auto;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  &.flip {
    &.back {
      transform: rotateY(180deg);
    }

    >.flip-card-front,
    >.flip-card-back {
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      transform: rotateX(0deg);

      >header {
        background: rgb(var(--bs-primary-rgb));
        width: 100%;
        padding: 4rem 1.5rem 1.5rem;
        border-radius: 25px 25px 0 0;
        border-bottom: 2px solid rgba(var(--bs-primary-rgb), 0.5);
        border-top: 1px solid rgba(var(--bs-primary-rgb), 0.8);
        box-shadow:
          inset 0 1px 0 0 rgb(var(--bs-primary-rgb) / 80%),
          0 1px 2px rgb(0 0 0 / 40%);

        &:before {
          content: '';
          position: absolute;
          z-index: 1;
          left: 50%;
          top: 25px;
          margin: 0 0 0 -50px;
          height: 15px;
          width: 100px;
          border-radius: 25px;
          background-color: #333;
          box-shadow:
            inset 0 1px 0 0 rgb(var(--bs-primary-rgb) / 80%),
            0 1px 2px rgb(0 0 0 / 40%);
        }

        >.btn-flip {
          border: none;
          animation-name: glowing;
          animation-timing-function: ease-in-out;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
      }

      >.card-body {
        font-size: 0.9rem;

        .photo {
          min-width: 200px;
          max-width: 280px;
          width: 100%;

          &.photo-sm,
          &.photo-xs {
            max-width: 100%;
            height: 500px;

            >img {
              width: 100%;
              object-fit: cover;
            }
          }

          >img {
            object-fit: cover;
            border-radius: 15px;
            height: 100%;
          }

          &.photo-sm>img {
            object-position: 0px -100px;
          }

          &.photo-xs>img {
            object-position: 0px 0px;
          }
        }
      }
    }

    >.flip-card-back {
      position: absolute;
      transform: rotateY(180deg);
    }
  }

  &:before {
    position: absolute;
    z-index: 2;
    content: '';
    left: 50%;
    top: -55px;
    margin: 0 0 0 -40px;
    height: 90px;
    width: 80px;
    background: rgba(255, 255, 255, 0.2);
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.4) 100%),
      linear-gradient(to top, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 40%), linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 40%);
    border-radius: 5px;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 80%);
    opacity: 0.5;
  }

  &:after {
    position: absolute;
    content: '';
    z-index: 2;
    height: 20px;
    width: 20px;
    top: -35px;
    left: 50%;
    margin: 0 0 0 -10px;
    border-radius: 50%;
    box-shadow:
      0 0 0 5px rgba(51, 51, 51, 0.6),
      0 0 10px rgba(0, 0, 0, 0.7),
      inset 2px 2px 2px rgba(0, 0, 0, 0.5);
  }
}

@keyframes glowing {
  0% {
    background-color: rgb(var(--bs-primary-light-rgb));
    box-shadow: 0 0 15px rgb(var(--bs-primary-light-rgb));
  }

  25% {
    background-color: rgb(var(--bs-primary-dark-rgb));
    box-shadow: 0 0 15px rgb(var(--bs-primary-dark-rgb));
  }

  50% {
    background-color: rgb(var(--bs-primary-light-rgb));
    box-shadow: 0 0 15px rgb(var(--bs-primary-light-rgb));
  }

  75% {
    background-color: rgb(var(--bs-primary-dark-rgb));
    box-shadow: 0 0 15px rgb(var(--bs-primary-dark-rgb));
  }

  100% {
    background-color: rgb(var(--bs-primary-light-rgb));
    box-shadow: 0 0 15px rgb(var(--bs-primary-light-rgb));
  }
}
</style>
