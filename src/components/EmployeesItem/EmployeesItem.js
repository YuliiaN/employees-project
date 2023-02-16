import { FaCookie, FaTrash } from 'react-icons/fa';
import './EmployeesItem.css';

const EmployeesItem = ({ name, salary, increase }) => {
  const itemClassNames = [
    'list-group-item',
    'd-flex',
    'justify-content-between',
    'align-items-center',
  ];

  if (increase) itemClassNames.push('increase');

  return (
    <li className={itemClassNames.join(' ')}>
      <span className="list-group-item-label">{name}</span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + '$'}
      ></input>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm d-flex justify-content-center align-items-center"
        >
          <FaCookie className="fas fa-cookie" />
        </button>
        <button
          type="button"
          className="btn-trash btn-sm d-flex justify-content-center align-items-center"
        >
          <FaTrash className="fas fa-trash" />
        </button>
      </div>
    </li>
  );
};

export default EmployeesItem;
