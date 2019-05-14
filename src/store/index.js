import Vue from "vue";
import Vuex from "vuex";
import uuid4 from "uuid/v4";

import { todos } from "../data/todos";
import { FILTER_MODE_ALL } from "../constants";
import * as Types from "./type";
import { todoFilters } from "../filters/todoFilters";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: todos,
    filterModeCurrent: FILTER_MODE_ALL
  },
  getters: {
    filterTodos(state) {
      return todoFilters(state.todos, state.filterModeCurrent);
    },
    getFilterModeCurrent(state) {
      return state.filterModeCurrent;
    },
    getCountTodoYetComplete(state) {
      return state.todos.filter(todo => !todo.isCompleted).length;
    },
    getCountTodoCompleted(state) {
      return state.todos.filter(todo => todo.isCompleted).length;
    }
  },
  mutations: {
    [Types.ADD_ITEM_IN_TODOS](state, text) {
      state.todos.unshift({
        id: uuid4(),
        isCompleted: false,
        text: text
      });
      //   window.console.log("todoe: ", state.todos);
    },
    [Types.DELETE_ITEM_IN_TODOS](state, todoId) {
      state.todos = state.todos.filter(value => value.id !== todoId);
    },
    [Types.UPDATE_IS_COMPLETED_ALL_TODO](state, isCompleted) {
      state.todos = state.todos.map(todo => {
        return {
          ...todo,
          isCompleted: isCompleted
        };
      });
      //   window.console.log("todo updated: ", state.todos);
    },
    [Types.UPDATE_ITEM_IN_TODOS](state, todoUpdate) {
      state.todos = state.todos.map(todo => {
        return todo.id === todoUpdate.id ? { ...todoUpdate } : todo;
      });
      //   window.console.log('update item: ', state.todos);
    },
    [Types.UPDATE_FILTER_MODE_CURRENT](state, filterModeUpdate) {
      state.filterModeCurrent = filterModeUpdate;
    },
    [Types.DELETE_ALL_TODO_COMPLETED](state) {
      state.todos = state.todos.filter(todo => !todo.isCompleted);
    }
  }
});
