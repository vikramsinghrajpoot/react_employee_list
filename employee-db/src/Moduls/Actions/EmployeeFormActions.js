import Constants from '../Constants/Constants'

export function  formSubmitPressed (e, employee){
    return {
        type: Constants.addEmployee,
        employee: employee
    }
    e.preventDefault()

}

export function deletePressed (index) {

    console.log('in dispatch', index)
    return {
        type: Constants.deleteEmployee,
        index: index
    }

}
export function  editPressed (employee,index) {
   // e.preventDefault()
    return{
        type: Constants.editEmployee,
        index: index,
        employee:employee
    }

}

export  function formUpdate(index,employee){
    return{
        type: Constants.updateEmployee,
        index: index,
        employee:employee
    }
}