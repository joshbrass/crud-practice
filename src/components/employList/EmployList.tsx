import './EmployList.styles.css'
import { IEmployee } from '../../types/Employee.type'
import EmployeeModel from '../models/employeeModels/EmployeeModel';
import { useState } from 'react';

type Props = {
    list: IEmployee[];
    onDeleteHnd: (data: IEmployee) => void
    onEdit: (data: IEmployee) => void
};

const EmployList = (props: Props) => {
    const { list, onDeleteHnd, onEdit } = props
    const [showModel, setShowModel] = useState(false)
    const [dataToShow, setDataToShow] = useState(null as IEmployee | null)

    const viewEmployee = (data: IEmployee) => {
      setDataToShow(data)
      setShowModel(true)
    }

    const oncloseModel = () => {
      setShowModel(false)
    }
  return (
    <div>
      <h3>Employee List</h3>
        <table id="customers">
          <tbody>
            <tr>
              <th>Name</th>
              <th>email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
              {list.map((employee) => {
                  return (
                  <tr key={employee.id}>
                      <td>{`${employee.firstName} ${employee.lastName}`}</td>
                      <td>{`${employee.email}`}</td>
                      <td>{`${employee.phoneNumber}`}</td>
                      <td>
                        <div>
                          <button onClick={() => viewEmployee(employee)}>view</button>
                          <button onClick={() => onEdit(employee)}>edit</button>
                          <button onClick={() => onDeleteHnd(employee)}>Delete</button>
                        </div>
                      </td>
                  </tr>
          )
                })}
          </tbody>
        </table>
        {showModel && dataToShow !== null &&  <EmployeeModel onClose={oncloseModel} data={dataToShow}/>}
        
    </div>
  )
}

export default EmployList
