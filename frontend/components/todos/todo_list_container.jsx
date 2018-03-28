import { connect } from 'react-redux';
import { receiveTodo } from '../../actions/todo_actions';
import todoList from './todo_list';
import { bindActionCreators } from 'redux';



const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => ({
  receiveTodo: (taskParams) => {
    const actionFn = receiveTodo(taskParams);
    dispatch(actionFn);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(todoList);
