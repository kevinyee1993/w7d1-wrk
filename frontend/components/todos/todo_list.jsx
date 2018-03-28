import React from 'react';
import TodoForm from './todo_form';

class todoList extends React.Component{
  constructor(props) {
    super(props);
  }

  renderTodos() {
    let plsWork = Object.keys(this.props.todos).map((id) => {
    return this.props.todos[id];
    });
    return plsWork.map((todo) => {
      return(
        <li key={todo.id}>{todo.title}: {todo.body}</li>
      );
    });
  }

  render() {


    const { todos } = Object.keys(this.props);
    return (
    <div>
      <h1>THIS IS THE TODO LIST</h1>
      <ul>
        {this.renderTodos()}
        <TodoForm />
      </ul>
    </div>
  );
  }
}

export default todoList;
