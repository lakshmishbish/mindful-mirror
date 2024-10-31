import React from "react";
import styled from "styled-components";

const CloudContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  margin-top: 20px;
  gap: 10px;
`;

const EmotionTag = styled.span`
  background-color: #e2e8f0;
  border-radius: 20px;
  padding: 8px 15px;
  font-size: 14px;
  color: #2d3748;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const emotions = ["Happy", "Sad", "Anxious", "Calm", "Excited", "Grateful"];

const EmotionCloud = () => {
  return (
    <CloudContainer>
      {emotions.map((emotion, index) => (
        <EmotionTag key={index}>{emotion}</EmotionTag>
      ))}
    </CloudContainer>
  );
};

export default EmotionCloud;
