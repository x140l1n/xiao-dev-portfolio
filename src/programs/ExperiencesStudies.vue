<template>
  <div ref="content" class="w-100 h-100 d-flex flex-column position-relative overflow-hidden">
    <ul ref="navbar" class="nav nav-pills nav-fill">
      <li class="nav-item">
        <a
          class="nav-link active"
          role="tab"
          data-bs-toggle="tab"
          :href="`#studies-${id}`"
        >
          <i class="fa-solid fa-graduation-cap me-2 fa-fw"></i>
          Estudios
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          role="tab"
          data-bs-toggle="tab"
          :href="`#experiences-${id}`"
        >
          <i class="fa-solid fa-briefcase me-2 fa-fw"></i>
          Experiencias laboral
        </a>
      </li>
    </ul>
    <div class="tab-content p-3 border-top border-dark flex-grow-1">
      <div :id="`studies-${id}`" class="tab-pane fade active show h-100">
        <div class="card">
          <div class="card-body p-0">
            <div ref="timelineStudies" class="timeline text-light">
              <div class="timeline-row">
                <div class="timeline-time"><a href="https://politecnics.barcelona/" target="_blank">Centre d'Estudis Politècnics, Barcelona (España)</a><small>2021 - 2022</small></div>
                <div class="timeline-content">
                  <i class="fa-solid fa-code"></i>
                  <h5 class="fw-bold text-center">DESARROLLO APLICACIONES WEB (DAW)</h5>
                  <p class="text-start">
                    <ul>
                        <li>Desarrollar aplicaciones web con distintos frameworks tanto el frontend como el backend.</li>
                        <li>Manipulación de base de datos.</li>
                        <li>Configurar servidores web en Ubuntu.</li>
                        <li>Aprendizaje basado en proyectos.</li>
                    </ul>
                  </p>
                  <div class="d-flex flex-wrap">
                    <span class="badge badge-pill">HTML</span>
                    <span class="badge badge-pill">CSS</span>
                    <span class="badge badge-pill">JS</span>
                    <span class="badge badge-pill">PHP</span>
                    <span class="badge badge-pill">MySQL</span>
                    <span class="badge badge-pill">Laravel</span>
                    <span class="badge badge-pill">Eloquent</span>
                    <span class="badge badge-pill">Vue</span>
                    <span class="badge badge-pill">React</span>
                    <span class="badge badge-pill">Ionic</span>
                    <span class="badge badge-pill">Bootstrap</span>
                    <span class="badge badge-pill">Sass</span>
                  </div>
                </div>
              </div>

              <div class="timeline-row">
                <div class="timeline-time"><a href="https://politecnics.barcelona/" target="_blank">Centre d'Estudis Politècnics, Barcelona (España)</a><small>2019 - 2021</small></div>
                <div class="timeline-content">
                  <i class="fa-solid fa-code"></i>
                  <h5 class="fw-bold text-center">DESARROLLO APLICACIONES MULTIPLATAFORMA (DAM)</h5>
                  <p class="text-start">
                   <ul>
                        <li>Desarrollar aplicaciones multiplataforma con distintos lenguajes de programación.</li>
                        <li>Desarrollo de programas para escritorio y Android.</li>
                        <li>Manipulación de base de datos.</li>
                        <li>Programación de videojuegos.</li>
                        <li>Programación en BASH.</li>
                        <li>Aprendizaje basado en proyectos.</li>
                    </ul>
                  </p>
                  <div class="d-flex flex-wrap">
                    <span class="badge badge-pill">Java</span>
                    <span class="badge badge-pill">C#</span>
                    <span class="badge badge-pill">C++</span>
                    <span class="badge badge-pill">Android</span>
                    <span class="badge badge-pill">Windows Forms .NET</span>
                    <span class="badge badge-pill">ADO.NET</span>
                    <span class="badge badge-pill">LIBGDX</span>
                    <span class="badge badge-pill">SQL Server</span>
                    <span class="badge badge-pill">MySQL</span>
                  </div>
                </div>
              </div>

              <div class="timeline-row">
                <div class="timeline-time"><a href="https://serveiocupacio.gencat.cat/es/Formacio-i-qualificacio/centres-propis-de-formacio/centres-dinnovacio-i-formacio-ocupacional-cifo/CIFO-de-Barcelona-La-Violeta/" target="_blank">SOC CIFO VIOLETA</a><small>2018-2019</small></div>
                <div class="timeline-content">
                  <i class="fa-solid fa-code"></i>
                  <h5 class="fw-bold text-center">CERTIFICADO DE PROFESIONALIDAD EN POO (630H)</h5>
                  <p class="text-start">
                    <ul>
                        <li> Sistemas operativos y aplicaciones informáticas. </li>
                        <li> Programación orientada a objetos. </li>
                        <li> Programación de base de datos relacionales.</li>
                    </ul>
                  </p>
                  <div>
                    <span class="badge badge-pill">Java</span>
                    <span class="badge badge-pill">HTML</span>
                    <span class="badge badge-pill">CSS</span>
                    <span class="badge badge-pill">PHP</span>
                    <span class="badge badge-pill">MySQL</span>
                    <span class="badge badge-pill">SQL Server</span>
                    <span class="badge badge-pill">Sistemas operativos</span>
                  </div>
                </div>
              </div>

              <div class="timeline-row">
                <div class="timeline-time"><a href="https://institutxxvolimpiada.cat/" target="_blank">Instituto XXV Olimpiada</a><small>2014-2016</small></div>
                <div class="timeline-content">
                  <i class="fa-solid fa-school"></i>
                  <h5 class="fw-bold text-center">BACHILLERATO TECNOLÓGICO</h5>
                </div>
              </div>

              <div class="timeline-row">
                <div class="timeline-time"><a href="https://institutxxvolimpiada.cat/" target="_blank">Instituto XXV Olimpiada</a><small>2010-2014</small></div>
                <div class="timeline-content">
                  <i class="fa-solid fa-school"></i>
                    <h5 class="fw-bold text-center">ESO</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div :id="`experiences-${id}`" class="tab-pane fade h-100">
        <div class="card">
          <div class="card-body p-0">
              <div ref="timelineExperiences" class="timeline text-light">
              <div class="timeline-row">
                <div class="timeline-time"><a href="https://tkmservicios.com" target="_blank">TKM Consultores S.L, Barcelona (España)</a><small>2019 - Presente</small></div>
                <div class="timeline-content">
                  <i class="fa-solid fa-code"></i>
                  <h5 class="fw-bold text-center">DESARROLLADOR FULLSTACK / HELPDESK</h5>
                  <p class="text-start">
                    <ul>
                        <li> Creación y mantenimiento aplicaciones web con: HTML, CSS, JavaScript, PHP, Ruby On Rails, Wordpress. </li>
                        <li> Creación y mantenimiento de aplicaciones: .NET </li>
                        <li> Creación y mantenimiento de base de datos: Microsoft SQL Server, MySQL, PostgreSQL. </li>
                        <li> Técnico de sistemas: Windows Server, Active Directory, Microsoft Exchange, Microsoft SQL Server, etc. </li>
                        <li> Técnico en redes: Análisis de redes, configuración de Routers y Switch. </li>
                        <li> Hardware: Análisis, mantenimiento y cambio de componentes. </li>
                        <li> Helpdesk: Apoyo a usuarios finales. Programas especializados, ofimática, etc. </li>
                        <li> Manejo de programas A3ERP, A3, Fastbroker, VisualSeg.</li>
                    </ul>
                  </p>
                  <div class="d-flex flex-wrap">
                    <span class="badge badge-pill">HTML</span>
                    <span class="badge badge-pill">CSS</span>
                    <span class="badge badge-pill">JS</span>
                    <span class="badge badge-pill">PHP</span>
                    <span class="badge badge-pill">Wordpress</span>
                    <span class="badge badge-pill">JQuery</span>
                    <span class="badge badge-pill">MySQL</span>
                    <span class="badge badge-pill">Bootstrap</span>
                    <span class="badge badge-pill">Ruby</span>
                    <span class="badge badge-pill">A3ERP</span>
                    <span class="badge badge-pill">PostgreSQL</span>
                    <span class="badge badge-pill">.NET</span>
                    <span class="badge badge-pill">Windows Server</span>
                  </div>
                </div>
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
import icon_experiences_studies from "../assets/icons/experiences-studies.png";
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
        
    },
    onResize() {
      if (this.$el.clientWidth < 992) {
        this.$refs.timelineStudies.classList.add("small");
        this.$refs.timelineExperiences.classList.add("small");
      } else {
        this.$refs.timelineStudies.classList.remove("small");
        this.$refs.timelineExperiences.classList.remove("small");
      }
    },
    onScroll() {
        console.log(this.isVisibleElement(this.$el, this.$refs.navbar))
    },
  },
  computed: {},
})
export default class ExperiencesStudies extends Program {
  //Initialize the variables of superclass Program.
  created() {
    this.title = "Estudios y experiencias";
    this.width_default = 550;
    this.height_default = 400;
    this.maximized_default = true;
    this.x_default =
      Vue.prototype.$widthScreenContent / 2 - this.width_default / 2;
    this.y_default =
      Vue.prototype.$heightScreenContent / 2 - this.height_default / 2;
    this.icon_src = icon_experiences_studies;
    this.window = null;
  }
}
</script>

