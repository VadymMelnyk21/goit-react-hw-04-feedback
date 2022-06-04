import PropTypes from 'prop-types';
import Notification from 'components/Notification/Notification';
import { Paragraph } from './Statistics.styled';

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
          <Paragraph>Добре: {good} </Paragraph>
          <Paragraph>Нейтрально: {neutral} </Paragraph>
          <Paragraph>Погано: {bad} </Paragraph>
          <Paragraph>Всього: {total} </Paragraph>
          <Paragraph>Позитивних відгуків: {positivePercentage}% </Paragraph>
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
