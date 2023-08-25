import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
 padding: 10px 20px;
 font-size: 16px;
 margin: 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
   color: white;
  transition: background-color 0.3s ease;
  background-color: #e67e22;
   &:hover {
   background-color: #d35400;
}
`;


const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <Button
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </Button>
    ))}
  </div>
);


export default FeedbackOptions;