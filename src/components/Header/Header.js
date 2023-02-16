import Card from 'react-bootstrap/Card';
import './Header.css';

const Header = () => {
  return (
    <>
      <Card.Header as="h1">Облік співробітників в компанії N</Card.Header>
      <Card.Header as="h2">Загальна кількість співробітників: </Card.Header>
      <Card.Header as="h2">Премію отримають: </Card.Header>
    </>
  );
};

export default Header;
