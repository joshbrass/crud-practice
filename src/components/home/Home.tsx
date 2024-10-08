import { useEffect, useState } from 'react';
import EmployList from '../employList/EmployList';
import './Home.styles.css';
import { IEmployee, PageList } from '../../types/Employee.type';
import AddEmployee from '../addemployee/AddEmployee';
import EditEmployee from '../editEmployee/EditEmployee';


const Header = () => {
  const [employeeList, setEmployeeList] = useState([] as IEmployee[]);
  const [shownPage, setShownPage] = useState(PageList.list);
  const [dataToEdit, setDataToEdit] = useState({} as IEmployee);

  useEffect(() => {
    const listInString = window.localStorage.getItem('EmployeeList');
    if (listInString) {
      _setEmployeeList(JSON.parse(listInString));
    }
  }, []);

  const addEmploybtn = () => {
    setShownPage(PageList.add);
  };

  const shownListPage = () => {
    setShownPage(PageList.list);
  };

  const _setEmployeeList = (list: IEmployee[]) => {
    setEmployeeList(list);
    window.localStorage.setItem('EmployeeList', JSON.stringify(list));
  };

  const addEmployeeHnd = (data: IEmployee) => {
    _setEmployeeList([...employeeList, data]);
  };

  const deleteEmployee = (data: IEmployee) => {
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];
    tempList.splice(indexToDelete, 1);
    _setEmployeeList(tempList);
  };

  const editEmployeeData = (data: IEmployee) => {
    setShownPage(PageList.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IEmployee) => {
    const filteredData = employeeList.filter(x => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    _setEmployeeList(tempData);
  };

  

  return (
    <>
      <header className='article-header'>
        <h1>simple react crud app</h1>
      </header>
      <section className='section-content'>
        {shownPage === PageList.list && (
          <>
            <button onClick={addEmploybtn} className='add_employee_btn'>
              Add employee
            </button>
            <EmployList
              list={employeeList}
              onDeleteHnd={deleteEmployee}
              onEdit={editEmployeeData}
            />
          </>
        )}

        {shownPage === PageList.add && (
          <AddEmployee
            backbtnClik={shownListPage}
            onSubmitClick={addEmployeeHnd}
          />
        )}

        {shownPage === PageList.edit && (
          <EditEmployee
            data={dataToEdit}
            backbtnClik={shownListPage}
            onUpdatedClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Header;
