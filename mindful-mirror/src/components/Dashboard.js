import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const DashboardTitle = styled.h2`
  font-size: 20px;
  color: #4a5568;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <DashboardTitle>Your Emotional Insights</DashboardTitle>
      {/* Placeholder for graphs and visualizations */}
      <p>Mood patterns and other emotional statistics will appear here.</p>
    </DashboardContainer>
  );
};

export default Dashboard;
