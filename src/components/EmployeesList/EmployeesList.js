import './EmployeesList.css';
import EmployeesItem from 'components/EmployeesItem/EmployeesItem';

const EmployeesList = ({ data, selectedEmployees }) => {
  return (
    <ul className="list-group">
      {selectedEmployees.map(employee => {
        const { id, ...itemProps } = employee;
        return <EmployeesItem key={id} {...itemProps} />;
      })}
    </ul>
  );
};

export default EmployeesList;
