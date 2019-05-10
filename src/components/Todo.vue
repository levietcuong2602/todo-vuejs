<template>
  <li>
    <div class="view" :style="{display: displayView}">
      <input class="toggle" type="checkbox" v-model="todo.isCompleted" @click="checkItemTodo">
      <label class="todo-content" @dblclick="showInput">{{todo.text}}</label>
      <button class="destroy" @click="deleteTodoItem"></button>
    </div>
    <input
      class="edit"
      type="text"
      :style="{display: displayInput}"
      @blur="hiddenInput"
      ref="inputEdit"
      v-model="todo.text"
      @keypress.enter="hiddenInput"
    >
  </li>
</template>
<script>
import { constants } from "crypto";
import { eventBus } from "../main.js";

export default {
  name: "todo",
  props: {
    todo: Object
  },
  data: function() {
    return {
      displayView: "",
      displayInput: "none"
    };
  },
  methods: {
    deleteTodoItem: function() {
      eventBus.$emit("delete", this.todo.id);
    },
    checkItemTodo: function() {
      eventBus.$emit("checkItemTodo", this.todo);
    },
    showInput: function() {
      this.displayView = "none";
      this.displayInput = "flex";
      this.$nextTick(() => this.$refs.inputEdit.focus());
    },
    hiddenInput: function() {
      this.displayView = "";
      this.displayInput = "none";
      eventBus.$emit("editTodo", {...this.todo});
    },
  }
  // beforeUpdate() {
  //   const temp = {...this.todo};
  //   console.log("before update: ", temp);
  // },
  // updated() {
  //   const temp = {...this.todo};
  //   console.log("updated: ", temp);
  // }
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
  display: none;
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

