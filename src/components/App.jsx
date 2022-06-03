import React, { Component } from 'react';

import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // onIncrementGood = () => {
  //   this.setState(prev => {
  //     return { good: prev.good + 1 };
  //   });
  // };

  // onIncrementNeutral = () => {
  //   this.setState(prev => {
  //     return { neutral: prev.neutral + 1 };
  //   });
  // };

  // onIncrementBad = () => {
  //   this.setState(prev => {
  //     return { bad: prev.bad + 1 };
  //   });
  // };

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
      <div>
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
      </div>
    );
  }
}
