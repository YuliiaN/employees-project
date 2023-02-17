import Form from 'react-bootstrap/Form';

const SearchForm = ({ filterEmployee }) => {
  const handleChange = e => {
    filterEmployee(e.target.value);
  };

  return (
    <Form>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Знайти співробітника"
        onChange={handleChange}
      />
    </Form>
  );
};

export default SearchForm;
