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
