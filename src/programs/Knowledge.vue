<template>
  <section class="w-100 h-100 overflow-auto p-4">
    <div class="row row-cols-1 g-4">
      <div class="col">
        <article class="card shadow-lg mx-auto w-100">
          <div class="card-header bg-primary text-light">
            <span class="fw-bold">Programming Languages and Frameworks</span>
          </div>
          <div class="card-body">
            <h4 class="fw-bold">
              Frontend
            </h4>
            <hr class="mb-2">
            <div class="d-flex justify-content-center flex-wrap">
              <img
                class="mx-2 my-auto"
                src="@assets/icons/html.png"
                title="HTML 5"
                alt="HTML Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/css.png"
                title="CSS"
                alt="CSS Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/javascript.png"
                title="JavaScript"
                alt="JavaScript Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/typescript.png"
                title="TypeScript"
                alt="TypeScript Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/bootstrap.png"
                title="Bootstrap"
                alt="Bootstrap Logo"
                width="75"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/sass.png"
                title="Sass"
                alt="Sass Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/tailwind.png"
                title="Tailwind"
                alt="Tailwind Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/vue.png"
                title="Vue"
                alt="Vue Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/react.png"
                title="React"
                alt="React Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/ionic.png"
                title="Ionic"
                alt="Ionic Logo"
                draggable="false"
              >
            </div>
            <h4 class="mt-5 fw-bold">
              Backend
            </h4>
            <hr class="mb-4">
            <div class="d-flex justify-content-center flex-wrap">
              <img
                class="mx-2 my-auto"
                src="@assets/icons/java.png"
                title="Java"
                alt="Java Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/vb.net.png"
                title="Visual Basic"
                alt="Visual Basic Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/csharp.png"
                title="C#"
                alt="C# Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/php.png"
                title="PHP"
                alt="PHP Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/express.png"
                title="Express"
                alt="Express Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/nodejs.png"
                title="NodeJS"
                alt="NodeJS Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/laravel.png"
                title="Laravel"
                alt="Laravel Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/codeigniter.png"
                title="Codeigniter"
                alt="Codeigniter Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/ado.net.png"
                title="ADO.NET"
                alt="ADO.NET Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/.net.png"
                title=".NET Core"
                alt=".NET Core Logo"
                draggable="false"
              >
            </div>
          </div>
        </article>
      </div>
      <div class="col">
        <article class="card shadow-lg mx-auto w-100">
          <div class="card-header bg-primary text-light">
            <span class="fw-bold">Databases</span>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-center flex-wrap">
              <img
                class="mx-2 my-auto"
                src="@assets/icons/mysql.png"
                title="MySQL"
                alt="MySQL Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/sql-server.png"
                title="SQL Server"
                alt="SQL Server Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/postgresql.png"
                title="PostgreSQL"
                alt="PostgreSQL Logo"
                draggable="false"
              >
            </div>
          </div>
        </article>
      </div>
      <div class="col">
        <article class="card shadow-lg mx-auto w-100">
          <div class="card-header bg-primary text-light">
            <span class="fw-bold">Others</span>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-center flex-wrap">
              <img
                class="mx-2 my-auto"
                src="@assets/icons/git.png"
                title="Git"
                alt="Git Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/github_96px.png"
                title="GitHub"
                alt="GitHub Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/android_studio.png"
                title="Android Studio"
                alt="Android Studio Logo"
                draggable="false"
              >
              <img
                class="mx-2 my-auto"
                src="@assets/icons/wordpress.png"
                title="Wordpress"
                alt="Wordpress Logo"
                draggable="false"
              >
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import Component from 'vue-class-component';
import Program from '@programs/Program';
import IconKnowledge from '@assets/icons/knowledge.png';

@Component({
  name: 'Knowledge',
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
    this.title = 'Knowledge';
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
