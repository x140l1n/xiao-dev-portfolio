<template>
  <section
    ref="content"
    class="w-100 h-100 d-flex flex-column"
  >
    <nav
      ref="navbar"
      class="nav nav-pills nav-fill bg-light shadow gap-2"
      role="tablist"
      aria-orientation="horizontal"
    >
      <li class="nav-item">
        <button
          :data-bs-target="`#studies-${id}`"
          @click="onChangeTab"
          :href="`#studies-${id}`"
          :aria-controls="`studies-${id}`"
          class="nav-link active"
          data-bs-toggle="tab"
          type="button"
          :title="$t('studiesExperiences.tabs.studies')"
          role="tab"
          aria-selected="true"
        >
          <i class="fa-solid fa-graduation-cap me-2 fa-fw" />
          {{ $t('studiesExperiences.tabs.studies') }}
        </button>
      </li>
      <li class="nav-item">
        <button
          :data-bs-target="`#experiences-${id}`"
          @click="onChangeTab"
          :href="`#experiences-${id}`"
          :aria-controls="`experiences-${id}`"
          class="nav-link"
          data-bs-toggle="tab"
          type="button"
          :title="$t('studiesExperiences.tabs.experiences')"
          role="tab"
          aria-selected="false"
        >
          <i class="fa-solid fa-briefcase me-2 fa-fw" />
          {{ $t('studiesExperiences.tabs.experiences') }}
        </button>
      </li>
    </nav>
    <div
      ref="tabContent"
      v-init-animation
      class="tab-content border-top flex-fill overflow-x-hidden overflow-y-auto"
    >
      <div
        :aria-labelledby="`studies-${id}`"
        :id="`studies-${id}`"
        class="tab-pane fade active show"
      >
        <section
          ref="timelineStudies"
          class="timeline text-light"
        >
          <article class="timeline-row">
            <div
              class="timeline-time"
              data-animation="slide-left"
            >
              <a
                href="https://politecnics.barcelona"
                target="_blank"
              >Centre d'Estudis Politècnics</a>
              <small>2021 - 2022</small>
              <small>{{ $t ? $t('studiesExperiences.location') : 'Barcelona (Spain)' }}</small>
            </div>
            <div
              class="timeline-content"
              data-animation="slide-right"
            >
              <i class="timeline-icon fa-solid fa-code" />
              <h5 class="fw-bold text-center">
                {{ $t('studiesExperiences.degrees.webDevelopment') }}
              </h5>
              <ul>
                <li>{{ $t('studiesExperiences.skills.webDevelopment') }}</li>
                <li>{{ $t('studiesExperiences.skills.databaseManipulation') }}</li>
                <li>{{ $t('studiesExperiences.skills.serverConfiguration') }}</li>
                <li>{{ $t('studiesExperiences.skills.projectBasedLearning') }}</li>
              </ul>
              <div class="d-flex flex-wrap justify-content-center gap-2">
                <span class="badge badge-pill">HTML</span>
                <span class="badge badge-pill">CSS</span>
                <span class="badge badge-pill">Bootstrap</span>
                <span class="badge badge-pill">Sass</span>
                <span class="badge badge-pill">JS</span>
                <span class="badge badge-pill">Vue</span>
                <span class="badge badge-pill">React</span>
                <span class="badge badge-pill">Ionic</span>
                <span class="badge badge-pill">PHP</span>
                <span class="badge badge-pill">Laravel</span>
                <span class="badge badge-pill">Eloquent</span>
                <span class="badge badge-pill">MySQL</span>
              </div>
              <span class="grade">
                <i class="fa-solid fa-star fa-fw text-warning" />
                {{ $t('studiesExperiences.grade') }}: 9
              </span>
            </div>
          </article>
          <article class="timeline-row">
            <div
              class="timeline-time"
              data-animation="slide-right"
            >
              <a
                href="https://politecnics.barcelona"
                target="_blank"
              >Centre d'Estudis Politècnics</a>
              <small>2019 - 2021</small>
              <small>{{ $t ? $t('studiesExperiences.location') : 'Barcelona (Spain)' }}</small>
            </div>
            <div
              class="timeline-content"
              data-animation="slide-left"
            >
              <i class="timeline-icon fa-solid fa-code" />
              <h5 class="fw-bold text-center">
                {{ $t('studiesExperiences.degrees.multiplatformDevelopment') }}
              </h5>
              <ul>
                <li>{{ $t('studiesExperiences.skills.multiplatformDevelopment') }}</li>
                <li>{{ $t('studiesExperiences.skills.desktopAndroidDevelopment') }}</li>
                <li>{{ $t('studiesExperiences.skills.databaseManipulation') }}</li>
                <li>{{ $t('studiesExperiences.skills.gameProgramming') }}</li>
                <li>{{ $t('studiesExperiences.skills.bashProgramming') }}</li>
                <li>{{ $t('studiesExperiences.skills.projectBasedLearning') }}</li>
              </ul>
              <div class="d-flex flex-wrap justify-content-center gap-2">
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
              <span class="grade">
                <i class="fa-solid fa-star fa-fw text-warning" />
                {{ $t('studiesExperiences.grade') }}: 9
              </span>
            </div>
          </article>
          <article class="timeline-row">
            <div
              class="timeline-time"
              data-animation="slide-left"
            >
              <a
                href="https://serveiocupacio.gencat.cat/es/Formacio-i-qualificacio/centres-propis-de-formacio/centres-dinnovacio-i-formacio-ocupacional-cifo/CIFO-de-Barcelona-La-Violeta"
                target="_blank"
              >SOC CIFO VIOLETA</a><small>2018-2019</small>
              <small>{{ $t ? $t('studiesExperiences.location') : 'Barcelona (Spain)' }}</small>
            </div>
            <div
              class="timeline-content"
              data-animation="slide-right"
            >
              <i class="timeline-icon fa-solid fa-code" />
              <h5 class="fw-bold text-center">
                {{ $t('studiesExperiences.degrees.oopCertification') }}
              </h5>
              <ul>
                <li>{{ $t('studiesExperiences.skills.operatingSystems') }}</li>
                <li>{{ $t('studiesExperiences.skills.objectOrientedProgramming') }}</li>
                <li>{{ $t('studiesExperiences.skills.relationalDatabases') }}</li>
              </ul>
              <div class="d-flex flex-wrap justify-content-center gap-2">
                <span class="badge badge-pill">Java</span>
                <span class="badge badge-pill">HTML</span>
                <span class="badge badge-pill">CSS</span>
                <span class="badge badge-pill">PHP</span>
                <span class="badge badge-pill">MySQL</span>
                <span class="badge badge-pill">SQL Server</span>
                <span class="badge badge-pill">Operating systems</span>
              </div>
              <span class="grade">
                <i class="fa-solid fa-star fa-fw text-warning" />
                {{ $t('studiesExperiences.grade') }}: 10
              </span>
            </div>
          </article>
          <article class="timeline-row">
            <div
              class="timeline-time"
              data-animation="slide-right"
            >
              <a
                href="https://institutxxvolimpiada.cat"
                target="_blank"
              >Instituto XXV Olimpiada</a>
              <small>2014-2016</small>
              <small>{{ $t ? $t('studiesExperiences.location') : 'Barcelona (Spain)' }}</small>
            </div>
            <div
              class="timeline-content"
              data-animation="slide-left"
            >
              <i class="timeline-icon fa-solid fa-school" />
              <h5 class="fw-bold text-center">
                {{ $t('studiesExperiences.degrees.technologicalBaccalaureate') }}
              </h5>
            </div>
          </article>
          <article class="timeline-row">
            <div
              class="timeline-time"
              data-animation="slide-left"
            >
              <a
                href="https://institutxxvolimpiada.cat"
                target="_blank"
              >Instituto XXV Olimpiada</a>
              <small>2010-2014</small>
              <small>{{ $t ? $t('studiesExperiences.location') : 'Barcelona (Spain)' }}</small>
            </div>
            <div
              class="timeline-content"
              data-animation="slide-right"
            >
              <i class="timeline-icon fa-solid fa-school" />
              <h5 class="fw-bold text-center">
                {{ $t('studiesExperiences.degrees.eso') }}
              </h5>
            </div>
          </article>
        </section>
      </div>
      <div
        :aria-labelledby="`experiences-${id}`"
        :id="`experiences-${id}`"
        class="tab-pane fade"
      >
        <section
          ref="timelineExperiences"
          class="timeline text-light"
        >
          <article class="timeline-row">
            <div
              class="timeline-time"
              data-animation="slide-left"
            >
              <a
                href="https://www.uxland.es"
                target="_blank"
              >UXLand</a>
              <small>Nov 2024 - {{ $t ? $t('studiesExperiences.present') : 'Present' }}</small>
              <small>{{ $t ? $t('studiesExperiences.location') : 'Barcelona (Spain)' }}</small>
            </div>
            <div
              class="timeline-content"
              data-animation="slide-right"
            >
              <i class="timeline-icon fa-solid fa-code" />
              <h5 class="fw-bold text-center">
                {{ $t('studiesExperiences.positions.frontendDeveloper') }}
              </h5>
              <ul>
                <li>{{ $t('studiesExperiences.skills.frontendArchitecture') }}</li>
                <li>{{ $t('studiesExperiences.skills.designSystems') }}</li>
                <li>{{ $t('studiesExperiences.skills.sapTechnologies') }}</li>
                <li>{{ $t('studiesExperiences.skills.cicdIntegration') }}</li>
              </ul>
              <div class="d-flex flex-wrap justify-content-center gap-2">
                <span class="badge badge-pill">Lit</span>
                <span class="badge badge-pill">TypeScript</span>
                <span class="badge badge-pill">Microfrontends</span>
                <span class="badge badge-pill">SAP</span>
                <span class="badge badge-pill">ABAP</span>
                <span class="badge badge-pill">Node.js</span>
                <span class="badge badge-pill">React</span>
                <span class="badge badge-pill">Redux</span>
                <span class="badge badge-pill">MUI</span>
                <span class="badge badge-pill">Vite</span>
                <span class="badge badge-pill">Web Components</span>
                <span class="badge badge-pill">Java</span>
                <span class="badge badge-pill">Express</span>
                <span class="badge badge-pill">Lerna</span>
                <span class="badge badge-pill">TypeORM</span>
                <span class="badge badge-pill">MongoDB</span>
                <span class="badge badge-pill">PostgreSQL</span>
                <span class="badge badge-pill">OpenShift</span>
                <span class="badge badge-pill">AWS</span>
                <span class="badge badge-pill">Google Cloud</span>
                <span class="badge badge-pill">Azure</span>
                <span class="badge badge-pill">Firebase</span>
                <span class="badge badge-pill">Jenkins</span>
                <span class="badge badge-pill">Grafana</span>
              </div>
            </div>
          </article>
          <article class="timeline-row">
            <div
              class="timeline-time"
              data-animation="slide-right"
            >
              <a
                href="https://tkmservicios.com"
                target="_blank"
              >TKM Consultores S.L.</a>
              <small>2019 - Nov 2024</small>
              <small>{{ $t ? $t('studiesExperiences.location') : 'Barcelona (Spain)' }}</small>
            </div>
            <div
              class="timeline-content"
              data-animation="slide-left"
            >
              <i class="timeline-icon fa-solid fa-code" />
              <h5 class="fw-bold text-center">
                {{ $t('studiesExperiences.positions.fullstackDeveloperHelpdesk') }}
              </h5>
              <ul>
                <li>{{ $t('studiesExperiences.skills.projectPlanning') }}</li>
                <li>{{ $t('studiesExperiences.skills.webApplications') }}</li>
                <li>{{ $t('studiesExperiences.skills.winFormsPrograms') }}</li>
                <li>{{ $t('studiesExperiences.skills.databaseCreation') }}</li>
                <li>{{ $t('studiesExperiences.skills.webServerMaintenance') }}</li>
                <li>{{ $t('studiesExperiences.skills.systemsTechnician') }}</li>
                <li>{{ $t('studiesExperiences.skills.networkTechnician') }}</li>
                <li>{{ $t('studiesExperiences.skills.helpdesk') }}</li>
                <li>{{ $t('studiesExperiences.skills.customERPDevelopment') }}</li>
                <li>{{ $t('studiesExperiences.skills.erpManagement') }}</li>
              </ul>
              <div class="d-flex flex-wrap justify-content-center gap-2">
                <span class="badge badge-pill">HTML</span>
                <span class="badge badge-pill">CSS</span>
                <span class="badge badge-pill">SASS</span>
                <span class="badge badge-pill">Bootstrap</span>
                <span class="badge badge-pill">JS</span>
                <span class="badge badge-pill">JQuery</span>
                <span class="badge badge-pill">PHP</span>
                <span class="badge badge-pill">C#</span>
                <span class="badge badge-pill">VB</span>
                <span class="badge badge-pill">Ruby On Rails</span>
                <span class="badge badge-pill">Laravel</span>
                <span class="badge badge-pill">Vue</span>
                <span class="badge badge-pill">Wordpress</span>
                <span class="badge badge-pill">Ruby</span>
                <span class="badge badge-pill">A3ERP</span>
                <span class="badge badge-pill">SQL Server</span>
                <span class="badge badge-pill">MySQL</span>
                <span class="badge badge-pill">PostgreSQL</span>
                <span class="badge badge-pill">.NET/.NET Core</span>
                <span class="badge badge-pill">ASP.NET</span>
                <span class="badge badge-pill">DevOps</span>
                <span class="badge badge-pill">Windows Server</span>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconStudiesExperiences from '@assets/icons/experiences-studies.png';

