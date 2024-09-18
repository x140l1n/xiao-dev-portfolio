<template>
  <div class="w-100 h-100 d-flex flex-column" ref="content">
    <ul class="nav nav-pills nav-fill bg-light shadow gap-2" ref="navbar">
      <li class="nav-item">
        <a class="nav-link active" role="tab" data-bs-toggle="tab" :href="`#studies-${id}`">
          <i class="fa-solid fa-graduation-cap me-2 fa-fw"></i>
          Estudios
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" role="tab" data-bs-toggle="tab" :href="`#experiences-${id}`">
          <i class="fa-solid fa-briefcase me-2 fa-fw"></i>
          Experiencias laboral
        </a>
      </li>
    </ul>
    <div class="tab-content border-top flex-fill overflow-x-hidden overflow-y-auto" v-init-animation="{ threshold: 0.2 }" ref="tabContent">
      <div class="tab-pane fade active show" :id="`studies-${id}`">
        <div class="timeline text-light" ref="timelineStudies">
          <div class="timeline-row">
            <div class="timeline-time" data-animation="slide-left">
              <a href="https://politecnics.barcelona/" target="_blank">Centre d'Estudis Politècnics, Barcelona (España)</a><small>2021 - 2022</small>
            </div>
            <div class="timeline-content" data-animation="slide-right">
              <i class="fa-solid fa-code"></i>
              <h5 class="fw-bold text-center"> DESARROLLO APLICACIONES WEB (DAW) </h5>
              <ul>
                <li> Desarrollar aplicaciones web con distintos frameworks tanto el frontend como el backend. </li>
                <li>Manipulación de base de datos.</li>
                <li>Configurar servidores web en Ubuntu.</li>
                <li>Aprendizaje basado en proyectos.</li>
              </ul>
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
            <div class="timeline-time" data-animation="slide-right">
              <a href="https://politecnics.barcelona/" target="_blank">Centre d'Estudis Politècnics, Barcelona (España)</a><small>2019 - 2021</small>
            </div>
            <div class="timeline-content" data-animation="slide-left">
              <i class="fa-solid fa-code"></i>
              <h5 class="fw-bold text-center"> DESARROLLO APLICACIONES MULTIPLATAFORMA (DAM) </h5>
              <ul>
                <li> Desarrollar aplicaciones multiplataforma con distintos lenguajes de programación. </li>
                <li>Desarrollo de programas para escritorio y Android.</li>
                <li>Manipulación de base de datos.</li>
                <li>Programación de videojuegos.</li>
                <li>Programación en BASH.</li>
                <li>Aprendizaje basado en proyectos.</li>
              </ul>
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
            <div class="timeline-time" data-animation="slide-left">
              <a
                href="https://serveiocupacio.gencat.cat/es/Formacio-i-qualificacio/centres-propis-de-formacio/centres-dinnovacio-i-formacio-ocupacional-cifo/CIFO-de-Barcelona-La-Violeta/"
                target="_blank"
                >SOC CIFO VIOLETA</a
              ><small>2018-2019</small>
            </div>
            <div class="timeline-content" data-animation="slide-right">
              <i class="fa-solid fa-code"></i>
              <h5 class="fw-bold text-center"> CERTIFICADO DE PROFESIONALIDAD EN POO (630H) </h5>
              <ul>
                <li>Sistemas operativos y aplicaciones informáticas.</li>
                <li>Programación orientada a objetos.</li>
                <li>Base de datos relacionales.</li>
              </ul>
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
            <div class="timeline-time" data-animation="slide-right"><a href="https://institutxxvolimpiada.cat/" target="_blank">Instituto XXV Olimpiada</a><small>2014-2016</small></div>
            <div class="timeline-content" data-animation="slide-left">
              <i class="fa-solid fa-school"></i>
              <h5 class="fw-bold text-center">BACHILLERATO TECNOLÓGICO</h5>
            </div>
          </div>
          <div class="timeline-row">
            <div class="timeline-time" data-animation="slide-left"><a href="https://institutxxvolimpiada.cat/" target="_blank">Instituto XXV Olimpiada</a><small>2010-2014</small></div>
            <div class="timeline-content" data-animation="slide-right">
              <i class="fa-solid fa-school"></i>
              <h5 class="fw-bold text-center">ESO</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="tab-pane fade" :id="`experiences-${id}`">
        <div class="timeline text-light" ref="timelineExperiences">
          <div class="timeline-row">
            <div class="timeline-time" data-animation="slide-left"><a href="https://tkmservicios.com" target="_blank">TKM Consultores S.L, Barcelona (España)</a><small>2019 - Presente</small></div>
            <div class="timeline-content" data-animation="slide-right">
              <i class="fa-solid fa-code"></i>
              <h5 class="fw-bold text-center"> DEVELOPER FULLSTACK / HELPDESK </h5>
              <ul>
                <li> Creación y mantenimiento aplicaciones web con: HTML, CSS, JavaScript, PHP, Ruby On Rails, Wordpress. </li>
                <li>Creación y mantenimiento de aplicaciones: .NET</li>
                <li> Creación y mantenimiento de base de datos: Microsoft SQL Server, MySQL, PostgreSQL. </li>
                <li> Técnico de sistemas: Windows Server, Active Directory, Microsoft Exchange, Microsoft SQL Server, etc. </li>
                <li> Técnico en redes: Análisis de redes, configuración de Routers y Switch. </li>
                <li> Hardware: Análisis, mantenimiento y cambio de componentes. </li>
                <li> Helpdesk: Apoyo a usuarios finales. Programas especializados, ofimática, etc. </li>
                <li> Manejo de programas A3ERP, A3, Fastbroker, VisualSeg. </li>
              </ul>
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
</template>

<script>
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconStudiesExperiences from '@assets/icons/experiences-studies.png';

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
      if (this.$el.clientWidth < 992) {
        this.$refs.timelineStudies.classList.add('small');
        this.$refs.timelineExperiences.classList.add('small');
      } else {
        this.$refs.timelineStudies.classList.remove('small');
        this.$refs.timelineExperiences.classList.remove('small');
      }
    }
  },
  computed: {}
})
export default class StudiesExperiences extends Program {
  //Initialize the variables of superclass Program.
  created() {
    this.title = 'Estudios y experiencias';
    this.widthDefault = 550;
    this.heightDefault = 400;
    this.maximizedDefault = true;
    this.xDefault = this.$widthScreenContent / 2 - this.widthDefault / 2;
    this.yDefault = this.$heightScreenContent / 2 - this.heightDefault / 2;
    this.iconSrc = IconStudiesExperiences;
    this.window = null;
  }
}
</script>

<style lang="css" scoped>
a {
  color: #1a233a;
}

small {
  color: #1a233a;
}

.nav {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  z-index: 2;
}

.badge {
  margin: 2px;
}

.timeline {
  position: relative;
  border-radius: 4px;
  padding: 2rem;
}

.timeline:after {
  content: '';
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
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.timeline-row .timeline-content:after {
  content: '';
  position: absolute;
  top: 20px;
  height: 16px;
  width: 16px;
  background: #1a233a;
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

.timeline.small .timeline-row:nth-child(even) .timeline-content:after {
  display: none;
}
</style>
