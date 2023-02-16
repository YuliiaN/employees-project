import './Section.css';

const Section = ({ bcg, children }) => {
  return bcg === 'blue' ? (
    <section className="section section--blue">{children}</section>
  ) : (
    <section className="section">{children}</section>
  );
};

export default Section;
