import './Container.css';

const Container = ({ children }) => {
  return <div className="container d-flex flex-column">{children}</div>;
};

export default Container;
