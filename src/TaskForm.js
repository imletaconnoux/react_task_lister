import React from 'react';

class TaskForm extends React.Component{

  constructor(){
    super()

    this.state = {
      inputTaskItem: "",
      inputTaskDescription: ""
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.inputTaskItem !== "" && this.state.inputTaskDescription !== ""){
      const newTask = { item: this.state.inputTaskItem, description: this.state.inputTaskDescription}

      this.props.createTask(newTask)
    }

    this.setState({
      inputTaskItem: "",
      inputTaskDescription: ""
    })
  }

  handleTaskItemInput = (event) => {
    this.setState({
      inputTaskItem: event.target.value
    })
  }

  handleTaskDescriptionInput = (event) => {
    this.setState({
      inputTaskDescription: event.target.value
    })
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Item" onChange={this.handleTaskItemInput} value={this.state.inputTaskItem}/>
        <input type="textarea" placeholder="Description" onChange={this.handleTaskDescriptionInput} value={this.state.inputTaskDescription}/>
        <input type="submit" value="Create New Task"/>
      </form>
    )
  }

}

export default TaskForm;
