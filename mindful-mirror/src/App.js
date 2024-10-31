import React, { useState } from "react";
import styled from "styled-components";
import JournalEntry from "./components/JournalEntry";
import EmotionCloud from "./components/EmotionCloud";
import Dashboard from "./components/Dashboard";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ moodColor }) => moodColor || "#f0f4f8"};
  min-height: 100vh;
  padding: 20px;
  transition: background-color 0.5s ease;
`;

function App() {
  const [moodColor, setMoodColor] = useState("#f0f4f8"); // default color

  const handleMoodChange = (newMoodColor) => {
    setMoodColor(newMoodColor);
  };

  return (
    <AppContainer moodColor={moodColor}>
      <h1>Mindful Mirror</h1>
      <JournalEntry onMoodChange={handleMoodChange} />
      <EmotionCloud />
      <Dashboard />
    </AppContainer>
  );
}

export default App;
