import React, {Component} from "react";

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  render() {
    return (
      <section>
        <p>Please leave feedback</p>
        <div>
          <button type="botton" onClick={''}>Good</button>
          <button type="botton" onClick={''}>Neutral</button>
          <button type="botton" onClick={''}>Bad</button>
        </div>
        <div>
          <p>Statistics</p>
          <p>Good: </p>
          <p>Neutral: </p>
          <p>Bad: </p>
      </div>
      </section>
    )
  }
};
