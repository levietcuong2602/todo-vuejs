<template>
  <div class="main">
    <input type="checkbox" class="check-all" @click="checkAll" v-model="isCheckAll">
    <TodoList :todoList="todoList"/>
  </div>
</template>
<script>
import TodoList from "./TodoList.vue";
import { UPDATE_IS_COMPLETED_ALL_TODO } from "../store/type.js";

export default {
  name: "main-todo",
  props: {
    todoList: Array
  },
  data: function() {
    return {
      isCheckAll: false
    };
  },
  components: {
    TodoList
  },
  methods: {
    checkAll: function() {
      // vì method chạy trước beforUpdate, updated
      // nên isCheckAll chưa đc cập nhật ở đây.
      this.isCheckAll = !this.isCheckAll;
      this.$store.commit(UPDATE_IS_COMPLETED_ALL_TODO, this.isCheckAll);
    }
  },
  // beforeCreate() {
  //   console.log("beforeCreate", this.isCheckAll);
  // },
  // created() {
  //   console.log("Created", this.isCheckAll);
  // },
  // beforeUpdate() {
  //   console.log("beforeUpdate", this.isCheckAll);
  // },
  // updated() {
  //   console.log("updated", this.isCheckAll);
  // },
  // mounted() {
  //   console.log("Mouted-Main");
  // }
};
</script>
<style>
.main {
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
  display: block;
}
.check-all {
  position: absolute;
  top: -40px;
}
</style>

