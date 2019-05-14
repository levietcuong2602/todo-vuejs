<template>
  <div id="app">
    <Header/>
    <Main :todoList="filterTodos"/>
    <Footer :todoList="filterTodos"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

import uuid4 from "uuid/v4";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Header,
    Main,
    Footer
  },
  computed: {
    ...mapGetters(["filterTodos", "getCountTodoYetCompleted"])
  },
  // beforeCreate() {
  //   console.log("beforeCreate");
  // },
  // created() {
  //   console.log("Created");
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate");
  // },
  // updated() {
  //   console.log("updated");
  // },
  // beforeMount() {
  //   console.log("beforeMount");
  // },
  mounted() {
    console.log("Mounted-App: ", this.filterTodos);
    console.log("Mounted-App: ", this.getCountTodoYetCompleted);
  }
};
</script>

<style>
#app {
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
}
body {
  font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif;
  line-height: 1.4em;
  background: #f5f5f5;
  color: #4d4d4d;
  min-width: 230px;
  max-width: 550px;
  margin: auto;
  -webkit-font-smoothing: antialiased;
  font-weight: 300;
}
</style>
