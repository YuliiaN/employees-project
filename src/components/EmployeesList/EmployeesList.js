import './EmployeesList.css';
import EmployeesItem from 'components/EmployeesItem/EmployeesItem';

const EmployeesList = ({
  deleteEmployee,
  onToggleIncrease,
  onToggleRise,
  tab,
  filtered,
}) => {
  const createList = type => {
    return type.map(employee => (
      <EmployeesItem
        key={employee.id}
        {...employee}
        deleteEmployee={() => {
          deleteEmployee(employee.id);
        }}
        onToggleIncrease={onToggleIncrease}
        onToggleRise={onToggleRise}
      />
    ));
  };

  return (
    <ul className="list-group">
      {tab === '2'
        ? createList(filtered.increased)
        : tab === '3'
        ? createList(filtered.over1000)
        : createList(filtered.selected)}
    </ul>
  );
};

export default EmployeesList;
