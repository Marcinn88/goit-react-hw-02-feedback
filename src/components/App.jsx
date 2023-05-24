import React, { Component } from "react";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
render(){
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingLeft: '20px',
      }}
    >
      <h1>Please leave feedback</h1>
      <FeedbackOptions />
      <h2>Statistic</h2>
      <ul>
        <li>Good:</li>
        <li>Neutral:</li>
        <li>Bad:</li>
      </ul>
    </div>
  );
}};
