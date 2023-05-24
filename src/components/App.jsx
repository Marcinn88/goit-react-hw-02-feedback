import React from "react";

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
      <div>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </div>
      <h2>Statistic</h2>
      <ul>
        <li>Good: 3</li>
        <li>Neutral: 2</li>
        <li>Bad: 2</li>
      </ul>
    </div>
  );
};
