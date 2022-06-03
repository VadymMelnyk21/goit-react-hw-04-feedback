import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(({ nameUa, id }) => (
        <div key={id}>
          <button type="button" name={id} onClick={onLeaveFeedback}>
            {nameUa}
          </button>
        </div>
      ))}
    </div>
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
