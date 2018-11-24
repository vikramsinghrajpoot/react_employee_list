import React, { Component } from 'react';
import {connect} from 'react-redux'
import {formSubmitPressed,formUpdate} from '../Actions/EmployeeFormActions'

class EmployeeForm extends Component{

    constructor(props){
        debugger
        super(props)
        console.log('form',this.props.employee)
        //Execute only when came from edit
        this.state = {
            employee: {
                name: '',
                email: '',
                skills: '',
                id:0
            },
            currentIndex:0
        }
        if(this.props.isEdit === true){
            this.state = {
                employee:this.props.employee
            }
            
         }
       
    }

    onValueChange(e) {
        switch (e.target.name) {
            case 'name':
                this.setState({
                    employee: {
                        ...this.state.employee,
                        name: e.target.value,
                    }
                })
                break

            case 'email':
                this.setState({
                    employee: {
                        ...this.state.employee,
                        email: e.target.value,
                    }
                })
                break

            case 'skills':
                this.setState({
                    employee: {
                        ...this.state.employee,
                        skills: e.target.value
                    }
                })
                break

        }

    }

    submitPress(e, employee) {
        e.preventDefault()
        if (!employee.name && !employee.email) {
            alert('Name and Email is madatory.');
            return
        }

        console.log('in form',this.props.isEdit)
        if(this.props.isEdit === true){
           this.props.formUpdate(e,employee)
        }else{
            this.props.formSubmitPressed(e,employee)
            this.setState({
                currentIndex:this.state.currentIndex + 1 
            })
        }

        this.setState({
            employee:{
                name:'',
                email:'',
                skills:''
            }
        })
    }


    render(){
        
        return(
            <div className="employee-form ">
                    <form >
                        <div className="employee-form-group">
                            <label>Name:</label>
                            <input value={this.state.employee.name} onChange={(e) => this.onValueChange(e)} name='name' type='text' placeholder="Name" />
                        </div>
                        <div className="employee-form-group">
                            <label>Email:</label>
                            <input value={this.state.employee.email} onChange={(e) => this.onValueChange(e)} name='email' type='text' placeholder="Email" />
                        </div>
                        <div className="employee-form-group">
                            <label>Skills:</label>
                            <textarea value={this.state.employee.skills} onChange={(e) => this.onValueChange(e)} name='skills' type='text' placeholder="Skills" />
                        </div>
                        <div className="employee-form-group">
                            <input onClick={(e) => this.submitPress(e, this.state.employee)} type='submit' />
                        </div>
                    </form>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        employees: state.employees
    }
}

const mapDispatchToProps = dispatch => ({
    formSubmitPressed: (e, employee) =>
        dispatch(formSubmitPressed(e, employee)),
    formUpdate:(index,employee) =>
        dispatch(formUpdate(index,employee))

})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);
