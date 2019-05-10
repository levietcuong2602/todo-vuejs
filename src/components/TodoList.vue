<template>
  <ul class="todo-list">
    <Todo v-for="todo in todoList" :key="todo.id" :todo="todo"/>
  </ul>
</template>
<script>
import Todo from "./Todo.vue";

export default {
  name: "todo-list",
  components: {
    Todo
  },
  props: {
    todoList: Array,
  }
};
</script>
<style>
.todo-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
</style>

