
import React,{Component} from 'react';
import {connect} from 'react-redux'
import EmployeeReducer from '../Reducers/EmployeeReducer'
import EmployeeForm from '../Home/EmployeeForm'

class EmployeeDetails extends Component {

    constructor(props){
        super(props)
    }

    render(){
        // console.log('here in Employee:',this.props.index,this.state)
        let isEdit = false
        if(this.props.employee){
          isEdit = true
        }

        return(
            <div>
               <EmployeeForm isEdit = {isEdit} employee = {this.props.employee}/>
            </div>
        )
    }
}


const mapStateToProps = (state) =>{
    console.log(state)
   return {
       index:state.index,
       employee:state.employee
    }
}


export default connect(mapStateToProps) (EmployeeDetails);