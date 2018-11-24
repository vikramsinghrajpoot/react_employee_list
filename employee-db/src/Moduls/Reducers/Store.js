
import {createStore} from 'redux'
import employeeReducer from '../Reducers/EmployeeReducer'


const store = createStore(employeeReducer);

export default store;