// import { useState } from 'react';
import { FaCookie, FaTrash, FaStar } from 'react-icons/fa';
import './EmployeesItem.css';

const EmployeesItem = ({
  id,
  name,
  salary,
  increase,
  rise,
  deleteEmployee,
  onToggleIncrease,
  onToggleRise,
}) => {
  const handleIncrease = () => {
    onToggleIncrease({ id, name, salary, rise, increase: !increase });
  };

  const handleRise = () => {
    onToggleRise({ id, name, salary, increase, rise: !rise });
  };

  const itemClassNames = [
    'list-group-item',
    'd-flex',
    'justify-content-between',
    'align-items-center',
  ];
  if (increase) itemClassNames.push('increase');
  if (rise) itemClassNames.push('like');

  return (
    <li className={itemClassNames.join(' ')}>
      <span className="list-group-item-label" onClick={handleRise}>
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + '$'}
      ></input>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm d-flex justify-content-center align-items-center"
          onClick={handleIncrease}
        >
          <FaCookie className="fas fa-cookie" />
        </button>
        <button
          type="button"
          className="btn-trash btn-sm d-flex justify-content-center align-items-center"
          onClick={deleteEmployee}
        >
          <FaTrash className="fas fa-trash" />
        </button>
        <FaStar className="fas fa-star" />
      </div>
    </li>
  );
};

export default EmployeesItem;
