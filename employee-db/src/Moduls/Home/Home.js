import React, { Component } from "react";
import { connect } from "react-redux";
import Constants from "../Constants/Constants";
import EmployeeFrom from "./EmployeeForm";
import {NavLink,BrowserRouter,Redirect} from 'react-router-dom'

import {
  formSubmitPressed,
  deletePressed,
  editPressed
} from "../Actions/EmployeeFormActions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toEmployeeDetails:false
    }
  }

  deletePressed(index) {
    this.props.deletePressed(index);
  }

  editPressed(employee,index) {
    this.props.editPressed(employee,index);

    this.setState({
      toEmployeeDetails:true
    })
  }

  render() {

    if (this.state.toEmployeeDetails === true) {
      return <Redirect to='/EmployeeDetails' />
    }

    const employeesData = this.props.employees.map((employee, index) => {
      return (
        <tr key={index}>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>
            {employee.skills}
            <div>
              <button onClick={() => this.deletePressed(index)}>Delete</button>
              <button onClick={e => this.editPressed(employee, index)}>Edit</button>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <EmployeeFrom />
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Skills</th>
            </tr>
          </thead>

          <tbody>{employeesData}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employees
  };
};

const mapDispatchToProps = dispatch => ({
  deletePressed: index => dispatch(deletePressed(index)),
  editPressed: (employee, index) => dispatch(editPressed(employee, index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
