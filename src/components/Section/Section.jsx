import PropTypes from 'prop-types';
import { TitleH } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <section>
      <TitleH>{title}</TitleH>
      {children}
    </section>
  );
}

Section.protTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
