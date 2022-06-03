import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      {total > 0 ? (
        <>
          <p>Добре:{good} </p>
          <p>Нейтрально: {neutral} </p>
          <p>Погано: {bad} </p>
          <p>Всього: {total} </p>
          <p>Позитивних відгуків: {positivePercentage}% </p>
        </>
      ) : (
        <Notification message="Відгуки відсутні" />
      )}
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
