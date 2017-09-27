import React from 'react';
import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { Route, Link, Switch } from 'react-router-dom'

class TaskContainer extends React.Component {


  constructor(){

    super()

    this.state = {
      tasksToDo: [ {item: "Trader Joe's", description: "Milk and Eggs", id: 1}, {item: "Laundry", description: "Sheets and Towels", id: 2}],
      completedTasks: []
    }
  }

  addTask = (task) => {
    const newId = this.state.tasksToDo[this.state.tasksToDo.length-1] ? this.state.tasksToDo[this.state.tasksToDo.length-1].id + 1 : 1
    const newTask = Object.assign({}, task, {id: newId})
    const allTasks = [...this.state.tasksToDo, newTask]
    this.setState({
      tasksToDo: allTasks
    })
  }

  markCompleted = (task) => {
    const taskItem = task.item
    const filteredTasks = this.state.tasksToDo.filter((task) => task.item !== taskItem)
    this.setState({
      tasksToDo: filteredTasks,
      completedTasks: [...this.state.completedTasks, task]
    })
  }

  render(){
    return(
      <div>
        <Route exact path="/" render={(props) => <TaskForm createTask={this.addTask} {...props}/>}/>
        <TaskList toDo={this.state.tasksToDo} completed={this.state.completedTasks} onComplete={this.markCompleted}/>
      </div>

    )
  }

}

export default TaskContainer;
