<template>
  <div class="w-100 h-100 overflow-auto p-2">
    <div class="row row-cols-1 g-2">
      <div class="col">
        <div class="card shadow-lg mx-auto w-100">
          <div class="card-header bg-primary text-light">
            <span class="fw-bold">Lenguajes de programación y frameworks</span>
          </div>
          <div class="card-body">
            <h6 class="fw-bold">
              Frontend
            </h6>
            <div class="d-flex justify-content-center flex-wrap">
              <img
                class="mx-2 my-auto"
                src="@assets/icons/html.png"
                title="HTML 5"
                alt="Logo HTML"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/css.png"
                title="CSS"
                alt="Logo CSS"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/javascript.png"
                title="JavaScript"
                alt="Logo JavaScript"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/typescript.png"
                title="TypeScript"
                alt="Logo TypeScript"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/bootstrap.png"
                title="Bootstrap"
                alt="Logo Bootstrap"
                width="75"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/sass.png"
                title="Sass"
                alt="Logo Sass"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/tailwind.png"
                title="Tailwind"
                alt="Logo Tailwind"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/vue.png"
                title="Vue"
                alt="Logo Vue"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/react.png"
                title="React"
                alt="Logo React"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/ionic.png"
                title="Ionic"
                alt="Logo Ionic"
                draggable="false"
              >
            </div>
            <h6 class="fw-bold">
              Backend
            </h6>
            <div class="d-flex justify-content-center flex-wrap">
              <img
                class="mx-2 my-auto"
                src="@assets/icons/java.png"
                title="Java"
                alt="Logo Java"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/vb.net.png"
                title="Visual Basic"
                alt="Logo Visual Basic"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/csharp.png"
                title="C#"
                alt="Logo C#"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/php.png"
                title="PHP"
                alt="Logo PHP"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/express.png"
                title="Express"
                alt="Logo Express"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/nodejs.png"
                title="NodeJS"
                alt="Logo NodeJS"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/laravel.png"
                title="Laravel"
                alt="Logo Laravel"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/codeigniter.png"
                title="Codeigniter"
                alt="Logo Codeigniter"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/ado.net.png"
                title="ADO.NET"
                alt="Logo ADO.NET"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/.net.png"
                title=".NET Core"
                alt="Logo .NET Core"
                draggable="false"
              >
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
              <img
                class="mx-2 my-auto"
                src="@assets/icons/mysql.png"
                title="MySQL"
                alt="Logo MySQL"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/sql-server.png"
                title="SQL Server"
                alt="Logo SQL Server"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/postgresql.png"
                title="PostgreSQL"
                alt="Logo PostgreSQL"
                draggable="false"
              >
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
              <img
                class="mx-2 my-auto"
                src="@assets/icons/git.png"
                title="Git"
                alt="Logo Git"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/github_96px.png"
                title="GitHub"
                alt="Logo GitHub"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/android_studio.png"
                title="Android Studio"
                alt="Logo Android Studio"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/wordpress.png"
                title="Wordpress"
                alt="Logo Wordpress"
                draggable="false"
              >
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
  data() {
    return {};
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {}
  }
})
export default class Knowledge extends Program {
  created() {
    this.title = 'Conocimientos';
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

<style lang="scss" scoped>
.card {
  max-width: 1200px;
}
</style>
