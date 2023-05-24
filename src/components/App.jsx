import React from "react";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'

export const App = (
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
) => {
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
        <li>Good: {state.good}</li>
        <li>Neutral: {state.neutral}</li>
        <li>Bad: {state.bad}</li>
      </ul>
    </div>
  );
};