<style scoped>
a {
    color: #1a233a;
}
small {
    color: #1a233a;
}
.nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 10px;
    z-index: 2;
}
.tab-content {
    margin-top: 60px;
    overflow: auto;
}
.badge {
  margin: 2px;
}
.timeline {
  position: relative;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  padding: 5rem;
  margin: 0 auto 1rem auto;
  overflow: hidden;
}
.timeline:after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -2px;
  border-right: 2px dashed #4b546f;
  height: 100%;
  display: block;
}

.timeline-row {
  padding-left: 50%;
  position: relative;
  margin-bottom: 30px;
}
.timeline-row .timeline-time {
  position: absolute;
  right: 50%;
  top: 15px;
  text-align: right;
  margin-right: 20px;
  color: #bcd0f7;
  font-size: 1.5rem;
}
.timeline-row .timeline-time small {
  display: block;
  font-size: 0.8rem;
}
.timeline-row .timeline-content {
  position: relative;
  padding: 20px 30px;
  background: #1a233a;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.timeline-row .timeline-content:after {
  content: "";
  position: absolute;
  top: 20px;
  height: 16px;
  width: 16px;
  background: #1a233a;
}
.timeline-row .timeline-content:before {
  content: "";
  position: absolute;
  top: 20px;
  right: -49px;
  width: 20px;
  height: 20px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  z-index: 10;
  background: #272e48;
  border: 2px dashed #4b546f;
}
.timeline-row .timeline-content h4 {
  margin: 0 0 20px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 150%;
}
.timeline-row .timeline-content p {
  margin-bottom: 30px;
  line-height: 150%;
}
.timeline-row .timeline-content i {
  font-size: 1.2rem;
  line-height: 100%;
  padding: 15px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  background: #272e48;
  margin-bottom: 10px;
  display: inline-block;
}
.timeline-row .timeline-content .thumbs {
  margin-bottom: 20px;
  display: flex;
}
.timeline-row .timeline-content .thumbs img {
  margin: 5px;
  max-width: 60px;
}
.timeline-row .timeline-content .badge {
  color: #ffffff;
  background: linear-gradient(120deg, #00b5fd 0%, #0047b1 100%);
}
.timeline-row:nth-child(even) .timeline-content {
  margin-left: 40px;
  text-align: left;
}
.timeline-row:nth-child(even) .timeline-content:after {
  left: -8px;
  right: initial;
  border-bottom: 0;
  border-left: 0;
  transform: rotate(-135deg);
}
.timeline-row:nth-child(even) .timeline-content:before {
  left: -52px;
  right: initial;
}
.timeline-row:nth-child(odd) {
  padding-left: 0;
  padding-right: 50%;
}
.timeline-row:nth-child(odd) .timeline-time {
  right: auto;
  left: 50%;
  text-align: left;
  margin-right: 0;
  margin-left: 20px;
}
.timeline-row:nth-child(odd) .timeline-content {
  margin-right: 40px;
}
.timeline-row:nth-child(odd) .timeline-content:after {
  right: -8px;
  border-left: 0;
  border-bottom: 0;
  transform: rotate(45deg);
}

.timeline.small {
  padding: 15px;
}
.timeline.small:after {
  border: 0;
}
.timeline.small .timeline-row:nth-child(odd) {
  padding: 0;
}
.timeline.small .timeline-row:nth-child(odd) .timeline-time {
  position: relative;
  top: 0;
  left: 0;
  margin: 0 0 10px 0;
}
.timeline.small .timeline-row:nth-child(odd) .timeline-content {
  margin: 0;
}
.timeline.small .timeline-row:nth-child(odd) .timeline-content:before {
  display: none;
}
.timeline.small .timeline-row:nth-child(odd) .timeline-content:after {
  display: none;
}
.timeline.small .timeline-row:nth-child(even) {
  padding: 0;
}
.timeline.small .timeline-row:nth-child(even) .timeline-time {
  position: relative;
  top: 0;
  left: 0;
  margin: 0 0 10px 0;
  text-align: left;
}
.timeline.small .timeline-row:nth-child(even) .timeline-content {
  margin: 0;
}
.timeline.small .timeline-row:nth-child(even) .timeline-content:before {
  display: none;
}
.timeline.small .timeline-row:nth-child(even) .timeline-content:after {
  display: none;
}
</style>
