import React from 'react';
import TaskItem from './TaskItem';
import CompletedTaskItem from './CompletedTaskItem';

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
      <h2>To Do:</h2>
        <ul>
          {taskItems}
        </ul>
      <h2>Completed:</h2>
        <ul>
          {completedTaskItems}
        </ul>

    </div>
  )
}

export default TaskList;
