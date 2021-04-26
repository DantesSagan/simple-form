<template>
  <div id="app" class="h-100">
    <div class="container-fluid h-100 justify-content-center align-items-center">
      <div class="row h-100">
        <div class="col-md-1 vue-bg h-100 d-flex"></div>
        <div class="col-md-9 h-100 d-flex justify-content-center align-items-center">
          <div class="col-md-8 rounded px-5 py-4 shadow bg-white text-left">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from "./components/SignupForm.vue";
export default {
  name: "App",
  components: {
    SignupForm,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
  margin-left: 150px;
}
.vue-bg {
  background: #bce5d0;
}
@media only screen and (max-width: 1200px) {
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    margin-bottom: 60px;
    margin-left: 0;
  }
  .vue-bg {
    background: #bce5d0;
  }
}
@media only screen and (max-width: 375px) {
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 30px;
    margin-bottom: 30px;
    margin-left: 0;
    
  }
  .vue-bg {
    background: #bce5d0;
  }
}
</style>
