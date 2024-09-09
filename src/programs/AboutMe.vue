<template>
  <div class="w-100 h-100 p-3 d-flex">
    <div ref="card" class="card flip shadow-lg m-auto w-100">
      <div class="flip-card-front">
        <header class="text-light d-flex justify-content-between p-4 pb-0">
          <img src="../assets/icons/coding.png" class="my-auto ms-3" alt="Icono fullstack developer" title="Icono fullstack developer"/>
          <label class="mt-4 mx-2 fw-bold text-truncate header-title">FULLSTACK DEVELOPER</label>
          <button
            class="btn btn-transparent btn-flip text-light me-3 my-auto"
            title="Voltear la targeta"
            @click="flip"
          >
            <i class="fa-solid fa-repeat fa-fw"></i>
          </button>
        </header>
        <div class="card-body">
          <div ref="contentFront" class="d-flex h-100 p-4">
            <div class="photo m-auto">
              <img src="../assets/img/me.jpg" class="img-fluid" title="Yo" alt="Foto yo"/>
            </div>
            <div
              ref="descriptionFront"
              class="flex-grow-1 description mx-4 text-justify"
            >
              <h6 class="fw-bold my-2">Presentación</h6>
              <p>
                ¡Hola! Me llamo Xiaolin Jin Lin y tengo {{ years }} años. Desde
                pequeño siempre me ha atraído mucho el mundo de la tecnología. A
                los 19 años decidí a adentrarme en el mundo de la informática y
                escogí la rama de programación.
              </p>
              <br />
              <p>
                Estudie el ciclo de DAM (Desarrollo Aplicaciones
                Multiplataforma) y luego el ciclo de DAW (Desarrollo
                Aplicaciones Web) en el
                <a href="https://politecnics.barcelona/" target="_blank"
                  >Centro de Estudios Politécnicos</a
                >. Hasta ahora he aprendido mucho, y cada vez me gusta más este
                mundo y tengo muchas ganas de seguir aprendiendo.
              </p>
              <br />
              <p>
                A parte de programar, también hago danza y gracias a ello he
                podido adquirir disciplina y constancia para poder mejorar tanto
                el ámbito personal como el ámbito profesional.
              </p>
              <br />
              <p>
                Me gusta trabajar en equipo, tengo iniciativa y ofrezco ideas y
                soluciones efectivas para el proyecto. A la vez me gusta ayudar,
                compartir experiencias y conocimientos con otras personas.
              </p>
                <br/>
                <h6 class="fw-bold">Idiomas</h6>
                <p>Castellano (Nativo), Catalán (Nativo), Inglés (Medio), Chino (Nativo).</p>
                <br/>
                <h6 class="fw-bold">Hobbies</h6>
                <p>Baile.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flip-card-back d-flex flex-column">
        <header class="text-light d-flex justify-content-end p-4 pb-0">
          <button
            class="btn btn-transparent btn-flip text-light me-3 my-auto"
            title="Voltear la targeta"
            @click="flip"
          >
            <i class="fa-solid fa-repeat fa-fw"></i>
          </button>
        </header>
        <div class="card-body flex-grow-1">
          <div ref="contentBack" class="d-flex h-100 p-4">
            <div class="logo d-flex flex-column m-auto">
              <img src="../svg/xiao-theme-2.svg" class="img-fluid m-auto" />
              <label class="fw-bold text-center my-2">Redes sociales</label>
              <div class="d-flex justify-content-center">
                <a
                  href="https://www.instagram.com/_xiao_97_/"
                  target="_blank"
                  title="Instgram"
                  ><img src="../assets/icons/instagram.png" alt="instagram"
                /></a>
                <a
                  href="https://www.linkedin.com/in/xiaolin-jin-lin-017287173/"
                  target="_blank"
                  title="Linkedin"
                  ><img src="../assets/icons/linkedin.png" alt="linkedin"
                /></a>
                <a
                  href="https://github.com/x140l1n"
                  target="_blank"
                  title="GitHub"
                  ><img src="../assets/icons/github.png" alt="github"
                /></a>
                <a
                  href="mailto:info@xiaojl.dev"
                  title="Enviar correo"
                  ><img src="../assets/icons/email.png" alt="email"
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Program from "./Program";
import Component from "vue-class-component";
import icon_about_me from "../assets/icons/about-me.png";
import Vue from "vue";

