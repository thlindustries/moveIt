import React from 'react';
import { ChallengeProvider } from './challenge';

const AppProvider: React.FC = ({ children }) => (
  <ChallengeProvider>{children}</ChallengeProvider>
);

export default AppProvider;
