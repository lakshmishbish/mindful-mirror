import React, { useState } from "react";
import styled from "styled-components";

const JournalContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 10px;
  resize: none;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
  &:focus {
    border-color: #a0aec0;
  }
`;

const MoodPrompt = styled.p`
  font-size: 18px;
  color: #4a5568;
  margin-bottom: 10px;
`;

const JournalEntry = ({ onMoodChange }) => {
  const [entry, setEntry] = useState("");
  const [prompt, setPrompt] = useState("What’s on your mind?");

  const handleEntryChange = (e) => {
    const newEntry = e.target.value;
    setEntry(newEntry);

    // Simple mood analysis: detect keywords
    if (newEntry.includes("happy")) onMoodChange("#D4EDDA");
    else if (newEntry.includes("sad")) onMoodChange("#E2E2F0");
    else if (newEntry.includes("anxious")) onMoodChange("#FFF3CD");
    else onMoodChange("#f0f4f8"); // default color
  };

  return (
    <JournalContainer>
      <MoodPrompt>{prompt}</MoodPrompt>
      <TextArea
        placeholder="Write your thoughts here..."
        value={entry}
        onChange={handleEntryChange}
      />
    </JournalContainer>
  );
};

export default JournalEntry;
