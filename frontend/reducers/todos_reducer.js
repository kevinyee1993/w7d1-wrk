import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      const newState = {};

      action.todos.forEach(function(obj) {
        newState[obj.id] = obj;
      });
      return newState;
    case RECEIVE_TODO:

      console.log('i made it hiu2');
      break;
    default:
      return state;
  }
};

export default todosReducer;
