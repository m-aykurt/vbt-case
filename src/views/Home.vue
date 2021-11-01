<template>
  <div class="home">
    <div class="card text-center">
      <div class="card-header">
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <div class="card-body">
        <h5 class="card-title">Welcome to My First VueJs App</h5>
        <p class="card-text">
         In this application, in addition to all the requirements, the router structure and Translate API are used.
        </p>
        <router-link to="/main" class="btn btn-secondary">Press to go to weather </router-link>
      </div>
      <div class="card-footer text-muted">
        <a href="https://github.com/m-aykurt" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.card-footer a{
  color: rgb(102, 102, 102);
}
.card-footer a:hover{
  color: rgb(75, 75, 75);
}
</style>
