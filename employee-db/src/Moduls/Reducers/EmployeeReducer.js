import Constants from '../Constants/Constants'

const initialState = {
    employees: [],
    index: 0
}

const employeeReducer = (state = initialState, action) => {

    switch (action.type) {
        case Constants.addEmployee:
            console.log('in Employee reducer', action.employee)
            return { ...state, employees: [...state.employees, action.employee] }

        case Constants.deleteEmployee:
            return {
                employees: [...state.employees.slice(0, action.index),
                ...state.employees.slice(action.index + 1)
                ]
            }

        case Constants.editEmployee:
            console.log('in Employee reducer', action.index)
            //return state
            return { ...state, index: action.index, employee: action.employee }


        case Constants.updateEmployee:
            console.log('in reducer update called', action)
            const {employees} = state
            for(var i = 0; i< employees.length; i++){
                debugger
                const employee = employees[i]
                console.log(employees[i].id,action.employee.id,action.employee.name)

                if(employees[i].id === action.employee.id){
                   var newEmpObject = {
                       name:action.employee.name,
                       email:action.employee.email,
                       skills:action.employee.skills,
                       id:action.employee.id
                   }
                   state.employees[i] = newEmpObject
                   console.log('Updated Emp object:',state)
                }
            }
            return state

        default:
            return state
    }
}

export default employeeReducer;