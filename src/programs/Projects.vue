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
            <p>{{ $t ? $t('projects.descriptions.arkanoid') : 'Platform arcade game created for the open doors event at Centre d\'Estudis Politècnics.' }}</p>
            <div class="d-flex flex-wrap my-4">
              <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
              <button
                @click="onOpenBrowser('https://x140l1n.github.io/arkanoid/')"
                :title="$t ? $t('projects.liveDemo', { name: 'Arkanoid' }) : 'Live demo Arkanoid'"
                class="mx-2"
              >
                <img
                  :title="$t ? $t('projects.liveDemo', { name: 'Arkanoid' }) : 'Live demo Arkanoid'"
                  :alt="$t ? $t('projects.liveDemo', { name: 'Arkanoid' }) : 'Live demo Arkanoid'"
                  class="me-2"
                  src="@assets/icons/play.png"
                  draggable="false"
                >
                {{ $t ? $t('projects.liveDemo', { name: 'Arkanoid' }) : 'Live demo Arkanoid' }}
              </button>
              <a
                :title="$t ? $t('projects.githubLinks', { name: 'Arkanoid' }) : 'GitHub Arkanoid'"
                class="mx-2"
                href="https://github.com/x140l1n/arkanoid"
                role="button"
              >
                <img
                  :title="$t ? $t('projects.githubLinks', { name: 'Arkanoid' }) : 'GitHub Arkanoid'"
                  :alt="$t ? $t('projects.githubLinks', { name: 'Arkanoid' }) : 'GitHub Arkanoid'"
                  class="me-2"
                  src="@assets/icons/github.png"
                  draggable="false"
                >
                {{ $t ? $t('projects.githubLinks', { name: 'Arkanoid' }) : 'GitHub Arkanoid' }}
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
              {{ $t ? $t('projects.descriptions.ibroggi') : 
                'This project is for the client Institut Moisès Broggi. It is a call simulator for emergency technicians in training for 112, the emergency system in Catalonia.' }}
            </p>
            <div class="d-flex flex-wrap my-4">
              <a
                :title="$t ? $t('projects.videos.ibroggiVideo1') : 'IBroggi Video 1'"
                :alt="$t ? $t('projects.videos.ibroggiVideo1') : 'IBroggi Video 1'"
                class="mx-2"
                href="https://youtu.be/kF6py0E8ma0"
                role="button"
              >
                <img
                  :title="$t ? $t('projects.videos.ibroggiVideo1') : 'IBroggi Video 1'"
                  :alt="$t ? $t('projects.videos.ibroggiVideo1') : 'IBroggi Video 1'"
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  draggable="false"
                >
                {{ $t ? $t('projects.videos.ibroggiVideo1') : 'IBroggi Video 1' }}
              </a>
              <a
                :title="$t ? $t('projects.videos.ibroggiVideo2') : 'IBroggi Video 2'"
                :alt="$t ? $t('projects.videos.ibroggiVideo2') : 'IBroggi Video 2'"
                class="mx-2"
                href="https://youtu.be/VhKQIjMSxzg"
                role="button"
              >
                <img
                  :title="$t ? $t('projects.videos.ibroggiVideo2') : 'IBroggi Video 2'"
                  :alt="$t ? $t('projects.videos.ibroggiVideo2') : 'IBroggi Video 2'"
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  draggable="false"
                >
                {{ $t ? $t('projects.videos.ibroggiVideo2') : 'IBroggi Video 2' }}
              </a>
              <a
                :title="$t ? $t('projects.githubLinks.ibroggi') : 'GitHub IBroggi'"
                :alt="$t ? $t('projects.githubLinks.ibroggi') : 'GitHub IBroggi'"
                class="mx-2"
                href="https://github.com/DevinSJ/project-broggi"
                role="button"
              >
                <img
                  :title="$t ? $t('projects.githubLinks.ibroggi') : 'GitHub IBroggi'"
                  :alt="$t ? $t('projects.githubLinks.ibroggi') : 'GitHub IBroggi'"
                  class="me-2"
                  src="@assets/icons/github.png"
                  draggable="false"
                >
                {{ $t ? $t('projects.githubLinks.ibroggi') : 'GitHub IBroggi' }}
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
              {{ $t ? $t('projects.descriptions.ecoarts1') : 
                'EcoArts is an environmental trivia game for children. The goal of the game is to help kids understand the importance of ' +
                'taking care of the environment in a fun and entertaining way.' }}
            </p>
            <br>
            <p>
              {{ $t ? $t('projects.descriptions.ecoarts2') : 
                'The player moves across a map, and at each point, there is a monster. To defeat it, the player has to answer questions ' +
                'correctly. Be careful, if you answer wrong, you will lose a life!' }}
            </p>
            <br>
            <p>{{ $t ? $t('projects.descriptions.ecoarts3') : 'The project consists of 2 parts: desktop and android.' }}</p>
            <br>
            <p>{{ $t ? $t('projects.descriptions.ecoarts4') : 'The desktop part is where you manage the game\'s questions and characters. The android part is the game itself.' }}</p>
            <div class="d-flex flex-wrap my-4">
              <a
                :title="$t ? $t('projects.videos.ecoartsAndroid') : 'EcoArts android video'"
                :alt="$t ? $t('projects.videos.ecoartsAndroid') : 'EcoArts android video'"
                class="mx-2"
                href="https://www.youtube.com/watch?v=wfosd7CLt9s&ab_channel=DevinSchlippe"
                role="button"
              >
                <img
                  :title="$t ? $t('projects.videos.ecoartsAndroid') : 'EcoArts android video'"
                  :alt="$t ? $t('projects.videos.ecoartsAndroid') : 'EcoArts android video'"
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  draggable="false"
                >
                {{ $t ? $t('projects.videos.ecoartsAndroid') : 'EcoArts android video' }}
              </a>
              <a
                :title="$t ? $t('projects.videos.ecoartsDesktop') : 'EcoArts desktop video'"
                :alt="$t ? $t('projects.videos.ecoartsDesktop') : 'EcoArts desktop video'"
                class="mx-2"
                href="https://www.youtube.com/watch?v=b-FnBSv8TRY&ab_channel=DevinSchlippe"
                role="button"
              >
                <img
                  :title="$t ? $t('projects.videos.ecoartsDesktop') : 'EcoArts desktop video'"
                  :alt="$t ? $t('projects.videos.ecoartsDesktop') : 'EcoArts desktop video'"
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  draggable="false"
                >
                {{ $t ? $t('projects.videos.ecoartsDesktop') : 'EcoArts desktop video' }}
              </a>
              <a
                :title="$t ? $t('projects.githubLinks.ecoartsAndroid') : 'GitHub EcoArts android'"
                :alt="$t ? $t('projects.githubLinks.ecoartsAndroid') : 'GitHub EcoArts android'"
                class="mx-2"
                href="https://github.com/x140l1n/ECOARTS-ANDROID"
                role="button"
              >
                <img
                  :title="$t ? $t('projects.githubLinks.ecoartsAndroid') : 'GitHub EcoArts android'"
                  :alt="$t ? $t('projects.githubLinks.ecoartsAndroid') : 'GitHub EcoArts android'"
                  class="me-2"
                  src="@assets/icons/github.png"
                  draggable="false"
                >
                {{ $t ? $t('projects.githubLinks.ecoartsAndroid') : 'GitHub EcoArts android' }}
              </a>
              <a
                :title="$t ? $t('projects.githubLinks.ecoartsDesktop') : 'GitHub EcoArts desktop'"
                :alt="$t ? $t('projects.githubLinks.ecoartsDesktop') : 'GitHub EcoArts desktop'"
                class="mx-2"
                href="https://github.com/x140l1n/ECOARTS-DESKTOP"
                role="button"
              >
                <img
                  :title="$t ? $t('projects.githubLinks.ecoartsDesktop') : 'GitHub EcoArts desktop'"
                  :alt="$t ? $t('projects.githubLinks.ecoartsDesktop') : 'GitHub EcoArts desktop'"
                  class="me-2"
                  src="@assets/icons/github.png"
                  draggable="false"
                >
                {{ $t ? $t('projects.githubLinks.ecoartsDesktop') : 'GitHub EcoArts desktop' }}
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
              {{ $t ? $t('projects.descriptions.chrysallis1') : 
                'Chrysallis is an NGO that helps families of transgender children and teenagers. This project was created to help them manage social events for the association.' }}
            </p>
            <br>
            <p>{{ $t ? $t('projects.descriptions.chrysallis2') : 'The project consists of 2 parts: desktop and android.' }}</p>
            <p>
              {{ $t ? $t('projects.descriptions.chrysallis3') : 
                'The desktop part is where they manage members and events for the association. The android part will be used by members to consult and sign up for events.' }}
            </p>
            <div class="d-flex flex-wrap my-4">
              <a
                :title="$t ? $t('projects.videos.chrysallisAndroid') : 'Chrysallis android video'"
                :alt="$t ? $t('projects.videos.chrysallisAndroid') : 'Chrysallis android video'"
                class="mx-2"
                href="https://www.youtube.com/watch?v=O_hz8wCR060&ab_channel=DanielSorianoBarber%C3%A1n"
                role="button"
              >
                <img
                  :title="$t ? $t('projects.videos.chrysallisAndroid') : 'Chrysallis android video'"
                  :alt="$t ? $t('projects.videos.chrysallisAndroid') : 'Chrysallis android video'"
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  draggable="false"
                >
                {{ $t ? $t('projects.videos.chrysallisAndroid') : 'Chrysallis android video' }}
              </a>
              <a
                :title="$t ? $t('projects.videos.chrysallisDesktop') : 'Chrysallis desktop video'"
                :alt="$t ? $t('projects.videos.chrysallisDesktop') : 'Chrysallis desktop video'"
                class="mx-2"
                href="https://www.youtube.com/watch?v=l6Po2-P1JEg&ab_channel=DanielSorianoBarber%C3%A1n"
                role="button"
              >
                <img
                  :title="$t ? $t('projects.videos.chrysallisDesktop') : 'Chrysallis desktop video'"
                  :alt="$t ? $t('projects.videos.chrysallisDesktop') : 'Chrysallis desktop video'"
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  draggable="false"
                >
                {{ $t ? $t('projects.videos.chrysallisDesktop') : 'Chrysallis desktop video' }}
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
            <p>{{ $t ? $t('projects.descriptions.spaceShooter') : 'Spaceship battle game created by me using the libGDX library.' }}</p>
            <p>{{ $t ? $t('projects.descriptions.spaceShooterCompat') : 'The game is compatible with Android and Windows.' }}</p>
            <div class="d-flex flex-wrap my-4">
              <a
                :title="$t ? $t('projects.videos.spaceInvaders') : 'Space Invaders video'"
                :alt="$t ? $t('projects.videos.spaceInvaders') : 'Space Invaders video'"
                class="mx-2"
                href="https://www.youtube.com/watch?v=LxX2LFaD8xw&ab_channel=XiaolinJinLin"
                role="button"
              >
                <img
                  :title="$t ? $t('projects.videos.spaceInvaders') : 'Space Invaders video'"
                  :alt="$t ? $t('projects.videos.spaceInvaders') : 'Space Invaders video'"
                  class="me-2"
                  src="@assets/icons/youtube.png"
                  draggable="false"
                >
                {{ $t ? $t('projects.videos.spaceInvaders') : 'Space Invaders video' }}
              </a>
              <a
                :title="$t ? $t('projects.githubLinks.spaceInvaders') : 'GitHub Space Invaders'"
                :alt="$t ? $t('projects.githubLinks.spaceInvaders') : 'GitHub Space Invaders'"
                class="mx-2"
                href="https://github.com/x140l1n/SPACE-INVADERS-GDX"
                role="button"
              >
                <img
                  :title="$t ? $t('projects.githubLinks.spaceInvaders') : 'GitHub Space Invaders'"
                  :alt="$t ? $t('projects.githubLinks.spaceInvaders') : 'GitHub Space Invaders'"
                  class="me-2"
                  src="@assets/icons/github.png"
                  draggable="false"
                >
                {{ $t ? $t('projects.githubLinks.spaceInvaders') : 'GitHub Space Invaders' }}
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
            {{ $t ? $t('projects.moreProjects') : 'To see more projects, visit my GitHub profile 😎' }}
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
    onWindowResize() {
      if (!this.$refs.content) {
        return;
      }

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
    this.title = this.$t ? this.$t('projects.title') : 'Projects';
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
