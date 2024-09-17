<template>
  <div ref="content" class="row row-cols-1 overflow-x-hidden overflow-y-auto h-100 m-0 p-2" v-init-animation="{ threshold: 0.2 }">
    <div data-animation="slide-right" class="col">
      <div class="card mx-auto shadow">
        <div class="card-body d-flex">
          <div class="logo m-auto">
            <img src="@assets/icons/logo_arkanoid.png" alt="Logo Arkanoid" title="Arkanoid" class="img-fluid" draggable="false" />
          </div>
          <div class="flex-grow-1 description p-4">
            <h5 class="fw-bold">Arkanoid</h5>
            <p>
              Juego arcade de plataforma para las puertas abiertas del Centre D'Estudis Politècnics.
            </p>
            <div class="d-flex flex-wrap mt-4">
              <a role="button" @click="openBrowser('https://x140l1n.github.io/Arkanoid/')" class="mx-2" alt="Jugar arkanoid" title="Jugar arkanoid">
                <img src="@assets/icons/play.png" alt="Jugar arkanoid" class="me-2" title="Jugar arkanoid" draggable="false" />
                Jugar
              </a>
              <a href="https://github.com/x140l1n/Arkanoid" target="_blank" class="mx-2" alt="GitHub arkanoid" title="GitHub arkanoid">
                <img src="@assets/icons/github.png" alt="GitHub arkanoid" class="me-2" title="GitHub arkanoid" draggable="false" />
                GitHub arkanoid
              </a>
            </div>
            <div class="d-flex flex-wrap mt-4 float-end">
              <span class="badge badge-pill">HTML</span>
              <span class="badge badge-pill">CSS</span>
              <span class="badge badge-pill">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-animation="slide-left" class="col">
      <div class="card mx-auto shadow">
        <div class="card-body d-flex">
          <div class="logo m-auto">
            <img src="@assets/icons/logo_ibroggi.png" alt="Logo IBroggi" title="IBroggi" class="img-fluid" draggable="false" />
          </div>
          <div class="flex-grow-1 description p-4">
            <h5 class="fw-bold">IBroggi 112</h5>
            <p>
              El proyecto es para el cliente Institut Moisès Broggi. Consiste en un simulador de llamadas de emergencia para técnicos en proceso de formación del 112, sistema de emergencias de
              Cataluña.
            </p>
            <div class="d-flex flex-wrap mt-4">
              <a href="https://youtu.be/kF6py0E8ma0" target="_blank" class="mx-2" alt="Vídeo ibroggi 1" title="Vídeo ibroggi 1">
                <img src="@assets/icons/youtube.png" alt="Vídeo ibroggi 1" class="me-2" title="Vídeo ibroggi 1" draggable="false" />
                Vídeo ibroggi 1
              </a>
              <a href="https://youtu.be/VhKQIjMSxzg" target="_blank" class="mx-2" alt="Vídeo ibroggi 2" title="Vídeo ibroggi 2">
                <img src="@assets/icons/youtube.png" alt="Vídeo ibroggi 2" class="me-2" title="Vídeo ibroggi 2" draggable="false" />
                Vídeo ibroggi 2
              </a>
              <a href="https://github.com/DevinSJ/project-broggi" target="_blank" class="mx-2" alt="GitHub ibroggi" title="GitHub ibroggi">
                <img src="@assets/icons/github.png" alt="GitHub ibroggi" class="me-2" title="GitHub ibroggi" draggable="false" />
                GitHub ibroggi
              </a>
            </div>
            <div class="d-flex flex-wrap mt-4 float-end">
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
    <div data-animation="slide-right" class="col">
      <div class="card mx-auto shadow">
        <div class="card-body d-flex">
          <div class="logo m-auto">
            <img src="@assets/icons/logo_ecoarts.png" alt="Logo ECOARTS" title="ECOARTS" class="img-fluid" draggable="false" />
          </div>
          <div class="flex-grow-1 description p-4">
            <h5 class="fw-bold">Ecoarts</h5>
            <p>
              Ecoarts es un juego de trivia sobre el medio ambiente para niños. El objetivo del juego es ayudar a los niños a comprender la importancia de cuidar el medio ambiente de una forma
              divertida y entretenida.
            </p>
            <br />
            <p>
              El jugador tiene que recorrer un mapa donde cada punto hay un monstruo, y para derrotarlo tendrá que responder las preguntas de manera correcta. ¡OJO, si respondes mal, se te quitará una
              vida!
            </p>
            <br />
            <p>El proyecto consta de 2 partes: escritorio y android.</p>
            <br />
            <p>
              La parte de escritorio es donde gestionaremos las preguntas y los personajes del juego. La parte de android es el juego en sí.
            </p>
            <div class="d-flex flex-wrap mt-4">
              <a href="https://www.youtube.com/watch?v=wfosd7CLt9s&ab_channel=DevinSchlippe" class="mx-2" target="_blank" alt="Vídeo ecoarts android" title="Vídeo ecoarts android">
                <img src="@assets/icons/youtube.png" alt="Vídeo ecoarts android" class="me-2" title="Vídeo ecoarts android" draggable="false" />
                Vídeo ecoarts android
              </a>
              <a href="https://www.youtube.com/watch?v=b-FnBSv8TRY&ab_channel=DevinSchlippe" class="mx-2" target="_blank" alt="Vídeo ecoarts android" title="Vídeo ecoarts android">
                <img src="@assets/icons/youtube.png" alt="Vídeo ecoarts escritorio" class="me-2" title="Vídeo ecoarts escritorio" draggable="false" />
                Vídeo ecoarts escritorio
              </a>
              <a href="https://github.com/x140l1n/ECOARTS-ANDROID" class="mx-2" alt="GitHub ecoarts android" target="_blank" title="GitHub ecoarts android">
                <img src="@assets/icons/github.png" alt="GitHub ecoarts android" class="me-2" title="GitHub ecoarts android" draggable="false" />
                GitHub ecoarts android
              </a>
              <a href="https://github.com/x140l1n/ECOARTS-DESKTOP" class="mx-2" alt="GitHub ecoarts android" target="_blank" title="GitHub ecoarts android">
                <img src="@assets/icons/github.png" alt="GitHub ecoarts escritorio" class="me-2" title="GitHub ecoarts escritorio" draggable="false" />
                GitHub ecoarts escritorio
              </a>
            </div>
            <div class="d-flex flex-wrap mt-4 float-end">
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
    <div data-animation="slide-left" class="col">
      <div class="card mx-auto shadow">
        <div class="card-body d-flex">
          <div class="logo m-auto">
            <img src="@assets/icons/logo_chrysallis.png" alt="Logo Chrysallis" title="Chrysallis" class="img-fluid" draggable="false" />
          </div>
          <div class="flex-grow-1 description p-4">
            <h5 class="fw-bold">Chrysallis</h5>
            <p>
              Chrysallis es una ONG que ayuda a familias de niños y adolescentes transexuales. Este proyecto se ha creado para ayudarles a gestionar eventos sociales de la asociación.
            </p>
            <br />
            <p>El proyecto consta de 2 partes: escritorio y android.</p>
            <p>
              La parte de escritorio es donde van a gestionar los socios y los eventos de la asociación. La parte de android lo usarán los socios donde podrán consultar y apuntarse a eventos.
            </p>
            <div class="d-flex flex-wrap mt-4">
              <a href="https://www.youtube.com/watch?v=O_hz8wCR060&ab_channel=DanielSorianoBarber%C3%A1n" target="_blank" class="mx-2" alt="Vídeo chrysallis android" title="Vídeo chrysallis android">
                <img src="@assets/icons/youtube.png" alt="Vídeo chrysallis android" class="me-2" title="Vídeo chrysallis android" draggable="false" />
                Vídeo chrysallis android
              </a>
              <a href="https://www.youtube.com/watch?v=l6Po2-P1JEg&ab_channel=DanielSorianoBarber%C3%A1n" target="_blank" class="mx-2" alt="Vídeo chrysallis android" title="Vídeo chrysallis android">
                <img src="@assets/icons/youtube.png" alt="Vídeo chrysallis escritorio" class="me-2" title="Vídeo chrysallis escritorio" draggable="false" />
                Vídeo chrysallis escritorio
              </a>
            </div>
            <div class="d-flex flex-wrap mt-4 float-end">
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
    <div data-animation="slide-right" class="col">
      <div class="card mx-auto shadow">
        <div class="card-body d-flex">
          <div class="logo m-auto">
            <img src="@assets/icons/logo_space_invaders.png" alt="Logo Space Invaders" title="Space Invaders" class="img-fluid" draggable="false" />
          </div>
          <div class="flex-grow-1 description p-4">
            <h5 class="fw-bold">Space Invaders</h5>
            <p>
              Juego de batallas de naves creado por mí usando la librería libGDX.
            </p>
            <p>El juego es compatible con Android y Windows.</p>
            <div class="d-flex flex-wrap mt-4">
              <a href="https://www.youtube.com/watch?v=LxX2LFaD8xw&ab_channel=XiaolinJinLin" target="_blank" class="mx-2" alt="Vídeo space invaders" title="Vídeo space invaders">
                <img src="@assets/icons/youtube.png" alt="Vídeo space invaders" class="me-2" title="Vídeo space invaders" draggable="false" />
                Vídeo space invaders
              </a>
              <a href="https://github.com/x140l1n/SPACE-INVADERS-GDX" target="_blank" class="mx-2" alt="GitHub space invaders" title="GitHub space invaders">
                <img src="@assets/icons/github.png" alt="GitHub space invaders" class="me-2" title="GitHub space invaders" draggable="false" />
                GitHub space invaders
              </a>
            </div>
            <div class="d-flex flex-wrap mt-4 float-end">
              <span class="badge badge-pill">JAVA</span>
              <span class="badge badge-pill">LIBGDX</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-animation="zoom-out" class="col">
      <div class="card more mx-auto border-0 bg-transparent">
        <div class="card-body d-flex flex-column justify-content-center align-items-center h-100">
          <p class="fs-4 text-center">
            Para ver más proyectos, visita mi perfil de GitHub 😎
          </p>
          <a href="https://github.com/x140l1n/" target="_blank" class="p-0">
            <img src="@assets/icons/github_96px.png" alt="GitHub" draggable="false" />
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
  mounted() {
    this.init();
  },
  data() {
    return {};
  },
  methods: {
    init() {},
    onResize() {
      if (this.$el.clientWidth < 576) {
        this.$refs.content.querySelectorAll('.card > .card-body').forEach((element) => element.classList.add('flex-column'));
      } else {
        this.$refs.content.querySelectorAll('.card > .card-body').forEach((element) => element.classList.remove('flex-column'));
      }
    },
    openBrowser(url) {
      this.$urlToOpen = url;
    }
  },
  computed: {}
})
export default class Projects extends Program {
  //Initialize the variables of superclass Program.
  created() {
    this.title = 'Mis proyectos';
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

<style lang="css" scoped>
.card {
  max-width: 800px;
  width: 100%;
  height: 100%;
}

.row > .col {
  padding: 10px;
}

a {
  color: #1a233a;
  text-decoration: none;
  font-size: 0.9rem;
}

.badge {
  margin: 2px;
  color: #ffffff;
  background: linear-gradient(120deg, #00b5fd 0%, #0047b1 100%);
}

.logo {
  width: 100%;
  min-width: 150px;
  max-width: 200px;
}

.description p {
  margin: 0;
  font-size: 0.8rem;
}
</style>
