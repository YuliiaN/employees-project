import { useState } from 'react';
import { FaCookie, FaTrash, FaStar } from 'react-icons/fa';
import './EmployeesItem.css';

const EmployeesItem = ({ name, salary, increase }) => {
  const [isIncrease, setIsIncrease] = useState(increase);
  const [liked, setLiked] = useState(false);

  const handleIncrease = () => {
    setIsIncrease(prevState => !prevState);
  };

  const handleClick = () => {
    setLiked(prevState => !prevState);
  };

  const itemClassNames = [
    'list-group-item',
    'd-flex',
    'justify-content-between',
    'align-items-center',
  ];
  if (isIncrease) itemClassNames.push('increase');
  if (liked) itemClassNames.push('like');

  return (
    <li className={itemClassNames.join(' ')}>
      <span className="list-group-item-label" onClick={handleClick}>
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
        >
          <FaTrash className="fas fa-trash" />
        </button>
        <FaStar className="fas fa-star" />
      </div>
    </li>
  );
};

export default EmployeesItem;
