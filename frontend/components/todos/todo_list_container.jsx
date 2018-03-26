import { connect } from 'react-redux';
import { receiveTodo } from 'todo_actions';
import todoList from './todo_list';

const mapStateToProps = (state) => {
  return {
    todo: state.todo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveTodo: (todo) => dispatch(receiveTodo(todo))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(todoList);
