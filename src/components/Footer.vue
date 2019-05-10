<template>
  <div class="footer">
    <span class="todo-count">
      <strong>{{calculateTodo()}}</strong>
      <span>items left</span>
    </span>
    <ul class="filters">
      <li>
        <a
          :class="{selected: filterMode === FILTER_MODE_ALL}"
          href="#"
          @click="changeFilterMode(FILTER_MODE_ALL)"
        >All</a>
      </li>
      <li>
        <a
          :class="{selected: filterMode === FILTER_MODE_ACTIVE}"
          href="#"
          @click="changeFilterMode(FILTER_MODE_ACTIVE)"
        >Active</a>
      </li>
      <li>
        <a
          :class="{selected: filterMode === FILTER_MODE_COMPLETED}"
          href="#"
          @click="changeFilterMode(FILTER_MODE_COMPLETED)"
        >Completed</a>
      </li>
    </ul>
    <button class="clear-completed" :style="{display: displayButton}">Clear Completed</button>
  </div>
</template>
<script>
import {
  FILTER_MODE_ALL,
  FILTER_MODE_ACTIVE,
  FILTER_MODE_COMPLETED
} from "../constants";
import { eventBus } from "../main";

export default {
  name: "footer-todo",
  props: {
    todoList: Array
  },
  data: function() {
    return {
      FILTER_MODE_ALL: FILTER_MODE_ALL,
      FILTER_MODE_ACTIVE: FILTER_MODE_ACTIVE,
      FILTER_MODE_COMPLETED: FILTER_MODE_COMPLETED,
      filterMode: FILTER_MODE_ALL,
      displayButton: 'none',
    };
  },
  methods: {
    changeFilterMode: function(filterMode) {
      this.filterMode = filterMode;
      eventBus.$emit("changeFilterMode", filterMode);
    },
    calculateTodo: function() {
      return this.todoList.filter(todo => !todo.isCompleted).length;
    }
  },
  mounted() {
    const check = this.todoList.some(todo => todo.isCompleted === true);
    console.log(check);
    if (check) {
      this.displayButton = '';
    }
  }
};
</script>
<style>
.footer {
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
  display: flex;
}
.footer:before {
  content: "";
  /* position: absolute;
  right: 0;
  bottom: 0;
  left: 0; */
  height: 50px;
  overflow: hidden;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6,
    0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6,
    0 17px 2px -6px rgba(0, 0, 0, 0.2);
}
.todo-count {
  position: relative;
  /* left: -45px; */
}
.filters {
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  left: 60px;
  bottom: 0;
}
.filters li {
  display: inline;
  padding: 3px 7px;
}
.filters li a.selected {
  border-color: rgba(175, 47, 47, 0.2);
}
.filters li a:hover {
  border-color: rgba(175, 47, 47, 0.1);
}
.filters li a {
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
}
.clear-completed {
  /* display: none; */
  position: relative;
  left: 120px;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: 100%;
  color: inherit;
}
.clear-completed:hover {
  text-decoration: underline;
}
</style>

