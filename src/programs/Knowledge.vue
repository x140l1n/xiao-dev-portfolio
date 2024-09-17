<template>
  <div class="w-100 h-100 overflow-auto p-4">
    <div class="row row-cols-1 g-4">
      <div class="col">
        <div class="card shadow-lg mx-auto w-100">
          <div class="card-header bg-primary text-light">
            <span class="fw-bold">Lenguajes de programación y frameworks</span>
          </div>
          <div class="card-body">
            <h6 class="fw-bold">Frontend</h6>
            <div class="d-flex justify-content-center flex-wrap">
              <img src="@assets/icons/html.png" class="mx-2 my-auto" title="HTML 5" alt="Logo HTML" draggable="false" />
              <img src="@assets/icons/css.png" class="mx-2 my-auto" title="CSS" alt="Logo CSS" draggable="false" />
              <img src="@assets/icons/javascript.png" class="mx-2 my-auto" title="JavaScript" alt="Logo JavaScript" draggable="false" />
              <img src="@assets/icons/typescript.png" class="mx-2 my-auto" title="TypeScript" alt="Logo TypeScript" draggable="false" />
              <img src="@assets/icons/bootstrap.png" class="mx-2 my-auto" title="Bootstrap" alt="Logo Bootstrap" width="75" draggable="false" />
              <img src="@assets/icons/sass.png" class="mx-2 my-auto" title="Sass" alt="Logo Sass" draggable="false" />
              <img src="@assets/icons/tailwind.png" class="mx-2 my-auto" title="Tailwind" alt="Logo Tailwind" draggable="false" />
              <img src="@assets/icons/vue.png" class="mx-2 my-auto" title="Vue" alt="Logo Vue" draggable="false" />
              <img src="@assets/icons/react.png" class="mx-2 my-auto" title="React" alt="Logo React" draggable="false" />
              <img src="@assets/icons/ionic.png" class="mx-2 my-auto" title="Ionic" alt="Logo Ionic" draggable="false" />
            </div>
            <h6 class="fw-bold">Backend</h6>
            <div class="d-flex justify-content-center flex-wrap">
              <img src="@assets/icons/java.png" class="mx-2 my-auto" title="Java" alt="Logo Java" draggable="false" />
              <img src="@assets/icons/vb.net.png" class="mx-2 my-auto" title="Visual Basic" alt="Logo Visual Basic" draggable="false" />
              <img src="@assets/icons/csharp.png" class="mx-2 my-auto" title="C#" alt="Logo C#" draggable="false" />
              <img src="@assets/icons/php.png" class="mx-2 my-auto" title="PHP" alt="Logo PHP" draggable="false" />
              <img src="@assets/icons/express.png" class="mx-2 my-auto" title="Express" alt="Logo Express" draggable="false" />
              <img src="@assets/icons/nodejs.png" class="mx-2 my-auto" title="NodeJS" alt="Logo NodeJS" draggable="false" />
              <img src="@assets/icons/laravel.png" class="mx-2 my-auto" title="Laravel" alt="Logo Laravel" draggable="false" />
              <img src="@assets/icons/codeigniter.png" class="mx-2 my-auto" title="Codeigniter" alt="Logo Codeigniter" draggable="false" />
              <img src="@assets/icons/ado.net.png" class="mx-2 my-auto" title="ADO.NET" alt="Logo ADO.NET" draggable="false" />
              <img src="@assets/icons/.net.png" class="mx-2 my-auto" title=".NET Core" alt="Logo .NET Core" draggable="false" />
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-lg mx-auto w-100">
          <div class="card-header bg-primary text-light">
            <span class="fw-bold">Bases de datos</span>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-center flex-wrap">
              <img src="@assets/icons/mysql.png" class="mx-2 my-auto" title="MySQL" alt="Logo MySQL" draggable="false" />
              <img src="@assets/icons/sql-server.png" class="mx-2 my-auto" title="SQL Server" alt="Logo SQL Server" draggable="false" />
              <img src="@assets/icons/postgresql.png" class="mx-2 my-auto" title="PostgreSQL" alt="Logo PostgreSQL" draggable="false" />
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-lg mx-auto w-100">
          <div class="card-header bg-primary text-light">
            <span class="fw-bold">Otros</span>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-center flex-wrap">
              <img src="@assets/icons/git.png" class="mx-2 my-auto" title="Git" alt="Logo Git" draggable="false" />
              <img src="@assets/icons/github_96px.png" class="mx-2 my-auto" title="GitHub" alt="Logo GitHub" draggable="false" />
              <img src="@assets/icons/android_studio.png" class="mx-2 my-auto" title="Android Studio" alt="Logo Android Studio" draggable="false" />
              <img src="@assets/icons/wordpress.png" class="mx-2 my-auto" title="Wordpress" alt="Logo Wordpress" draggable="false" />
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
import IconKnowledge from '@assets/icons/knowledge.png';

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
    onResize() {}
  },
  computed: {}
})
export default class Knowledge extends Program {
  //Initialize the variables of superclass Program.
  created() {
    this.title = 'Mis conocimientos';
    this.widthDefault = 550;
    this.heightDefault = 400;
    this.maximizedDefault = true;
    this.xDefault = this.$widthScreenContent / 2 - this.widthDefault / 2;
    this.yDefault = this.$heightScreenContent / 2 - this.heightDefault / 2;
    this.iconSrc = IconKnowledge;
    this.window = null;
  }
}
</script>

<style lang="css" scoped>
.card {
  max-width: 1200px;
}
</style>
