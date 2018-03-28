export const allTodos = (state)  => (
  Object.keys(state.todos).map(function(id) {
    return state.todos[id];
  })
);
