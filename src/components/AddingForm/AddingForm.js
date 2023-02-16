import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './AddingForm.css';

const AddingForm = () => {
  return (
    <>
      <Card.Header as="h2" className="title">
        Додайте нового співробітника
      </Card.Header>
      <Form className="form">
        <Form.Control
          size="lg"
          type="text"
          placeholder="Як його звати?"
          required
        />
        <Form.Control size="lg" type="number" placeholder="З/П в $?" required />
        <Button variant="secondary" type="submit">
          Додати
        </Button>
      </Form>
    </>
  );
};

export default AddingForm;
