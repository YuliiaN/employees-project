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
    { id: nanoid(), name: 'John C.', salary: 800, increase: false, rise: true },
    {
      id: nanoid(),
      name: 'Katherine P.',
      salary: 1000,
      increase: true,
      rise: false,
    },
    {
      id: nanoid(),
      name: 'Leo K.',
      salary: 1200,
      increase: false,
      rise: false,
    },
    {
      id: nanoid(),
      name: 'Rose R.',
      salary: 900,
      increase: false,
      rise: false,
    },
  ]);
  const [filter, setFilter] = useState('');
  const [tab, setTab] = useState(0);

  const addEmployee = employee => {
    setData(prevData => [...prevData, { id: nanoid(), ...employee }]);
  };

  const handleFilter = query => {
    setFilter(query);
  };

  const deleteEmployee = id => {
    setData(prevData => [...prevData.filter(employee => employee.id !== id)]);
  };

  const onToggleIncrease = newEmployee => {
    // setData(prevData => {
    //   const idx = data.findIndex(employee => employee.id === id);
    //   const old = data[idx];
    //   const newItem = { ...old, increase: !old.increase };
    //   return [...prevData.slice(0, idx), newItem, ...data.slice(idx + 1)];
    // });

    setData(prevData =>
      prevData.map(item => (item.id === newEmployee.id ? newEmployee : item))
    );
  };

  const onToggleRise = newEmployee => {
    setData(prevData =>
      prevData.map(item => (item.id === newEmployee.id ? newEmployee : item))
    );
  };

  const handleTabs = key => {
    setTab(key);
  };

  const employees = data.length;
  const selected = data.filter(employee =>
    employee.name.toLowerCase().includes(filter.toLowerCase())
  );
  const increased = selected.filter(employee => employee.increase);
  const over1000 = selected.filter(employee => employee.salary > 1000);
  const filtered = { selected, increased, over1000 };

  return (
    <Container>
      <Section bcg="blue">
        <Header employees={employees} increased={increased.length} />
      </Section>
      <Section bcg="blue">
        <SearchForm filterEmployee={handleFilter} />
        <NavTabs handleTabs={handleTabs} />
      </Section>
      {!!data.length && (
        <EmployeesList
          deleteEmployee={deleteEmployee}
          onToggleIncrease={onToggleIncrease}
          onToggleRise={onToggleRise}
          tab={tab}
          filtered={filtered}
        />
      )}
      <Section bcg="blue">
        <AddingForm newEmployee={addEmployee} />
      </Section>
    </Container>
  );
};
