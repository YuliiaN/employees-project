import './EmployeesList.css';
import EmployeesItem from 'components/EmployeesItem/EmployeesItem';

const EmployeesList = ({ selectedEmployees, deleteEmployee }) => {
  return (
    <ul className="list-group">
      {selectedEmployees.map(employee => {
        const { id, ...itemProps } = employee;
        return (
          <EmployeesItem
            key={id}
            {...itemProps}
            deleteEmployee={() => {
              deleteEmployee(id);
            }}
          />
        );
      })}
    </ul>
  );
};

export default EmployeesList;
