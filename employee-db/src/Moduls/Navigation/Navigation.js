import React,{Component} from 'react';
import {NavLink} from 'react-router-dom'

class Navigation extends Component {

    render(){
        return(
            <div className = 'navigation'>
                <div style = {{float:'left'}}>
                <NavLink activeStyle = {{color:'black'}} className = 'NavLink' to='/Home' >Home</NavLink>
                <NavLink activeStyle = {{color:'black'}} className = 'NavLink' to='/EmployeeList'>EmployeeList</NavLink>
                <NavLink activeStyle = {{color:'black'}} className = 'NavLink' to='/EmployeeDetails'>EmployeeDetails</NavLink>
                </div>
            </div>
        )
    }
}

export default Navigation;