import { useState } from 'react';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

import { Container } from './App.styled';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedback = e => {
    const feed = e.target.name;

    switch (feed) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  const buttonFeedName = [
    {
      nameUa: 'Добре',
      id: 'good',
    },
    {
      nameUa: 'Нейтрально',
      id: 'neutral',
    },
    {
      nameUa: 'Погано',
      id: 'bad',
    },
  ];

  return (
    <Container>
      <Section title="Будь ласка, залиште свій відгук">
        <FeedbackOptions
          options={buttonFeedName}
          onLeaveFeedback={countFeedback}
        />
      </Section>
      <Section title="Статистика">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </Container>
  );
}
