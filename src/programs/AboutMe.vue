<template>
  <div class="w-100 h-100 overflow-auto p-4" ref="content">
    <div class="card flip back shadow-lg" ref="card">
      <div class="flip-card-front">
        <header class="text-light d-flex gap-4 justify-content-between align-items-center">
          <img src="@assets/icons/coding.png" title="Icono fullstack developer" alt="Icono fullstack developer" ref="iconFullStackDeveloper" draggable="false" />
          <h4 class="m-0">FULLSTACK DEVELOPER</h4>
          <button class="btn btn-transparent btn-flip text-light" type="button" title="Voltear la targeta" @click="flip" aria-label="Voltear la targeta">
            <i class="fa-solid fa-repeat fa-fw"></i>
          </button>
        </header>
        <div class="card-body p-0">
          <div class="d-flex gap-4 overflow-hidden p-4" ref="contentFront">
            <div class="photo" ref="photo">
              <img class="img-fluid" src="@assets/img/me.jpg" title="Yo" alt="Yo" />
            </div>
            <div class="flex-grow-1 presentation" ref="presentationFront">
              <h6 class="fw-bold my-2">Presentación</h6>
              <p>
                ¡Hola! Soy Xiaolin Jin Lin y tengo {{ getYearsOld }} años. Desde pequeño siempre me ha atraído el mundo de la tecnología, y a los 19 decidí meterme de lleno en la informática,
                eligiendo la programación como mi camino.
              </p>
              <p>
                Estudié DAM (Desarrollo de Aplicaciones Multiplataforma) y luego DAW (Desarrollo de Aplicaciones Web) en el
                <a href="https://politecnics.barcelona/" target="_blank">Centro de Estudios Politécnicos</a>. A lo largo de estos años, he aprendido un montón y cada día me gusta más este mundo. Tengo
                muchas ganas de seguir mejorando y aprendiendo nuevas cosas.
              </p>
              <p>
                Aparte de la programación, también me gusta la danza, y eso me ha ayudado a ser más constante, disciplinado y a fijarme en todos los detalles, algo que aplico tanto en mi vida personal
                como en la profesional.
              </p>
              <p>
                Me encanta trabajar en equipo, proponer ideas y soluciones, y siempre busco compartir lo que sé con los demás. Disfruto de crear un buen ambiente y colaborar para sacar los proyectos
                adelante.
              </p>
              <h6 class="fw-bold">Idiomas</h6>
              <p>Español (Nativo), Catalán (Nativo), Inglés (Intermedio), Chino (Intermedio). </p>
              <h6 class="fw-bold">Hobbies</h6>
              <p>Danza.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card-back d-flex flex-column">
        <header class="text-light d-flex justify-content-end align-items-center">
          <button class="btn btn-transparent btn-flip text-light align-self-end" type="button" title="Voltear la targeta" @click="flip" aria-label="Voltear la targeta">
            <i class="fa-solid fa-repeat fa-fw"></i>
          </button>
        </header>
        <div class="card-body flex-grow-1">
          <div class="d-flex flex-column justify-content-center align-items-center h-100 p-4" ref="contentBack">
            <img class="logo img-fluid" src="@svg/xiao-theme-2.svg" title="Logo Xiao" alt="Logo Xiao" ref="logo" draggable="false" />
            <p class="fw-bold text-center my-2">Redes sociales</p>
            <div class="d-flex justify-content-center">
              <a href="https://www.instagram.com/_xiao_97_/" title="Instgram" target="_blank">
                <img src="@assets/icons/instagram.png" alt="instagram" draggable="false" />
              </a>
              <a href="https://www.linkedin.com/in/xiaolin-jin-lin-017287173/" title="Linkedin" target="_blank">
                <img src="@assets/icons/linkedin.png" alt="linkedin" draggable="false" />
              </a>
              <a href="https://github.com/x140l1n" title="GitHub" target="_blank">
                <img src="@assets/icons/github.png" alt="github" draggable="false" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconAboutMe from '@assets/icons/about-me.png';
import { author } from '@root/package';

@Component({
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
    onResize() {
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
    this.title = 'Sobre mi';
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

  > img {
    object-fit: cover;
  }
}

.card {
  position: relative;
  border-radius: 25px;
  max-width: 1200px;
  margin: 30px auto;
  transition: transform 0.6s;
  transform-style: preserve-3d;

  &.flip {
    &.back {
      transform: rotateY(180deg);
    }

    > .flip-card-front,
    > .flip-card-back {
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      transform: rotateX(0deg);

      > header {
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
          top: 20px;
          margin: 0 0 0 -50px;
          height: 15px;
          width: 100px;
          border-radius: 25px;
          background-color: #333;
          box-shadow:
            inset 0 1px 0 0 rgb(var(--bs-primary-rgb) / 80%),
            0 1px 2px rgb(0 0 0 / 40%);
        }

        > .btn-flip {
          border: none;
          animation-name: glowing;
          animation-timing-function: ease-in-out;
          animation-duration: 2s;
          animation-iteration-count: infinite;
          animation-direction: alternate;
        }
      }

      > .card-body {
        font-size: 0.9rem;

        .photo {
          min-width: 200px;
          max-width: 280px;
          width: 100%;

          &.photo-sm,
          &.photo-xs {
            max-width: 100%;
            height: 500px;

            > img {
              width: 100%;
              object-fit: cover;
            }
          }

          > img {
            object-fit: cover;
            border-radius: 15px;
            height: 100%;
          }

          &.photo-sm > img {
            object-position: 0px -100px;
          }

          &.photo-xs > img {
            object-position: 0px 0px;
          }
        }
      }
    }

    > .flip-card-back {
      position: absolute;
      transform: rotateY(180deg);
    }
  }

  &:before {
    position: absolute;
    z-index: 2;
    content: '';
    left: 50%;
    top: -60px;
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
