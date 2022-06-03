import React, {Component} from "react";

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onIncrementGood = () => {
    this.setState(prev => {return { good: prev.good +1,} })
  } 

  onIncrementNeutral = () => {
    this.setState(prev => {return { neutral: prev.neutral +1,} })
  }
  
  onIncrementBad = () => {
    this.setState(prev => {return { bad: prev.bad +1,} })
  } 

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100);
  };
  
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <section>
        <p>Please leave feedback</p>
        <div>
          <button type="botton" onClick={this.onIncrementGood}>Good</button>
          <button type="botton" onClick={this.onIncrementNeutral}>Neutral</button>
          <button type="botton" onClick={this.onIncrementBad}>Bad</button>
        </div>
        <div>
          <p>Statistics</p>
          <p>Good:{good} </p>
          <p>Neutral: {neutral} </p>
          <p>Bad: {bad} </p>
          <p>Total: {this.countTotalFeedback()} </p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}% </p>
      </div>
      </section>
    )
  }
};
