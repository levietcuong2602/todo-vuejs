<template>
  <div class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      type="text"
      placeholder="What need to do done?"
      @input="handleChange"
      @change="handleAddTodo"
      v-model="text"
    >
  </div>
</template>
<script>
import * as Types from "../store/type.js";

export default {
  name: "header-todo",
  data: function() {
    return {
      text: ""
    };
  },
  methods: {
    handleChange: function(event) {
      event.preventDefault();
      this.text = event.target.value;
    },
    handleAddTodo: function() {
      this.$store.commit(Types.ADD_ITEM_IN_TODOS, this.text);
      this.text = "";
    }
  },
  // mounted() {
  //   console.log("Mouted-Header");
  // }
};
</script>
<style>
.header {
  display: block;
}
.header h1 {
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  text-rendering: optimizeLegibility;
}
h1 {
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.new-todo {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  color: inherit;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
</style>


