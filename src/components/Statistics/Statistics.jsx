export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <p>Добре:{good} </p>
      <p>Нейтрально: {neutral} </p>
      <p>Погано: {bad} </p>
      <p>Всього: {total} </p>
      <p>Позитивних відгуків: {positivePercentage}% </p>
    </div>
  );
}
