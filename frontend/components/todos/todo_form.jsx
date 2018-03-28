import React from 'react';

class TodoForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      task: "",
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
  }

  handleTaskChange(e) {
    this.setState({ task: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const newTask = Object.assign({}, this.state);
    newTask.id = new Date().getTime();
    this.props.receiveTodo(newTask);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <br></br>

          <label> Enter new task:
          </label>

          <br></br>

            <input type="text"  onChange={this.handleTaskChange}></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    );
  }

}

export default TodoForm;
