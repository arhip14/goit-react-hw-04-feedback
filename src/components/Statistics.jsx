import React from 'react';
import styled from 'styled-components';


const StatisticsContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const NoFeedback = styled.p`
  font-style: italic;
  color: #777;
`;


const Statistics = ({ feedback }) => {
  const countTotalFeedback = () => Object.values(feedback).reduce((acc, value) => acc + value, 0);
  const countPositiveFeedbackPercentage = () => (feedback.good / countTotalFeedback()) * 100 || 0;

  return (
    <StatisticsContainer>
      {countTotalFeedback() === 0 ? (
        <NoFeedback>There is no feedback yet.</NoFeedback>
      ) : (
        <>
          <p>Good: {feedback.good}</p>
          <p>Neutral: {feedback.neutral}</p>
          <p>Bad: {feedback.bad}</p>
          <p>Total: {countTotalFeedback()}</p>
          <p>Positive Percentage: {countPositiveFeedbackPercentage()}%</p>
        </>
      )}
    </StatisticsContainer>
  );
};

export default Statistics;


