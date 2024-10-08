import { IEmployee } from '../../../types/Employee.type';
import './EmployeeModel.styles.css'

type Props = {
    onClose: () => void;
    data: IEmployee
}

const EmployeeModel = (props: Props) => {
    const { onClose, data } = props
  return (
    <div id='myModal' className='modal'>
        <div className='modal-content'>
            <span className='close' onClick={onClose}>&times;</span>
            <h3>employee data</h3>
            <div>
                <div>
                    <label >First Name : {data.firstName}</label>
                </div>
                <div>
                    <label >Last Name : {data.lastName}</label>
                </div>
                <div>
                    <label >Email : {data.email}</label>
                </div>
                <div>
                    <label >Phone Number : {data.phoneNumber}</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmployeeModel
