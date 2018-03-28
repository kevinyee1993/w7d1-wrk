export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodos = (todos=null) => ({
  type: RECEIVE_TODOS,
  todos: todos
});

export const receiveTodo = (todo=null) => ({
  type: RECEIVE_TODO,
  todo: todo
});
