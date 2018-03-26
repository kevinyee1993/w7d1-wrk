import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import receiveTodo from '../actions/todo_actions';
import receiveTodos from '../actions/todo_actions';
import logger from 'redux-logger';

const configureStore = () => createStore(
  rootReducer, applyMiddleware(logger)
);

export default configureStore;