@Component({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.init();
  },
  data() {
    return {};
  },
  methods: {
    init() {
        setTimeout(() => {
          this.flip();
        }, 10);
    },
    onResize() {
      if (this.$el.clientWidth < 800) {
        this.$refs.contentFront.classList.remove("p-4");
        this.$refs.contentBack.classList.remove("p-4");
        this.$refs.contentFront.classList.add("flex-column", "p-1");
        this.$refs.contentBack.classList.add("flex-column", "p-1");
        this.$refs.descriptionFront.classList.add("mt-5");
      } else {
        this.$refs.contentFront.classList.add("p-4");
        this.$refs.contentBack.classList.add("p-4");
        this.$refs.contentFront.classList.remove("flex-column", "p-1");
        this.$refs.contentBack.classList.remove("flex-column", "p-1");
        this.$refs.descriptionFront.classList.remove("mt-5");
      }
    },
    flip() {
      this.$refs.card.classList.toggle("flip");
    },
  },
  computed: {
    years() {
      var today = new Date();
      var birthDate = new Date("1997-10-26");
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age;
    },
  },
})
export default class AboutMe extends Program {
  //Initialize the variables of superclass Program.
  created() {
    this.title = "¿Quién soy?";
    this.width_default = 550;
    this.height_default = 400;
    this.maximized_default = true;
    this.x_default =
      Vue.prototype.$widthScreenContent / 2 - this.width_default / 2;
    this.y_default =
      Vue.prototype.$heightScreenContent / 2 - this.height_default / 2;
    this.icon_src = icon_about_me;
    this.window = null;
  }
}
</script>

<style scoped>
header img {
  width: 8vw;
}
.photo {
  height: 100%;
  min-width: 100px;
  max-width: 270px;
}
.photo > img {
  object-fit: cover;
  border-radius: 25px;
}
.header-title {
  font-size: 3.6vw;
}
@media screen and (min-width: 800px) {
  .header-title {
    font-size: 26px !important;
  }

  header img {
    width: 50px !important;
  }

  .btn-flip {
    font-size: 18px !important;
  }
}
.logo {
  height: 100%;
  width: 100%;
  min-width: 100px;
  max-width: 250px;
}
.logo > img {
  object-fit: cover;
}
.card {
  border-radius: 50px;
  max-width: 1200px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.card.flip {
  transform: rotateY(180deg);
}
.card header {
  position: relative;
  background: rgb(var(--bs-primary-rgb));
  height: 100px;
  width: 100%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom: 2px solid rgba(var(--bs-primary-rgb), 0.5);
  border-top: 1px solid rgba(var(--bs-primary-rgb), 0.8);
  box-shadow: inset 0 1px 0 0 rgb(var(--bs-primary-rgb) / 80%),
    0 1px 2px rgb(0 0 0 / 40%);
  opacity: 0.9;
}
.flip-card-front,
.flip-card-back {
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateX(0deg);
}

.flip-card-back {
  position: absolute;
  transform: rotateY(180deg);
}

.card:before {
  position: absolute;
  z-index: 2;
  content: "";
  left: 50%;
  top: -70px;
  margin: 0 0 0 -40px;
  height: 100px;
  width: 80px;
  background: rgba(255, 255, 255, 0.2);
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.1) 50%,
      rgba(255, 255, 255, 0.4) 100%
    ),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 40%
    ),
    linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0) 40%
    );
  border-radius: 6px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 80%);
  opacity: 0.5;
}

.card:after {
  position: absolute;
  content: "";
  z-index: 2;
  height: 20px;
  width: 20px;
  top: -55px;
  left: 50%;
  margin: 0 0 0 -10px;
  border-radius: 50%;
  box-shadow: 0 0 0 5px rgb(51 51 51 / 60%), 0 0 10px rgb(0 0 0 / 70%),
    inset 2px 2px 2px rgb(0 0 0 / 50%);
}

.card header:before {
  position: absolute;
  z-index: 1;
  content: "";
  left: 50%;
  top: 22px;
  margin: 0 0 0 -50px;
  height: 15px;
  width: 100px;
  border-radius: 25px;
  background-color: #333;
  box-shadow: inset 1px 1px 0 1px rgb(0 0 0 / 30%),
    inset -1px -1px 0 0 rgb(255 255 255 / 50%);
}

.description p {
  margin: 0;
  text-align: justify;
  font-size: 0.8rem;
}

.btn-flip {
  font-size: 3.6vw;
  animation: glowing 1300ms infinite;
}

@keyframes glowing {
  0% {
    background-color: #0091b2;
    box-shadow: 0 0 3px #0091b2;
  }
  50% {
    background-color: #21c7ed;
    box-shadow: 0 0 15px #21c7ed;
  }
  100% {
    background-color: #0091b2;
    box-shadow: 0 0 3px #0091b2;
  }
}
</style>
