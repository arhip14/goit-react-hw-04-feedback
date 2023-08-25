import React from 'react';

const Statistics = ({ feedback }) => {
  const countTotalFeedback = () => Object.values(feedback).reduce((acc, value) => acc + value, 0);
  const countPositiveFeedbackPercentage = () => (feedback.good / countTotalFeedback()) * 100 || 0;

  if (countTotalFeedback() === 0) {
    return <p>There is no feedback yet.</p>;
  }

  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {countTotalFeedback()}</p>
      <p>Positive Percentage: {countPositiveFeedbackPercentage()}%</p>
    </div>
  );
};

export default Statistics;