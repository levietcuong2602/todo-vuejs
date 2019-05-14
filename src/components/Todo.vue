<template>
  <li>
    <div v-if="!editMode" class="view">
      <input class="toggle" type="checkbox" v-model="todo.isCompleted" @click="checkItemTodo">
      <label class="todo-content" @dblclick="showInput">{{todo.text}}</label>
      <button class="destroy" @click="deleteTodoItem"></button>
    </div>
    <input
      v-else
      class="edit"
      type="text"
      @blur="hiddenInput"
      ref="inputEdit"
      v-model="todo.text"
      @keypress.enter="hiddenInput"
    >
  </li>
</template>
<script>
import { DELETE_ITEM_IN_TODOS, UPDATE_ITEM_IN_TODOS } from "../store/type.js";

export default {
  name: "todo",
  props: {
    todo: Object
  },
  data: function() {
    return {
      editMode: false
    };
  },
  methods: {
    deleteTodoItem: function() {
      this.$store.commit(DELETE_ITEM_IN_TODOS, this.todo.id);
    },
    checkItemTodo: function() {
      this.$store.commit(UPDATE_ITEM_IN_TODOS, this.todo);
    },
    showInput: function() {
      this.editMode = true;
      this.$nextTick(() => this.$refs.inputEdit.focus());
    },
    hiddenInput: function() {
      this.editMode = false;
      this.$store.commit(UPDATE_ITEM_IN_TODOS, this.todo);
    }
  }
};
</script>
<style>
.view {
  display: flex;
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  text-align: -webkit-match-parent;
  padding-top: 20px;
  padding-bottom: 20px;
}
.todo-content {
  width: 90%;
  margin-left: 10px;
}
.destroy {
  border: 0;
  background: none;
  font-size: 100%;
  position: absolute;
  right: 20px;
  top: 15px;
  color: #cc9a9a;
}
.destroy:after {
  content: "x";
}
.edit {
  display: flex;
  position: relative;
  right: -55px;
  margin: 0;
  width: 90%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
</style>

