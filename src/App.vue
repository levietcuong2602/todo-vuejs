<template>
  <div id="app">
    <Header @addTodo="addTodo"/>
    <Main :todoList="filter()" @checkAllTodo="checkAll"/>
    <Footer :todoList="todos"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

import { eventBus } from "./main.js";
import uuid4 from "uuid/v4";

import {
  FILTER_MODE_ALL,
  FILTER_MODE_ACTIVE,
  FILTER_MODE_COMPLETED
} from "./constants";

export default {
  name: "app",
  components: {
    Header,
    Main,
    Footer
  },
  data: function() {
    return {
      todos: [
        {
          id: uuid4(),
          isCompleted: true,
          text: "Cooking Food"
        },
        {
          id: uuid4(),
          isCompleted: false,
          text: "Read Book"
        },
        {
          id: uuid4(),
          isCompleted: false,
          text: "Writing paper"
        }
      ],
      filterMode: FILTER_MODE_ALL
    };
  },
  methods: {
    addTodo: function(todo) {
      this.todos.unshift({
        id: uuid4(),
        isCompleted: false,
        text: todo
      });
    },
    deleteTodo: function(todoId) {
      this.todos = this.todos.filter(value => value.id !== todoId);
    },
    checkAll: function(isCheck) {
      this.todos = this.todos.map(todo => {
        return {
          ...todo,
          isCompleted: isCheck
        };
      });
    },
    checkItemTodo: function(todoItem) {
      this.todos = this.todos.map(todo => {
        return todo.id === todoItem.id ? { ...todoItem } : todo;
      });
    },
    filter: function() {
      if (this.filterMode === FILTER_MODE_ALL) {
        return this.todos.filter(todo => true);
      } else if (this.filterMode === FILTER_MODE_ACTIVE) {
        return this.todos.filter(todo => {
          return !todo.isCompleted;
        });
      } else if (this.filterMode === FILTER_MODE_COMPLETED) {
        return this.todos.filter(todo => {
          return todo.isCompleted;
        });
      }
      return [];
    }
  },
  created() {
    eventBus.$on("delete", todo => {
      this.deleteTodo(todo);
    });

    eventBus.$on("checkItemTodo", todo => {
      this.checkItemTodo(todo);
    });

    eventBus.$on("changeFilterMode", filterMode => {
      this.filterMode = filterMode;
    });

    eventBus.$on("editTodo", todoEdit => {
      this.todos = this.todos.map(todo => {
        return todo.id === todoEdit.id ? todoEdit : todo;
      });
    });
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
