import {
  FILTER_MODE_ALL,
  FILTER_MODE_ACTIVE,
  FILTER_MODE_COMPLETED
} from "../constants";

export const todoFilters = (todos, filterMode) => {
  window.console.log('filter');
  if (!filterMode || filterMode === FILTER_MODE_ALL) {
    return todos;
  } else if (filterMode === FILTER_MODE_ACTIVE) {
    return todos.filter(todo => {
      return !todo.isCompleted;
    });
  } else if (filterMode === FILTER_MODE_COMPLETED) {
    return todos.filter(todo => {
      return todo.isCompleted;
    });
  }
  return [];
};
