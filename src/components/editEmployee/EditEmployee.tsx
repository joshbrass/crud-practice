import { useState,ChangeEvent,FormEvent } from "react";
import { IEmployee } from "../../types/Employee.type";
import '../employList/EmployList.styles.css'

type Props = {
  data: IEmployee;
  backbtnClik: () => void;
  onUpdatedClickHnd: (data: IEmployee) => void
};

const EditEmployee = (props: Props) => {
  const { data,backbtnClik, onUpdatedClickHnd} = props;
  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber.toString());

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
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: Number(phoneNumber)
    };
    onUpdatedClickHnd(updatedData);
    backbtnClik();
  }





  return (
    <div className="form-container">
      <h3>edit employee</h3>
      <form className="input_container" onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input type="text" value={firstName} onChange={onFirstnameChg} />
        </div>
        <div>
          <label>Last Name: </label>
          <input type="text" value={lastName} onChange={onLastnameChg} />
        </div>
        <div>
          <label>Email: </label>
          <input type="text" value={email} onChange={onEmailChg} />
        </div>
        <div>
          <label>Phone Number: </label>
          <input type="text" value={phoneNumber} onChange={onPhoneNumChg} />
        </div>
        <div>
          <button type="button" onClick={backbtnClik}>
            Back
          </button>
          <button type="submit">update employee</button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
