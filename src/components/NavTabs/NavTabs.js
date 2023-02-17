import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './NavTabs.css';

const NavTabs = ({ handleTabs }) => {
  const tabsData = [
    { title: 'Всі співробітники', key: '1' },
    { title: 'На підвищення', key: '2' },
    { title: 'З/П більше 1000$', key: '3' },
  ];

  const handleSelect = key => {
    handleTabs(key);
  };

  return (
    <Tabs defaultActiveKey={'1'} fill transition={true} onSelect={handleSelect}>
      {tabsData.map(tab => (
        <Tab title={tab.title} eventKey={tab.key} />
      ))}
    </Tabs>
  );
};

export default NavTabs;
