import { useState, ChangeEvent, FormEvent } from 'react';
import './AddEmployee.styles.css';
import { IEmployee } from '../../types/Employee.type';

type Props = {
  backbtnClik: () => void;
  onSubmitClick: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const { backbtnClik, onSubmitClick } = props;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onFirstnameChg = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const onLastnameChg = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const onEmailChg = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPhoneNumChg = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: Number(phoneNumber)
    };
    onSubmitClick(data);
    backbtnClik();
  }

  return (
    <div className='form-container'>
      <h3>Add employee</h3>
      <form className='input_container' onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input type='text' value={firstName} onChange={onFirstnameChg} />
        </div>
        <div>
          <label>Last Name: </label>
          <input type='text' value={lastName} onChange={onLastnameChg} />
        </div>
        <div>
          <label>Email: </label>
          <input type='text' value={email} onChange={onEmailChg} />
        </div>
        <div>
          <label>Phone Number: </label>
          <input type='text' value={phoneNumber} onChange={onPhoneNumChg} />
        </div>
        <div>
          <button type='button' onClick={backbtnClik}>Back</button>
          <button type='submit'>Add employee</button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
