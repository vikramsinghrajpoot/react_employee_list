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
            currentIndex:0,
            isValidName:true,
            isValidEmail:true
        }
        if(this.props.isEdit === true){
            this.state = {
                employee:this.props.employee,
                isValidName:true,
            isValidEmail:true
            }
            
         }
       
    }

    validateEmail(email) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            this.setState({ isValidEmail: false })
        }
        else {
            this.setState({ isValidEmail: true })
        }
    }

    validateName(name){
        console.log(name.length)
       if(name.length<4){
           this.setState({
               isValidName:false
           })
       }else{
        this.setState({
            isValidName:true
        })
       }
    }

    onValueChange(e) {
        switch (e.target.name) {
            case 'name':
                this.validateName(e.target.value)
                this.setState({
                    employee: {
                        ...this.state.employee,
                        name: e.target.value,
                    }
                })
                break

            case 'email':
            this.validateEmail(e.target.value)
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
        if (!employee.name || !employee.email || !this.state.isValidEmail || !this.state.isValidName) {
            alert('Valid Name and Email is madatory.');
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
                    <div className="form-element-container">
                        <label className = 'form-title-label'>
                            Name:
                        </label>
                        <div className='form-input'>
                            <input value={this.state.employee.name} onChange={(e) => this.onValueChange(e)} name='name' type='text' placeholder="Name" />
                            <br /><label className="error" hidden={this.state.isValidName}>Name is not valid. There should be at-lest 4 charactors.</label>
                        </div>
                    </div>
                    <div className="form-element-container">
                        <label className = 'form-title-label'>
                            Email:
                            </label>
                        <div className='form-input'>
                            <input value={this.state.employee.email} onChange={(e) => this.onValueChange(e)} name='email' type='text' placeholder="Email" />
                            <br /><label className="error" hidden={this.state.isValidEmail}>Email is not valid.It should be abc@some.com format.</label>
                        </div>
                    </div>

                    <div className="form-element-container">
                        <label className = 'form-title-label'>
                            Skills:
                            </label>
                        <div className='form-input'>
                            <textarea value={this.state.employee.skills} onChange={(e) => this.onValueChange(e)} name='skills' type='text' placeholder="Skills" />
                        </div>
                    </div>
                    <div className="form-element-container">
                        <div style={{margin:'auto'}}>
                            <input onClick={(e) => this.submitPress(e, this.state.employee)} type='submit' />
                        </div>
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
