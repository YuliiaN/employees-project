import { useState } from 'react';
import { nanoid } from 'nanoid';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from './Container/Container';
import Section from './Section/Section';
import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm';
import NavTabs from './NavTabs/NavTabs';
import EmployeesList from './EmployeesList/EmployeesList';
import AddingForm from './AddingForm/AddingForm';

export const App = () => {
  const [data, setData] = useState([
    { id: nanoid(), name: 'John C.', salary: 800, increase: false },
    { id: nanoid(), name: 'Katherine P.', salary: 1000, increase: true },
    { id: nanoid(), name: 'Leo K.', salary: 1200, increase: false },
    { id: nanoid(), name: 'Rose R.', salary: 900, increase: false },
  ]);
  const [filter, setFilter] = useState('');

  const addEmployee = employee => {
    setData(prevData => [...prevData, { ...employee, id: nanoid() }]);
  };

  const handleFilter = query => {
    setFilter(query);
  };

  const selectedEmployees = data.filter(employee =>
    employee.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteEmployee = id => {
    setData(prevData => [...prevData.filter(employee => employee.id !== id)]);
  };

  return (
    <Container>
      <Section bcg="blue">
        <Header />
      </Section>
      <Section bcg="blue">
        <SearchForm filterEmployee={handleFilter} />
        <NavTabs />
      </Section>
      <EmployeesList
        selectedEmployees={selectedEmployees}
        deleteEmployee={deleteEmployee}
      />
      <Section bcg="blue">
        <AddingForm newEmployee={addEmployee} />
      </Section>
    </Container>
  );
};
