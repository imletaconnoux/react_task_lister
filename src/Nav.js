import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component{
  render(){
    return(
      <div className="ui secondary menu">
      <NavLink activeClassName="active" className="item" to="/">Home</NavLink>
        <NavLink activeClassName="active" className="item" to="/todo">To Do</NavLink>
        <NavLink activeClassName="active" calssName="item" to="/completed">Completed</NavLink>
      </div>
    )
  }
}

export default Nav;
