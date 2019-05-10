<template>
  <div class="main">
    <input type="checkbox" class="check-all" @click="checkAll" v-model="isCheckAll">
    <TodoList :todoList="todoList"/>
  </div>
</template>
<script>
import TodoList from "./TodoList.vue";

export default {
  name: "main-todo",
  data: function() {
    return {
      isCheckAll: false
    };
  },
  components: {
    TodoList
  },
  props: {
    todoList: Array,
    checkAllTodo: Function
  },
  methods: {
    checkAll: function() {
      this.isCheckAll = !this.isCheckAll;
      this.$emit("checkAllTodo", this.isCheckAll);
    }
  }
  // beforeUpdate() {
  //   console.log("before update: ", this.isCheckAll);
  // },
  // updated() {
  //   console.log("updated: ", this.isCheckAll);
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

