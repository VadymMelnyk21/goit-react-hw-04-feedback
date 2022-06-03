import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

Section.protTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
