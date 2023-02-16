import 'bootstrap/dist/css/bootstrap.min.css';
import Container from './Container/Container';
import Section from './Section/Section';
import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm';
import NavTabs from './NavTabs/NavTabs';
import EmployeesList from './EmployeesList/EmployeesList';
import AddingForm from './AddingForm/AddingForm';

export const App = () => {
  const data = [
    { id: 1, name: 'John C.', salary: 800, increase: false },
    { id: 2, name: 'Katherine P.', salary: 1000, increase: true },
    { id: 3, name: 'Leo K.', salary: 1200, increase: false },
    { id: 4, name: 'Rose R.', salary: 900, increase: false },
  ];

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
        <AddingForm />
      </Section>
    </Container>
  );
};
