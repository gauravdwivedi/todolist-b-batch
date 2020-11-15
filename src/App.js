import React, { Component } from "react";
import { Task } from "./components/task";
import Edit from "./components/edit";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      task: "",
      prevTask: "",
      isEditMode: false,
    };
  }

  handleOnChange = (e) => {
    this.setState({ task: [e.target.value] });
  };
  handleEditOnChange = (e) => {
    console.log("inside oneditonchange");
    this.setState({ task: [e.target.value] });
  };
  handleClick = () => {
    const { task, tasks } = this.state;

    // check if task is empty
    if (task === "") {
      alert("task is empty");
    } else {
      tasks.push(task);
      // if not add this task in tasks array
      this.setState({ tasks: tasks });
      this.setState({ task: "" });
    }
  };

  handleDelete = (task) => {
    const { tasks } = this.state;

    // use filter to filter out task from array

    let newArray = tasks.filter((item) => item !== task);

    this.setState({ tasks: newArray });
  };

  // handle edit
  handleEdit = (task) => {
    console.log("Edit btn cliked", task);
    this.setState({
      prevTask: task,
      isEditMode: !this.state.isEditMode,
      task: task,
    });
  };

  //discard edit

  closeEditWithoutSaving = () => {
    console.log("inside close edit");
    this.setState({
      isEditMode: !this.state.isEditMode,
      task: "",
    });
  };

  //save edit

  saveEdit = () => {
    const { task, tasks, prevTask } = this.state;
    console.log("inside Save Edit ", task);
    tasks.push(task);
    let newArr = tasks.filter((item) => item !== prevTask);

    this.setState({ tasks: newArr, task: "", isEditMode: false });
  };
  render() {
    console.log("Renders");
    const { task, tasks } = this.state;
    return this.state.isEditMode ? (
      <div>
        <Edit
          task={task}
          closeEdit={this.closeEditWithoutSaving}
          handleEditOnChange={this.handleEditOnChange}
          saveEdit={this.saveEdit}
        />
      </div>
    ) : (
      <div style={{ margin: "10%" }}>
        <input onChange={this.handleOnChange} value={task} />
        <button onClick={this.handleClick}>Add Task</button>
        {tasks.map((task) => (
          <Task
            task={task}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            handleEditOnChange={this.handleEditOnChange}
          />
        ))}
      </div>
    );
  }
}

export default App;
