import Card from 'react-bootstrap/Card';
import './Header.css';

const Header = ({ employees, increased }) => {
  return (
    <>
      <Card.Header as="h1">Облік співробітників в компанії N</Card.Header>
      <Card.Header as="h2">
        Загальна кількість співробітників: {employees}
      </Card.Header>
      <Card.Header as="h2">Премію отримають: {increased}</Card.Header>
    </>
  );
};

export default Header;
