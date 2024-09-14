<template>
  <div class="w-100 p-3">
    <div class="card shadow-lg m-auto w-100">
      <div class="card-header bg-primary text-light">
        <span class="fw-bold">Lenguajes de programación y frameworks</span>
      </div>
      <div class="card-body">
        <h6 class="fw-bold">Frontend</h6>
        <div class="d-flex justify-content-center flex-wrap">
          <img
            src="../assets/icons/html.png"
            class="mx-2 my-auto"
            title="HTML 5"
            alt="Logo HTML"
          />
          <img
            src="../assets/icons/css.png"
            class="mx-2 my-auto"
            title="CSS"
            alt="Logo CSS"
          />
          <img
            src="../assets/icons/javascript.png"
            class="mx-2 my-auto"
            title="JavaScript"
            alt="Logo JavaScript"
          />
          <img
            src="../assets/icons/typescript.png"
            class="mx-2 my-auto"
            title="TypeScript"
            alt="Logo TypeScript"
          />
          <img
            src="../assets/icons/bootstrap.png"
            class="mx-2 my-auto"
            title="Bootstrap"
            alt="Logo Bootstrap"
            width="75"
          />
          <img
            src="../assets/icons/sass.png"
            class="mx-2 my-auto"
            title="Sass"
            alt="Logo Sass"
          />
          <img
            src="../assets/icons/tailwind.png"
            class="mx-2 my-auto"
            title="Tailwind"
            alt="Logo Tailwind"
          />
          <img
            src="../assets/icons/vue.png"
            class="mx-2 my-auto"
            title="Vue"
            alt="Logo Vue"
          />
          <img
            src="../assets/icons/react.png"
            class="mx-2 my-auto"
            title="React"
            alt="Logo React"
          />
          <img
            src="../assets/icons/ionic.png"
            class="mx-2 my-auto"
            title="Ionic"
            alt="Logo Ionic"
          />
        </div>
        <h6 class="fw-bold">Backend</h6>
        <div class="d-flex justify-content-center flex-wrap">
          <img
            src="../assets/icons/java.png"
            class="mx-2 my-auto"
            title="Java"
            alt="Logo Java"
          />
          <img
            src="../assets/icons/vb.net.png"
            class="mx-2 my-auto"
            title="Visual Basic"
            alt="Logo Visual Basic"
          />
          <img
            src="../assets/icons/csharp.png"
            class="mx-2 my-auto"
            title="C#"
            alt="Logo C#"
          />
          <img
            src="../assets/icons/php.png"
            class="mx-2 my-auto"
            title="PHP"
            alt="Logo PHP"
          />
          <img
            src="../assets/icons/express.png"
            class="mx-2 my-auto"
            title="Express"
            alt="Logo Express"
          />
          <img
            src="../assets/icons/nodejs.png"
            class="mx-2 my-auto"
            title="NodeJS"
            alt="Logo NodeJS"
          />
          <img
            src="../assets/icons/laravel.png"
            class="mx-2 my-auto"
            title="Laravel"
            alt="Logo Laravel"
          />
          <img
            src="../assets/icons/codeigniter.png"
            class="mx-2 my-auto"
            title="Codeigniter"
            alt="Logo Codeigniter"
          />
          <img
            src="../assets/icons/ado.net.png"
            class="mx-2 my-auto"
            title="ADO.NET"
            alt="Logo ADO.NET"
          />
          <img
            src="../assets/icons/.net.png"
            class="mx-2 my-auto"
            title=".NET Core"
            alt="Logo .NET Core"
          />
        </div>
      </div>
    </div>
    <div class="card shadow-lg m-auto w-100 mt-4">
      <div class="card-header bg-primary text-light">
        <span class="fw-bold">Bases de datos</span>
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-center flex-wrap">
          <img
            src="../assets/icons/mysql.png"
            class="mx-2 my-auto"
            title="MySQL"
            alt="Logo MySQL"
          />
          <img
            src="../assets/icons/sql-server.png"
            class="mx-2 my-auto"
            title="SQL Server"
            alt="Logo SQL Server"
          />
          <img
            src="../assets/icons/postgresql.png"
            class="mx-2 my-auto"
            title="PostgreSQL"
            alt="Logo PostgreSQL"
          />
        </div>
      </div>
    </div>
    <div class="card shadow-lg m-auto w-100 mt-4">
      <div class="card-header bg-primary text-light">
        <span class="fw-bold">Otros</span>
      </div>
      <div class="card-body">
        <div class="d-flex justify-content-center flex-wrap">
          <img
            src="../assets/icons/git.png"
            class="mx-2 my-auto"
            title="Git"
            alt="Logo Git"
          />
          <img
            src="../assets/icons/github_96px.png"
            class="mx-2 my-auto"
            title="GitHub"
            alt="Logo GitHub"
          />
          <img
            src="../assets/icons/android_studio.png"
            class="mx-2 my-auto"
            title="Android Studio"
            alt="Logo Android Studio"
          />
          <img
            src="../assets/icons/wordpress.png"
            class="mx-2 my-auto"
            title="Wordpress"
            alt="Logo Wordpress"
          />
          <img
            src="../assets/icons/ubuntu.png"
            class="mx-2 my-auto"
            title="Ubuntu"
            alt="Logo Ubuntu"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
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
    this.width_default = 550;
    this.height_default = 400;
    this.maximized_default = true;
    this.x_default =
      Vue.prototype.$widthScreenContent / 2 - this.width_default / 2;
    this.y_default =
      Vue.prototype.$heightScreenContent / 2 - this.height_default / 2;
    this.icon_src = IconKnowledge;
    this.window = null;
  }
}
</script>

<style lang='css' scoped>
.card {
  max-width: 1200px;
}
</style>
