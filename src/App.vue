<template>
  <div id="app">
    <Header />
    <Content />
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import Content from "./components/Content.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    Content
  }
};
</script>

<style lang="scss">
@import url("/assets/styles/app.scss");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // margin-top: 60px;
}
</style>
