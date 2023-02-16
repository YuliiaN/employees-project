import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './NavTabs.css';

const NavTabs = () => {
  return (
    <Tabs fill>
      <Tab title="Всі співробітники" />
      <Tab title="На підвищення" />
      <Tab title="З/П більше 1000$" />
    </Tabs>
  );
};

export default NavTabs;
