import './EmployeesList.css';
import EmployeesItem from 'components/EmployeesItem/EmployeesItem';

const EmployeesList = ({ data }) => {
  return (
    <ul className="list-group">
      {data.map(employee => {
        const { id, ...itemProps } = employee;
        return <EmployeesItem key={id} {...itemProps} />;
      })}
    </ul>
  );
};

export default EmployeesList;
