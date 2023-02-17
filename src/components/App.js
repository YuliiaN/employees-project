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

  const addEmployee = employee => {
    setData(prevData => [...prevData, { ...employee, id: nanoid() }]);
  };

  return (
    <Container>
      <Section bcg="blue">
        <Header />
      </Section>
      <Section bcg="blue">
        <SearchForm />
        <NavTabs />
      </Section>
      <EmployeesList data={data} />
      <Section bcg="blue">
        <AddingForm newEmployee={addEmployee} />
      </Section>
    </Container>
  );
};
