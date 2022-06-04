import PropTypes from 'prop-types';
import { DivList, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <DivList>
      {options.map(({ nameUa, id }) => (
        <div key={id}>
          <Button type="button" name={id} onClick={onLeaveFeedback}>
            {nameUa}
          </Button>
        </div>
      ))}
    </DivList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      nameUa: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