@Component({
  name: 'StudiesExperiences',
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
    onChangeTab() {
      this.$refs.tabContent.scrollTop = 0;
    },
    onWindowResize() {
      if (!this.$refs.timelineStudies || !this.$refs.timelineExperiences) {
        return;
      }

      if (this.$refs.content.clientWidth < 992) {
        this.$refs.timelineStudies.classList.add('small');
        this.$refs.timelineExperiences.classList.add('small');
      } else {
        this.$refs.timelineStudies.classList.remove('small');
        this.$refs.timelineExperiences.classList.remove('small');
      }
    }
  }
})
export default class StudiesExperiences extends Program {
  created() {
    this.titleKey = 'studiesExperiences.title';
    this.title = this.$t ? this.$t('studiesExperiences.title') : 'Studies & Experiences';
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
.nav {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  z-index: 2;

  .nav-link {
    color: var(--bs-nav-link-primary-color) !important;

    &.active {
      background-color: rgb(var(--bs-primary-rgb)) !important;
      color: var(--bs-nav-link-active-primary-color) !important;
    }

    &:not(.active):hover {
      background-color: rgb(var(--bs-primary-light-rgb)) !important;
      color: var(--bs-nav-link-active-primary-color) !important;
    }
  }
}

.timeline {
  position: relative;
  border-radius: 4px;
  padding: 2rem;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -2px;
    border-right: 2px dashed #4b546f;
    height: 100%;
  }

  .timeline-row {
    position: relative;
    margin-bottom: 30px;
    padding-left: 50%;

    &:nth-child(even) {
      .timeline-content {
        margin-left: 40px;
        text-align: left;

        &:after {
          left: -8px;
          right: initial;
          border-bottom: 0;
          border-left: 0;
          transform: rotate(-135deg);
        }

        &:before {
          left: -52px;
          right: initial;
        }

        .grade {
          border-bottom-left-radius: 4px;
          right: 0;
        }
      }
    }

    &:nth-child(odd) {
      padding-left: 0;
      padding-right: 50%;

      .timeline-time {
        right: auto;
        left: 50%;
        text-align: left;
        margin-right: 0;
        margin-left: 20px;
      }

      .timeline-content {
        margin-right: 40px;

        &:after {
          right: -8px;
          border-left: 0;
          border-bottom: 0;
          transform: rotate(45deg);
        }

        .grade {
          border-bottom-right-radius: 4px;
          left: 0;
        }
      }
    }

    .timeline-time {
      position: absolute;
      right: 50%;
      top: 15px;
      text-align: right;
      margin-right: 20px;
      font-size: 1.5rem;

      a {
        font-weight: bold;
        color: #1a233a;
      }

      small {
        display: block;
        font-size: 0.8rem;
        color: #4b546f;
      }
    }

    .timeline-content {
      position: relative;
      padding: 20px 30px;
      background: #1a233a;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      overflow: hidden;

      &:after {
        content: '';
        position: absolute;
        top: 20px;
        height: 16px;
        width: 16px;
        background: #1a233a;
      }

      h4 {
        margin: 0 0 20px 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 150%;
      }

      p {
        margin-bottom: 30px;
        line-height: 150%;
      }

      .timeline-icon {
        font-size: 1.2rem;
        line-height: 100%;
        padding: 15px;
        border-radius: 100px;
        background: #272e48;
        margin-bottom: 10px;
        display: inline-block;
      }

      .thumbs {
        margin-bottom: 20px;
        display: flex;

        img {
          margin: 5px;
          max-width: 60px;
        }
      }

      .badge {
        color: #ffffff;
        background-color: rgb(var(--bs-primary-rgb));
      }

      .grade {
        position: absolute;
        top: 0;
        font-size: 1rem;
        padding: 10px;
        color: #fff;
        background-color: rgb(var(--bs-primary-rgb));
      }
    }
  }

  &.small {
    padding: 15px;

    &:after {
      border: 0;
    }

    > .timeline-row {
      padding-left: 0 !important;
      padding-right: 0 !important;

      > .timeline-time {
        position: relative;
        text-align: left;
        top: 0;
        left: 0;
        right: 0;
        margin-bottom: 5px;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }

      > .timeline-content {
        margin-left: 0;
        margin-right: 0;

        &:after {
          display: none !important;
        }

        .grade {
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 0;
          left: auto;
          right: 0;
        }
      }
    }
  }
}
</style>
