import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './NavTabs.css';

const NavTabs = ({ handleTabs }) => {
  const handleSelect = key => {
    handleTabs(key);
  };

  return (
    <Tabs defaultActiveKey={'1'} fill transition={true} onSelect={handleSelect}>
      <Tab title="Всі співробітники" eventKey={'1'} />
      <Tab title="На підвищення" eventKey={'2'} />
      <Tab title="З/П більше 1000$" eventKey={'3'} />
    </Tabs>
  );
};

export default NavTabs;
