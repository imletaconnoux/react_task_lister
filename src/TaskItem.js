import React from 'react';

class TaskItem extends React.Component{
  constructor(){
    super();
    this.state = {
      detailsShowing: false
    }
  }

  handleCompleteButton = () => {
    this.props.onComplete(this.props.task)
  }

  handleShowDetails = () => {
    this.setState({
      detailsShowing: !this.state.detailsShowing
    })
  }


  render(){
    if (!this.state.detailsShowing){
      return (
        <li id={this.props.task.id}> {this.props.task.item}<button onClick={this.handleCompleteButton}>Done With Task</button> <button onClick={this.handleShowDetails}>Show Details</button></li>
      )
    } else {
      return (
        <li id={this.props.task.id}>{this.props.task.item}<button onClick={this.handleCompleteButton}>Done With Task</button> <button onClick={this.handleShowDetails}>Hide Details</button>
          <ul>
            <li>{this.props.task.description}</li>
          </ul>
        </li>
      )
    }
  }

}


export default TaskItem;


//
// functional component
// const TaskItem = (props) => {
//
//   const handleButtonClick = () => {
//     console.log("clicking")
//     console.log(props.task)
//     props.onComplete(props.task)
//   }
//
//   return <li id={props.task.id}> {props.task.item} - {props.task.description} <button onClick={handleButtonClick}>Done With Task</button></li>
//
// }
