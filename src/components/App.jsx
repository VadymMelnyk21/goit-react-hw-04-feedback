import React, { Component } from 'react';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

import { Container } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = e => {
    const feed = e.target.name;
    this.setState(prev => ({ [feed]: prev[feed] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
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
            onLeaveFeedback={this.countFeedback}
          />
        </Section>
        <Section title="Статистика">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </Container>
    );
  }
}
