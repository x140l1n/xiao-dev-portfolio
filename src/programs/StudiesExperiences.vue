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
          title="Studies"
          role="tab"
          aria-selected="true"
        >
          <i class="fa-solid fa-graduation-cap me-2 fa-fw" />
          Studies
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
          title="Work Experiences"
          role="tab"
          aria-selected="false"
        >
          <i class="fa-solid fa-briefcase me-2 fa-fw" />
          Work Experiences
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
              <small>Barcelona (Spain)</small>
            </div>
            <div
              class="timeline-content"
              data-animation="slide-right"
            >
              <i class="timeline-icon fa-solid fa-code" />
              <h5 class="fw-bold text-center">
                WEB APPLICATION DEVELOPMENT (DAW)
              </h5>
              <ul>
                <li>Develop web applications with various frameworks for both frontend and backend.</li>
                <li>Database manipulation.</li>
                <li>Configure web servers on Ubuntu.</li>
                <li>Project-based learning.</li>
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
                Grade: 9
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
              <small>Barcelona (Spain)</small>
            </div>
            <div
              class="timeline-content"
              data-animation="slide-left"
            >
              <i class="timeline-icon fa-solid fa-code" />
              <h5 class="fw-bold text-center">
                MULTIPLATFORM APPLICATION DEVELOPMENT (DAM)
              </h5>
              <ul>
                <li>Develop multiplatform applications using various programming languages.</li>
                <li>Development of desktop and Android applications.</li>
                <li>Database manipulation.</li>
                <li>Game programming.</li>
                <li>BASH programming.</li>
                <li>Project-based learning.</li>
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
                Grade: 9
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
              <small>Barcelona (Spain)</small>
            </div>
            <div
              class="timeline-content"
              data-animation="slide-right"
            >
              <i class="timeline-icon fa-solid fa-code" />
              <h5 class="fw-bold text-center">
                OBJECT-ORIENTED PROGRAMMING CERTIFICATION (630H)
              </h5>
              <ul>
                <li>Operating systems and software applications.</li>
                <li>Object-oriented programming.</li>
                <li>Relational databases.</li>
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
                Grade: 10
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
              <small>Barcelona (Spain)</small>
            </div>
            <div
              class="timeline-content"
              data-animation="slide-left"
            >
              <i class="timeline-icon fa-solid fa-school" />
              <h5 class="fw-bold text-center">
                TECHNOLOGICAL BACCALAUREATE
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
              <small>Barcelona (Spain)</small>
            </div>
            <div
              class="timeline-content"
              data-animation="slide-right"
            >
              <i class="timeline-icon fa-solid fa-school" />
              <h5 class="fw-bold text-center">
                ESO
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
                href="https://tkmservicios.com"
                target="_blank"
              >TKM Consultores S.L.</a>
              <small>2019 - Present</small>
              <small>Barcelona (Spain)</small>
            </div>
            <div
              class="timeline-content"
              data-animation="slide-right"
            >
              <i class="timeline-icon fa-solid fa-code" />
              <h5 class="fw-bold text-center">
                FULLSTACK DEVELOPER / HELPDESK
              </h5>
              <ul>
                <li>Project planning, documentation, and development.</li>
                <li>Creation and maintenance of web applications using: HTML, CSS, JavaScript, PHP, Ruby On Rails, WordPress.</li>
                <li>Creation and maintenance of WinForms programs: .NET, .NET Core.</li>
                <li>Database creation and maintenance: Microsoft SQL Server, MySQL, PostgreSQL.</li>
                <li>Web server and hosting maintenance: Arsys, Axarnet, Guebs, CDMON.</li>
                <li>Systems technician: Windows Server, Active Directory, Microsoft Exchange, Virtualization.</li>
                <li>Network technician: Network analysis, router, switch, and firewall configuration.</li>
                <li>Helpdesk: Technical support for end users, equipment maintenance, software installation.</li>
                <li>Custom ERP program development.</li>
                <li>ERP program management: A3ERP.</li>
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
