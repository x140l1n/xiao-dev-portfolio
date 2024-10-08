<template>
  <section
    ref="content"
    v-init-animation
    class="row row-cols-1 g-4 overflow-x-hidden overflow-y-auto h-100 m-0 px-2"
  >
    <div
      class="col"
      data-animation="slide-right"
    >
      <article class="card mx-auto shadow">
        <div class="card-body d-flex">
          <div class="logo m-auto">
            <img
              class="img-fluid"
              src="@assets/icons/logo_arkanoid.png"
              title="Arkanoid"
              alt="Arkanoid Logo"
              draggable="false"
            >
          </div>
          <div class="flex-grow-1 description p-4">
            <h5 class="fw-bold">
              Arkanoid
            </h5>
            <p>Platform arcade game created for the open doors event at Centre d'Estudis Politècnics.</p>
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
      </article>
    </div>
    <div
      class="col"
      data-animation="slide-left"
    >
      <article class="card mx-auto shadow">
        <div class="card-body d-flex">
          <div class="logo m-auto">
            <img
              class="img-fluid"
              src="@assets/icons/logo_ibroggi.png"
              title="IBroggi"
              alt="IBroggi Logo"
              draggable="false"
            >
          </div>
          <div class="flex-grow-1 description p-4">
            <h5 class="fw-bold">
              IBroggi 112
            </h5>
            <p>
              This project is for the client Institut Moisès Broggi. It is a call simulator for emergency technicians
              in training for 112, the emergency system in Catalonia.
            </p>
            <div class="d-flex flex-wrap my-4">
              <a
                class="mx-2"
                href="https://youtu.be/kF6py0E8ma0"
                title="IBroggi Video 1"
                alt="IBroggi Video 1"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  title="IBroggi Video 1"
                  alt="IBroggi Video 1"
                  draggable="false"
                >
                IBroggi Video 1
              </a>
              <a
                class="mx-2"
                href="https://youtu.be/VhKQIjMSxzg"
                title="IBroggi Video 2"
                alt="IBroggi Video 2"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  title="IBroggi Video 2"
                  alt="IBroggi Video 2"
                  draggable="false"
                >
                IBroggi Video 2
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
      </article>
    </div>
    <div
      class="col"
      data-animation="slide-right"
    >
      <article class="card mx-auto shadow">
        <div class="card-body d-flex">
          <div class="logo m-auto">
            <img
              class="img-fluid"
              src="@assets/icons/logo_ecoarts.png"
              title="ECOARTS"
              alt="ECOARTS Logo"
              draggable="false"
            >
          </div>
          <div class="flex-grow-1 description p-4">
            <h5 class="fw-bold">
              EcoArts
            </h5>
            <p>
              EcoArts is an environmental trivia game for children. The goal of the game is to help kids understand
              the importance of taking care of the environment in a fun and entertaining way.
            </p>
            <br>
            <p>
              The player moves across a map, and at each point, there is a monster. To defeat it, the player has to
              answer questions correctly. Be careful, if you answer wrong, you will lose a life!
            </p>
            <br>
            <p>The project consists of 2 parts: desktop and android.</p>
            <br>
            <p>
              The desktop part is where you manage the game's questions and characters. The android part is the game
              itself.
            </p>
            <div class="d-flex flex-wrap my-4">
              <a
                class="mx-2"
                href="https://www.youtube.com/watch?v=wfosd7CLt9s&ab_channel=DevinSchlippe"
                title="EcoArts android video"
                alt="EcoArts android video"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  title="EcoArts android video"
                  alt="EcoArts android video"
                  draggable="false"
                >
                EcoArts android video
              </a>
              <a
                class="mx-2"
                href="https://www.youtube.com/watch?v=b-FnBSv8TRY&ab_channel=DevinSchlippe"
                title="EcoArts desktop video"
                alt="EcoArts desktop video"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  title="EcoArts desktop video"
                  alt="EcoArts desktop video"
                  draggable="false"
                >
                EcoArts desktop video
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
                title="GitHub EcoArts desktop"
                alt="GitHub EcoArts desktop"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/github.png"
                  title="GitHub EcoArts desktop"
                  alt="GitHub EcoArts desktop"
                  draggable="false"
                >
                GitHub EcoArts desktop
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
      </article>
    </div>
    <div
      class="col"
      data-animation="slide-left"
    >
      <article class="card mx-auto shadow">
        <div class="card-body d-flex">
          <div class="logo m-auto">
            <img
              class="img-fluid"
              src="@assets/icons/logo_chrysallis.png"
              title="Chrysallis"
              alt="Chrysallis Logo"
              draggable="false"
            >
          </div>
          <div class="flex-grow-1 description p-4">
            <h5 class="fw-bold">
              Chrysallis
            </h5>
            <p>
              Chrysallis is an NGO that helps families of transgender children and teenagers. This project was created
              to help them manage social events for the association.
            </p>
            <br>
            <p>The project consists of 2 parts: desktop and android.</p>
            <p>
              The desktop part is where they manage members and events for the association. The android part will be
              used by members to consult and sign up for events.
            </p>
            <div class="d-flex flex-wrap my-4">
              <a
                class="mx-2"
                href="https://www.youtube.com/watch?v=O_hz8wCR060&ab_channel=DanielSorianoBarber%C3%A1n"
                title="Chrysallis android video"
                alt="Chrysallis android video"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  title="Chrysallis android video"
                  alt="Chrysallis android video"
                  draggable="false"
                >
                Chrysallis android video
              </a>
              <a
                class="mx-2"
                href="https://www.youtube.com/watch?v=l6Po2-P1JEg&ab_channel=DanielSorianoBarber%C3%A1n"
                title="Chrysallis desktop video"
                alt="Chrysallis desktop video"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  title="Chrysallis desktop video"
                  alt="Chrysallis desktop video"
                  draggable="false"
                >
                Chrysallis desktop video
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
      </article>
    </div>
    <div
      class="col"
      data-animation="slide-right"
    >
      <article class="card mx-auto shadow">
        <div class="card-body d-flex">
          <div class="logo m-auto">
            <img
              class="img-fluid"
              src="@assets/icons/logo_space_invaders.png"
              title="Space Invaders"
              alt="Space Invaders Logo"
              draggable="false"
            >
          </div>
          <div class="flex-grow-1 description p-4">
            <h5 class="fw-bold">
              Space Invaders
            </h5>
            <p>Spaceship battle game created by me using the libGDX library.</p>
            <p>The game is compatible with Android and Windows.</p>
            <div class="d-flex flex-wrap my-4">
              <a
                class="mx-2"
                href="https://www.youtube.com/watch?v=LxX2LFaD8xw&ab_channel=XiaolinJinLin"
                title="Space Invaders video"
                alt="Space Invaders video"
                role="button"
              >
                <img
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  title="Space Invaders video"
                  alt="Space Invaders video"
                  draggable="false"
                >
                Space Invaders video
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
      </article>
    </div>
    <div
      class="col"
      data-animation="zoom-out"
    >
      <article class="card more mx-auto border-0 bg-transparent">
        <div class="card-body d-flex flex-column justify-content-center align-items-center text-center">
          <p class="fs-4">
            To see more projects, visit my GitHub profile 😎
          </p>
          <a
            href="https://github.com/x140l1n"
            title="GitHub"
            aria-label="My GitHub profile"
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
      </article>
    </div>
  </section>
</template>

<script>
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconProjects from '@assets/icons/projects.png';

@Component({
  name: 'Projects',
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
    init() { },
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
    this.title = 'Projects';
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

  >.card-body {
    width: 100%;
    height: 100%;

    >.logo {
      width: 100%;
      min-width: 150px;
      max-width: 200px;
    }

    >.description p {
      margin: 0;
      font-size: 0.8rem;
    }

    >.description a {
      color: #1a233a;
      font-size: 0.9rem;
      text-decoration: none;
    }

    >.description button {
      color: #1a233a;
      font-size: 0.9rem;
      background-color: transparent;
      border: none;
      padding: 0;
    }

    >.description .badge {
      color: #fff;
      background: linear-gradient(120deg, #00b5fd 0%, #0047b1 100%);
    }
  }
}
</style>
