import { useState, useEffect, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './AddingForm.css';

const AddingForm = ({ newEmployee }) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');
  const [employee, setEmployee] = useState(null);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'salary') setSalary(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    newEmployee(employee);
    setName('');
    setSalary('');
  };

  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setEmployee({ name, salary });
  }, [name, salary]);

  return (
    <>
      <Card.Header as="h2" className="title">
        Додайте нового співробітника
      </Card.Header>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Control
          size="lg"
          type="text"
          name="name"
          value={name}
          placeholder="Як його звати?"
          required
          onChange={handleChange}
        />
        <Form.Control
          size="lg"
          type="number"
          name="salary"
          value={salary}
          placeholder="З/П в $?"
          required
          onChange={handleChange}
        />
        <Button variant="secondary" type="submit">
          Додати
        </Button>
      </Form>
    </>
  );
};

export default AddingForm;
