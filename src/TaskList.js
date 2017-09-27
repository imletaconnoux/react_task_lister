import React from 'react';
import TaskItem from './TaskItem';
import CompletedTaskItem from './CompletedTaskItem';
import { Route, Link, Switch } from 'react-router-dom'

const TaskList = (props) => {
  console.log(props.toDo)

  const taskItems = props.toDo.map((task, index) => {
    return <TaskItem key={index} task={task} onComplete={props.onComplete}/>
  })

  const completedTaskItems = props.completed.map((task, index) => {
    return <CompletedTaskItem key={index} task={task}/>
  })

  return(
    <div>
      <Route exact path="/todo" render={(props) => <ul> {taskItems} </ul>}/>
      <Route exact path="/completed" render={(props) => <ul> {completedTaskItems} </ul>}/>

    </div>
  )
}

export default TaskList;
