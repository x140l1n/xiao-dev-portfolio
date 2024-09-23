<template>
  <div
    ref="content"
    v-init-animation
    class="row row-cols-1 g-4 overflow-x-hidden overflow-y-auto h-100 m-0 p-2"
  >
    <div
      class="col"
      data-animation="slide-right"
    >
      <div class="card mx-auto shadow">
        <div class="card-body d-flex">
          <div class="logo m-auto">
            <img
              class="img-fluid"
              src="@assets/icons/logo_arkanoid.png"
              title="Arkanoid"
              alt="Logo Arkanoid"
              draggable="false"
            >
          </div>
          <div class="flex-grow-1 description p-4">
            <h5 class="fw-bold">
              Arkanoid
            </h5>
            <p>Juego arcade de plataforma para las puertas abiertas del Centre D'Estudis Politècnics.</p>
            <div class="d-flex flex-wrap my-4">
              <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
              <button
                @click="onOpenBrowser('https://x140l1n.github.io/arkanoid/')"
                class="mx-2"
                title="Live demo Arkanoid"
              >
                <img
                  class="me-2"
                  src="@assets/icons/play.png"
                  title="Live demo Arkanoid"
                  alt="Live demo Arkanoid"
                  draggable="false"
                >
                Live demo Arkanoid
              </button>
              <a
                class="mx-2"
                href="https://github.com/x140l1n/arkanoid"
                title="GitHub Arkanoid"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/github.png"
                  title="GitHub Arkanoid"
                  alt="GitHub Arkanoid"
                  draggable="false"
                >
                GitHub Arkanoid
              </a>
            </div>
            <div class="d-flex flex-wrap justify-content-end gap-2">
              <span class="badge badge-pill">HTML</span>
              <span class="badge badge-pill">CSS</span>
              <span class="badge badge-pill">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col"
      data-animation="slide-left"
    >
      <div class="card mx-auto shadow">
        <div class="card-body d-flex">
          <div class="logo m-auto">
            <img
              class="img-fluid"
              src="@assets/icons/logo_ibroggi.png"
              title="IBroggi"
              alt="Logo IBroggi"
              draggable="false"
            >
          </div>
          <div class="flex-grow-1 description p-4">
            <h5 class="fw-bold">
              IBroggi 112
            </h5>
            <p>
              El proyecto es para el cliente Institut Moisès Broggi. Consiste en un simulador de llamadas de emergencia para técnicos en proceso de formación del 112, sistema de emergencias de
              Cataluña.
            </p>
            <div class="d-flex flex-wrap my-4">
              <a
                class="mx-2"
                href="https://youtu.be/kF6py0E8ma0"
                title="Vídeo IBroggi 1"
                alt="Vídeo IBroggi 1"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  title="Vídeo IBroggi 1"
                  alt="Vídeo IBroggi 1"
                  draggable="false"
                >
                Vídeo IBroggi 1
              </a>
              <a
                class="mx-2"
                href="https://youtu.be/VhKQIjMSxzg"
                title="Vídeo IBroggi 2"
                alt="Vídeo IBroggi 2"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  title="Vídeo IBroggi 2"
                  alt="Vídeo IBroggi 2"
                  draggable="false"
                >
                Vídeo IBroggi 2
              </a>
              <a
                class="mx-2"
                href="https://github.com/DevinSJ/project-broggi"
                title="GitHub IBroggi"
                alt="GitHub IBroggi"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/github.png"
                  title="GitHub IBroggi"
                  alt="GitHub IBroggi"
                  draggable="false"
                >
                GitHub IBroggi
              </a>
            </div>
            <div class="d-flex flex-wrap justify-content-end gap-2">
              <span class="badge badge-pill">HTML</span>
              <span class="badge badge-pill">CSS</span>
              <span class="badge badge-pill">JavaScript</span>
              <span class="badge badge-pill">Vue</span>
              <span class="badge badge-pill">BootstrapVue</span>
              <span class="badge badge-pill">Laravel</span>
              <span class="badge badge-pill">Eloquent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col"
      data-animation="slide-right"
    >
      <div class="card mx-auto shadow">
        <div class="card-body d-flex">
          <div class="logo m-auto">
            <img
              class="img-fluid"
              src="@assets/icons/logo_ecoarts.png"
              title="ECOARTS"
              alt="Logo ECOARTS"
              draggable="false"
            >
          </div>
          <div class="flex-grow-1 description p-4">
            <h5 class="fw-bold">
              EcoArts
            </h5>
            <p>
              EcoArts es un juego de trivia sobre el medio ambiente para niños. El objetivo del juego es ayudar a los niños a comprender la importancia de cuidar el medio ambiente de una forma
              divertida y entretenida.
            </p>
            <br>
            <p>
              El jugador tiene que recorrer un mapa donde cada punto hay un monstruo, y para derrotarlo tendrá que responder las preguntas de manera correcta. ¡OJO, si respondes mal, se te quitará una
              vida!
            </p>
            <br>
            <p>El proyecto consta de 2 partes: escritorio y android.</p>
            <br>
            <p>La parte de escritorio es donde gestionaremos las preguntas y los personajes del juego. La parte de android es el juego en sí.</p>
            <div class="d-flex flex-wrap my-4">
              <a
                class="mx-2"
                href="https://www.youtube.com/watch?v=wfosd7CLt9s&ab_channel=DevinSchlippe"
                title="Vídeo EcoArts android"
                alt="Vídeo EcoArts android"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  title="Vídeo EcoArts android"
                  alt="Vídeo EcoArts android"
                  draggable="false"
                >
                Vídeo EcoArts android
              </a>
              <a
                class="mx-2"
                href="https://www.youtube.com/watch?v=b-FnBSv8TRY&ab_channel=DevinSchlippe"
                title="Vídeo EcoArts escritorio"
                alt="Vídeo EcoArts escritorio"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  title="Vídeo EcoArts escritorio"
                  alt="Vídeo EcoArts escritorio"
                  draggable="false"
                >
                Vídeo EcoArts escritorio
              </a>
              <a
                class="mx-2"
                href="https://github.com/x140l1n/ECOARTS-ANDROID"
                title="GitHub EcoArts android"
                alt="GitHub EcoArts android"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/github.png"
                  title="GitHub EcoArts android"
                  alt="GitHub EcoArts android"
                  draggable="false"
                >
                GitHub EcoArts android
              </a>
              <a
                class="mx-2"
                href="https://github.com/x140l1n/ECOARTS-DESKTOP"
                title="GitHub EcoArts android"
                alt="GitHub EcoArts android"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/github.png"
                  title="GitHub EcoArts escritorio"
                  alt="GitHub EcoArts escritorio"
                  draggable="false"
                >
                GitHub EcoArts escritorio
              </a>
            </div>
            <div class="d-flex flex-wrap justify-content-end gap-2">
              <span class="badge badge-pill">JAVA</span>
              <span class="badge badge-pill">.NET</span>
              <span class="badge badge-pill">JSON</span>
              <span class="badge badge-pill">ANDROID</span>
              <span class="badge badge-pill">Windows Forms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col"
      data-animation="slide-left"
    >
      <div class="card mx-auto shadow">
        <div class="card-body d-flex">
          <div class="logo m-auto">
            <img
              class="img-fluid"
              src="@assets/icons/logo_chrysallis.png"
              title="Chrysallis"
              alt="Logo Chrysallis"
              draggable="false"
            >
          </div>
          <div class="flex-grow-1 description p-4">
            <h5 class="fw-bold">
              Chrysallis
            </h5>
            <p>Chrysallis es una ONG que ayuda a familias de niños y adolescentes transexuales. Este proyecto se ha creado para ayudarles a gestionar eventos sociales de la asociación.</p>
            <br>
            <p>El proyecto consta de 2 partes: escritorio y android.</p>
            <p>La parte de escritorio es donde van a gestionar los socios y los eventos de la asociación. La parte de android lo usarán los socios donde podrán consultar y apuntarse a eventos.</p>
            <div class="d-flex flex-wrap my-4">
              <a
                class="mx-2"
                href="https://www.youtube.com/watch?v=O_hz8wCR060&ab_channel=DanielSorianoBarber%C3%A1n"
                title="Vídeo Chrysallis android"
                alt="Vídeo Chrysallis android"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  title="Vídeo Chrysallis android"
                  alt="Vídeo Chrysallis android"
                  draggable="false"
                >
                Vídeo Chrysallis android
              </a>
              <a
                class="mx-2"
                href="https://www.youtube.com/watch?v=l6Po2-P1JEg&ab_channel=DanielSorianoBarber%C3%A1n"
                title="Vídeo Chrysallis android"
                alt="Vídeo Chrysallis android"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  title="Vídeo Chrysallis escritorio"
                  alt="Vídeo Chrysallis escritorio"
                  draggable="false"
                >
                Vídeo Chrysallis escritorio
              </a>
            </div>
            <div class="d-flex flex-wrap justify-content-end gap-2">
              <span class="badge badge-pill">JAVA</span>
              <span class="badge badge-pill">.NET</span>
              <span class="badge badge-pill">ADO.NET</span>
              <span class="badge badge-pill">ANDROID</span>
              <span class="badge badge-pill">Windows Forms</span>
              <span class="badge badge-pill">SQL Server</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col"
      data-animation="slide-right"
    >
      <div class="card mx-auto shadow">
        <div class="card-body d-flex">
          <div class="logo m-auto">
            <img
              class="img-fluid"
              src="@assets/icons/logo_space_invaders.png"
              title="Space Invaders"
              alt="Logo Space Invaders"
              draggable="false"
            >
          </div>
          <div class="flex-grow-1 description p-4">
            <h5 class="fw-bold">
              Space Invaders
            </h5>
            <p>Juego de batallas de naves creado por mí usando la librería libGDX.</p>
            <p>El juego es compatible con Android y Windows.</p>
            <div class="d-flex flex-wrap my-4">
              <a
                class="mx-2"
                href="https://www.youtube.com/watch?v=LxX2LFaD8xw&ab_channel=XiaolinJinLin"
                title="Vídeo Space Invaders"
                alt="Vídeo Space Invaders"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  title="Vídeo Space Invaders"
                  alt="Vídeo Space Invaders"
                  draggable="false"
                >
                Vídeo Space Invaders
              </a>
              <a
                class="mx-2"
                href="https://github.com/x140l1n/SPACE-INVADERS-GDX"
                title="GitHub Space Invaders"
                alt="GitHub Space Invaders"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/github.png"
                  title="GitHub Space Invaders"
                  alt="GitHub Space Invaders"
                  draggable="false"
                >
                GitHub Space Invaders
              </a>
            </div>
            <div class="d-flex flex-wrap justify-content-end gap-2">
              <span class="badge badge-pill">JAVA</span>
              <span class="badge badge-pill">LIBGDX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="col"
      data-animation="zoom-out"
    >
      <div class="card more mx-auto border-0 bg-transparent">
        <div class="card-body d-flex flex-column justify-content-center align-items-center text-center">
          <p class="fs-4">
            Para ver más proyectos, visita mi perfil de GitHub 😎
          </p>
          <a
            href="https://github.com/x140l1n/"
            title="GitHub"
            aria-label="Mi perfil GitHub"
            target="_blank"
            draggable="false"
          >
            <img
              src="@assets/icons/github_96px.png"
              title="Github"
              alt="GitHub"
              draggable="false"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconProjects from '@assets/icons/projects.png';

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
    init() {},
    onResize() {
      if (this.$el.clientWidth < 576) {
        this.$refs.content.querySelectorAll('.card:not(.more) > .card-body').forEach((element) => element.classList.add('flex-column'));
      } else {
        this.$refs.content.querySelectorAll('.card:not(.more) > .card-body').forEach((element) => element.classList.remove('flex-column'));
      }
    },
    onOpenBrowser(url) {
      this.$urlToOpen = url;
    }
  }
})
export default class Projects extends Program {
  created() {
    this.title = 'Proyectos';
    this.widthDefault = 550;
    this.heightDefault = 400;
    this.maximizedDefault = true;
    this.xDefault = this.$widthScreenContent / 2 - this.widthDefault / 2;
    this.yDefault = this.$heightScreenContent / 2 - this.heightDefault / 2;
    this.iconSrc = IconProjects;
    this.window = null;
  }
}
</script>

<style lang="scss" scoped>
.card {
  max-width: 800px;
  width: 100%;
  height: 100%;

  > .card-body {
    width: 100%;
    height: 100%;

    > .logo {
      width: 100%;
      min-width: 150px;
      max-width: 200px;
    }

    > .description p {
      margin: 0;
      font-size: 0.8rem;
    }

    > .description a {
      color: #1a233a;
      font-size: 0.9rem;
      text-decoration: none;
    }

    > .description button {
      color: #1a233a;
      font-size: 0.9rem;
      background-color: transparent;
      border: none;
      padding: 0;
    }

    > .description .badge {
      color: #fff;
      background: linear-gradient(120deg, #00b5fd 0%, #0047b1 100%);
    }
  }
}
</style>
