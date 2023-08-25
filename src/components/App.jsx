import React, { useState } from 'react';
import styled from 'styled-components';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions ';
import Section from './Section';


const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;  flex-direction: column;
  align-items: center;
`;


const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });



  const handleFeedback = (type) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };



  return (
    <Container>
      <Title>Feedback App</Title>
      <Section title="Leave Feedback">
        <FeedbackOptions options={Object.keys(feedback)} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        <Statistics feedback={feedback} />
      </Section>
    </Container>
  )
};

