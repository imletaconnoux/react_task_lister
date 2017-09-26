import React from 'react';

const CompletedTaskItem = (props) => {

  return <li id={props.task.id}> {props.task.item} - {props.task.description} </li>

}

export default CompletedTaskItem;
