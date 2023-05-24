import React from "react";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'

export const App = () => {
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
        <li>Good: 3</li>
        <li>Neutral: 2</li>
        <li>Bad: 2</li>
      </ul>
    </div>
  );
};
