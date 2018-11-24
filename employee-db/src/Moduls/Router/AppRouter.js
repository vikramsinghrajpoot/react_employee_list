
import React,{Component} from 'react';
import {BrowserRouter, Route,} from 'react-router-dom'
import Home from '../Home/Home'
import EmployeeList from '../Employee/EployeeList'
import EmployeeDetails from '../Employee/EmployeeDetails'
import Navigation from '../Navigation/Navigation'

class AppRouter extends Component {

    render(){
        return(
            <div>
                <BrowserRouter>
                <div>
                <Navigation/>
                <ul>
                 <Route  path='/Home' component = {Home} exact>Home</Route>
                <Route path='/EmployeeList' component = {EmployeeList}>EmployeeList</Route>
                <Route path='/EmployeeDetails' component = {EmployeeDetails}>EmployeeDetails</Route> 
                
                </ul>
                </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default AppRouter;